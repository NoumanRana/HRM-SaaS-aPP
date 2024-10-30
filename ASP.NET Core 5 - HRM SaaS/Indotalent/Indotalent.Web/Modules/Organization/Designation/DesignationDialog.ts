
namespace Indotalent.Organization {

    @Serenity.Decorators.registerClass()
    export class DesignationDialog extends Serenity.EntityDialog<DesignationRow, any> {
        protected getFormKey() { return DesignationForm.formKey; }
        protected getIdProperty() { return DesignationRow.idProperty; }
        protected getLocalTextPrefix() { return DesignationRow.localTextPrefix; }
        protected getNameProperty() { return DesignationRow.nameProperty; }
        protected getService() { return DesignationService.baseUrl; }
        protected getDeletePermission() { return DesignationRow.deletePermission; }
        protected getInsertPermission() { return DesignationRow.insertPermission; }
        protected getUpdatePermission() { return DesignationRow.updatePermission; }

        protected form = new DesignationForm(this.idPrefix);
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