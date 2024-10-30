
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class AppraisalDetailDialog extends Serenity.Extensions.GridEditorDialog<AppraisalDetailRow> {
        protected getFormKey() { return AppraisalDetailForm.formKey; }
        protected getLocalTextPrefix() { return AppraisalDetailRow.localTextPrefix; }

        protected form = new AppraisalDetailForm(this.idPrefix);

        constructor() {
            super();

            this.form.EvaluationId.changeSelect2(args => {
                var evaluationId = this.form.EvaluationId.value;
                if (Q.isEmptyOrNull(evaluationId)) {
                    return;
                }
                EvaluationService.Retrieve({
                    EntityId: evaluationId
                }, response => {

                    this.form.EvaluationNumber.value = response.Entity.Number;
                    this.form.EvaluationGroup.value = response.Entity.Group;
                    this.form.EvaluationIndicator.value = response.Entity.Indicator;

                });

            });

        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.EvaluationNumber, true);
            Serenity.EditorUtils.setReadOnly(this.form.EvaluationGroup, true);
            Serenity.EditorUtils.setReadOnly(this.form.EvaluationIndicator, true);
        }

    }
}