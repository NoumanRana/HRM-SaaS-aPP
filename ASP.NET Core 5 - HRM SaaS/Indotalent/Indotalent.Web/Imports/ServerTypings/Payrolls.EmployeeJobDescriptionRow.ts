namespace Indotalent.Payrolls {
    export interface EmployeeJobDescriptionRow {
        Id?: number;
        EmployeeId?: number;
        JobDescription?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeJobDescriptionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'JobDescription';
        export const localTextPrefix = 'Payrolls.EmployeeJobDescription';
        export const lookupKey = 'Payrolls.EmployeeJobDescription';

        export function getLookup(): Q.Lookup<EmployeeJobDescriptionRow> {
            return Q.getLookup<EmployeeJobDescriptionRow>('Payrolls.EmployeeJobDescription');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            JobDescription = "JobDescription",
            EmployeeName = "EmployeeName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
