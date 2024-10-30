namespace Indotalent.Payrolls {
    export interface EmployeeKpiForm {
        KpiDescription: Serenity.StringEditor;
        KpiIndicator: Serenity.DecimalEditor;
        KpiUnit: Serenity.StringEditor;
    }

    export class EmployeeKpiForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.EmployeeKpi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeKpiForm.init)  {
                EmployeeKpiForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(EmployeeKpiForm, [
                    'KpiDescription', w0,
                    'KpiIndicator', w1,
                    'KpiUnit', w0
                ]);
            }
        }
    }
}
