﻿
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class TicketGrid extends Serenity.EntityGrid<TicketRow, any> {
        protected getColumnsKey() { return TicketColumns.columnsKey; }
        protected getDialogType() { return TicketDialog; }
        protected getIdProperty() { return TicketRow.idProperty; }
        protected getInsertPermission() { return TicketRow.insertPermission; }
        protected getLocalTextPrefix() { return TicketRow.localTextPrefix; }
        protected getService() { return TicketService.baseUrl; }

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
                columns = columns.filter(x => x.field != TicketRow.Fields.TenantName && x.field != TicketRow.Fields.Id);
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
                        reportKey: 'TicketPrint',
                        params: {
                            Id: item.Id
                        }
                    });
                }
            }
        }
    }
}