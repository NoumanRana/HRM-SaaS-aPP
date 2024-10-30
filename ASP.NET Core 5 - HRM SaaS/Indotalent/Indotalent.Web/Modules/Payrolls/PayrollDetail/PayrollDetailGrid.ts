
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailGrid extends Serenity.EntityGrid<PayrollDetailRow, any> {
        protected getColumnsKey() { return PayrollDetailColumns.columnsKey; }
        protected getDialogType() { return PayrollDetailDialog; }
        protected getIdProperty() { return PayrollDetailRow.idProperty; }
        protected getInsertPermission() { return PayrollDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return PayrollDetailRow.localTextPrefix; }
        protected getService() { return PayrollDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}