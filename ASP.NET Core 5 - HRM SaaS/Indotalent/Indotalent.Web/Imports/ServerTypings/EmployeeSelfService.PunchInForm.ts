namespace Indotalent.EmployeeSelfService {
    export interface PunchInForm {
        EmployeeId: Serenity.LookupEditor;
        PunchDate: Serenity.DateEditor;
        InHour: Serenity.IntegerEditor;
        InMinute: Serenity.IntegerEditor;
    }

    export class PunchInForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.PunchIn';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PunchInForm.init)  {
                PunchInForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(PunchInForm, [
                    'EmployeeId', w0,
                    'PunchDate', w1,
                    'InHour', w2,
                    'InMinute', w2
                ]);
            }
        }
    }
}
