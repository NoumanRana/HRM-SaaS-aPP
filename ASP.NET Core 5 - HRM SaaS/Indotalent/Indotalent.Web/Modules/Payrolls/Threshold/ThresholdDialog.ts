
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class ThresholdDialog extends Serenity.EntityDialog<ThresholdRow, any> {
        protected getFormKey() { return ThresholdForm.formKey; }
        protected getIdProperty() { return ThresholdRow.idProperty; }
        protected getLocalTextPrefix() { return ThresholdRow.localTextPrefix; }
        protected getNameProperty() { return ThresholdRow.nameProperty; }
        protected getService() { return ThresholdService.baseUrl; }
        protected getDeletePermission() { return ThresholdRow.deletePermission; }
        protected getInsertPermission() { return ThresholdRow.insertPermission; }
        protected getUpdatePermission() { return ThresholdRow.updatePermission; }

        protected form = new ThresholdForm(this.idPrefix);
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