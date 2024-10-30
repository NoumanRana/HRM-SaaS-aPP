
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class HolidayGrid extends Serenity.EntityGrid<HolidayRow, any> {
        protected getColumnsKey() { return HolidayColumns.columnsKey; }
        protected getDialogType() { return HolidayDialog; }
        protected getIdProperty() { return HolidayRow.idProperty; }
        protected getInsertPermission() { return HolidayRow.insertPermission; }
        protected getLocalTextPrefix() { return HolidayRow.localTextPrefix; }
        protected getService() { return HolidayService.baseUrl; }

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
                columns = columns.filter(x => x.field != HolidayRow.Fields.TenantName && x.field != HolidayRow.Fields.Id);
            }

            return columns;
        }
    }
}