
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class MeetingParticipantEditor extends Serenity.Extensions.GridEditorBase<MeetingParticipantRow> {
        protected getColumnsKey() { return MeetingParticipantColumns.columnsKey; }
        protected getDialogType() { return MeetingParticipantDialog; }
        protected getLocalTextPrefix() { return MeetingParticipantRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: MeetingParticipantRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.EmployeeName = Payrolls.EmployeeRow.getLookup()
                .itemById[row.EmployeeId].Name;

            row.DepartmentName = Organization.DepartmentRow.getLookup()
                .itemById[row.DepartmentId].Name;

            var items = this.getItems();
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.EmployeeId == row.EmployeeId) {
                    Q.notifyError(row.EmployeeName + ' ' + 'Already inserted.')
                    return false;
                }
            }

            return true;
        }

    }
}