namespace Indotalent.Operation {
    export interface AssetHandOverForm {
        Number: Serenity.StringEditor;
        HandOverDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        HandOverById: Serenity.LookupEditor;
        HandOverToId: Serenity.LookupEditor;
        AssetId: Serenity.LookupEditor;
        AssetDescription: Serenity.TextAreaEditor;
        AssetTagNumber: Serenity.StringEditor;
        Manufacturer: Serenity.StringEditor;
        Model: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        ProductionYear: Serenity.IntegerEditor;
    }

    export class AssetHandOverForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.AssetHandOver';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssetHandOverForm.init)  {
                AssetHandOverForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.LookupEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(AssetHandOverForm, [
                    'Number', w0,
                    'HandOverDate', w1,
                    'Description', w2,
                    'HandOverById', w3,
                    'HandOverToId', w3,
                    'AssetId', w3,
                    'AssetDescription', w2,
                    'AssetTagNumber', w0,
                    'Manufacturer', w0,
                    'Model', w0,
                    'SerialNumber', w0,
                    'ProductionYear', w4
                ]);
            }
        }
    }
}
