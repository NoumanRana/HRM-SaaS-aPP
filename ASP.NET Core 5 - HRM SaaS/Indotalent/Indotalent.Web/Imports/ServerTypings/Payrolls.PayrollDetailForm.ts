namespace Indotalent.Payrolls {
    export interface PayrollDetailForm {
        Id: Serenity.IntegerEditor;
        EmployeeId: Serenity.LookupEditor;
        BankAccount: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        IncomeList: PayrollDetailIncomeEditor;
        DeductionList: PayrollDetailDeductionEditor;
        BasicSalary: Serenity.DecimalEditor;
        TotalIncome: Serenity.DecimalEditor;
        TotalDeduction: Serenity.DecimalEditor;
        TakeHomePay: Serenity.DecimalEditor;
    }

    export class PayrollDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.PayrollDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PayrollDetailForm.init)  {
                PayrollDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = PayrollDetailIncomeEditor;
                var w4 = PayrollDetailDeductionEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(PayrollDetailForm, [
                    'Id', w0,
                    'EmployeeId', w1,
                    'BankAccount', w2,
                    'BankName', w2,
                    'IncomeList', w3,
                    'DeductionList', w4,
                    'BasicSalary', w5,
                    'TotalIncome', w5,
                    'TotalDeduction', w5,
                    'TakeHomePay', w5
                ]);
            }
        }
    }
}
