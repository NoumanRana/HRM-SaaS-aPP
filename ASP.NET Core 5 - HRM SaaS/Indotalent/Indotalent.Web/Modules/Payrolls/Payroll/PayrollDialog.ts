
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class PayrollDialog extends Serenity.EntityDialog<PayrollRow, any> {
        protected getFormKey() { return PayrollForm.formKey; }
        protected getIdProperty() { return PayrollRow.idProperty; }
        protected getLocalTextPrefix() { return PayrollRow.localTextPrefix; }
        protected getNameProperty() { return PayrollRow.nameProperty; }
        protected getService() { return PayrollService.baseUrl; }
        protected getDeletePermission() { return PayrollRow.deletePermission; }
        protected getInsertPermission() { return PayrollRow.insertPermission; }
        protected getUpdatePermission() { return PayrollRow.updatePermission; }

        protected form = new PayrollForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            this.form.ItemList.element.css('height', '400px');

            (this.form.ItemList.view as any).onRowCountChanged.subscribe(() => {
                this.recalculate();
            });

            (this.form.ItemList.view as any).onDataChanged.subscribe(() => {
                this.recalculate();
            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        private recalculate() {
            this.form.TotalBasicSalary.value = 0;
            this.form.TotalIncome.value = 0;
            this.form.TotalDeduction.value = 0;
            this.form.TotalTakeHomePay.value = 0;
            for (var item of this.form.ItemList.getItems()) {
                this.form.TotalBasicSalary.value += item.BasicSalary;
                this.form.TotalIncome.value += item.TotalIncome;
                this.form.TotalDeduction.value += item.TotalDeduction;
                this.form.TotalTakeHomePay.value += item.TakeHomePay;
            }
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                Indotalent.Payrolls.PayrollService.Currency({
                }, response => {
                    this.form.CurrencyName.value = response.Currency;
                });
            }

        }

    }
}