namespace Indotalent.Payrolls {
    export interface EmployeeOkrObjectiveRow {
        Id?: number;
        EmployeeId?: number;
        Objective?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeOkrObjectiveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Objective';
        export const localTextPrefix = 'Payrolls.EmployeeOkrObjective';
        export const lookupKey = 'Payrolls.EmployeeOkrObjective';

        export function getLookup(): Q.Lookup<EmployeeOkrObjectiveRow> {
            return Q.getLookup<EmployeeOkrObjectiveRow>('Payrolls.EmployeeOkrObjective');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Objective = "Objective",
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
