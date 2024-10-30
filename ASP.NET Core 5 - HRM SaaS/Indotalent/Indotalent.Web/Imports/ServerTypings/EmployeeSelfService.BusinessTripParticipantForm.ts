namespace Indotalent.EmployeeSelfService {
    export interface BusinessTripParticipantForm {
        EmployeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }

    export class BusinessTripParticipantForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.BusinessTripParticipant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BusinessTripParticipantForm.init)  {
                BusinessTripParticipantForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(BusinessTripParticipantForm, [
                    'EmployeeId', w0,
                    'BranchId', w0,
                    'DepartmentId', w0
                ]);
            }
        }
    }
}
