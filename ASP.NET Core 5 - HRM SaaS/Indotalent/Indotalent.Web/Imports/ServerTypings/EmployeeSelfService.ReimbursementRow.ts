namespace Indotalent.EmployeeSelfService {
    export interface ReimbursementRow {
        Id?: number;
        Number?: string;
        Description?: string;
        TransactionDate?: string;
        TotalAmount?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        ReimbursementStatus?: ReimbursementStatus;
        ItemList?: ReimbursementDetailRow[];
        TenantId?: number;
        TenantName?: string;
        CurrencyName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ReimbursementRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'EmployeeSelfService.Reimbursement';
        export const lookupKey = 'EmployeeSelfService.Reimbursement';

        export function getLookup(): Q.Lookup<ReimbursementRow> {
            return Q.getLookup<ReimbursementRow>('EmployeeSelfService.Reimbursement');
        }
        export const deletePermission = 'EmployeeSelfService:Reimbursement';
        export const insertPermission = 'EmployeeSelfService:Reimbursement';
        export const readPermission = 'EmployeeSelfService:Reimbursement';
        export const updatePermission = 'EmployeeSelfService:Reimbursement';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            TransactionDate = "TransactionDate",
            TotalAmount = "TotalAmount",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            ReimbursementStatus = "ReimbursementStatus",
            ItemList = "ItemList",
            TenantId = "TenantId",
            TenantName = "TenantName",
            CurrencyName = "CurrencyName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
