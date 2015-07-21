// Helper for Thoughts
Template.thoughtsCreate.helpers({

});

// Helper for Thoughts
Template.thoughtsCreate.events({

    'submit #form-thoughts-create': function(event, template) {
        var text = template.$('#form-thought-text').val();
        var byUserName = template.$('#form-thought-by').val();
        var isPublic = template.$('#form-thought-is-public').is(':checked');
        console.log(isPublic);

        Meteor.call('thoughtsInsert', text, byUserName, isPublic, function (error, response) {
            console.log('thoughtsInsert');

            if(!error) {
                alert('Thought has been posted.');

                // clear input values
                template.$('#form-thought-text').val('');
            } else {
                alert('There was some error, please try again.');
            }
        });

        event.preventDefault();
    }

});