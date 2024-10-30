
namespace Indotalent.EmployeeSelfService {

    @Serenity.Decorators.registerClass()
    export class LeaveDelegatedTaskGrid extends Serenity.EntityGrid<LeaveDelegatedTaskRow, any> {
        protected getColumnsKey() { return LeaveDelegatedTaskColumns.columnsKey; }
        protected getDialogType() { return LeaveDelegatedTaskDialog; }
        protected getIdProperty() { return LeaveDelegatedTaskRow.idProperty; }
        protected getInsertPermission() { return LeaveDelegatedTaskRow.insertPermission; }
        protected getLocalTextPrefix() { return LeaveDelegatedTaskRow.localTextPrefix; }
        protected getService() { return LeaveDelegatedTaskService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}