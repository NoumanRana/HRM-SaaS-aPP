
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class EvaluationDialog extends Serenity.EntityDialog<EvaluationRow, any> {
        protected getFormKey() { return EvaluationForm.formKey; }
        protected getIdProperty() { return EvaluationRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationRow.localTextPrefix; }
        protected getNameProperty() { return EvaluationRow.nameProperty; }
        protected getService() { return EvaluationService.baseUrl; }
        protected getDeletePermission() { return EvaluationRow.deletePermission; }
        protected getInsertPermission() { return EvaluationRow.insertPermission; }
        protected getUpdatePermission() { return EvaluationRow.updatePermission; }

        protected form = new EvaluationForm(this.idPrefix);
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