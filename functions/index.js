const functions = require('firebase-functions');
const sendgrid = require('sendgrid')
const sendgridemail = require('@sendgrid/mail');
const MY_SENDGRID_API_KEY = '{YOUR SENDGRID API KEY}'
sendgridemail.setApiKey(MY_SENDGRID_API_KEY);



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.saveAndSendWelcomeEmail = functions.auth.user().onCreate((user) => {
    // ...

    const email = user.email; // The email of the user.
    const displayName = user.displayName; // The display name of the user.
    const uid = user.uid;


 

        const msg = {
            to: user.email,
            from: 'neocrowacademy@gmail.com',
            fromname: "Crow Academy",
            subject: 'Welcome to Crow academy',
            html: `<p>welcome to Crow academy the rev next.</p>`,
    };
    return sendgridemail.send(msg);


});