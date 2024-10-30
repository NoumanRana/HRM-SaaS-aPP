namespace Indotalent.Performance {
    export interface TransferReasonRow {
        Id?: number;
        TransferId?: number;
        TransferNumber?: string;
        ShortNote?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace TransferReasonRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ShortNote';
        export const localTextPrefix = 'Performance.TransferReason';
        export const lookupKey = 'Performance.TransferReason';

        export function getLookup(): Q.Lookup<TransferReasonRow> {
            return Q.getLookup<TransferReasonRow>('Performance.TransferReason');
        }
        export const deletePermission = 'Performance:Transfer';
        export const insertPermission = 'Performance:Transfer';
        export const readPermission = 'Performance:Transfer';
        export const updatePermission = 'Performance:Transfer';

        export declare const enum Fields {
            Id = "Id",
            TransferId = "TransferId",
            TransferNumber = "TransferNumber",
            ShortNote = "ShortNote",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
