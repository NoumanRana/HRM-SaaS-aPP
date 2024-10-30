
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class WarningDialog extends Serenity.EntityDialog<WarningRow, any> {
        protected getFormKey() { return WarningForm.formKey; }
        protected getIdProperty() { return WarningRow.idProperty; }
        protected getLocalTextPrefix() { return WarningRow.localTextPrefix; }
        protected getNameProperty() { return WarningRow.nameProperty; }
        protected getService() { return WarningService.baseUrl; }
        protected getDeletePermission() { return WarningRow.deletePermission; }
        protected getInsertPermission() { return WarningRow.insertPermission; }
        protected getUpdatePermission() { return WarningRow.updatePermission; }

        protected form = new WarningForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();


            this.form.EmployeeId.changeSelect2(args => {
                var employeeId = this.form.EmployeeId.value;
                if (Q.isEmptyOrNull(employeeId)) {
                    return;
                }
                Payrolls.EmployeeService.Retrieve({
                    EntityId: employeeId
                }, response => {
                    this.form.BranchId.value = response.Entity.BranchId.toString();
                    this.form.DepartmentId.value = response.Entity.DepartmentId.toString();
                    this.form.SupervisorId.value = response.Entity.SupervisorId != null ? response.Entity.SupervisorId.toString() : null;
                });

            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.BranchId, true);
            Serenity.EditorUtils.setReadOnly(this.form.DepartmentId, true);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('WarningPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button WarningPrint',
                reportKey: 'WarningPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
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