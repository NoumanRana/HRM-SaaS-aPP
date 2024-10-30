
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeExperienceDialog extends Serenity.Extensions.GridEditorDialog<EmployeeExperienceRow> {
        protected getFormKey() { return EmployeeExperienceForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeExperienceRow.localTextPrefix; }

        protected form = new EmployeeExperienceForm(this.idPrefix);

    }
}