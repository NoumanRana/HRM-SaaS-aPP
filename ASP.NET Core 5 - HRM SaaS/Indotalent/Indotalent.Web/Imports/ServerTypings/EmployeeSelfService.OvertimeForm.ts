namespace Indotalent.EmployeeSelfService {
    export interface OvertimeForm {
        EmployeeId: Serenity.LookupEditor;
        OvertimeDate: Serenity.DateEditor;
        Duration: Serenity.IntegerEditor;
        Description: Serenity.TextAreaEditor;
        OvertimeStatus: Serenity.EnumEditor;
    }

    export class OvertimeForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.Overtime';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OvertimeForm.init)  {
                OvertimeForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.EnumEditor;

                Q.initFormType(OvertimeForm, [
                    'EmployeeId', w0,
                    'OvertimeDate', w1,
                    'Duration', w2,
                    'Description', w3,
                    'OvertimeStatus', w4
                ]);
            }
        }
    }
}
