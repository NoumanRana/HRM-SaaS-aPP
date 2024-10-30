namespace Indotalent.Performance {
    export interface AppraisalRow {
        Id?: number;
        Number?: string;
        Comment?: string;
        Recomendation?: string;
        Description?: string;
        EmployeeId?: number;
        EmployeeName?: string;
        LastAppraisalDate?: string;
        CurrentAppraisalDate?: string;
        EvaluatorId?: number;
        EvaluatorName?: string;
        TenantId?: number;
        TenantName?: string;
        AppraisalDetailList?: AppraisalDetailRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace AppraisalRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Performance.Appraisal';
        export const lookupKey = 'Performance.Appraisal';

        export function getLookup(): Q.Lookup<AppraisalRow> {
            return Q.getLookup<AppraisalRow>('Performance.Appraisal');
        }
        export const deletePermission = 'Performance:Appraisal';
        export const insertPermission = 'Performance:Appraisal';
        export const readPermission = 'Performance:Appraisal';
        export const updatePermission = 'Performance:Appraisal';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Comment = "Comment",
            Recomendation = "Recomendation",
            Description = "Description",
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            LastAppraisalDate = "LastAppraisalDate",
            CurrentAppraisalDate = "CurrentAppraisalDate",
            EvaluatorId = "EvaluatorId",
            EvaluatorName = "EvaluatorName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            AppraisalDetailList = "AppraisalDetailList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
