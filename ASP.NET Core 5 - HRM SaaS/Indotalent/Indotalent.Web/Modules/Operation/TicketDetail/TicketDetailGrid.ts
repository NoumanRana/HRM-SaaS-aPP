
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class TicketDetailGrid extends Serenity.EntityGrid<TicketDetailRow, any> {
        protected getColumnsKey() { return TicketDetailColumns.columnsKey; }
        protected getDialogType() { return TicketDetailDialog; }
        protected getIdProperty() { return TicketDetailRow.idProperty; }
        protected getInsertPermission() { return TicketDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return TicketDetailRow.localTextPrefix; }
        protected getService() { return TicketDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}