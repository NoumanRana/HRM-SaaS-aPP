
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class MeetingDialog extends Serenity.EntityDialog<MeetingRow, any> {
        protected getFormKey() { return MeetingForm.formKey; }
        protected getIdProperty() { return MeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingRow.localTextPrefix; }
        protected getNameProperty() { return MeetingRow.nameProperty; }
        protected getService() { return MeetingService.baseUrl; }
        protected getDeletePermission() { return MeetingRow.deletePermission; }
        protected getInsertPermission() { return MeetingRow.insertPermission; }
        protected getUpdatePermission() { return MeetingRow.updatePermission; }

        protected form = new MeetingForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('MeetingPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button MeetingPrint',
                reportKey: 'MeetingPrint',
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