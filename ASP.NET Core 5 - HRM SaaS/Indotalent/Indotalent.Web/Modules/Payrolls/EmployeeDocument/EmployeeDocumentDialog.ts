
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeDocumentDialog extends Serenity.Extensions.GridEditorDialog<EmployeeDocumentRow> {
        protected getFormKey() { return EmployeeDocumentForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeDocumentRow.localTextPrefix; }

        protected form = new EmployeeDocumentForm(this.idPrefix);

    }
}