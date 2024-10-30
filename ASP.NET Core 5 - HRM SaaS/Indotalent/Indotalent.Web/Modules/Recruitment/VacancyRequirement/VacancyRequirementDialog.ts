
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class VacancyRequirementDialog extends Serenity.Extensions.GridEditorDialog<VacancyRequirementRow> {
        protected getFormKey() { return VacancyRequirementForm.formKey; }
        protected getLocalTextPrefix() { return VacancyRequirementRow.localTextPrefix; }

        protected form = new VacancyRequirementForm(this.idPrefix);

        constructor() {
            super();

        }

    }
}