namespace Indotalent.Performance {
    export interface PromotionRow {
        Id?: number;
        Number?: string;
        Description?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        EffectiveDate?: string;
        PromotorId?: number;
        PromotorName?: string;
        CurrentBasicSalary?: number;
        NewBasicSalary?: number;
        CurrentBranchId?: number;
        CurrentBranchName?: string;
        NewBranchId?: number;
        NewBranchName?: string;
        CurrentDepartmentId?: number;
        CurrentDepartmentName?: string;
        NewDepartmentId?: number;
        NewDepartmentName?: string;
        CurrentDesignationId?: number;
        CurrentDesignationName?: string;
        NewDesignationId?: number;
        NewDesignationName?: string;
        CurrentSupervisorId?: number;
        CurrentSupervisorName?: string;
        NewSupervisorId?: number;
        NewSupervisorName?: string;
        TenantId?: number;
        TenantName?: string;
        PromotionReasonList?: PromotionReasonRow[];
        PromotionCompetencyList?: PromotionCompetencyRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PromotionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Performance.Promotion';
        export const lookupKey = 'Performance.Promotion';

        export function getLookup(): Q.Lookup<PromotionRow> {
            return Q.getLookup<PromotionRow>('Performance.Promotion');
        }
        export const deletePermission = 'Performance:Promotion';
        export const insertPermission = 'Performance:Promotion';
        export const readPermission = 'Performance:Promotion';
        export const updatePermission = 'Performance:Promotion';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            EffectiveDate = "EffectiveDate",
            PromotorId = "PromotorId",
            PromotorName = "PromotorName",
            CurrentBasicSalary = "CurrentBasicSalary",
            NewBasicSalary = "NewBasicSalary",
            CurrentBranchId = "CurrentBranchId",
            CurrentBranchName = "CurrentBranchName",
            NewBranchId = "NewBranchId",
            NewBranchName = "NewBranchName",
            CurrentDepartmentId = "CurrentDepartmentId",
            CurrentDepartmentName = "CurrentDepartmentName",
            NewDepartmentId = "NewDepartmentId",
            NewDepartmentName = "NewDepartmentName",
            CurrentDesignationId = "CurrentDesignationId",
            CurrentDesignationName = "CurrentDesignationName",
            NewDesignationId = "NewDesignationId",
            NewDesignationName = "NewDesignationName",
            CurrentSupervisorId = "CurrentSupervisorId",
            CurrentSupervisorName = "CurrentSupervisorName",
            NewSupervisorId = "NewSupervisorId",
            NewSupervisorName = "NewSupervisorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            PromotionReasonList = "PromotionReasonList",
            PromotionCompetencyList = "PromotionCompetencyList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
