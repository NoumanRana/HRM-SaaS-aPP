namespace Indotalent.Organization {
    export interface DesignationRow {
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

    export namespace DesignationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Organization.Designation';
        export const lookupKey = 'Organization.Designation';

        export function getLookup(): Q.Lookup<DesignationRow> {
            return Q.getLookup<DesignationRow>('Organization.Designation');
        }
        export const deletePermission = 'Organization:Designation';
        export const insertPermission = 'Organization:Designation';
        export const readPermission = 'Organization:Designation';
        export const updatePermission = 'Organization:Designation';

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
