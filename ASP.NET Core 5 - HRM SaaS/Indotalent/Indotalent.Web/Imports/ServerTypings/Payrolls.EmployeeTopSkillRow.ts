namespace Indotalent.Payrolls {
    export interface EmployeeTopSkillRow {
        Id?: number;
        EmployeeId?: number;
        SkillName?: string;
        ProficiencyScore?: number;
        EmployeeName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeTopSkillRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SkillName';
        export const localTextPrefix = 'Payrolls.EmployeeTopSkill';
        export const lookupKey = 'Payrolls.EmployeeTopSkill';

        export function getLookup(): Q.Lookup<EmployeeTopSkillRow> {
            return Q.getLookup<EmployeeTopSkillRow>('Payrolls.EmployeeTopSkill');
        }
        export const deletePermission = 'Payrolls:Employee';
        export const insertPermission = 'Payrolls:Employee';
        export const readPermission = 'Payrolls:Employee';
        export const updatePermission = 'Payrolls:Employee';

        export declare const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            SkillName = "SkillName",
            ProficiencyScore = "ProficiencyScore",
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
