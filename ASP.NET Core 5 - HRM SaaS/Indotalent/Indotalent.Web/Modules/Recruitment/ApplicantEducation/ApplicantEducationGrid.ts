
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class ApplicantEducationGrid extends Serenity.EntityGrid<ApplicantEducationRow, any> {
        protected getColumnsKey() { return ApplicantEducationColumns.columnsKey; }
        protected getDialogType() { return ApplicantEducationDialog; }
        protected getIdProperty() { return ApplicantEducationRow.idProperty; }
        protected getInsertPermission() { return ApplicantEducationRow.insertPermission; }
        protected getLocalTextPrefix() { return ApplicantEducationRow.localTextPrefix; }
        protected getService() { return ApplicantEducationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}