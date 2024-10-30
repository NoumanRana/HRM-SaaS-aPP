namespace Indotalent.Payrolls {
    export interface EmployeeKpiRow {
        Id?: number;
        EmployeeId?: number;
        KpiDescription?: string;
        KpiIndicator?: number;
        KpiUnit?: string;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeKpiRow {
        export const idProperty = 'Id';
        export const nameProperty = 'KpiDescription';
        export const localTextPrefix = 'Payrolls.EmployeeKpi';
        export const lookupKey = 'Payrolls.EmployeeKpi';

        export function getLookup(): Q.Lookup<EmployeeKpiRow> {
            return Q.getLookup<EmployeeKpiRow>('Payrolls.EmployeeKpi');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            KpiDescription = "KpiDescription",
            KpiIndicator = "KpiIndicator",
            KpiUnit = "KpiUnit",
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
