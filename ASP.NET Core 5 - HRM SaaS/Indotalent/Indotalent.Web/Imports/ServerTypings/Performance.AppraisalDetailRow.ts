namespace Indotalent.Performance {
    export interface AppraisalDetailRow {
        Id?: number;
        AppraisalId?: number;
        AppraisalNumber?: string;
        EvaluationResult?: EvaluationResult;
        EvaluationId?: number;
        EvaluationNumber?: string;
        EvaluationGroup?: string;
        EvaluationIndicator?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace AppraisalDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EvaluationNumber';
        export const localTextPrefix = 'Performance.AppraisalDetail';
        export const lookupKey = 'Performance.AppraisalDetail';

        export function getLookup(): Q.Lookup<AppraisalDetailRow> {
            return Q.getLookup<AppraisalDetailRow>('Performance.AppraisalDetail');
        }
        export const deletePermission = 'Performance:Appraisal';
        export const insertPermission = 'Performance:Appraisal';
        export const readPermission = 'Performance:Appraisal';
        export const updatePermission = 'Performance:Appraisal';

        export declare const enum Fields {
            Id = "Id",
            AppraisalId = "AppraisalId",
            AppraisalNumber = "AppraisalNumber",
            EvaluationResult = "EvaluationResult",
            EvaluationId = "EvaluationId",
            EvaluationNumber = "EvaluationNumber",
            EvaluationGroup = "EvaluationGroup",
            EvaluationIndicator = "EvaluationIndicator",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
