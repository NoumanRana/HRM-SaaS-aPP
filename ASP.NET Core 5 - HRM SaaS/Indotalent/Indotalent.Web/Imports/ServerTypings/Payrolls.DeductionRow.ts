namespace Indotalent.Payrolls {
    export interface DeductionRow {
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

    export namespace DeductionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Payrolls.Deduction';
        export const lookupKey = 'Payrolls.Deduction';

        export function getLookup(): Q.Lookup<DeductionRow> {
            return Q.getLookup<DeductionRow>('Payrolls.Deduction');
        }
        export const deletePermission = 'Payrolls:Deduction';
        export const insertPermission = 'Payrolls:Deduction';
        export const readPermission = 'Payrolls:Deduction';
        export const updatePermission = 'Payrolls:Deduction';

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
