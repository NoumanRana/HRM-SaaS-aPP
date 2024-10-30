
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailIncomeGrid extends Serenity.EntityGrid<PayrollDetailIncomeRow, any> {
        protected getColumnsKey() { return PayrollDetailIncomeColumns.columnsKey; }
        protected getDialogType() { return PayrollDetailIncomeDialog; }
        protected getIdProperty() { return PayrollDetailIncomeRow.idProperty; }
        protected getInsertPermission() { return PayrollDetailIncomeRow.insertPermission; }
        protected getLocalTextPrefix() { return PayrollDetailIncomeRow.localTextPrefix; }
        protected getService() { return PayrollDetailIncomeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}