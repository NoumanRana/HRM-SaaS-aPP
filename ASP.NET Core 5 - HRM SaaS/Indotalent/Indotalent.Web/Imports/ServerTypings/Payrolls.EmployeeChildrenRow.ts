namespace Indotalent.Payrolls {
    export interface EmployeeChildrenRow {
        Id?: number;
        EmployeeId?: number;
        Name?: string;
        Profession?: string;
        DateOfBirth?: string;
        EmployeeName?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeChildrenRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Payrolls.EmployeeChildren';
        export const lookupKey = 'Payrolls.EmployeeChildren';

        export function getLookup(): Q.Lookup<EmployeeChildrenRow> {
            return Q.getLookup<EmployeeChildrenRow>('Payrolls.EmployeeChildren');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Name = "Name",
            Profession = "Profession",
            DateOfBirth = "DateOfBirth",
            EmployeeName = "EmployeeName",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
