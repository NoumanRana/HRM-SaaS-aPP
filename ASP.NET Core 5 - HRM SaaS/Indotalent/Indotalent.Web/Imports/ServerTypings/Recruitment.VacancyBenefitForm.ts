namespace Indotalent.Recruitment {
    export interface VacancyBenefitForm {
        ShortNote: Serenity.StringEditor;
    }

    export class VacancyBenefitForm extends Serenity.PrefixedContext {
        static formKey = 'Recruitment.VacancyBenefit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VacancyBenefitForm.init)  {
                VacancyBenefitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VacancyBenefitForm, [
                    'ShortNote', w0
                ]);
            }
        }
    }
}
