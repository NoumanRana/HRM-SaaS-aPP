
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailDeductionEditor extends Serenity.Extensions.GridEditorBase<PayrollDetailDeductionRow> {
        protected getColumnsKey() { return PayrollDetailDeductionColumns.columnsKey; }
        protected getDialogType() { return PayrollDetailDeductionDialog; }
        protected getLocalTextPrefix() { return PayrollDetailDeductionRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: PayrollDetailDeductionRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.DeductionName = DeductionRow.getLookup()
                .itemById[row.DeductionId].Name;

            return true;
        }
    }
}