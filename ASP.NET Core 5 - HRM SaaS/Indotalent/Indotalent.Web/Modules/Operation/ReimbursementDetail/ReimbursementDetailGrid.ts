
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class ReimbursementDetailGrid extends Serenity.EntityGrid<ReimbursementDetailRow, any> {
        protected getColumnsKey() { return ReimbursementDetailColumns.columnsKey; }
        protected getDialogType() { return ReimbursementDetailDialog; }
        protected getIdProperty() { return ReimbursementDetailRow.idProperty; }
        protected getInsertPermission() { return ReimbursementDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return ReimbursementDetailRow.localTextPrefix; }
        protected getService() { return ReimbursementDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}