
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class ThresholdGrid extends Serenity.EntityGrid<ThresholdRow, any> {
        protected getColumnsKey() { return ThresholdColumns.columnsKey; }
        protected getDialogType() { return ThresholdDialog; }
        protected getIdProperty() { return ThresholdRow.idProperty; }
        protected getInsertPermission() { return ThresholdRow.insertPermission; }
        protected getLocalTextPrefix() { return ThresholdRow.localTextPrefix; }
        protected getService() { return ThresholdService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field && x.field != ThresholdRow.Fields.Id);
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