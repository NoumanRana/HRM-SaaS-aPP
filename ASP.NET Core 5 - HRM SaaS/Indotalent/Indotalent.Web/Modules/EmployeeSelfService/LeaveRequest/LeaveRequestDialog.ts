
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class LeaveRequestDialog extends Serenity.EntityDialog<LeaveRequestRow, any> {
        protected getFormKey() { return LeaveRequestForm.formKey; }
        protected getIdProperty() { return LeaveRequestRow.idProperty; }
        protected getLocalTextPrefix() { return LeaveRequestRow.localTextPrefix; }
        protected getNameProperty() { return LeaveRequestRow.nameProperty; }
        protected getService() { return LeaveRequestService.baseUrl; }
        protected getDeletePermission() { return LeaveRequestRow.deletePermission; }
        protected getInsertPermission() { return LeaveRequestRow.insertPermission; }
        protected getUpdatePermission() { return LeaveRequestRow.updatePermission; }

        protected form = new LeaveRequestForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            LeaveRequestService.EmployeeId({
            }, response => {
                if (response) {
                    this.form.EmployeeId.value = response.EmployeeId.toString();
                }
            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.Duration, true);
            Serenity.EditorUtils.setReadOnly(this.form.EmployeeId, true);
            Serenity.EditorUtils.setReadOnly(this.form.LeaveRequestStatus, true);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('LeaveRequestPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button LeaveRequestPrint',
                reportKey: 'LeaveRequestPrint',
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