
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class ApplicantExperienceEditor extends Serenity.Extensions.GridEditorBase<ApplicantExperienceRow> {
        protected getColumnsKey() { return ApplicantExperienceColumns.columnsKey; }
        protected getDialogType() { return ApplicantExperienceDialog; }
        protected getLocalTextPrefix() { return ApplicantExperienceRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }


    }
}