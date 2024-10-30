
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ApplicantDialog extends Serenity.EntityDialog<ApplicantRow, any> {
        protected getFormKey() { return ApplicantForm.formKey; }
        protected getIdProperty() { return ApplicantRow.idProperty; }
        protected getLocalTextPrefix() { return ApplicantRow.localTextPrefix; }
        protected getNameProperty() { return ApplicantRow.nameProperty; }
        protected getService() { return ApplicantService.baseUrl; }
        protected getDeletePermission() { return ApplicantRow.deletePermission; }
        protected getInsertPermission() { return ApplicantRow.insertPermission; }
        protected getUpdatePermission() { return ApplicantRow.updatePermission; }

        protected form = new ApplicantForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            this.form.VacancyId.changeSelect2(args => {
                var vacancyId = this.form.VacancyId.value;
                if (Q.isEmptyOrNull(vacancyId)) {
                    return;
                }
                VacancyService.Retrieve({
                    EntityId: vacancyId
                }, response => {
                    this.form.HiringManagerId.value = response.Entity.HiringManagerId != null ? response.Entity.HiringManagerId.toString() : null;
                    this.form.JobTitle.value = response.Entity.JobTitle;
                });

            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.HiringManagerId, true);
            Serenity.EditorUtils.setReadOnly(this.form.JobTitle, true);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('print-applicant').toggle(this.isEditMode());
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button print-applicant',
                reportKey: 'ApplicantPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

    }
}