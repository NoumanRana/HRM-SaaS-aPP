
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class SOPGrid extends Serenity.EntityGrid<SOPRow, any> {
        protected getColumnsKey() { return SOPColumns.columnsKey; }
        protected getDialogType() { return SOPDialog; }
        protected getIdProperty() { return SOPRow.idProperty; }
        protected getInsertPermission() { return SOPRow.insertPermission; }
        protected getLocalTextPrefix() { return SOPRow.localTextPrefix; }
        protected getService() { return SOPService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
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

        protected getColumns() {
            var columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != SOPRow.Fields.TenantName && x.field != SOPRow.Fields.Id);
            }

            return columns;
        }
    }
}