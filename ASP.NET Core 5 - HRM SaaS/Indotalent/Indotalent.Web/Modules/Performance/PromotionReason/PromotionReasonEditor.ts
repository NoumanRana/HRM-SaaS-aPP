
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class PromotionReasonEditor extends Serenity.Extensions.GridEditorBase<PromotionReasonRow> {
        protected getColumnsKey() { return PromotionReasonColumns.columnsKey; }
        protected getDialogType() { return PromotionReasonDialog; }
        protected getLocalTextPrefix() { return PromotionReasonRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

    }
}