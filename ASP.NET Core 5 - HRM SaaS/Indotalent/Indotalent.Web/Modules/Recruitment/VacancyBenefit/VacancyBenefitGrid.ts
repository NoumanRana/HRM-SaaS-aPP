
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class VacancyBenefitGrid extends Serenity.EntityGrid<VacancyBenefitRow, any> {
        protected getColumnsKey() { return VacancyBenefitColumns.columnsKey; }
        protected getDialogType() { return VacancyBenefitDialog; }
        protected getIdProperty() { return VacancyBenefitRow.idProperty; }
        protected getInsertPermission() { return VacancyBenefitRow.insertPermission; }
        protected getLocalTextPrefix() { return VacancyBenefitRow.localTextPrefix; }
        protected getService() { return VacancyBenefitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}