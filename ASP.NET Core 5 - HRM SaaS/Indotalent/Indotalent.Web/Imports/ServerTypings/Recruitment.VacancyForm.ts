namespace Indotalent.Recruitment {
    export interface VacancyForm {
        Number: Serenity.StringEditor;
        JobTitle: Serenity.StringEditor;
        JobDescription: Serenity.TextAreaEditor;
        OpenDate: Serenity.DateEditor;
        CloseDate: Serenity.DateEditor;
        HiringManagerId: Serenity.LookupEditor;
        HiringManagerDepartmentId: Serenity.LookupEditor;
        HiringManagerBranchId: Serenity.LookupEditor;
        VacancyRequirementList: VacancyRequirementEditor;
        VacancyBenefitList: VacancyBenefitEditor;
    }

    export class VacancyForm extends Serenity.PrefixedContext {
        static formKey = 'Recruitment.Vacancy';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VacancyForm.init)  {
                VacancyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = VacancyRequirementEditor;
                var w5 = VacancyBenefitEditor;

                Q.initFormType(VacancyForm, [
                    'Number', w0,
                    'JobTitle', w0,
                    'JobDescription', w1,
                    'OpenDate', w2,
                    'CloseDate', w2,
                    'HiringManagerId', w3,
                    'HiringManagerDepartmentId', w3,
                    'HiringManagerBranchId', w3,
                    'VacancyRequirementList', w4,
                    'VacancyBenefitList', w5
                ]);
            }
        }
    }
}
