
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class ApplicantTopSkillEditor extends Serenity.Extensions.GridEditorBase<ApplicantTopSkillRow> {
        protected getColumnsKey() { return ApplicantTopSkillColumns.columnsKey; }
        protected getDialogType() { return ApplicantTopSkillDialog; }
        protected getLocalTextPrefix() { return ApplicantTopSkillRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }


    }
}