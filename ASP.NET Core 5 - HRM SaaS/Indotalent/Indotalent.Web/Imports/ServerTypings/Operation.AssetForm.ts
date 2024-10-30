namespace Indotalent.Operation {
    export interface AssetForm {
        Number: Serenity.StringEditor;
        AssetTagNumber: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PurchaseDate: Serenity.DateEditor;
        PurchasePrice: Serenity.DecimalEditor;
        PurchaseOrderNumber: Serenity.StringEditor;
        PurchaseOrderBill: Serenity.StringEditor;
        SupportCenter: Serenity.TextAreaEditor;
        Manufacturer: Serenity.StringEditor;
        Model: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        ProductionYear: Serenity.IntegerEditor;
        Images: Serenity.MultipleImageUploadEditor;
    }

    export class AssetForm extends Serenity.PrefixedContext {
        static formKey = 'Operation.Asset';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssetForm.init)  {
                AssetForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.MultipleImageUploadEditor;

                Q.initFormType(AssetForm, [
                    'Number', w0,
                    'AssetTagNumber', w0,
                    'Description', w1,
                    'PurchaseDate', w2,
                    'PurchasePrice', w3,
                    'PurchaseOrderNumber', w0,
                    'PurchaseOrderBill', w0,
                    'SupportCenter', w1,
                    'Manufacturer', w0,
                    'Model', w0,
                    'SerialNumber', w0,
                    'ProductionYear', w4,
                    'Images', w5
                ]);
            }
        }
    }
}
