
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class BusinessTripParticipantDialog extends Serenity.Extensions.GridEditorDialog<BusinessTripParticipantRow> {
        protected getFormKey() { return BusinessTripParticipantForm.formKey; }
        protected getLocalTextPrefix() { return BusinessTripParticipantRow.localTextPrefix; }

        protected form = new BusinessTripParticipantForm(this.idPrefix);


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
                    this.form.BranchId.value = response.Entity.BranchId.toString();
                    this.form.DepartmentId.value = response.Entity.DepartmentId.toString();
                });

            });

        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.BranchId, true);
            Serenity.EditorUtils.setReadOnly(this.form.DepartmentId, true);
        }

    }
}