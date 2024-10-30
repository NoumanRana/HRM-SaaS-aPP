namespace Indotalent.Payrolls {
    export interface EmployeeEducationRow {
        Id?: number;
        EmployeeId?: number;
        SchoolName?: string;
        StudyMajor?: string;
        Grade?: string;
        ShortNote?: string;
        StartDate?: string;
        EndDate?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeEducationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SchoolName';
        export const localTextPrefix = 'Payrolls.EmployeeEducation';
        export const lookupKey = 'Payrolls.EmployeeEducation';

        export function getLookup(): Q.Lookup<EmployeeEducationRow> {
            return Q.getLookup<EmployeeEducationRow>('Payrolls.EmployeeEducation');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            SchoolName = "SchoolName",
            StudyMajor = "StudyMajor",
            Grade = "Grade",
            ShortNote = "ShortNote",
            StartDate = "StartDate",
            EndDate = "EndDate",
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
