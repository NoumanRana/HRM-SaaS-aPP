
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class TransferReasonEditor extends Serenity.Extensions.GridEditorBase<TransferReasonRow> {
        protected getColumnsKey() { return TransferReasonColumns.columnsKey; }
        protected getDialogType() { return TransferReasonDialog; }
        protected getLocalTextPrefix() { return TransferReasonRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

    }
}