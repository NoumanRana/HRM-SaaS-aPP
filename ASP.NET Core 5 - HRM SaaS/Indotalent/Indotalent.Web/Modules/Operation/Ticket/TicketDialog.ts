
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TicketDialog extends Serenity.EntityDialog<TicketRow, any> {
        protected getFormKey() { return TicketForm.formKey; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getNameProperty() { return TicketRow.nameProperty; }
        protected getService() { return TicketService.baseUrl; }
        protected getDeletePermission() { return TicketRow.deletePermission; }
        protected getInsertPermission() { return TicketRow.insertPermission; }
        protected getUpdatePermission() { return TicketRow.updatePermission; }

        protected form = new TicketForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            this.form.ItemList.element.css('height', '300px');


            this.form.EmployeeId.changeSelect2(args => {
                var employeeId = this.form.EmployeeId.value;
                if (Q.isEmptyOrNull(employeeId)) {
                    return;
                }
                Payrolls.EmployeeService.Retrieve({
                    EntityId: employeeId
                }, response => {
                    this.form.BranchId.value = response.Entity.BranchId.toString();
                    this.form.DepartmentId.value = response.Entity.DepartmentId.toString();
                    this.form.SupervisorId.value = response.Entity.SupervisorId != null ? response.Entity.SupervisorId.toString() : null;
                });

            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
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

            Serenity.EditorUtils.setReadOnly(this.form.BranchId, true);
            Serenity.EditorUtils.setReadOnly(this.form.DepartmentId, true);
        }

        protected updateInterface(): void {
            super.updateInterface();
            this.toolbar.findButton('print-ticket').toggle(this.isEditMode());

        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button print-ticket',
                reportKey: 'TicketPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

    }
}