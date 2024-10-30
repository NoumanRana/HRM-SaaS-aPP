
namespace Indotalent.Attendance {

    @Serenity.Decorators.registerClass()
    export class PunchOutDialog extends Serenity.EntityDialog<PunchOutRow, any> {
        protected getFormKey() { return PunchOutForm.formKey; }
        protected getIdProperty() { return PunchOutRow.idProperty; }
        protected getLocalTextPrefix() { return PunchOutRow.localTextPrefix; }
        protected getService() { return PunchOutService.baseUrl; }
        protected getDeletePermission() { return PunchOutRow.deletePermission; }
        protected getInsertPermission() { return PunchOutRow.insertPermission; }
        protected getUpdatePermission() { return PunchOutRow.updatePermission; }

        protected form = new PunchOutForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('PunchOutPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button PunchOutPrint',
                reportKey: 'PunchOutPrint',
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

        protected afterLoadEntity() {
            super.afterLoadEntity();

            const current = new Date();
            this.byId('OutHour').prop('value', current.getHours());
            this.byId('OutMinute').prop('value', current.getMinutes());
        }

    }
}