// Route Configurations
Router.configure({
    layoutTemplate: 'layoutDefault',
    loadingTemplate: 'commonLoading'
});

// Check authentication for routes or except routes
var loginCheck = function(){
    if(!Meteor.user()){
        if(Meteor.loggingIn()){
            this.render("commonLoading");
        } else {
            this.render("commonAuth");
        }
    } else {
        this.next();
    }
};
Router.onBeforeAction(loginCheck, {
    except: ['home', 'about', 'contact', 'readme', 'thoughts_list']
});

// Pages
    // Home
    Router.route('/', {
        name: 'home',
        template: 'pagesHome',
        waitOn: function() {
            return [Meteor.subscribe('thoughtsRecent')]; // array to subscribe to multiple collections
        }
    });

    // About
    Router.route('/about', {
        name: 'about',
        template: 'pagesAbout'
    });

    // Contact
    Router.route('/contact', {
        name: 'contact',
        template: 'pagesContact'
    });

    // Readme
    Router.route('/readme', {
        name: 'readme',
        template: 'pagesReadme'
    });

// Thoughts
    // Create
    Router.route('/thoughts/create', {
        name: 'thoughts_create',
        template: 'thoughtsCreate'
    });

    // List
    Router.route('/thoughts/list', {
        name: 'thoughts_list',
        template: 'thoughtsList',
        waitOn: function() {
            return Meteor.subscribe('thoughtsList')
        }
    });

    // View
    Router.route('/thoughts/view/:thoughtId', {
        name: 'thoughts_view',
        template: 'thoughtsView',
        waitOn: function() {
            return Meteor.subscribe('thought', this.params.thoughtId)
        },
        onBeforeAction: function() {
            Session.set('thoughtId', this.params.thoughtId);
            this.next();
        },
    });

    // My Thoughts (user thoughts)
    Router.route('/thoughts/my', {
        name: 'thoughts_my',
        template: 'thoughtsList',
        waitOn: function() {
            return Meteor.subscribe('thoughtsMy', Meteor.userId())
        }
    });
