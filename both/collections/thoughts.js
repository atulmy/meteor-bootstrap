Thoughts = new Mongo.Collection('thoughts');

// Functions for thoughts collection
Meteor.methods({

    'thoughtsInsert': function(text, byUserName, isPublic) {
        // check user signed in
        check(Meteor.userId(), String);

        // validate data
        check(text, String);
        check(byUserName, String);
        check(isPublic, Boolean);

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

        return thoughtId;
    }

});