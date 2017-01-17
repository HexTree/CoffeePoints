//Necessary of the date string
var month = new Array();
month[0] = "01";
month[1] = "02";
month[2] = "03";
month[3] = "04";
month[4] = "05";
month[5] = "06";
month[6] = "07";
month[7] = "08";
month[8] = "09";
month[9] = "10";
month[10] = "11";
month[11] = "12";

function scan(){
		cordova.plugins.barcodeScanner.scan(
		    function (result) {
					 var value = result.text;

						//Timestamp String
						var d = new Date();
						var date = d.getFullYear() +'-'
										 + month[d.getMonth()] +'-'
										 + d.getDate() +' '
										 + d.getHours() +':'
										 + d.getMinutes() +':'
										 + d.getSeconds();

						//Update LastResult
						var id = 'demo';
						if(window.localStorage.getItem('Loggedin') == "True"){
							  id = window.localStorage.getItem('Identity');
					  }
						var last = id +'|'+ date +'|'+ result.text;

						//Update LocalData
						window.localStorage.setItem("LocalData", window.localStorage.getItem("LocalData") + '\\' + last);

						//increment counters
						res = last.split('|');
						if (res[3] == "MUG") {
							 var mugs = parseInt(window.localStorage.getItem("mugs"));
							 mugs++;
							 window.localStorage.setItem("mugs", mugs);

							 var points = parseInt(window.localStorage.getItem("points"));
							 points++;
							 window.localStorage.setItem("points", points);
					 	}
					 	else if (res[3] == "BOTTLE") {
							 var bottles = parseInt(window.localStorage.getItem("bottles"));
							 bottles++;
							 window.localStorage.setItem("bottles", bottles);

							 var points = parseInt(window.localStorage.getItem("points"));
							 points++;
							 window.localStorage.setItem("points", points);
					 	}
					 	else if (res[3] == "BAG") {
							 var bags = parseInt(window.localStorage.getItem("bags"));
							 bags++;
							 window.localStorage.setItem("bags", bags);

							 var points = parseInt(window.localStorage.getItem("points"));
							 points++;
							 window.localStorage.setItem("points", points);
					 	}

						//update results
						var mugs = window.localStorage.getItem("mugs");
						var bottles = window.localStorage.getItem("bottles");
						var bags = window.localStorage.getItem("bags");
						var points = window.localStorage.getItem("points");

						document.getElementById("mug").innerHTML = mugs;
						document.getElementById("bot").innerHTML = bottles;
						document.getElementById("bag").innerHTML = bags;
						document.getElementById("points").innerHTML = points;
		   	},
		    function (error) {
						navigator.notification.alert(
							"Cannot Scan. Did you allow me to use the camera? " + error,  // message
							alertDismissed,         // callback
							'Game Over',            // title
							'Ok'                  // buttonName
						);
		    },
		    {
		       showTorchButton : true, // iOS and Android
		       prompt : "Place a barcode inside the scan area", // Android
		       resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
		       formats : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
		   	}
		);
}
