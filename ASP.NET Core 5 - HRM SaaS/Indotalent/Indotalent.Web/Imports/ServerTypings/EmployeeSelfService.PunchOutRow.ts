namespace Indotalent.EmployeeSelfService {
    export interface PunchOutRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        PunchDate?: string;
        PunchOut?: string;
        OutHour?: number;
        OutMinute?: number;
        PunchIn?: string;
        Duration?: number;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PunchOutRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeName';
        export const localTextPrefix = 'EmployeeSelfService.PunchOut';
        export const lookupKey = 'EmployeeSelfService.PunchOut';

        export function getLookup(): Q.Lookup<PunchOutRow> {
            return Q.getLookup<PunchOutRow>('EmployeeSelfService.PunchOut');
        }
        export const deletePermission = 'EmployeeSelfService:PunchOut';
        export const insertPermission = 'EmployeeSelfService:PunchOut';
        export const readPermission = 'EmployeeSelfService:PunchOut';
        export const updatePermission = 'EmployeeSelfService:PunchOut';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            PunchDate = "PunchDate",
            PunchOut = "PunchOut",
            OutHour = "OutHour",
            OutMinute = "OutMinute",
            PunchIn = "PunchIn",
            Duration = "Duration",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
