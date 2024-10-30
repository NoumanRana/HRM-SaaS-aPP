namespace Indotalent.Performance {
    export interface PromotionCompetencyForm {
        ShortNote: Serenity.StringEditor;
    }

    export class PromotionCompetencyForm extends Serenity.PrefixedContext {
        static formKey = 'Performance.PromotionCompetency';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PromotionCompetencyForm.init)  {
                PromotionCompetencyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PromotionCompetencyForm, [
                    'ShortNote', w0
                ]);
            }
        }
    }
}
