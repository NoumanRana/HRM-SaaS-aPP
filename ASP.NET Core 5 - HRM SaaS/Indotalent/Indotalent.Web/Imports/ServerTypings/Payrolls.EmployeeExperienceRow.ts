namespace Indotalent.Payrolls {
    export interface EmployeeExperienceRow {
        Id?: number;
        EmployeeId?: number;
        CompanyName?: string;
        Position?: string;
        StartDate?: string;
        EndDate?: string;
        Salary?: number;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeExperienceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Payrolls.EmployeeExperience';
        export const lookupKey = 'Payrolls.EmployeeExperience';

        export function getLookup(): Q.Lookup<EmployeeExperienceRow> {
            return Q.getLookup<EmployeeExperienceRow>('Payrolls.EmployeeExperience');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            CompanyName = "CompanyName",
            Position = "Position",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Salary = "Salary",
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
