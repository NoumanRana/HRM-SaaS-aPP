
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class GenderDialog extends Serenity.EntityDialog<GenderRow, any> {
        protected getFormKey() { return GenderForm.formKey; }
        protected getIdProperty() { return GenderRow.idProperty; }
        protected getLocalTextPrefix() { return GenderRow.localTextPrefix; }
        protected getNameProperty() { return GenderRow.nameProperty; }
        protected getService() { return GenderService.baseUrl; }
        protected getDeletePermission() { return GenderRow.deletePermission; }
        protected getInsertPermission() { return GenderRow.insertPermission; }
        protected getUpdatePermission() { return GenderRow.updatePermission; }

        protected form = new GenderForm(this.idPrefix);
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