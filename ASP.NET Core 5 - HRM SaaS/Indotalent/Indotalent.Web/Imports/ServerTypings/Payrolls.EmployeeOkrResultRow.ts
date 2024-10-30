namespace Indotalent.Payrolls {
    export interface EmployeeOkrResultRow {
        Id?: number;
        EmployeeId?: number;
        Result?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeOkrResultRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Result';
        export const localTextPrefix = 'Payrolls.EmployeeOkrResult';
        export const lookupKey = 'Payrolls.EmployeeOkrResult';

        export function getLookup(): Q.Lookup<EmployeeOkrResultRow> {
            return Q.getLookup<EmployeeOkrResultRow>('Payrolls.EmployeeOkrResult');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Result = "Result",
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
