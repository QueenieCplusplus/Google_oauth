// 2020, 7/14, pm 2:15- 2:25
// JS
// Google login
// go to https://console.developers.google.com/apis/credentials to get app ID

// JS to HTML
<script src="https://apis.google.com/js/platform.js" async defer></script>

// embaded in component
<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"></meta>

// sign in button to bind with method called onSignIn
<div class="g-signin2" data-onsuccess="onSignIn"></div>


// method called onSignIn
onSignIn: function(user) {

    var profile = user.getBasicProfile();

    console.log('ID: ' + profile.getId()); // Prefer to use token in backend instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

}


// embaded in component for sign out without Google, and bind with method called signOut()
<a href="#" onclick="signOut();">Sign out</a>


// method called signOut()

signOut: function(){

    var auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(function () {
      console.log('user is signed out now.');
    });

}


