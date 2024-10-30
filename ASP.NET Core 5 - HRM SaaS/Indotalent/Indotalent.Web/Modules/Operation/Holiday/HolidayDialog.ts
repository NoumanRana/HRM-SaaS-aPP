
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class HolidayDialog extends Serenity.EntityDialog<HolidayRow, any> {
        protected getFormKey() { return HolidayForm.formKey; }
        protected getIdProperty() { return HolidayRow.idProperty; }
        protected getLocalTextPrefix() { return HolidayRow.localTextPrefix; }
        protected getNameProperty() { return HolidayRow.nameProperty; }
        protected getService() { return HolidayService.baseUrl; }
        protected getDeletePermission() { return HolidayRow.deletePermission; }
        protected getInsertPermission() { return HolidayRow.insertPermission; }
        protected getUpdatePermission() { return HolidayRow.updatePermission; }

        protected form = new HolidayForm(this.idPrefix);
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