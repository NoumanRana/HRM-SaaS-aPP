namespace Indotalent.Operation {
    export interface HolidayForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class HolidayForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.Holiday';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HolidayForm.init)  {
                HolidayForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(HolidayForm, [
                    'Name', w0,
                    'Date', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
