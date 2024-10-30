
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AwardDialog extends Serenity.EntityDialog<AwardRow, any> {
        protected getFormKey() { return AwardForm.formKey; }
        protected getIdProperty() { return AwardRow.idProperty; }
        protected getLocalTextPrefix() { return AwardRow.localTextPrefix; }
        protected getNameProperty() { return AwardRow.nameProperty; }
        protected getService() { return AwardService.baseUrl; }
        protected getDeletePermission() { return AwardRow.deletePermission; }
        protected getInsertPermission() { return AwardRow.insertPermission; }
        protected getUpdatePermission() { return AwardRow.updatePermission; }

        protected form = new AwardForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();


            this.form.AwardeeId.changeSelect2(args => {
                var awardeeId = this.form.AwardeeId.value;
                if (Q.isEmptyOrNull(awardeeId)) {
                    return;
                }
                Payrolls.EmployeeService.Retrieve({
                    EntityId: awardeeId
                }, response => {
                    this.form.BranchId.value = response.Entity.BranchId.toString();
                    this.form.DepartmentId.value = response.Entity.DepartmentId.toString();
                });

            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.BranchId, true);
            Serenity.EditorUtils.setReadOnly(this.form.DepartmentId, true);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('AwardPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button AwardPrint',
                reportKey: 'AwardPrint',
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