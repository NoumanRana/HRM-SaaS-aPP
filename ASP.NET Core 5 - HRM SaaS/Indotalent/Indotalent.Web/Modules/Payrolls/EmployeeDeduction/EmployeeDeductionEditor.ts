
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class EmployeeDeductionEditor extends Serenity.Extensions.GridEditorBase<EmployeeDeductionRow> {
        protected getColumnsKey() { return EmployeeDeductionColumns.columnsKey; }
        protected getDialogType() { return EmployeeDeductionDialog; }
        protected getLocalTextPrefix() { return EmployeeDeductionRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: EmployeeDeductionRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.DeductionName = DeductionRow.getLookup()
                .itemById[row.DeductionId].Name;

            return true;
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != EmployeeDeductionRow.Fields.TenantName && x.field != EmployeeDeductionRow.Fields.Id);
            }

            return columns;
        }

    }
}