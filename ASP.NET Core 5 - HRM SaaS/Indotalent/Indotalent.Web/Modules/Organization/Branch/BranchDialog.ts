
namespace Indotalent.Organization {

    @Serenity.Decorators.registerClass()
    export class BranchDialog extends Serenity.EntityDialog<BranchRow, any> {
        protected getFormKey() { return BranchForm.formKey; }
        protected getIdProperty() { return BranchRow.idProperty; }
        protected getLocalTextPrefix() { return BranchRow.localTextPrefix; }
        protected getNameProperty() { return BranchRow.nameProperty; }
        protected getService() { return BranchService.baseUrl; }
        protected getDeletePermission() { return BranchRow.deletePermission; }
        protected getInsertPermission() { return BranchRow.insertPermission; }
        protected getUpdatePermission() { return BranchRow.updatePermission; }

        protected form = new BranchForm(this.idPrefix);
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