
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeTopSkillDialog extends Serenity.Extensions.GridEditorDialog<EmployeeTopSkillRow> {
        protected getFormKey() { return EmployeeTopSkillForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeTopSkillRow.localTextPrefix; }

        protected form = new EmployeeTopSkillForm(this.idPrefix);

    }
}