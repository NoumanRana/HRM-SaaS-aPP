namespace Indotalent.Payrolls {
    export interface IncomeRow {
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

    export namespace IncomeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Payrolls.Income';
        export const lookupKey = 'Payrolls.Income';

        export function getLookup(): Q.Lookup<IncomeRow> {
            return Q.getLookup<IncomeRow>('Payrolls.Income');
        }
        export const deletePermission = 'Payrolls:Income';
        export const insertPermission = 'Payrolls:Income';
        export const readPermission = 'Payrolls:Income';
        export const updatePermission = 'Payrolls:Income';

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
