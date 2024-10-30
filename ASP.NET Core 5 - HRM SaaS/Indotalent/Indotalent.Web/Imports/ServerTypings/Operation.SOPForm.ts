namespace Indotalent.Operation {
    export interface SOPForm {
        Number: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Reference: Serenity.ImageUploadEditor;
    }

    export class SOPForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.SOP';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SOPForm.init)  {
                SOPForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.ImageUploadEditor;

                Q.initFormType(SOPForm, [
                    'Number', w0,
                    'Name', w0,
                    'Description', w1,
                    'Reference', w2
                ]);
            }
        }
    }
}
