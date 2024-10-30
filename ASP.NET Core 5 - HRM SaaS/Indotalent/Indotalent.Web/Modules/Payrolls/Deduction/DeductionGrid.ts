
namespace Indotalent.Payrolls {

    @Serenity.Decorators.registerClass()
    export class DeductionGrid extends Serenity.EntityGrid<DeductionRow, any> {
        protected getColumnsKey() { return DeductionColumns.columnsKey; }
        protected getDialogType() { return DeductionDialog; }
        protected getIdProperty() { return DeductionRow.idProperty; }
        protected getInsertPermission() { return DeductionRow.insertPermission; }
        protected getLocalTextPrefix() { return DeductionRow.localTextPrefix; }
        protected getService() { return DeductionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != DeductionRow.Fields.TenantName && x.field != DeductionRow.Fields.Id);
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