
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class ApplicantTopSkillDialog extends Serenity.Extensions.GridEditorDialog<ApplicantTopSkillRow> {
        protected getFormKey() { return ApplicantTopSkillForm.formKey; }
        protected getLocalTextPrefix() { return ApplicantTopSkillRow.localTextPrefix; }

        protected form = new ApplicantTopSkillForm(this.idPrefix);

    }
}