namespace Indotalent.Payrolls {
    export interface GradeRow {
        Id?: number;
        Name?: string;
        Description?: string;
        BasicSalary?: number;
        TenantId?: number;
        TenantName?: string;
        CurrencyName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace GradeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Payrolls.Grade';
        export const lookupKey = 'Payrolls.Grade';

        export function getLookup(): Q.Lookup<GradeRow> {
            return Q.getLookup<GradeRow>('Payrolls.Grade');
        }
        export const deletePermission = 'Payrolls:Grade';
        export const insertPermission = 'Payrolls:Grade';
        export const readPermission = 'Payrolls:Grade';
        export const updatePermission = 'Payrolls:Grade';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            BasicSalary = "BasicSalary",
            TenantId = "TenantId",
            TenantName = "TenantName",
            CurrencyName = "CurrencyName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
