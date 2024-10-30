
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class GradeDialog extends Serenity.EntityDialog<GradeRow, any> {
        protected getFormKey() { return GradeForm.formKey; }
        protected getIdProperty() { return GradeRow.idProperty; }
        protected getLocalTextPrefix() { return GradeRow.localTextPrefix; }
        protected getNameProperty() { return GradeRow.nameProperty; }
        protected getService() { return GradeService.baseUrl; }
        protected getDeletePermission() { return GradeRow.deletePermission; }
        protected getInsertPermission() { return GradeRow.insertPermission; }
        protected getUpdatePermission() { return GradeRow.updatePermission; }

        protected form = new GradeForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                Indotalent.Payrolls.GradeService.Currency({
                }, response => {
                    this.form.CurrencyName.value = response.Currency;
                });
            }

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