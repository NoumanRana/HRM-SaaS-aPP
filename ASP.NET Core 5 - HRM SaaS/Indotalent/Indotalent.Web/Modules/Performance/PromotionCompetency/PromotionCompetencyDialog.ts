
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class PromotionCompetencyDialog extends Serenity.Extensions.GridEditorDialog<PromotionCompetencyRow> {
        protected getFormKey() { return PromotionCompetencyForm.formKey; }
        protected getLocalTextPrefix() { return PromotionCompetencyRow.localTextPrefix; }

        protected form = new PromotionCompetencyForm(this.idPrefix);

        constructor() {
            super();

        }

    }
}