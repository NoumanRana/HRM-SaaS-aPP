
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class ApplicantExperienceDialog extends Serenity.Extensions.GridEditorDialog<ApplicantExperienceRow> {
        protected getFormKey() { return ApplicantExperienceForm.formKey; }
        protected getLocalTextPrefix() { return ApplicantExperienceRow.localTextPrefix; }

        protected form = new ApplicantExperienceForm(this.idPrefix);

    }
}