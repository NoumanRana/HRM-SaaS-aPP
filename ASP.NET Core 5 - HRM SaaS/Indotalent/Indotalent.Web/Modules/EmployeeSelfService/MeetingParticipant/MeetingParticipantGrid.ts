
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class MeetingParticipantGrid extends Serenity.EntityGrid<MeetingParticipantRow, any> {
        protected getColumnsKey() { return MeetingParticipantColumns.columnsKey; }
        protected getDialogType() { return MeetingParticipantDialog; }
        protected getIdProperty() { return MeetingParticipantRow.idProperty; }
        protected getInsertPermission() { return MeetingParticipantRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingParticipantRow.localTextPrefix; }
        protected getService() { return MeetingParticipantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}