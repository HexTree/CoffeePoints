/* This script will decide which panel to show depending on the status
 * Logged in users will see a panel with their pictures and backgrounds
 * Not logged in users will only see the links
 * The default state is not logged in.
 */
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
