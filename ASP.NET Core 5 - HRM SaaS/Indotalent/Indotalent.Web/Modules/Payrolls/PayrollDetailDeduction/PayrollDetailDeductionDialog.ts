
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailDeductionDialog extends Serenity.Extensions.GridEditorDialog<PayrollDetailDeductionRow> {
        protected getFormKey() { return PayrollDetailDeductionForm.formKey; }
        protected getLocalTextPrefix() { return PayrollDetailDeductionRow.localTextPrefix; }

        protected form = new PayrollDetailDeductionForm(this.idPrefix);

    }
}