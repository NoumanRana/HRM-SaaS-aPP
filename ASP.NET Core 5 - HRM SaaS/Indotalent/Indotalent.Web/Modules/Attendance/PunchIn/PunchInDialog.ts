
namespace Indotalent.Attendance {

    @Serenity.Decorators.registerClass()
    export class PunchInDialog extends Serenity.EntityDialog<PunchInRow, any> {
        protected getFormKey() { return PunchInForm.formKey; }
        protected getIdProperty() { return PunchInRow.idProperty; }
        protected getLocalTextPrefix() { return PunchInRow.localTextPrefix; }
        protected getService() { return PunchInService.baseUrl; }
        protected getDeletePermission() { return PunchInRow.deletePermission; }
        protected getInsertPermission() { return PunchInRow.insertPermission; }
        protected getUpdatePermission() { return PunchInRow.updatePermission; }

        protected form = new PunchInForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            PunchInService.EmployeeId({
            }, response => {
                if (response) {
                    this.form.EmployeeId.value = response.EmployeeId.toString();
                }
            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('PunchInPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button PunchInPrint',
                reportKey: 'PunchInPrint',
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

            if (this.isNew()) {
                const current = new Date();
                this.byId('InHour').prop('value', current.getHours());
                this.byId('InMinute').prop('value', current.getMinutes());
            }
        }

    }
}