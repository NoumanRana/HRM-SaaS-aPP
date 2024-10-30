
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class BusinessTripDialog extends Serenity.EntityDialog<BusinessTripRow, any> {
        protected getFormKey() { return BusinessTripForm.formKey; }
        protected getIdProperty() { return BusinessTripRow.idProperty; }
        protected getLocalTextPrefix() { return BusinessTripRow.localTextPrefix; }
        protected getNameProperty() { return BusinessTripRow.nameProperty; }
        protected getService() { return BusinessTripService.baseUrl; }
        protected getDeletePermission() { return BusinessTripRow.deletePermission; }
        protected getInsertPermission() { return BusinessTripRow.insertPermission; }
        protected getUpdatePermission() { return BusinessTripRow.updatePermission; }

        protected form = new BusinessTripForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('BusinessTripPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button BusinessTripPrint',
                reportKey: 'BusinessTripPrint',
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