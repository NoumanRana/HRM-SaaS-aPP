
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class ApplicantExperienceGrid extends Serenity.EntityGrid<ApplicantExperienceRow, any> {
        protected getColumnsKey() { return ApplicantExperienceColumns.columnsKey; }
        protected getDialogType() { return ApplicantExperienceDialog; }
        protected getIdProperty() { return ApplicantExperienceRow.idProperty; }
        protected getInsertPermission() { return ApplicantExperienceRow.insertPermission; }
        protected getLocalTextPrefix() { return ApplicantExperienceRow.localTextPrefix; }
        protected getService() { return ApplicantExperienceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}