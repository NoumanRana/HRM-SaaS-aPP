namespace Indotalent.Operation {
    export interface ReimbursementForm {
        Number: Serenity.StringEditor;
        TransactionDate: Serenity.DateEditor;
        ReimbursementStatus: Serenity.EnumEditor;
        Description: Serenity.TextAreaEditor;
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        SupervisorId: Serenity.LookupEditor;
        CurrencyName: Serenity.StringEditor;
        ItemList: ReimbursementDetailEditor;
        TotalAmount: Serenity.DecimalEditor;
    }

    export class ReimbursementForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.Reimbursement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReimbursementForm.init)  {
                ReimbursementForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.EnumEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.LookupEditor;
                var w5 = ReimbursementDetailEditor;
                var w6 = s.DecimalEditor;

                Q.initFormType(ReimbursementForm, [
                    'Number', w0,
                    'TransactionDate', w1,
                    'ReimbursementStatus', w2,
                    'Description', w3,
                    'EmployeeId', w4,
                    'BranchId', w4,
                    'DepartmentId', w4,
                    'SupervisorId', w4,
                    'CurrencyName', w0,
                    'ItemList', w5,
                    'TotalAmount', w6
                ]);
            }
        }
    }
}
