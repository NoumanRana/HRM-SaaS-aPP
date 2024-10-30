
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeIncomeDialog extends Serenity.Extensions.GridEditorDialog<EmployeeIncomeRow> {
        protected getFormKey() { return EmployeeIncomeForm.formKey; }
        protected getLocalTextPrefix() { return EmployeeIncomeRow.localTextPrefix; }

        protected form = new EmployeeIncomeForm(this.idPrefix);

    }
}