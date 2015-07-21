Thoughts = new Mongo.Collection('thoughts');

// Functions for thoughts collection
Meteor.methods({

    'thoughtsInsertOrUpdate': function(text, byUserName, isPublic, thoughtId) {
        var response = {
            success: false,
            message: 'There was some error. Please try again.'
        };

        // check user signed in
        check(Meteor.userId(), String);

        // validate data
        check(text, String);
        check(byUserName, String);
        check(isPublic, Boolean);

        if(thoughtId) {
            // update
            var thought = Thoughts.findOne(thoughtId)
            if(thought.by.id === Meteor.userId()) {
                var thoughtUpdateCheck = Thoughts.update(thoughtId, {$set: {text: text, "by.name": byUserName, isPublic: isPublic}});
                if(thoughtUpdateCheck) {
                    response.success = true;
                    response.message = 'Thought has been updated successfully.';
                }
            } else {
                response.message = 'You are not allowed to perform this action.';
            }
        } else {
            // insert

            // create thoughts document
            var thought = {
                text: text,
                by: {
                    name: byUserName,
                    id: Meteor.userId()
                },
                isPublic: isPublic
                // note that createdAt and updatedAt will be added automatically, check schema/thoughts.js
            };

            var thoughtId = Thoughts.insert(thought);
            if(thoughtId) {
                response.success = true;
                response.message = 'Thought has been added successfully.';
            }
        }

        return response;
    },

    'thoughtsDelete': function(thoughtId) {
        var response = {
            success: false,
            message: 'There was some error. Please try again.'
        };

        // check user signed in
        check(Meteor.userId(), String);

        // validate data
        check(thoughtId, String);

        var thought = Thoughts.findOne(thoughtId)
        if(thought.by.id === Meteor.userId()) {
            var thoughtUpdateCheck = Thoughts.remove(thoughtId);
            if(thoughtUpdateCheck) {
                response.success = true;
                response.message = 'Thought has been deleted successfully.';
            }
        } else {
            response.message = 'You are not allowed to perform this action.';
        }

        return response;
    }

});