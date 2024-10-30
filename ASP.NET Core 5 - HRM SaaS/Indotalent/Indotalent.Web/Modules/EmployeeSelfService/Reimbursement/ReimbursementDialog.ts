
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ReimbursementDialog extends Serenity.EntityDialog<ReimbursementRow, any> {
        protected getFormKey() { return ReimbursementForm.formKey; }
        protected getIdProperty() { return ReimbursementRow.idProperty; }
        protected getLocalTextPrefix() { return ReimbursementRow.localTextPrefix; }
        protected getNameProperty() { return ReimbursementRow.nameProperty; }
        protected getService() { return ReimbursementService.baseUrl; }
        protected getDeletePermission() { return ReimbursementRow.deletePermission; }
        protected getInsertPermission() { return ReimbursementRow.insertPermission; }
        protected getUpdatePermission() { return ReimbursementRow.updatePermission; }

        protected form = new ReimbursementForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            this.initEmployee();

            this.form.ItemList.element.css('height', '300px');

            (this.form.ItemList.view as any).onRowCountChanged.subscribe(() => {
                this.recalculate();
            });

            (this.form.ItemList.view as any).onDataChanged.subscribe(() => {
                this.recalculate();
            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        private initEmployee() {
            ReimbursementService.EmployeeId({
            }, response => {
                this.form.EmployeeId.value = response.EmployeeId.toString();
                this.form.BranchId.value = response.BranchId.toString();
                this.form.DepartmentId.value = response.DepartmentId.toString();
                this.form.SupervisorId.value = response.SupervisorId != null ? response.SupervisorId.toString() : null;
            });
        }

        private recalculate() {
            this.form.TotalAmount.value = 0;

            for (var item of this.form.ItemList.getItems()) {
                this.form.TotalAmount.value += item.Amount;
            }
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

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                Indotalent.EmployeeSelfService.ReimbursementService.Currency({
                }, response => {
                    this.form.CurrencyName.value = response.Currency;
                });
            }

            Serenity.EditorUtils.setReadOnly(this.form.BranchId, true);
            Serenity.EditorUtils.setReadOnly(this.form.DepartmentId, true);
            Serenity.EditorUtils.setReadOnly(this.form.EmployeeId, true);
            Serenity.EditorUtils.setReadOnly(this.form.ReimbursementStatus, true);
        }

        protected updateInterface(): void {
            super.updateInterface();
            this.toolbar.findButton('print-reimbursement').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button print-reimbursement',
                reportKey: 'ReimbursementPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

    }
}