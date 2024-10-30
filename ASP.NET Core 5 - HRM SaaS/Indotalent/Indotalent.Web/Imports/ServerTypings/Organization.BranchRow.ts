namespace Indotalent.Organization {
    export interface BranchRow {
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

    export namespace BranchRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Organization.Branch';
        export const lookupKey = 'Organization.Branch';

        export function getLookup(): Q.Lookup<BranchRow> {
            return Q.getLookup<BranchRow>('Organization.Branch');
        }
        export const deletePermission = 'Organization:Branch';
        export const insertPermission = 'Organization:Branch';
        export const readPermission = 'Organization:Branch';
        export const updatePermission = 'Organization:Branch';

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
