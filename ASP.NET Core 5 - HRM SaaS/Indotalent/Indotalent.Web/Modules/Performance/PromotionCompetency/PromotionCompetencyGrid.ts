
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class PromotionCompetencyGrid extends Serenity.EntityGrid<PromotionCompetencyRow, any> {
        protected getColumnsKey() { return PromotionCompetencyColumns.columnsKey; }
        protected getDialogType() { return PromotionCompetencyDialog; }
        protected getIdProperty() { return PromotionCompetencyRow.idProperty; }
        protected getInsertPermission() { return PromotionCompetencyRow.insertPermission; }
        protected getLocalTextPrefix() { return PromotionCompetencyRow.localTextPrefix; }
        protected getService() { return PromotionCompetencyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}