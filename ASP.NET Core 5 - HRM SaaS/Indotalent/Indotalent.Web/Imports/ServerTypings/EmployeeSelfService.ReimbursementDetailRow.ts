namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.ReimbursementDetail';
        export const lookupKey = 'EmployeeSelfService.ReimbursementDetail';

        export function getLookup(): Q.Lookup<ReimbursementDetailRow> {
            return Q.getLookup<ReimbursementDetailRow>('EmployeeSelfService.ReimbursementDetail');
        }
        export const deletePermission = 'EmployeeSelfService:Reimbursement';
        export const insertPermission = 'EmployeeSelfService:Reimbursement';
        export const readPermission = 'EmployeeSelfService:Reimbursement';
        export const updatePermission = 'EmployeeSelfService:Reimbursement';

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
