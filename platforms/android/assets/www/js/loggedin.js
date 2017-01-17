/* This script will decide which panel to show depending on the status
 * Logged in users will see a panel with their pictures and backgrounds
 * Not logged in users will only see the links
 * The default state is not logged in.
 */
 if(window.localStorage.getItem("Loggedin") == "True"){
   document.getElementById('panel').innerHTML = "<nd2-include id='panel' data-src='fragments/inpanel.html'></nd2-include>";
 }
 else {
   document.getElementById('panel').innerHTML = "<nd2-include id='panel' data-src='fragments/panel.html'></nd2-include>";
 }
