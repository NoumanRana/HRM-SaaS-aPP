
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AssetHandOverDialog extends Serenity.EntityDialog<AssetHandOverRow, any> {
        protected getFormKey() { return AssetHandOverForm.formKey; }
        protected getIdProperty() { return AssetHandOverRow.idProperty; }
        protected getLocalTextPrefix() { return AssetHandOverRow.localTextPrefix; }
        protected getNameProperty() { return AssetHandOverRow.nameProperty; }
        protected getService() { return AssetHandOverService.baseUrl; }
        protected getDeletePermission() { return AssetHandOverRow.deletePermission; }
        protected getInsertPermission() { return AssetHandOverRow.insertPermission; }
        protected getUpdatePermission() { return AssetHandOverRow.updatePermission; }

        protected form = new AssetHandOverForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            this.form.AssetId.changeSelect2(args => {
                var assetId = this.form.AssetId.value;
                if (Q.isEmptyOrNull(assetId)) {
                    return;
                }
                AssetService.Retrieve({
                    EntityId: assetId
                }, response => {
                    this.form.AssetDescription.value = response.Entity.Description;
                    this.form.AssetTagNumber.value = response.Entity.AssetTagNumber;
                    this.form.Manufacturer.value = response.Entity.Manufacturer;
                    this.form.Model.value = response.Entity.Model;
                    this.form.SerialNumber.value = response.Entity.SerialNumber;
                    this.form.ProductionYear.value = response.Entity.ProductionYear;
                });

            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.AssetDescription, true);
            Serenity.EditorUtils.setReadOnly(this.form.AssetTagNumber, true);
            Serenity.EditorUtils.setReadOnly(this.form.Manufacturer, true);
            Serenity.EditorUtils.setReadOnly(this.form.Model, true);
            Serenity.EditorUtils.setReadOnly(this.form.SerialNumber, true);
            Serenity.EditorUtils.setReadOnly(this.form.ProductionYear, true);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('AssetHandOverPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button AssetHandOverPrint',
                reportKey: 'AssetHandOverPrint',
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