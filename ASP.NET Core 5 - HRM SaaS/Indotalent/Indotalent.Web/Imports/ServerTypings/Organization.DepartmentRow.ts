namespace Indotalent.Organization {
    export interface DepartmentRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace DepartmentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Organization.Department';
        export const lookupKey = 'Organization.Department';

        export function getLookup(): Q.Lookup<DepartmentRow> {
            return Q.getLookup<DepartmentRow>('Organization.Department');
        }
        export const deletePermission = 'Organization:Department';
        export const insertPermission = 'Organization:Department';
        export const readPermission = 'Organization:Department';
        export const updatePermission = 'Organization:Department';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
