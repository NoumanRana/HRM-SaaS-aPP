namespace Indotalent.Payrolls {
    export interface EmployeeIncomeForm {
        IncomeId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class EmployeeIncomeForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeIncome';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeIncomeForm.init)  {
                EmployeeIncomeForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(EmployeeIncomeForm, [
                    'IncomeId', w0,
                    'Description', w1,
                    'Amount', w2
                ]);
            }
        }
    }
}
