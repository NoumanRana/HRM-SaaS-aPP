
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeParentDialog extends Serenity.Extensions.GridEditorDialog<EmployeeParentRow> {
        protected getFormKey() { return EmployeeParentForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeParentRow.localTextPrefix; }

        protected form = new EmployeeParentForm(this.idPrefix);

    }
}