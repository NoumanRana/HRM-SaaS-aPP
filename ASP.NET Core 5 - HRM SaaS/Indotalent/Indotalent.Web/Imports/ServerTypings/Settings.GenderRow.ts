namespace Indotalent.Settings {
    export interface GenderRow {
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

    export namespace GenderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Settings.Gender';
        export const lookupKey = 'Settings.Gender';

        export function getLookup(): Q.Lookup<GenderRow> {
            return Q.getLookup<GenderRow>('Settings.Gender');
        }
        export const deletePermission = 'Settings:Gender';
        export const insertPermission = 'Settings:Gender';
        export const readPermission = 'Settings:Gender';
        export const updatePermission = 'Settings:Gender';

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
