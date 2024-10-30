
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    export class ApplicantEducationEditor extends Serenity.Extensions.GridEditorBase<ApplicantEducationRow> {
        protected getColumnsKey() { return ApplicantEducationColumns.columnsKey; }
        protected getDialogType() { return ApplicantEducationDialog; }
        protected getLocalTextPrefix() { return ApplicantEducationRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }


    }
}