
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AssetDialog extends Serenity.EntityDialog<AssetRow, any> {
        protected getFormKey() { return AssetForm.formKey; }
        protected getIdProperty() { return AssetRow.idProperty; }
        protected getLocalTextPrefix() { return AssetRow.localTextPrefix; }
        protected getNameProperty() { return AssetRow.nameProperty; }
        protected getService() { return AssetService.baseUrl; }
        protected getDeletePermission() { return AssetRow.deletePermission; }
        protected getInsertPermission() { return AssetRow.insertPermission; }
        protected getUpdatePermission() { return AssetRow.updatePermission; }

        protected form = new AssetForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('AssetPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button AssetPrint',
                reportKey: 'AssetPrint',
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