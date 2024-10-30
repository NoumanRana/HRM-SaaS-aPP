namespace Indotalent.Operation {
    export interface ReimbursementDetailForm {
        ShortNote: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class ReimbursementDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.ReimbursementDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReimbursementDetailForm.init)  {
                ReimbursementDetailForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ReimbursementDetailForm, [
                    'ShortNote', w0,
                    'Amount', w1
                ]);
            }
        }
    }
}
