namespace Indotalent.Payrolls {
    export interface EmployeeExperienceForm {
        CompanyName: Serenity.StringEditor;
        Position: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Salary: Serenity.DecimalEditor;
    }

    export class EmployeeExperienceForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeExperience';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeExperienceForm.init)  {
                EmployeeExperienceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(EmployeeExperienceForm, [
                    'CompanyName', w0,
                    'Position', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'Salary', w2
                ]);
            }
        }
    }
}
