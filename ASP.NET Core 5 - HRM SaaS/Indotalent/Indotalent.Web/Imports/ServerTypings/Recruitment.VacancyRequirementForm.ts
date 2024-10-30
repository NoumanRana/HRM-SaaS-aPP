namespace Indotalent.Recruitment {
    export interface VacancyRequirementForm {
        ShortNote: Serenity.StringEditor;
    }

    export class VacancyRequirementForm extends Serenity.PrefixedContext {
        static formKey = 'Recruitment.VacancyRequirement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VacancyRequirementForm.init)  {
                VacancyRequirementForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VacancyRequirementForm, [
                    'ShortNote', w0
                ]);
            }
        }
    }
}
