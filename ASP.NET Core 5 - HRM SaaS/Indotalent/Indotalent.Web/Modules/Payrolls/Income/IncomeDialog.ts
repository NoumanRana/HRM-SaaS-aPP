
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class IncomeDialog extends Serenity.EntityDialog<IncomeRow, any> {
        protected getFormKey() { return IncomeForm.formKey; }
        protected getIdProperty() { return IncomeRow.idProperty; }
        protected getLocalTextPrefix() { return IncomeRow.localTextPrefix; }
        protected getNameProperty() { return IncomeRow.nameProperty; }
        protected getService() { return IncomeService.baseUrl; }
        protected getDeletePermission() { return IncomeRow.deletePermission; }
        protected getInsertPermission() { return IncomeRow.insertPermission; }
        protected getUpdatePermission() { return IncomeRow.updatePermission; }

        protected form = new IncomeForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

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

    }
}