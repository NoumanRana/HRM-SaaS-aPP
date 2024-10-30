namespace Indotalent.Settings {
    export interface GenderForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class GenderForm extends Serenity.PrefixedContext {
        static formKey = 'Settings.Gender';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GenderForm.init)  {
                GenderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(GenderForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
