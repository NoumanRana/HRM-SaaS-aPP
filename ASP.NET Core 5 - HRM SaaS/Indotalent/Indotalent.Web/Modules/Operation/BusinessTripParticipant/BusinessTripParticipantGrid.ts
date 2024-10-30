
namespace Indotalent.Operation {

    @Serenity.Decorators.registerClass()
    export class BusinessTripParticipantGrid extends Serenity.EntityGrid<BusinessTripParticipantRow, any> {
        protected getColumnsKey() { return BusinessTripParticipantColumns.columnsKey; }
        protected getDialogType() { return BusinessTripParticipantDialog; }
        protected getIdProperty() { return BusinessTripParticipantRow.idProperty; }
        protected getInsertPermission() { return BusinessTripParticipantRow.insertPermission; }
        protected getLocalTextPrefix() { return BusinessTripParticipantRow.localTextPrefix; }
        protected getService() { return BusinessTripParticipantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}