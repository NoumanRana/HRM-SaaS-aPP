
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailDeductionGrid extends Serenity.EntityGrid<PayrollDetailDeductionRow, any> {
        protected getColumnsKey() { return PayrollDetailDeductionColumns.columnsKey; }
        protected getDialogType() { return PayrollDetailDeductionDialog; }
        protected getIdProperty() { return PayrollDetailDeductionRow.idProperty; }
        protected getInsertPermission() { return PayrollDetailDeductionRow.insertPermission; }
        protected getLocalTextPrefix() { return PayrollDetailDeductionRow.localTextPrefix; }
        protected getService() { return PayrollDetailDeductionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}