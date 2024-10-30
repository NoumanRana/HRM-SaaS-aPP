namespace Indotalent.Operation {
    export interface WarningRow {
        Id?: number;
        Number?: string;
        Description?: string;
        WarningReason?: string;
        CorrectiveAction?: string;
        WarningDate?: string;
        CorrectiveDate?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        SupervisorId?: number;
        SupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace WarningRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Operation.Warning';
        export const lookupKey = 'Operation.Warning';

        export function getLookup(): Q.Lookup<WarningRow> {
            return Q.getLookup<WarningRow>('Operation.Warning');
        }
        export const deletePermission = 'Operation:Warning';
        export const insertPermission = 'Operation:Warning';
        export const readPermission = 'Operation:Warning';
        export const updatePermission = 'Operation:Warning';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            WarningReason = "WarningReason",
            CorrectiveAction = "CorrectiveAction",
            WarningDate = "WarningDate",
            CorrectiveDate = "CorrectiveDate",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            SupervisorId = "SupervisorId",
            SupervisorName = "SupervisorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
