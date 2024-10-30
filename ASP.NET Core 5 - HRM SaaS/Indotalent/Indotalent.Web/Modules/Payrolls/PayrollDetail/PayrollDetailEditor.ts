
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailEditor extends Serenity.Extensions.GridEditorBase<PayrollDetailRow> {
        protected getColumnsKey() { return PayrollDetailColumns.columnsKey; }
        protected getDialogType() { return PayrollDetailDialog; }
        protected getLocalTextPrefix() { return PayrollDetailRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: PayrollDetailRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.EmployeeName = EmployeeRow.getLookup()
                .itemById[row.EmployeeId].Name;

            return true;
        }

    }
}