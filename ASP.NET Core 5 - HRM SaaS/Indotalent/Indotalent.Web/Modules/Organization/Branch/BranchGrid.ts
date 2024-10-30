
namespace Indotalent.Organization {

    @Serenity.Decorators.registerClass()
    export class BranchGrid extends Serenity.EntityGrid<BranchRow, any> {
        protected getColumnsKey() { return BranchColumns.columnsKey; }
        protected getDialogType() { return BranchDialog; }
        protected getIdProperty() { return BranchRow.idProperty; }
        protected getInsertPermission() { return BranchRow.insertPermission; }
        protected getLocalTextPrefix() { return BranchRow.localTextPrefix; }
        protected getService() { return BranchService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != BranchRow.Fields.TenantName && x.field != BranchRow.Fields.Id);
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