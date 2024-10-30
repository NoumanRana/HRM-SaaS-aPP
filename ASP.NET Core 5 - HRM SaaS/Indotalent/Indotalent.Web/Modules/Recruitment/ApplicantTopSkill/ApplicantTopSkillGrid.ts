
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class ApplicantTopSkillGrid extends Serenity.EntityGrid<ApplicantTopSkillRow, any> {
        protected getColumnsKey() { return ApplicantTopSkillColumns.columnsKey; }
        protected getDialogType() { return ApplicantTopSkillDialog; }
        protected getIdProperty() { return ApplicantTopSkillRow.idProperty; }
        protected getInsertPermission() { return ApplicantTopSkillRow.insertPermission; }
        protected getLocalTextPrefix() { return ApplicantTopSkillRow.localTextPrefix; }
        protected getService() { return ApplicantTopSkillService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}