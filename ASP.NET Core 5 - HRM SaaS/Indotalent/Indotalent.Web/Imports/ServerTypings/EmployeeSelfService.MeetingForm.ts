﻿namespace Indotalent.EmployeeSelfService {
    export interface MeetingForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        Location: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ItemList: MeetingParticipantEditor;
    }

    export class MeetingForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.Meeting';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeetingForm.init)  {
                MeetingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.TextAreaEditor;
                var w3 = MeetingParticipantEditor;

                Q.initFormType(MeetingForm, [
                    'Name', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'Description', w2,
                    'Location', w0,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0,
                    'ItemList', w3
                ]);
            }
        }
    }
}
