
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeJobDescriptionDialog extends Serenity.Extensions.GridEditorDialog<EmployeeJobDescriptionRow> {
        protected getFormKey() { return EmployeeJobDescriptionForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeJobDescriptionRow.localTextPrefix; }

        protected form = new EmployeeJobDescriptionForm(this.idPrefix);

    }
}