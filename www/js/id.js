/* This script will handle the authentication of the identity of the users
 *
 */
 //KAUST ID scan
 //Mechanism for logging in via scanning an id
 function scanKAUST()
 {
   cordova.plugins.barcodeScanner.scan
   (
     function(result)
     {
       if(result.format == "CODE_39"){
           /*navigator.notification.prompt(
               'Please enter your name',  // message
               function (input){
                 window.localStorage.setItem("Name", input.input1);
               },                  // callback to invoke
               'Registration',            // title
               ['Ok','Call me Greeny'],             // buttonLabels
               'Greeny Kaustian'                 // defaultText
           );*/
           var value = result.text;
           window.localStorage.setItem("Loggedin", "True");
           window.localStorage.setItem("Type", "KAUST");
           window.localStorage.setItem("Identity", result.text);
           window.location.href = 'home.html';
       }
       else if (!result.cancelled) {
         document.getElementById("message").innerHTML = "Message: You are scanning a " + result.format + ". Please scan a barcode, (They are at the back of your card!)";
       }
     },
     function(error)
     {
       //error callback
       document.getElementById("message").innerHTML = "Error: " + error;
     }
   );
 }

 //Google Auth
 function googleSignIn(){
   window.plugins.googleplus.login({
         'scopes': 'default', // optional space-separated list of scopes, the default is sufficient for login and basic profile info
       },
       function (obj) {
         window.location.href = "home.html";
         alert(JSON.stringify(obj)); // do something useful instead of alerting
       },
       function (msg) {
         alert('error: ' + msg);
       }
   );
 }
 function googleSignOut(){
     window.plugins.googleplus.logout(
     function (msg) {
        window.location.href = "index.html";
        }
     );
 }
