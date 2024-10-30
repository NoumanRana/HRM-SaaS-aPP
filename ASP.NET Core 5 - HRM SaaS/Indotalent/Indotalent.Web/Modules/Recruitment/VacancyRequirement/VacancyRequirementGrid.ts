
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class VacancyRequirementGrid extends Serenity.EntityGrid<VacancyRequirementRow, any> {
        protected getColumnsKey() { return VacancyRequirementColumns.columnsKey; }
        protected getDialogType() { return VacancyRequirementDialog; }
        protected getIdProperty() { return VacancyRequirementRow.idProperty; }
        protected getInsertPermission() { return VacancyRequirementRow.insertPermission; }
        protected getLocalTextPrefix() { return VacancyRequirementRow.localTextPrefix; }
        protected getService() { return VacancyRequirementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}