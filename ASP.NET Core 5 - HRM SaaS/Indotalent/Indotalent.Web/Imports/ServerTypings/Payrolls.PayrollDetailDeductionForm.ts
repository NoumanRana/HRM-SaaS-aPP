namespace Indotalent.Payrolls {
    export interface PayrollDetailDeductionForm {
        DeductionId: Serenity.LookupEditor;
        ShortNote: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class PayrollDetailDeductionForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.PayrollDetailDeduction';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PayrollDetailDeductionForm.init)  {
                PayrollDetailDeductionForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PayrollDetailDeductionForm, [
                    'DeductionId', w0,
                    'ShortNote', w1,
                    'Amount', w2
                ]);
            }
        }
    }
}
