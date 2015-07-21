Template.thoughtsView.helpers({

    thought: function() {
        return Thoughts.findOne({_id: Session.get('thoughtId')});
    },

});