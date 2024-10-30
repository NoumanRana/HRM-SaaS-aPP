
namespace Indotalent.Attendance {

    @Serenity.Decorators.registerClass()
    export class OvertimeDialog extends Serenity.EntityDialog<OvertimeRow, any> {
        protected getFormKey() { return OvertimeForm.formKey; }
        protected getIdProperty() { return OvertimeRow.idProperty; }
        protected getLocalTextPrefix() { return OvertimeRow.localTextPrefix; }
        protected getService() { return OvertimeService.baseUrl; }
        protected getDeletePermission() { return OvertimeRow.deletePermission; }
        protected getInsertPermission() { return OvertimeRow.insertPermission; }
        protected getUpdatePermission() { return OvertimeRow.updatePermission; }

        protected form = new OvertimeForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            OvertimeService.EmployeeId({
            }, response => {
                if (response) {
                    this.form.EmployeeId.value = response.EmployeeId.toString();
                }
            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('OvertimePrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button OvertimePrint',
                reportKey: 'OvertimePrint',
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