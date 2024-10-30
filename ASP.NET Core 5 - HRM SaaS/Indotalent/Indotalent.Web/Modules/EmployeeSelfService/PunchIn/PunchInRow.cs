﻿using Indotalent.Payrolls;
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

namespace Indotalent.EmployeeSelfService
{
    [ConnectionKey("Default"), Module("EmployeeSelfService"), TableName("[dbo].[Punch]")]
    [DisplayName("Punch Ins"), InstanceName("Punch In")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("EmployeeSelfService:PunchIn")]
    [ModifyPermission("EmployeeSelfService:PunchIn")]
    public sealed class PunchInRow : LoggingRow<PunchInRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeName")]
        [LookupEditor(typeof(EmployeeRow), InplaceAdd = false)]
        public Int32? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[Name]"), QuickSearch, NameProperty]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Employee Number"), Expression("jEmployee.[EmployeeNumber]")]
        public String EmployeeNumber
        {
            get => fields.EmployeeNumber[this];
            set => fields.EmployeeNumber[this] = value;
        }

        [DisplayName("Punch Date"), NotNull]
        public DateTime? PunchDate
        {
            get => fields.PunchDate[this];
            set => fields.PunchDate[this] = value;
        }

        [DisplayName("Punch In")]
        [DisplayFormat("g")]
        public DateTime? PunchIn
        {
            get => fields.PunchIn[this];
            set => fields.PunchIn[this] = value;
        }

        [DisplayName("Hour (0 - 23)"), NotNull]
        [Expression("DATEPART(HOUR, T0.[PunchIn])")]
        [DefaultValue(0)]
        [IntegerEditor(MinValue = 0, MaxValue = 23)]
        public Int32? InHour
        {
            get => fields.InHour[this];
            set => fields.InHour[this] = value;
        }

        [DisplayName("Minute (0 - 59)"), NotNull]
        [Expression("DATEPART(MINUTE, T0.[PunchIn])")]
        [DefaultValue(0)]
        [IntegerEditor(MinValue = 0, MaxValue = 59)]
        public Int32? InMinute
        {
            get => fields.InMinute[this];
            set => fields.InMinute[this] = value;
        }

        [DisplayName("Tenant"), ForeignKey("Tenant", "TenantId"), LeftJoin("jTenant")]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Tenant"), Expression("jTenant.TenantName")]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public PunchInRow()
            : base()
        {
        }

        public PunchInRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public StringField EmployeeNumber;
            public DateTimeField PunchDate;
            public DateTimeField PunchIn;
            public Int32Field InHour;
            public Int32Field InMinute;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
