namespace Indotalent.Payrolls {
    export interface EmployeeDocumentRow {
        Id?: number;
        EmployeeId?: number;
        Name?: string;
        Description?: string;
        ExpiredDate?: string;
        Picture?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeDocumentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Payrolls.EmployeeDocument';
        export const lookupKey = 'Payrolls.EmployeeDocument';

        export function getLookup(): Q.Lookup<EmployeeDocumentRow> {
            return Q.getLookup<EmployeeDocumentRow>('Payrolls.EmployeeDocument');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Name = "Name",
            Description = "Description",
            ExpiredDate = "ExpiredDate",
            Picture = "Picture",
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
