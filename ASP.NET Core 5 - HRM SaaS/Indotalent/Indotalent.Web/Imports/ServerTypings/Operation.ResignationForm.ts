namespace Indotalent.Operation {
    export interface ResignationForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        ResignationDate: Serenity.DateEditor;
        EffectiveDate: Serenity.DateEditor;
        ResigneeId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
    }

    export class ResignationForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.Resignation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ResignationForm.init)  {
                ResignationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(ResignationForm, [
                    'Number', w0,
                    'Description', w1,
                    'ResignationDate', w2,
                    'EffectiveDate', w2,
                    'ResigneeId', w3,
                    'BranchId', w3,
                    'DepartmentId', w3
                ]);
            }
        }
    }
}
