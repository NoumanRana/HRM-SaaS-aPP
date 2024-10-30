
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class SOPDialog extends Serenity.EntityDialog<SOPRow, any> {
        protected getFormKey() { return SOPForm.formKey; }
        protected getIdProperty() { return SOPRow.idProperty; }
        protected getLocalTextPrefix() { return SOPRow.localTextPrefix; }
        protected getNameProperty() { return SOPRow.nameProperty; }
        protected getService() { return SOPService.baseUrl; }
        protected getDeletePermission() { return SOPRow.deletePermission; }
        protected getInsertPermission() { return SOPRow.insertPermission; }
        protected getUpdatePermission() { return SOPRow.updatePermission; }

        protected form = new SOPForm(this.idPrefix);
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