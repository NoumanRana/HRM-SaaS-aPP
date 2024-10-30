
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class TransferCompetencyDialog extends Serenity.Extensions.GridEditorDialog<TransferCompetencyRow> {
        protected getFormKey() { return TransferCompetencyForm.formKey; }
        protected getLocalTextPrefix() { return TransferCompetencyRow.localTextPrefix; }

        protected form = new TransferCompetencyForm(this.idPrefix);

        constructor() {
            super();

        }

    }
}