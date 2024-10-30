
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class EventDialog extends Serenity.EntityDialog<EventRow, any> {
        protected getFormKey() { return EventForm.formKey; }
        protected getIdProperty() { return EventRow.idProperty; }
        protected getLocalTextPrefix() { return EventRow.localTextPrefix; }
        protected getNameProperty() { return EventRow.nameProperty; }
        protected getService() { return EventService.baseUrl; }
        protected getDeletePermission() { return EventRow.deletePermission; }
        protected getInsertPermission() { return EventRow.insertPermission; }
        protected getUpdatePermission() { return EventRow.updatePermission; }

        protected form = new EventForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('EventPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button EventPrint',
                reportKey: 'EventPrint',
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