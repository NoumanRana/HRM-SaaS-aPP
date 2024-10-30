namespace Indotalent.Operation {
    export interface AssetHandOverRow {
        Id?: number;
        Number?: string;
        Description?: string;
        HandOverDate?: string;
        AssetId?: number;
        AssetNumber?: string;
        AssetDescription?: string;
        AssetTagNumber?: string;
        Manufacturer?: string;
        Model?: string;
        SerialNumber?: string;
        ProductionYear?: number;
        HandOverById?: number;
        HandOverByName?: string;
        HandOverToId?: number;
        HandOverToName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace AssetHandOverRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Operation.AssetHandOver';
        export const lookupKey = 'Operation.AssetHandOver';

        export function getLookup(): Q.Lookup<AssetHandOverRow> {
            return Q.getLookup<AssetHandOverRow>('Operation.AssetHandOver');
        }
        export const deletePermission = 'Operation:AssetHandOver';
        export const insertPermission = 'Operation:AssetHandOver';
        export const readPermission = 'Operation:AssetHandOver';
        export const updatePermission = 'Operation:AssetHandOver';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            HandOverDate = "HandOverDate",
            AssetId = "AssetId",
            AssetNumber = "AssetNumber",
            AssetDescription = "AssetDescription",
            AssetTagNumber = "AssetTagNumber",
            Manufacturer = "Manufacturer",
            Model = "Model",
            SerialNumber = "SerialNumber",
            ProductionYear = "ProductionYear",
            HandOverById = "HandOverById",
            HandOverByName = "HandOverByName",
            HandOverToId = "HandOverToId",
            HandOverToName = "HandOverToName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
