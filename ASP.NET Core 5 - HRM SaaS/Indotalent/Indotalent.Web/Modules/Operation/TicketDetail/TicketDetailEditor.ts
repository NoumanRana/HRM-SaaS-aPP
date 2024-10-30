
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class TicketDetailEditor extends Serenity.Extensions.GridEditorBase<TicketDetailRow> {
        protected getColumnsKey() { return TicketDetailColumns.columnsKey; }
        protected getDialogType() { return TicketDetailDialog; }
        protected getLocalTextPrefix() { return TicketDetailRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

    }
}