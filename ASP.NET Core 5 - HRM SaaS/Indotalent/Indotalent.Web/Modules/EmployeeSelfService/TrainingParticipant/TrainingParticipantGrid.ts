
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class TrainingParticipantGrid extends Serenity.EntityGrid<TrainingParticipantRow, any> {
        protected getColumnsKey() { return TrainingParticipantColumns.columnsKey; }
        protected getDialogType() { return TrainingParticipantDialog; }
        protected getIdProperty() { return TrainingParticipantRow.idProperty; }
        protected getInsertPermission() { return TrainingParticipantRow.insertPermission; }
        protected getLocalTextPrefix() { return TrainingParticipantRow.localTextPrefix; }
        protected getService() { return TrainingParticipantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}