
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class VacancyBenefitEditor extends Serenity.Extensions.GridEditorBase<VacancyBenefitRow> {
        protected getColumnsKey() { return VacancyBenefitColumns.columnsKey; }
        protected getDialogType() { return VacancyBenefitDialog; }
        protected getLocalTextPrefix() { return VacancyBenefitRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

    }
}