namespace Indotalent.Organization {
    export interface BranchForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class BranchForm extends Serenity.PrefixedContext {
        static formKey = 'Organization.Branch';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BranchForm.init)  {
                BranchForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(BranchForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
