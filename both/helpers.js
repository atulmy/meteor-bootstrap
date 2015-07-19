// =
Template.registerHelper('equalTo', function (a, b) {
    return a === b;
});

// !=
Template.registerHelper('notEqualTo', function (a, b) {
    return a !== b;
});

// >
Template.registerHelper('greaterThan', function (a, b) {
    return a > b;
});
Template.registerHelper('greaterThanOrEqualTo', function (a, b) {
    return a >= b;
});

// <
Template.registerHelper('lessThan', function (a, b) {
    return a < b;
});
Template.registerHelper('lessThanOrEqualTo', function (a, b) {
    return a <= b;
});

Template.registerHelper('and', function (a, b) {
    return a && b;
});