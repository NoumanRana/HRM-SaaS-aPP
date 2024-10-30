
namespace Indotalent.Performance {

    @Serenity.Decorators.registerClass()
    export class AppraisalGrid extends Serenity.EntityGrid<AppraisalRow, any> {
        protected getColumnsKey() { return AppraisalColumns.columnsKey; }
        protected getDialogType() { return AppraisalDialog; }
        protected getIdProperty() { return AppraisalRow.idProperty; }
        protected getInsertPermission() { return AppraisalRow.insertPermission; }
        protected getLocalTextPrefix() { return AppraisalRow.localTextPrefix; }
        protected getService() { return AppraisalService.baseUrl; }

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
                columns = columns.filter(x => x.field != AppraisalRow.Fields.TenantName && x.field != AppraisalRow.Fields.Id);
            }

            columns.splice(1, 0, {
                id: 'Print Selected',
                field: null,
                name: '',
                format: ctx => '<a class="inline-action print-selected" title="print-selected">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }


        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-selected')) {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'AppraisalPrint',
                        params: {
                            Id: item.Id
                        }
                    });
                }
            }
        }
    }
}