
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class TransferReasonGrid extends Serenity.EntityGrid<TransferReasonRow, any> {
        protected getColumnsKey() { return TransferReasonColumns.columnsKey; }
        protected getDialogType() { return TransferReasonDialog; }
        protected getIdProperty() { return TransferReasonRow.idProperty; }
        protected getInsertPermission() { return TransferReasonRow.insertPermission; }
        protected getLocalTextPrefix() { return TransferReasonRow.localTextPrefix; }
        protected getService() { return TransferReasonService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}