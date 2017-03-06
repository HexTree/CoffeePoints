/* This script will handle the authentication of the identity of the users
 *
 */
 //ID scan
 //Mechanism for logging in via scanning an id
 function scanID()
 {
   cordova.plugins.barcodeScanner.scan
   (
     function(result){
       if(result.format == "CODE_39"){
           var value = result.text;

           //Make sure accounts Don't overlap
           if(window.localStorage.getItem("Identity") != result.text){

              //Wipe profile details if someone else is logging in.
              if(window.localStorage.getItem("Name")){
                  window.localStorage.removeItem("Name");

                  //Reset Counters
                  window.localStorage.setItem("points", "0");
                  window.localStorage.setItem("mugs", "0");
                  window.localStorage.setItem("bottles", "0");
                  window.localStorage.setItem("bags", "0");
              }
           }
           else {
             //reset counters of the demo
             window.localStorage.setItem("points", "0");
             window.localStorage.setItem("mugs", "0");
             window.localStorage.setItem("bottles", "0");
             window.localStorage.setItem("bags", "0");
           }

           //Check if resigning in and count points
           var id = window.localStorage.getItem('Identity');
           var data = window.localStorage.getItem("LocalData");
           var rows = '';
           var row = data.split('\\');
           var res = '';

           for (var i = 0; i < row.length; i++) {
             res = row[i].split('|');
             if(res[0] == id){
                 if (res[2] == "MUG") {
                     var mugs = parseInt(window.localStorage.getItem("mugs"));
                     mugs++;
                     window.localStorage.setItem("mugs", mugs);

                     var points = parseInt(window.localStorage.getItem("points"));
                     points++;
                     window.localStorage.setItem("points", points);
                 }
                 else if (res[2] == "BOTTLE") {
                     var bottles = parseInt(window.localStorage.getItem("bottles"));
                     bottles++;
                     window.localStorage.setItem("bottles", bottles);

                     var points = parseInt(window.localStorage.getItem("points"));
                     points++;
                     window.localStorage.setItem("points", points);
                 }
                 else if (res[2] == "BAG") {
                     var bags = parseInt(window.localStorage.getItem("bags"));
                     bags++;
                     window.localStorage.setItem("bags", bags);

                     var points = parseInt(window.localStorage.getItem("points"));
                     points++;
                     window.localStorage.setItem("points", points);
                 }
             }
          }

          //Set identity
          window.localStorage.setItem("Identity", result.text);

          //Make sure local storage has the name
          if(!window.localStorage.getItem("Name")){
              navigator.notification.prompt(
                    // message
                    'Please enter your name',

                    // callback to invoke
                    function (input){

                      //Store profile data
                      window.localStorage.setItem("Name", input.input1);

                      //User is logged in
                      window.localStorage.setItem("Loggedin", "True");
                      window.localStorage.setItem("Type", "SCAN");
                      window.location.href = "home.html";
                    },

                    // title
                    'Profile',

                     // buttonLabels
                    ['Ok','Whatever'],

                    // defaultText
                    'A Kaustian Has No Name'
              );
          }
          else{
             //User is logged in
             window.localStorage.setItem("Loggedin", "True");
             window.localStorage.setItem("Type", "SCAN");
             window.location.href = "home.html";
          }


       }
       else if (!result.cancelled) {
          document.getElementById("message").innerHTML = "Message: You are scanning a " + result.format
                                                       + ". Please scan a barcode, (They are at the back of your card!)";
       }
       else if (result.cancelled) {
          document.getElementById("profile").innerHTML = "<a target='_blank' href='profile.html'"
                                                       + "style='text-decoration: none'><button class='button'>Couldn't Scan :("
                                                       + "</button></a>";
       }
     },
     function(error)
     {
       //error callback
       document.getElementById("message").innerHTML = "Error: " + error;
     },
     {
         showTorchButton : true, // iOS and Android
         prompt : "Place a barcode inside the scan area", // Android
         resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
         formats : "CODE_39", // default: all but PDF_417 and RSS_EXPANDED
     }
  );
}

//Global SignOut
function signOut(){
  var type = window.localStorage.getItem("Type");

  //Reset Counters
  window.localStorage.setItem("points", "0");
  window.localStorage.setItem("mugs", "0");
  window.localStorage.setItem("bottles", "0");
  window.localStorage.setItem("bags", "0");

  //remove local trace
  window.localStorage.removeItem("Type");
  window.localStorage.removeItem("Loggedin");

  //reload page
  window.location.reload();
}
