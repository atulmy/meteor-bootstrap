Template.commonHeader.events({
    'click .link-game-info': function(event, template) {
        $('#game-info').show();
    },

    'click .button-game-info': function(event, template) {
        $('#game-info').hide();
    }
});