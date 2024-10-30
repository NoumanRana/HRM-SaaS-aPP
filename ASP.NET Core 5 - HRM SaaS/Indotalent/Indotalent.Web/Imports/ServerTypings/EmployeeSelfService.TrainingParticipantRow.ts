namespace Indotalent.EmployeeSelfService {
    export interface TrainingParticipantRow {
        Id?: number;
        TrainingId?: number;
        TrainingName?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        BranchId?: number;
        BranchName?: string;
        DepartmentId?: number;
        DepartmentName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace TrainingParticipantRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TrainingName';
        export const localTextPrefix = 'EmployeeSelfService.TrainingParticipant';
        export const lookupKey = 'EmployeeSelfService.TrainingParticipant';

        export function getLookup(): Q.Lookup<TrainingParticipantRow> {
            return Q.getLookup<TrainingParticipantRow>('EmployeeSelfService.TrainingParticipant');
        }
        export const deletePermission = 'EmployeeSelfService:Training';
        export const insertPermission = 'EmployeeSelfService:Training';
        export const readPermission = 'EmployeeSelfService:Training';
        export const updatePermission = 'EmployeeSelfService:Training';

        export declare const enum Fields {
            Id = "Id",
            TrainingId = "TrainingId",
            TrainingName = "TrainingName",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            DepartmentId = "DepartmentId",
            DepartmentName = "DepartmentName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
