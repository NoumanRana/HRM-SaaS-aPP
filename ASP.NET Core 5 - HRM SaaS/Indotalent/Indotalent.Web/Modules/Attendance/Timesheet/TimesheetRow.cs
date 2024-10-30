using Indotalent.Payrolls;
using Indotalent.Settings;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Attendance
{
    [ConnectionKey("Default"), Module("Attendance")]
    [DisplayName("Timesheets"), InstanceName("Timesheet")]
    [LookupScript]
    [ReadPermission("Attendance:Timesheet")]
    [ModifyPermission("Attendance:Timesheet")]
    public sealed class TimesheetRow : Row<TimesheetRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("EmployeeNumber"), Size(50), NotNull]
        public String EmployeeNumber
        {
            get => fields.EmployeeNumber[this];
            set => fields.EmployeeNumber[this] = value;
        }

        [DisplayName("EmployeeName"), Size(50), NotNull, NameProperty]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Calendar Date"), NotNull]
        public DateTime? CalendarDate
        {
            get => fields.CalendarDate[this];
            set => fields.CalendarDate[this] = value;
        }

        [DisplayName("Punch In"), NotNull]
        [DisplayFormat("g")]
        public DateTime? PunchIn
        {
            get => fields.PunchIn[this];
            set => fields.PunchIn[this] = value;
        }

        [DisplayName("Punch Out"), NotNull]
        [DisplayFormat("g")]
        public DateTime? PunchOut
        {
            get => fields.PunchOut[this];
            set => fields.PunchOut[this] = value;
        }

        [DisplayName("Working (in Minutes)")]
        public Double? WorkingDuration
        {
            get => fields.WorkingDuration[this];
            set => fields.WorkingDuration[this] = value;
        }

        [DisplayName("Overtime (in Minutes)")]
        public Double? OvertimeDuration
        {
            get => fields.OvertimeDuration[this];
            set => fields.OvertimeDuration[this] = value;
        }

        public TimesheetRow()
            : base()
        {
        }

        public TimesheetRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField EmployeeNumber;
            public StringField EmployeeName;
            public DateTimeField CalendarDate;
            public DateTimeField PunchIn;
            public DateTimeField PunchOut;
            public DoubleField WorkingDuration;
            public DoubleField OvertimeDuration;
        }
    }
}
