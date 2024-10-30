namespace Indotalent.Performance {
    export interface TransferCompetencyRow {
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

    export namespace TransferCompetencyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ShortNote';
        export const localTextPrefix = 'Performance.TransferCompetency';
        export const lookupKey = 'Performance.TransferCompetency';

        export function getLookup(): Q.Lookup<TransferCompetencyRow> {
            return Q.getLookup<TransferCompetencyRow>('Performance.TransferCompetency');
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
