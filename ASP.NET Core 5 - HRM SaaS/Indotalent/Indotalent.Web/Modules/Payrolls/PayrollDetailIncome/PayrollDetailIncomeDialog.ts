
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailIncomeDialog extends Serenity.Extensions.GridEditorDialog<PayrollDetailIncomeRow> {
        protected getFormKey() { return PayrollDetailIncomeForm.formKey; }
        protected getLocalTextPrefix() { return PayrollDetailIncomeRow.localTextPrefix; }

        protected form = new PayrollDetailIncomeForm(this.idPrefix);

    }
}