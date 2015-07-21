// Publish Thoughts collection to client

// Recent Thoughts
Meteor.publish('thoughtsRecent', function() {
    return Thoughts.find({"isPublic": true}, {sort: {createdAt: -1}, limit : 5});
});

// List All Thoughts
Meteor.publish('thoughtsList', function() {
    return Thoughts.find({"isPublic": true}, {sort: {createdAt: -1}});
});

// My Thoughts
Meteor.publish('thoughtsMy', function(userId) {
    return Thoughts.find({"by.id": userId}, {sort: {createdAt: -1}});
});

// Single Thought
Meteor.publish('thought', function(thoughtId) {
    return Thoughts.find(thoughtId);
});