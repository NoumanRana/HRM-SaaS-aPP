namespace Indotalent.Operation {
    export interface AwardForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        Achievement: Controls.CustomHtmlNoteContentEditor;
        AwardeeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        Reward: Serenity.StringEditor;
    }

    export class AwardForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.Award';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AwardForm.init)  {
                AwardForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;
                var w3 = Controls.CustomHtmlNoteContentEditor;
                var w4 = s.LookupEditor;

                Q.initFormType(AwardForm, [
                    'Name', w0,
                    'Date', w1,
                    'Description', w2,
                    'Achievement', w3,
                    'AwardeeId', w4,
                    'BranchId', w4,
                    'DepartmentId', w4,
                    'Reward', w0
                ]);
            }
        }
    }
}
