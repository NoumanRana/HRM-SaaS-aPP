namespace Indotalent.Operation {
    export interface SOPRow {
        Id?: number;
        Number?: string;
        Name?: string;
        Description?: string;
        Reference?: string;
        TenantId?: number;
        TenantName?: string;
    }

    export namespace SOPRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Operation.SOP';
        export const lookupKey = 'Operation.SOP';

        export function getLookup(): Q.Lookup<SOPRow> {
            return Q.getLookup<SOPRow>('Operation.SOP');
        }
        export const deletePermission = 'Operation:SOP';
        export const insertPermission = 'Operation:SOP';
        export const readPermission = 'Operation:SOP';
        export const updatePermission = 'Operation:SOP';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Name = "Name",
            Description = "Description",
            Reference = "Reference",
            TenantId = "TenantId",
            TenantName = "TenantName"
        }
    }
}
