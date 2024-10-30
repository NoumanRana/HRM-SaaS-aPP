namespace Indotalent.Performance {
    export interface TransferCompetencyForm {
        ShortNote: Serenity.StringEditor;
    }

    export class TransferCompetencyForm extends Serenity.PrefixedContext {
        static formKey = 'Performance.TransferCompetency';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransferCompetencyForm.init)  {
                TransferCompetencyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TransferCompetencyForm, [
                    'ShortNote', w0
                ]);
            }
        }
    }
}
