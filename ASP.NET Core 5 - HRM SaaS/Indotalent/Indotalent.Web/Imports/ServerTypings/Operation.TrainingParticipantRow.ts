namespace Indotalent.Operation {
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
        export const localTextPrefix = 'Operation.TrainingParticipant';
        export const lookupKey = 'Operation.TrainingParticipant';

        export function getLookup(): Q.Lookup<TrainingParticipantRow> {
            return Q.getLookup<TrainingParticipantRow>('Operation.TrainingParticipant');
        }
        export const deletePermission = 'Operation:Training';
        export const insertPermission = 'Operation:Training';
        export const readPermission = 'Operation:Training';
        export const updatePermission = 'Operation:Training';

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
