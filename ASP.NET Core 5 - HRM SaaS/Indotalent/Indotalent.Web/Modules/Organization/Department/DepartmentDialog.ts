
namespace Indotalent.Organization {

    @Serenity.Decorators.registerClass()
    export class DepartmentDialog extends Serenity.EntityDialog<DepartmentRow, any> {
        protected getFormKey() { return DepartmentForm.formKey; }
        protected getIdProperty() { return DepartmentRow.idProperty; }
        protected getLocalTextPrefix() { return DepartmentRow.localTextPrefix; }
        protected getNameProperty() { return DepartmentRow.nameProperty; }
        protected getService() { return DepartmentService.baseUrl; }
        protected getDeletePermission() { return DepartmentRow.deletePermission; }
        protected getInsertPermission() { return DepartmentRow.insertPermission; }
        protected getUpdatePermission() { return DepartmentRow.updatePermission; }

        protected form = new DepartmentForm(this.idPrefix);
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