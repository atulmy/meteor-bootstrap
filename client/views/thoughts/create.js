// Helper for Thoughts
Template.thoughtsCreate.helpers({

    'getThoughBy': function() {
        var thoughtId = Session.get('thoughtId');

        if(thoughtId) {
            var thought = Thoughts.findOne(thoughtId);
            if(thought) {
                return thought.by.name;
            }
        }

        return Meteor.user().profile.name;
    },

    'getThoughText': function() {
        var thoughtId = Session.get('thoughtId');

        if(thoughtId) {
            var thought = Thoughts.findOne(thoughtId);
            if(thought) {
                return thought.text;
            }
        }

        return '';
    },

    'getThoughtIsPublic': function() {
        var thoughtId = Session.get('thoughtId');

        if(thoughtId) {
            var thought = Thoughts.findOne(thoughtId);
            if(thought) {
                return (thought.isPublic) ? 'checked' : '';
            }
        }

        return 'checked';
    }

});

// Helper for Thoughts
Template.thoughtsCreate.events({

    'submit #form-thoughts-create': function(event, template) {
        var thoughtId = Session.get('thoughtId');

        var text = template.$('#form-thought-text').val();
        var byUserName = template.$('#form-thought-by').val();
        var isPublic = template.$('#form-thought-is-public').is(':checked');
        console.log(isPublic);

        Meteor.call('thoughtsInsertOrUpdate', text, byUserName, isPublic, thoughtId, function (error, response) {
            console.log('thoughtsInsertOrUpdate');

            if(!error) {
                alert(response.message);

                if(thoughtId) {
                    Router.go('thoughts_my');
                } else {
                    // clear input values
                    template.$('#form-thought-text').val('');
                }
            } else {
                alert('There was some error, please try again.');
            }
        });

        event.preventDefault();
    }

});