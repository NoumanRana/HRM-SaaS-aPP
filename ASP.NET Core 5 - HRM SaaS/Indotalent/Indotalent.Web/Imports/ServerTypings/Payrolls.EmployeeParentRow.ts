namespace Indotalent.Payrolls {
    export interface EmployeeParentRow {
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

    export namespace EmployeeParentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Payrolls.EmployeeParent';
        export const lookupKey = 'Payrolls.EmployeeParent';

        export function getLookup(): Q.Lookup<EmployeeParentRow> {
            return Q.getLookup<EmployeeParentRow>('Payrolls.EmployeeParent');
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
