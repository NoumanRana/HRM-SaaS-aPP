namespace Indotalent.Recruitment {
    export interface ApplicantTopSkillForm {
        SkillName: Serenity.StringEditor;
        ProficiencyScore: Serenity.IntegerEditor;
    }

    export class ApplicantTopSkillForm extends Serenity.PrefixedContext {
        static formKey = 'Recruitment.ApplicantTopSkill';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ApplicantTopSkillForm.init)  {
                ApplicantTopSkillForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ApplicantTopSkillForm, [
                    'SkillName', w0,
                    'ProficiencyScore', w1
                ]);
            }
        }
    }
}
