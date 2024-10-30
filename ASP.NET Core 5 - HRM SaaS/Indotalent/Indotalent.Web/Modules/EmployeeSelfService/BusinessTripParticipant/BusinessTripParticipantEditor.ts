
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class BusinessTripParticipantEditor extends Serenity.Extensions.GridEditorBase<BusinessTripParticipantRow> {
        protected getColumnsKey() { return BusinessTripParticipantColumns.columnsKey; }
        protected getDialogType() { return BusinessTripParticipantDialog; }
        protected getLocalTextPrefix() { return BusinessTripParticipantRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: BusinessTripParticipantRow, id: number) {
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