namespace Indotalent.Operation {
    export interface AssetRow {
        Id?: number;
        Number?: string;
        Description?: string;
        PurchaseDate?: string;
        PurchasePrice?: number;
        PurchaseOrderNumber?: string;
        PurchaseOrderBill?: string;
        SupportCenter?: string;
        Manufacturer?: string;
        Model?: string;
        SerialNumber?: string;
        ProductionYear?: number;
        AssetTagNumber?: string;
        Images?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace AssetRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Operation.Asset';
        export const lookupKey = 'Operation.Asset';

        export function getLookup(): Q.Lookup<AssetRow> {
            return Q.getLookup<AssetRow>('Operation.Asset');
        }
        export const deletePermission = 'Operation:Asset';
        export const insertPermission = 'Operation:Asset';
        export const readPermission = 'Operation:Asset';
        export const updatePermission = 'Operation:Asset';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            PurchaseDate = "PurchaseDate",
            PurchasePrice = "PurchasePrice",
            PurchaseOrderNumber = "PurchaseOrderNumber",
            PurchaseOrderBill = "PurchaseOrderBill",
            SupportCenter = "SupportCenter",
            Manufacturer = "Manufacturer",
            Model = "Model",
            SerialNumber = "SerialNumber",
            ProductionYear = "ProductionYear",
            AssetTagNumber = "AssetTagNumber",
            Images = "Images",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
