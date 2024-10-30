
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TrainingDialog extends Serenity.EntityDialog<TrainingRow, any> {
        protected getFormKey() { return TrainingForm.formKey; }
        protected getIdProperty() { return TrainingRow.idProperty; }
        protected getLocalTextPrefix() { return TrainingRow.localTextPrefix; }
        protected getNameProperty() { return TrainingRow.nameProperty; }
        protected getService() { return TrainingService.baseUrl; }
        protected getDeletePermission() { return TrainingRow.deletePermission; }
        protected getInsertPermission() { return TrainingRow.insertPermission; }
        protected getUpdatePermission() { return TrainingRow.updatePermission; }

        protected form = new TrainingForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('TrainingPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button TrainingPrint',
                reportKey: 'TrainingPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
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