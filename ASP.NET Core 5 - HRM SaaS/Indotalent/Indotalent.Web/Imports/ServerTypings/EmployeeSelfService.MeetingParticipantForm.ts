namespace Indotalent.EmployeeSelfService {
    export interface MeetingParticipantForm {
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }

    export class MeetingParticipantForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.MeetingParticipant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingParticipantForm.init)  {
                MeetingParticipantForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(MeetingParticipantForm, [
                    'EmployeeId', w0,
                    'BranchId', w0,
                    'DepartmentId', w0
                ]);
            }
        }
    }
}
