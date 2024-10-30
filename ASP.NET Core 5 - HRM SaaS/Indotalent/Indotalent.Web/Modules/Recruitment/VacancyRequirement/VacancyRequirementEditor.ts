
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class VacancyRequirementEditor extends Serenity.Extensions.GridEditorBase<VacancyRequirementRow> {
        protected getColumnsKey() { return VacancyRequirementColumns.columnsKey; }
        protected getDialogType() { return VacancyRequirementDialog; }
        protected getLocalTextPrefix() { return VacancyRequirementRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

    }
}