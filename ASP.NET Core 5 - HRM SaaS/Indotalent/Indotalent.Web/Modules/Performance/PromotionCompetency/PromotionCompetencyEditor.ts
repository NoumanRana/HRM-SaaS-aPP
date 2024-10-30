
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class PromotionCompetencyEditor extends Serenity.Extensions.GridEditorBase<PromotionCompetencyRow> {
        protected getColumnsKey() { return PromotionCompetencyColumns.columnsKey; }
        protected getDialogType() { return PromotionCompetencyDialog; }
        protected getLocalTextPrefix() { return PromotionCompetencyRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

    }
}