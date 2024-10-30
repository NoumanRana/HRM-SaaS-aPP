namespace Indotalent.EmployeeSelfService {
    export interface TrainingParticipantForm {
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }

    export class TrainingParticipantForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.TrainingParticipant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TrainingParticipantForm.init)  {
                TrainingParticipantForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(TrainingParticipantForm, [
                    'EmployeeId', w0,
                    'BranchId', w0,
                    'DepartmentId', w0
                ]);
            }
        }
    }
}
