
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class IncomeGrid extends Serenity.EntityGrid<IncomeRow, any> {
        protected getColumnsKey() { return IncomeColumns.columnsKey; }
        protected getDialogType() { return IncomeDialog; }
        protected getIdProperty() { return IncomeRow.idProperty; }
        protected getInsertPermission() { return IncomeRow.insertPermission; }
        protected getLocalTextPrefix() { return IncomeRow.localTextPrefix; }
        protected getService() { return IncomeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != IncomeRow.Fields.TenantName && x.field != IncomeRow.Fields.Id);
            }

            return columns;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                service: this.getService() + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}