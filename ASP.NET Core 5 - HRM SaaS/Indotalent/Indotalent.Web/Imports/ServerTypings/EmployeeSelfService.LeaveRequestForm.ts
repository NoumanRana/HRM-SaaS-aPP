namespace Indotalent.EmployeeSelfService {
    export interface LeaveRequestForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        LeaveTypeId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Duration: Serenity.DecimalEditor;
        LeaveRequestStatus: Serenity.EnumEditor;
        DelegatedEmployeeId: Serenity.LookupEditor;
        LeaveDelegatedTaskList: LeaveDelegatedTaskEditor;
        LeaveEmergencyContactList: LeaveEmergencyContactEditor;
    }

    export class LeaveRequestForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.LeaveRequest';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LeaveRequestForm.init)  {
                LeaveRequestForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DateEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.EnumEditor;
                var w6 = LeaveDelegatedTaskEditor;
                var w7 = LeaveEmergencyContactEditor;

                Q.initFormType(LeaveRequestForm, [
                    'Number', w0,
                    'Description', w1,
                    'LeaveTypeId', w2,
                    'EmployeeId', w2,
                    'FromDate', w3,
                    'ToDate', w3,
                    'Duration', w4,
                    'LeaveRequestStatus', w5,
                    'DelegatedEmployeeId', w2,
                    'LeaveDelegatedTaskList', w6,
                    'LeaveEmergencyContactList', w7
                ]);
            }
        }
    }
}
