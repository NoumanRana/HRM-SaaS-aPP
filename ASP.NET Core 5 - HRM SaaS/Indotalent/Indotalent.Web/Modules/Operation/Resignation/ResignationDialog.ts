
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ResignationDialog extends Serenity.EntityDialog<ResignationRow, any> {
        protected getFormKey() { return ResignationForm.formKey; }
        protected getIdProperty() { return ResignationRow.idProperty; }
        protected getLocalTextPrefix() { return ResignationRow.localTextPrefix; }
        protected getNameProperty() { return ResignationRow.nameProperty; }
        protected getService() { return ResignationService.baseUrl; }
        protected getDeletePermission() { return ResignationRow.deletePermission; }
        protected getInsertPermission() { return ResignationRow.insertPermission; }
        protected getUpdatePermission() { return ResignationRow.updatePermission; }

        protected form = new ResignationForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();


            this.form.ResigneeId.changeSelect2(args => {
                var resigneeId = this.form.ResigneeId.value;
                if (Q.isEmptyOrNull(resigneeId)) {
                    return;
                }
                Payrolls.EmployeeService.Retrieve({
                    EntityId: resigneeId
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

            this.toolbar.findButton('ResignationPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button ResignationPrint',
                reportKey: 'ResignationPrint',
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