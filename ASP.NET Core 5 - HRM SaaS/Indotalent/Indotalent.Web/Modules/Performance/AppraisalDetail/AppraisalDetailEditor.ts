
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class AppraisalDetailEditor extends Serenity.Extensions.GridEditorBase<AppraisalDetailRow> {
        protected getColumnsKey() { return AppraisalDetailColumns.columnsKey; }
        protected getDialogType() { return AppraisalDetailDialog; }
        protected getLocalTextPrefix() { return AppraisalDetailRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }


        protected validateEntity(row: AppraisalDetailRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            if (row.EvaluationResult == EvaluationResult.Adequate) {
                row.EvaluationResult = EvaluationResult.Adequate;
            } else if (row.EvaluationResult == EvaluationResult.NeedsImprovement) {
                row.EvaluationResult = EvaluationResult.NeedsImprovement;
            } else if (row.EvaluationResult == EvaluationResult.Satisfactory) {
                row.EvaluationResult = EvaluationResult.Satisfactory;
            }

            return true;
        }

    }
}