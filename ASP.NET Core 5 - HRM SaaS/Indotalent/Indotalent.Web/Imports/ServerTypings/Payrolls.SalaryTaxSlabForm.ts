namespace Indotalent.Payrolls {
    export interface SalaryTaxSlabForm {
        From: Serenity.DecimalEditor;
        To: Serenity.DecimalEditor;
        ExemptedAmount: Serenity.DecimalEditor;
        Rate: Serenity.DecimalEditor;
    }

    export class SalaryTaxSlabForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.SalaryTaxSlab';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalaryTaxSlabForm.init)  {
                SalaryTaxSlabForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;

                Q.initFormType(SalaryTaxSlabForm, [
                    'From', w0,
                    'To', w0,
                    'ExemptedAmount', w0,
                    'Rate', w0
                ]);
            }
        }
    }
}
