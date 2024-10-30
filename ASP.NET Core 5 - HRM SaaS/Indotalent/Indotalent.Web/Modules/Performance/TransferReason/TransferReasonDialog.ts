
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class TransferReasonDialog extends Serenity.Extensions.GridEditorDialog<TransferReasonRow> {
        protected getFormKey() { return TransferReasonForm.formKey; }
        protected getLocalTextPrefix() { return TransferReasonRow.localTextPrefix; }

        protected form = new TransferReasonForm(this.idPrefix);

        constructor() {
            super();

        }

    }
}