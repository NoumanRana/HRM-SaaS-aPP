namespace Indotalent.EmployeeSelfService {
    export interface PunchOutForm {
        EmployeeId: Serenity.LookupEditor;
        PunchDate: Serenity.DateEditor;
        OutHour: Serenity.IntegerEditor;
        OutMinute: Serenity.IntegerEditor;
    }

    export class PunchOutForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.PunchOut';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PunchOutForm.init)  {
                PunchOutForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(PunchOutForm, [
                    'EmployeeId', w0,
                    'PunchDate', w1,
                    'OutHour', w2,
                    'OutMinute', w2
                ]);
            }
        }
    }
}
