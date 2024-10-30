namespace Indotalent.Controls {

    @Serenity.Decorators.registerEditor()
    export class CustomHtmlNoteContentEditor extends Serenity.HtmlNoteContentEditor {
        constructor(textArea: JQuery, opt?: Serenity.HtmlContentEditorOptions) {
            super(textArea, opt);
        }

        protected getConfig(): Serenity.CKEditorConfig {
            var config = super.getConfig();
            (config as any).allowedContent = true;
            (config as any).autoParagraph = false;

            return config;
        }

        get_value() {
            var value = super.get_value();
            value = value.replace(/\s+$/g, '');
            return value;
        }

    }

}