namespace Indotalent.Operation {
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
        export const localTextPrefix = 'Operation.Reimbursement';
        export const lookupKey = 'Operation.Reimbursement';

        export function getLookup(): Q.Lookup<ReimbursementRow> {
            return Q.getLookup<ReimbursementRow>('Operation.Reimbursement');
        }
        export const deletePermission = 'Operation:Reimbursement';
        export const insertPermission = 'Operation:Reimbursement';
        export const readPermission = 'Operation:Reimbursement';
        export const updatePermission = 'Operation:Reimbursement';

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
