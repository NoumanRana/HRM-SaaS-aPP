
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AppraisalDialog extends Serenity.EntityDialog<AppraisalRow, any> {
        protected getFormKey() { return AppraisalForm.formKey; }
        protected getIdProperty() { return AppraisalRow.idProperty; }
        protected getLocalTextPrefix() { return AppraisalRow.localTextPrefix; }
        protected getNameProperty() { return AppraisalRow.nameProperty; }
        protected getService() { return AppraisalService.baseUrl; }
        protected getDeletePermission() { return AppraisalRow.deletePermission; }
        protected getInsertPermission() { return AppraisalRow.insertPermission; }
        protected getUpdatePermission() { return AppraisalRow.updatePermission; }

        protected form = new AppraisalForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            this.form.AppraisalDetailList.element.css('height', '400px');

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('AppraisalPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button AppraisalPrint',
                reportKey: 'AppraisalPrint',
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