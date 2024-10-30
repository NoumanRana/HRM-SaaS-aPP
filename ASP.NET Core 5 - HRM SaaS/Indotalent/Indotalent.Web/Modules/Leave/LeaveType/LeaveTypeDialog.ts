
namespace Indotalent.Leave {

    @Serenity.Decorators.registerClass()
    export class LeaveTypeDialog extends Serenity.EntityDialog<LeaveTypeRow, any> {
        protected getFormKey() { return LeaveTypeForm.formKey; }
        protected getIdProperty() { return LeaveTypeRow.idProperty; }
        protected getLocalTextPrefix() { return LeaveTypeRow.localTextPrefix; }
        protected getNameProperty() { return LeaveTypeRow.nameProperty; }
        protected getService() { return LeaveTypeService.baseUrl; }
        protected getDeletePermission() { return LeaveTypeRow.deletePermission; }
        protected getInsertPermission() { return LeaveTypeRow.insertPermission; }
        protected getUpdatePermission() { return LeaveTypeRow.updatePermission; }

        protected form = new LeaveTypeForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();
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