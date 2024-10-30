namespace Indotalent.Payrolls {
    export interface EmployeeDeductionForm {
        DeductionId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class EmployeeDeductionForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeDeduction';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeDeductionForm.init)  {
                EmployeeDeductionForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(EmployeeDeductionForm, [
                    'DeductionId', w0,
                    'Description', w1,
                    'Amount', w2
                ]);
            }
        }
    }
}
