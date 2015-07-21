Template.thoughtsView.helpers({

    thought: function() {
        return Thoughts.findOne({_id: Session.get('thoughtId')});
    },

});

Template.thoughtsView.events({

    'click #thought-delete': function(event, template) {
        var thoughtId = Session.get('thoughtId');
        var confirmStatus = confirm('Are you sure you want to delete this thought?');

        if(confirmStatus && thoughtId != '') {
            Meteor.call('thoughtsDelete', thoughtId, function (error, response) {
                console.log('thoughtsDelete');

                if(!error) {
                    alert(response.message);

                    Router.go('thoughts_my');
                } else {
                    alert('There was some error, please try again.');
                }
            });
        }
    }

});