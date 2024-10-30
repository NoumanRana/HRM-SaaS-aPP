
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class MeetingParticipantDialog extends Serenity.Extensions.GridEditorDialog<MeetingParticipantRow> {
        protected getFormKey() { return MeetingParticipantForm.formKey; }
        protected getLocalTextPrefix() { return MeetingParticipantRow.localTextPrefix; }

        protected form = new MeetingParticipantForm(this.idPrefix);


        constructor() {
            super();

            this.initEmployee();

        }

        private initEmployee() {
            MeetingService.EmployeeId({
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