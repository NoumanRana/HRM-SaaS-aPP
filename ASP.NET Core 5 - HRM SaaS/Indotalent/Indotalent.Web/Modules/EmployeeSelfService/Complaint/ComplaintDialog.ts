
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ComplaintDialog extends Serenity.EntityDialog<ComplaintRow, any> {
        protected getFormKey() { return ComplaintForm.formKey; }
        protected getIdProperty() { return ComplaintRow.idProperty; }
        protected getLocalTextPrefix() { return ComplaintRow.localTextPrefix; }
        protected getNameProperty() { return ComplaintRow.nameProperty; }
        protected getService() { return ComplaintService.baseUrl; }
        protected getDeletePermission() { return ComplaintRow.deletePermission; }
        protected getInsertPermission() { return ComplaintRow.insertPermission; }
        protected getUpdatePermission() { return ComplaintRow.updatePermission; }

        protected form = new ComplaintForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            this.initEmployee();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        private initEmployee() {
            ComplaintService.EmployeeId({
            }, response => {
                this.form.ReporterId.value = response.EmployeeId.toString();
                this.form.BranchId.value = response.BranchId.toString();
                this.form.DepartmentId.value = response.DepartmentId.toString();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.BranchId, true);
            Serenity.EditorUtils.setReadOnly(this.form.DepartmentId, true);
            Serenity.EditorUtils.setReadOnly(this.form.ReporterId, true);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('ComplaintPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button ComplaintPrint',
                reportKey: 'ComplaintPrint',
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