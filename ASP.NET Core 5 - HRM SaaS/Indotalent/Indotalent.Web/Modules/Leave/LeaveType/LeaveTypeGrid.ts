
namespace Indotalent.Leave {

    @Serenity.Decorators.registerClass()
    export class LeaveTypeGrid extends Serenity.EntityGrid<LeaveTypeRow, any> {
        protected getColumnsKey() { return LeaveTypeColumns.columnsKey; }
        protected getDialogType() { return LeaveTypeDialog; }
        protected getIdProperty() { return LeaveTypeRow.idProperty; }
        protected getInsertPermission() { return LeaveTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return LeaveTypeRow.localTextPrefix; }
        protected getService() { return LeaveTypeService.baseUrl; }

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
                columns = columns.filter(x => x.field != LeaveTypeRow.Fields.TenantName && x.field != LeaveTypeRow.Fields.Id);
            }

            return columns;
        }
    }
}