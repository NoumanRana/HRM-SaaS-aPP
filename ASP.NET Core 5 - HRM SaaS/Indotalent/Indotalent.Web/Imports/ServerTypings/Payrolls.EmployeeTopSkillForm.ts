namespace Indotalent.Payrolls {
    export interface EmployeeTopSkillForm {
        SkillName: Serenity.StringEditor;
        ProficiencyScore: Serenity.IntegerEditor;
    }

    export class EmployeeTopSkillForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeTopSkill';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeTopSkillForm.init)  {
                EmployeeTopSkillForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(EmployeeTopSkillForm, [
                    'SkillName', w0,
                    'ProficiencyScore', w1
                ]);
            }
        }
    }
}
