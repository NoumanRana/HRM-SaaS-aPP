
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeEducationDialog extends Serenity.Extensions.GridEditorDialog<EmployeeEducationRow> {
        protected getFormKey() { return EmployeeEducationForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeEducationRow.localTextPrefix; }

        protected form = new EmployeeEducationForm(this.idPrefix);

    }
}