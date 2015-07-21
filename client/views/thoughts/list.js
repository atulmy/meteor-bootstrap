Template.thoughtsList.helpers({

    thoughts: function() {
        return Thoughts.find({}, {sort: {createdAt: -1}});
    },

    thoughtsCount: function() {
        return Thoughts.find({}, {sort: {createdAt: -1}}).count();
    },

});