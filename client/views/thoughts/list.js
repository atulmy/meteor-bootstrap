Template.thoughtsList.helpers({

    thoughts: function() {
        return Thoughts.find({"isPublic": true}, {sort: {createdAt: -1}});
    },

    thoughtsCount: function() {
        return Thoughts.find({"isPublic": true}, {sort: {createdAt: -1}}).count();
    },

});