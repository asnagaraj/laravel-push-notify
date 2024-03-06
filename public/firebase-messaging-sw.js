// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: 'AIzaSyBdk4l63fI84FtlBxcviwtcp6Lpl-yqEBA',
    authDomain: 'laravel-notification-10163.firebaseapp.com',
    projectId: 'laravel-notification-10163',
    storageBucket: 'laravel-notification-10163.appspot.com',
    messagingSenderId: '759782267691',
    appId: '1:759782267691:web:adbdfb4f16d916e9f9036e',
    measurementId: 'G-0EE0GB6S9K',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});