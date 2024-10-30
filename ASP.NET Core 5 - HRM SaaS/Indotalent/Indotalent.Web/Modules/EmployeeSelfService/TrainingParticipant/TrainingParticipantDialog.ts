
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class TrainingParticipantDialog extends Serenity.Extensions.GridEditorDialog<TrainingParticipantRow> {
        protected getFormKey() { return TrainingParticipantForm.formKey; }
        protected getLocalTextPrefix() { return TrainingParticipantRow.localTextPrefix; }

        protected form = new TrainingParticipantForm(this.idPrefix);


        constructor() {
            super();

            this.initEmployee();

        }

        private initEmployee() {
            TrainingService.EmployeeId({
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