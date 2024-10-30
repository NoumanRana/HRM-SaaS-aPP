namespace Indotalent.Performance {
    export interface TransferReasonForm {
        ShortNote: Serenity.StringEditor;
    }

    export class TransferReasonForm extends Serenity.PrefixedContext {
        static formKey = 'Performance.TransferReason';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransferReasonForm.init)  {
                TransferReasonForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TransferReasonForm, [
                    'ShortNote', w0
                ]);
            }
        }
    }
}
