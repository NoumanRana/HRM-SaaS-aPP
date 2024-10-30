using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Controls
{
    public partial class CustomHtmlNoteContentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Controls.CustomHtmlNoteContentEditor";

        public CustomHtmlNoteContentEditorAttribute()
            : base(Key)
        {
        }

        public object Cols
        {
            get { return GetOption<object>("cols"); }
            set { SetOption("cols", value); }
        }

        public object Rows
        {
            get { return GetOption<object>("rows"); }
            set { SetOption("rows", value); }
        }
    }
}
