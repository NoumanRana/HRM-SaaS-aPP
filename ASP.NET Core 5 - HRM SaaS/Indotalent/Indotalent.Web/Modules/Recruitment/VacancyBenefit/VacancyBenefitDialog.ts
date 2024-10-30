
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class VacancyBenefitDialog extends Serenity.Extensions.GridEditorDialog<VacancyBenefitRow> {
        protected getFormKey() { return VacancyBenefitForm.formKey; }
        protected getLocalTextPrefix() { return VacancyBenefitRow.localTextPrefix; }

        protected form = new VacancyBenefitForm(this.idPrefix);

        constructor() {
            super();

        }

    }
}