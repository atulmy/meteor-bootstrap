// Schema for thoughts collection

var userInfo = new SimpleSchema({
    id: {
        type: String
    },
    name: {
        type: String
    }
});

Thoughts.attachSchema(new SimpleSchema({
    text: {
        type: String
    },

    by: {
        type: userInfo
    },

    isPublic: {
        type: Boolean
    },

    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            }
        }
    },

    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
}));