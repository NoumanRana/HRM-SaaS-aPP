namespace Indotalent.Performance {
    export interface PromotionReasonForm {
        ShortNote: Serenity.StringEditor;
    }

    export class PromotionReasonForm extends Serenity.PrefixedContext {
        static formKey = 'Performance.PromotionReason';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PromotionReasonForm.init)  {
                PromotionReasonForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PromotionReasonForm, [
                    'ShortNote', w0
                ]);
            }
        }
    }
}
