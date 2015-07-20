// common functions
Meteor.methods({

    // HTML5 Browser notifications
    browserNotificationShow: function(message) {
        if('Notification' in window) {
            Notification.requestPermission(function(message) {
                console.log(message);
                var notification = new Notification(
                    "Rock Paper Scissors",
                    {
                        body: message,
                        icon: 'http://localhost:3000/images/favicon.png'
                    }
                );
                setTimeout(function(){
                    notification.close();
                }, 5000);
            });
        }
    }

});