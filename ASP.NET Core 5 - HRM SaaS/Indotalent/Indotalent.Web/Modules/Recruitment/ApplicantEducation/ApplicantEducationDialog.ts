
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class ApplicantEducationDialog extends Serenity.Extensions.GridEditorDialog<ApplicantEducationRow> {
        protected getFormKey() { return ApplicantEducationForm.formKey; }
        protected getLocalTextPrefix() { return ApplicantEducationRow.localTextPrefix; }

        protected form = new ApplicantEducationForm(this.idPrefix);

    }
}