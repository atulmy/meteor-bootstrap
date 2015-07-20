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
    except: ['home', 'about', 'contact', 'create']
});

// Page Routes
// Home
Router.route('/', {
    name: 'home',
    template: 'thoughtsHome',
    waitOn: function() {
        //return [Meteor.subscribe('diaries')];
    }
});

// About
Router.route('/about', {
    name: 'about',
    template: 'thoughtsAbout'
});

// Contact
Router.route('/contact', {
    name: 'contact',
    template: 'thoughtsContact'
});

// Create
Router.route('/create', {
    name: 'create',
    template: 'thoughtsCreate'
});