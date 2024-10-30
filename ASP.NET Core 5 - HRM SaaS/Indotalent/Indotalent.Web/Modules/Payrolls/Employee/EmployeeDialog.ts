
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
        protected getFormKey() { return EmployeeForm.formKey; }
        protected getIdProperty() { return EmployeeRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeRow.nameProperty; }
        protected getService() { return EmployeeService.baseUrl; }
        protected getDeletePermission() { return EmployeeRow.deletePermission; }
        protected getInsertPermission() { return EmployeeRow.insertPermission; }
        protected getUpdatePermission() { return EmployeeRow.updatePermission; }

        protected form = new EmployeeForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
            this.form.GradeId.changeSelect2((args) => {
                var gradeId = this.form.GradeId.value;
                if (Q.isEmptyOrNull(gradeId)) {
                    return;
                }
                GradeService.Retrieve({
                    EntityId: gradeId
                }, response => {
                    this.form.BasicSalary.value = response.Entity.BasicSalary;
                });
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            Serenity.EditorUtils.setReadOnly(this.form.LeaveTaken, true);
        }

        protected updateInterface(): void {
            super.updateInterface();
            this.toolbar.findButton('print-employee').toggle(this.isEditMode());
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

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print Employee',
                cssClass: 'export-pdf-button print-employee',
                reportKey: 'EmployeePrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

    }
}