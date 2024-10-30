
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AnnouncementDialog extends Serenity.EntityDialog<AnnouncementRow, any> {
        protected getFormKey() { return AnnouncementForm.formKey; }
        protected getIdProperty() { return AnnouncementRow.idProperty; }
        protected getLocalTextPrefix() { return AnnouncementRow.localTextPrefix; }
        protected getNameProperty() { return AnnouncementRow.nameProperty; }
        protected getService() { return AnnouncementService.baseUrl; }
        protected getDeletePermission() { return AnnouncementRow.deletePermission; }
        protected getInsertPermission() { return AnnouncementRow.insertPermission; }
        protected getUpdatePermission() { return AnnouncementRow.updatePermission; }

        protected form = new AnnouncementForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();


            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

        }

        protected updateInterface(): void {
            super.updateInterface();

            this.applyChangesButton.toggleClass('disabled', true);
            this.saveAndCloseButton.toggleClass('disabled', true);
            this.deleteButton.toggleClass('disabled', true);

            this.toolbar.findButton('AnnouncementPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button AnnouncementPrint',
                reportKey: 'AnnouncementPrint',
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