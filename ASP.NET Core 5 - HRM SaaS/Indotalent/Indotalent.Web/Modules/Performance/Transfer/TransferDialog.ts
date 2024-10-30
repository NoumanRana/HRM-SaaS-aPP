
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TransferDialog extends Serenity.EntityDialog<TransferRow, any> {
        protected getFormKey() { return TransferForm.formKey; }
        protected getIdProperty() { return TransferRow.idProperty; }
        protected getLocalTextPrefix() { return TransferRow.localTextPrefix; }
        protected getNameProperty() { return TransferRow.nameProperty; }
        protected getService() { return TransferService.baseUrl; }
        protected getDeletePermission() { return TransferRow.deletePermission; }
        protected getInsertPermission() { return TransferRow.insertPermission; }
        protected getUpdatePermission() { return TransferRow.updatePermission; }

        protected form = new TransferForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            this.form.EmployeeId.changeSelect2(args => {
                var employeeId = this.form.EmployeeId.value;
                if (Q.isEmptyOrNull(employeeId)) {
                    return;
                }
                Payrolls.EmployeeService.Retrieve({
                    EntityId: employeeId
                }, response => {
                    this.form.CurrentBasicSalary.value = response.Entity.BasicSalary;
                    this.form.CurrentBranchId.value = response.Entity.BranchId != null ? response.Entity.BranchId.toString() : null;
                    this.form.CurrentDepartmentId.value = response.Entity.DepartmentId != null ? response.Entity.DepartmentId.toString() : null;
                    this.form.CurrentDesignationId.value = response.Entity.DesignationId != null ? response.Entity.DesignationId.toString() : null;
                    this.form.CurrentSupervisorId.value = response.Entity.SupervisorId != null ? response.Entity.SupervisorId.toString() : null;

                    this.form.NewBasicSalary.value = response.Entity.BasicSalary;
                    this.form.NewBranchId.value = response.Entity.BranchId != null ? response.Entity.BranchId.toString() : null;
                    this.form.NewDepartmentId.value = response.Entity.DepartmentId != null ? response.Entity.DepartmentId.toString() : null;
                    this.form.NewDesignationId.value = response.Entity.DesignationId != null ? response.Entity.DesignationId.toString() : null;
                    this.form.NewSupervisorId.value = response.Entity.SupervisorId != null ? response.Entity.SupervisorId.toString() : null;
                });

            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('TransferPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button TransferPrint',
                reportKey: 'TransferPrint',
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