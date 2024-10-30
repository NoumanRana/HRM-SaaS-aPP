
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class PromotionReasonDialog extends Serenity.Extensions.GridEditorDialog<PromotionReasonRow> {
        protected getFormKey() { return PromotionReasonForm.formKey; }
        protected getLocalTextPrefix() { return PromotionReasonRow.localTextPrefix; }

        protected form = new PromotionReasonForm(this.idPrefix);

        constructor() {
            super();

        }

    }
}