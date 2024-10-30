namespace Indotalent.Operation {
    export interface ReimbursementDetailRow {
        Id?: number;
        ReimbursementId?: number;
        ShortNote?: string;
        Amount?: number;
        ReimbursementNumber?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ReimbursementDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ShortNote';
        export const localTextPrefix = 'Operation.ReimbursementDetail';
        export const lookupKey = 'Operation.ReimbursementDetail';

        export function getLookup(): Q.Lookup<ReimbursementDetailRow> {
            return Q.getLookup<ReimbursementDetailRow>('Operation.ReimbursementDetail');
        }
        export const deletePermission = 'Operation:Reimbursement';
        export const insertPermission = 'Operation:Reimbursement';
        export const readPermission = 'Operation:Reimbursement';
        export const updatePermission = 'Operation:Reimbursement';

        export declare const enum Fields {
            Id = "Id",
            ReimbursementId = "ReimbursementId",
            ShortNote = "ShortNote",
            Amount = "Amount",
            ReimbursementNumber = "ReimbursementNumber",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
