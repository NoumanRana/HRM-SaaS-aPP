
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeOkrObjectiveDialog extends Serenity.Extensions.GridEditorDialog<EmployeeOkrObjectiveRow> {
        protected getFormKey() { return EmployeeOkrObjectiveForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeOkrObjectiveRow.localTextPrefix; }

        protected form = new EmployeeOkrObjectiveForm(this.idPrefix);

    }
}