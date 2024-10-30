
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeDeductionDialog extends Serenity.Extensions.GridEditorDialog<EmployeeDeductionRow> {
        protected getFormKey() { return EmployeeDeductionForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeDeductionRow.localTextPrefix; }

        protected form = new EmployeeDeductionForm(this.idPrefix);

    }
}