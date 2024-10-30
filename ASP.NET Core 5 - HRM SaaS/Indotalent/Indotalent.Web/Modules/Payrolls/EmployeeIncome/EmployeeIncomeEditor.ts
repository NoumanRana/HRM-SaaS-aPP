
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeIncomeEditor extends Serenity.Extensions.GridEditorBase<EmployeeIncomeRow> {
        protected getColumnsKey() { return EmployeeIncomeColumns.columnsKey; }
        protected getDialogType() { return EmployeeIncomeDialog; }
        protected getLocalTextPrefix() { return EmployeeIncomeRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: EmployeeIncomeRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.IncomeName = IncomeRow.getLookup()
                .itemById[row.IncomeId].Name;

            return true;
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeIncomeRow.Fields.TenantName && x.field != EmployeeIncomeRow.Fields.Id);
            }

            return columns;
        }

    }
}