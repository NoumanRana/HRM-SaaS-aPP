namespace Indotalent.Payrolls {
    export interface ThresholdForm {
        Name: Serenity.StringEditor;
        Value: Serenity.DecimalEditor;
        IsActive: Serenity.BooleanEditor;
    }

    export class ThresholdForm extends Serenity.PrefixedContext {
        static formKey = 'Payrolls.Threshold';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ThresholdForm.init)  {
                ThresholdForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(ThresholdForm, [
                    'Name', w0,
                    'Value', w1,
                    'IsActive', w2
                ]);
            }
        }
    }
}
