namespace Indotalent.Payrolls {
    export interface EmployeeDocumentForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        ExpiredDate: Serenity.DateEditor;
        Picture: Serenity.ImageUploadEditor;
    }

    export class EmployeeDocumentForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeDocument';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeDocumentForm.init)  {
                EmployeeDocumentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.ImageUploadEditor;

                Q.initFormType(EmployeeDocumentForm, [
                    'Name', w0,
                    'Description', w1,
                    'ExpiredDate', w2,
                    'Picture', w3
                ]);
            }
        }
    }
}
