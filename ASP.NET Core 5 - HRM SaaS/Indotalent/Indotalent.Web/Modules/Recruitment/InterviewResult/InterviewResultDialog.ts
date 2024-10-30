
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class InterviewResultDialog extends Serenity.Extensions.GridEditorDialog<InterviewResultRow> {
        protected getFormKey() { return InterviewResultForm.formKey; }
        protected getLocalTextPrefix() { return InterviewResultRow.localTextPrefix; }

        protected form = new InterviewResultForm(this.idPrefix);

    }
}