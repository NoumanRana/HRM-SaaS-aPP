﻿using Serenity.ComponentModel;
using System;

namespace Indotalent.Administration.Forms
{
    [FormScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserForm
    {
        public Boolean IsActive { get; set; }
        public Boolean IsTenantAdmin { get; set; }
        public String Username { get; set; }
        public String DisplayName { get; set; }
        [EmailEditor]
        public String Email { get; set; }
        public String UserImage { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        [OneWay]
        public string Source { get; set; }
        public Int32 TenantId { get; set; }
    }
}