// Stubs for i18n extraction.

if (typeof Handlebars !== "undefined") {
    Handlebars.registerHelper("_", function(options) {
        return options.fn(this);
    });
}

jQuery._ = function(msg) {
    return msg;
};