
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class PromotionReasonGrid extends Serenity.EntityGrid<PromotionReasonRow, any> {
        protected getColumnsKey() { return PromotionReasonColumns.columnsKey; }
        protected getDialogType() { return PromotionReasonDialog; }
        protected getIdProperty() { return PromotionReasonRow.idProperty; }
        protected getInsertPermission() { return PromotionReasonRow.insertPermission; }
        protected getLocalTextPrefix() { return PromotionReasonRow.localTextPrefix; }
        protected getService() { return PromotionReasonService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}