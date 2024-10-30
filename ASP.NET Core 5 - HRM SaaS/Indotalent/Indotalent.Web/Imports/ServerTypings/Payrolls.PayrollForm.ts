namespace Indotalent.Payrolls {
    export interface PayrollForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PaymentDate: Serenity.DateEditor;
        AutoGeneratePayrollDetail: Serenity.BooleanEditor;
        ItemList: PayrollDetailEditor;
        CurrencyName: Serenity.StringEditor;
        TotalBasicSalary: Serenity.DecimalEditor;
        TotalIncome: Serenity.DecimalEditor;
        TotalDeduction: Serenity.DecimalEditor;
        TotalTakeHomePay: Serenity.DecimalEditor;
        TotalPaymentAmount: Serenity.DecimalEditor;
    }

    export class PayrollForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.Payroll';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PayrollForm.init)  {
                PayrollForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = PayrollDetailEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(PayrollForm, [
                    'Number', w0,
                    'Description', w1,
                    'PaymentDate', w2,
                    'AutoGeneratePayrollDetail', w3,
                    'ItemList', w4,
                    'CurrencyName', w0,
                    'TotalBasicSalary', w5,
                    'TotalIncome', w5,
                    'TotalDeduction', w5,
                    'TotalTakeHomePay', w5,
                    'TotalPaymentAmount', w5
                ]);
            }
        }
    }
}
