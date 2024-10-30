
namespace Indotalent.Recruitment {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class InterviewDialog extends Serenity.EntityDialog<InterviewRow, any> {
        protected getFormKey() { return InterviewForm.formKey; }
        protected getIdProperty() { return InterviewRow.idProperty; }
        protected getLocalTextPrefix() { return InterviewRow.localTextPrefix; }
        protected getNameProperty() { return InterviewRow.nameProperty; }
        protected getService() { return InterviewService.baseUrl; }
        protected getDeletePermission() { return InterviewRow.deletePermission; }
        protected getInsertPermission() { return InterviewRow.insertPermission; }
        protected getUpdatePermission() { return InterviewRow.updatePermission; }

        protected form = new InterviewForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            this.form.ApplicantId.changeSelect2(args => {
                var applicantId = this.form.ApplicantId.value;
                if (Q.isEmptyOrNull(applicantId)) {
                    return;
                }
                ApplicantService.Retrieve({
                    EntityId: applicantId
                }, response => {
                    this.form.VacancyId.value = response.Entity.VacancyId != null ? response.Entity.VacancyId.toString() : null;
                    this.form.HiringManagerId.value = response.Entity.HiringManagerId != null ? response.Entity.HiringManagerId.toString() : null;

                    var vacancyId = this.form.VacancyId.value;
                    if (Q.isEmptyOrNull(vacancyId)) {
                        return;
                    } else {
                        VacancyService.Retrieve({
                            EntityId: vacancyId
                        }, response => {
                            this.form.JobTitle.value = response.Entity.JobTitle;
                        });
                    }
                });

            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }


        protected afterLoadEntity() {
            super.afterLoadEntity();

            Serenity.EditorUtils.setReadOnly(this.form.VacancyId, true);
            Serenity.EditorUtils.setReadOnly(this.form.HiringManagerId, true);
            Serenity.EditorUtils.setReadOnly(this.form.JobTitle, true);
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('InterviewPrint').toggle(this.isEditMode());
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print',
                cssClass: 'export-pdf-button InterviewPrint',
                reportKey: 'InterviewPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
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

    }
}