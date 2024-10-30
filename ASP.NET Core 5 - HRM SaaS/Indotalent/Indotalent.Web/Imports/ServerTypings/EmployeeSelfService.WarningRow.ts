namespace Indotalent.EmployeeSelfService {
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
        export const localTextPrefix = 'EmployeeSelfService.Warning';
        export const lookupKey = 'EmployeeSelfService.Warning';

        export function getLookup(): Q.Lookup<WarningRow> {
            return Q.getLookup<WarningRow>('EmployeeSelfService.Warning');
        }
        export const deletePermission = 'EmployeeSelfService:Warning';
        export const insertPermission = 'EmployeeSelfService:Warning';
        export const readPermission = 'EmployeeSelfService:Warning';
        export const updatePermission = 'EmployeeSelfService:Warning';

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
