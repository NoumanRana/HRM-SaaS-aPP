
namespace Indotalent.EmployeeSelfService {

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

            this.initEmployee();

            this.form.ItemList.element.css('height', '300px');

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        private initEmployee() {
            TicketService.EmployeeId({
            }, response => {
                this.form.EmployeeId.value = response.EmployeeId.toString();
                this.form.BranchId.value = response.BranchId.toString();
                this.form.DepartmentId.value = response.DepartmentId.toString();
                this.form.SupervisorId.value = response.SupervisorId != null ? response.SupervisorId.toString() : null;
            });
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
            Serenity.EditorUtils.setReadOnly(this.form.EmployeeId, true);
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