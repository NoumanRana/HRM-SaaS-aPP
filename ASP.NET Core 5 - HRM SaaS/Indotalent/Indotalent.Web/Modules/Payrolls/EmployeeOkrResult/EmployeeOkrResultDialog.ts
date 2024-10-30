
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeOkrResultDialog extends Serenity.Extensions.GridEditorDialog<EmployeeOkrResultRow> {
        protected getFormKey() { return EmployeeOkrResultForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeOkrResultRow.localTextPrefix; }

        protected form = new EmployeeOkrResultForm(this.idPrefix);

    }
}