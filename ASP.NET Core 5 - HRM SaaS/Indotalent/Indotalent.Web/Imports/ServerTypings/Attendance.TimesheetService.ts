namespace Indotalent.Attendance {
    export namespace TimesheetService {
        export const baseUrl = 'Attendance/Timesheet';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TimesheetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Attendance/Timesheet/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>TimesheetService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
