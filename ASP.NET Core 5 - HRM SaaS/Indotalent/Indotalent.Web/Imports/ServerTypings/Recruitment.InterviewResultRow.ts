namespace Indotalent.Recruitment {
    export interface InterviewResultRow {
        Id?: number;
        InterviewId?: number;
        ResultName?: string;
        ResultScore?: number;
        InterviewNumber?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace InterviewResultRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ResultName';
        export const localTextPrefix = 'Recruitment.InterviewResult';
        export const lookupKey = 'Recruitment.InterviewResult';

        export function getLookup(): Q.Lookup<InterviewResultRow> {
            return Q.getLookup<InterviewResultRow>('Recruitment.InterviewResult');
        }
        export const deletePermission = 'Recruitment:Interview';
        export const insertPermission = 'Recruitment:Interview';
        export const readPermission = 'Recruitment:Interview';
        export const updatePermission = 'Recruitment:Interview';

        export declare const enum Fields {
            Id = "Id",
            InterviewId = "InterviewId",
            ResultName = "ResultName",
            ResultScore = "ResultScore",
            InterviewNumber = "InterviewNumber",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
