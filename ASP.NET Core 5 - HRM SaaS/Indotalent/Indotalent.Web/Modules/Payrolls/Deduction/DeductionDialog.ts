
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class DeductionDialog extends Serenity.EntityDialog<DeductionRow, any> {
        protected getFormKey() { return DeductionForm.formKey; }
        protected getIdProperty() { return DeductionRow.idProperty; }
        protected getLocalTextPrefix() { return DeductionRow.localTextPrefix; }
        protected getNameProperty() { return DeductionRow.nameProperty; }
        protected getService() { return DeductionService.baseUrl; }
        protected getDeletePermission() { return DeductionRow.deletePermission; }
        protected getInsertPermission() { return DeductionRow.insertPermission; }
        protected getUpdatePermission() { return DeductionRow.updatePermission; }

        protected form = new DeductionForm(this.idPrefix);
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