namespace Indotalent.EmployeeSelfService {
    export interface AnnouncementForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Message: Controls.CustomHtmlNoteContentEditor;
    }

    export class AnnouncementForm extends Serenity.PrefixedContext {
        static formKey = 'EmployeeSelfService.Announcement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AnnouncementForm.init)  {
                AnnouncementForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = Controls.CustomHtmlNoteContentEditor;

                Q.initFormType(AnnouncementForm, [
                    'Name', w0,
                    'Date', w1,
                    'Message', w2
                ]);
            }
        }
    }
}
