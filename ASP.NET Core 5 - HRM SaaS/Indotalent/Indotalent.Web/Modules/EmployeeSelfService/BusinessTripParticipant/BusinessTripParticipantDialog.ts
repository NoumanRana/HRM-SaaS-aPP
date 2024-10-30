
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class BusinessTripParticipantDialog extends Serenity.Extensions.GridEditorDialog<BusinessTripParticipantRow> {
        protected getFormKey() { return BusinessTripParticipantForm.formKey; }
        protected getLocalTextPrefix() { return BusinessTripParticipantRow.localTextPrefix; }

        protected form = new BusinessTripParticipantForm(this.idPrefix);


        constructor() {
            super();

            this.initEmployee();

        }

        private initEmployee() {
            BusinessTripService.EmployeeId({
            }, response => {
                this.form.EmployeeId.value = response.EmployeeId.toString();
                this.form.BranchId.value = response.BranchId.toString();
                this.form.DepartmentId.value = response.DepartmentId.toString();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.BranchId, true);
            Serenity.EditorUtils.setReadOnly(this.form.DepartmentId, true);
        }

    }
}