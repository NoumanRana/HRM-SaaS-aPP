namespace Indotalent.Payrolls {
    export interface PayrollDetailIncomeForm {
        IncomeId: Serenity.LookupEditor;
        ShortNote: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class PayrollDetailIncomeForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.PayrollDetailIncome';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PayrollDetailIncomeForm.init)  {
                PayrollDetailIncomeForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PayrollDetailIncomeForm, [
                    'IncomeId', w0,
                    'ShortNote', w1,
                    'Amount', w2
                ]);
            }
        }
    }
}
