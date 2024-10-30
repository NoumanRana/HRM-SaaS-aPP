namespace Indotalent.EmployeeSelfService {
    export interface PunchInRow {
        Id?: number;
        EmployeeId?: number;
        EmployeeName?: string;
        EmployeeNumber?: string;
        PunchDate?: string;
        PunchIn?: string;
        InHour?: number;
        InMinute?: number;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PunchInRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeName';
        export const localTextPrefix = 'EmployeeSelfService.PunchIn';
        export const lookupKey = 'EmployeeSelfService.PunchIn';

        export function getLookup(): Q.Lookup<PunchInRow> {
            return Q.getLookup<PunchInRow>('EmployeeSelfService.PunchIn');
        }
        export const deletePermission = 'EmployeeSelfService:PunchIn';
        export const insertPermission = 'EmployeeSelfService:PunchIn';
        export const readPermission = 'EmployeeSelfService:PunchIn';
        export const updatePermission = 'EmployeeSelfService:PunchIn';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EmployeeNumber = "EmployeeNumber",
            PunchDate = "PunchDate",
            PunchIn = "PunchIn",
            InHour = "InHour",
            InMinute = "InMinute",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
