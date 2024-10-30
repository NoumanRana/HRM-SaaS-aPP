namespace Indotalent.Payrolls {
    export interface EmployeeEducationForm {
        SchoolName: Serenity.StringEditor;
        StudyMajor: Serenity.StringEditor;
        Grade: Serenity.StringEditor;
        ShortNote: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
    }

    export class EmployeeEducationForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeEducation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeEducationForm.init)  {
                EmployeeEducationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(EmployeeEducationForm, [
                    'SchoolName', w0,
                    'StudyMajor', w0,
                    'Grade', w0,
                    'ShortNote', w0,
                    'StartDate', w1,
                    'EndDate', w1
                ]);
            }
        }
    }
}
