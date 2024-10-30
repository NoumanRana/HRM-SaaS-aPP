
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class PayrollGrid extends Serenity.EntityGrid<PayrollRow, any> {
        protected getColumnsKey() { return PayrollColumns.columnsKey; }
        protected getDialogType() { return PayrollDialog; }
        protected getIdProperty() { return PayrollRow.idProperty; }
        protected getInsertPermission() { return PayrollRow.insertPermission; }
        protected getLocalTextPrefix() { return PayrollRow.localTextPrefix; }
        protected getService() { return PayrollService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != PayrollRow.Fields.TenantName && x.field != PayrollRow.Fields.Id);
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