
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollDetailIncomeEditor extends Serenity.Extensions.GridEditorBase<PayrollDetailIncomeRow> {
        protected getColumnsKey() { return PayrollDetailIncomeColumns.columnsKey; }
        protected getDialogType() { return PayrollDetailIncomeDialog; }
        protected getLocalTextPrefix() { return PayrollDetailIncomeRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: PayrollDetailIncomeRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.IncomeName = IncomeRow.getLookup()
                .itemById[row.IncomeId].Name;

            return true;
        }
    }
}