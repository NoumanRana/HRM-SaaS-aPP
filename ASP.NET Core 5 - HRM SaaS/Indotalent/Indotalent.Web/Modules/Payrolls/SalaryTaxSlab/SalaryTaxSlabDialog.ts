namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class SalaryTaxSlabDialog extends Serenity.EntityDialog<SalaryTaxSlabRow, any> {
        protected getFormKey() { return SalaryTaxSlabForm.formKey; }
        protected getIdProperty() { return SalaryTaxSlabRow.idProperty; }
        protected getLocalTextPrefix() { return SalaryTaxSlabRow.localTextPrefix; }
        protected getNameProperty() { return SalaryTaxSlabRow.nameProperty; }
        protected getService() { return SalaryTaxSlabService.baseUrl; }
        protected getDeletePermission() { return SalaryTaxSlabRow.deletePermission; }
        protected getInsertPermission() { return SalaryTaxSlabRow.insertPermission; }
        protected getUpdatePermission() { return SalaryTaxSlabRow.updatePermission; }

        protected form = new SalaryTaxSlabForm(this.idPrefix);
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
