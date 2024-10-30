namespace Indotalent.EmployeeSelfService {
    export interface OvertimeRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        OvertimeDate?: string;
        Duration?: number;
        Description?: string;
        OvertimeStatus?: OvertimeStatus;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace OvertimeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeName';
        export const localTextPrefix = 'EmployeeSelfService.Overtime';
        export const lookupKey = 'EmployeeSelfService.Overtime';

        export function getLookup(): Q.Lookup<OvertimeRow> {
            return Q.getLookup<OvertimeRow>('EmployeeSelfService.Overtime');
        }
        export const deletePermission = 'EmployeeSelfService:Overtime';
        export const insertPermission = 'EmployeeSelfService:Overtime';
        export const readPermission = 'EmployeeSelfService:Overtime';
        export const updatePermission = 'EmployeeSelfService:Overtime';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            OvertimeDate = "OvertimeDate",
            Duration = "Duration",
            Description = "Description",
            OvertimeStatus = "OvertimeStatus",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
