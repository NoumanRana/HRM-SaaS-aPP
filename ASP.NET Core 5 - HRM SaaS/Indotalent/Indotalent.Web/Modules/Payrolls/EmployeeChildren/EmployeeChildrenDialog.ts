
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeChildrenDialog extends Serenity.Extensions.GridEditorDialog<EmployeeChildrenRow> {
        protected getFormKey() { return EmployeeChildrenForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeChildrenRow.localTextPrefix; }

        protected form = new EmployeeChildrenForm(this.idPrefix);

    }
}