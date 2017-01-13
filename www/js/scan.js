
			//Show last result as a table row if exists
			if(window.localStorage.getItem("LastResult")){
					//Render the Table First
					document.getElementById('lastResult').innerHTML = "<p>\n<h3 align='center'>Result</h3>\n<div align='center' data-role='table' class='wow ui-content'>\n<div data-role='header'>\n<td>Time</td>\n<td>Location</td>\n<td>Type</td>\n</div>\n<div data-role='row'>\n<div id='scan'></div>\n</div>\n</div>\n</p>";

					//Show the last result
					var data = window.localStorage.getItem("LastResult");
					var res = data.split("|");
					document.getElementById('scan').innerHTML = '<tr><td>' + res[1]
																										+ '</td><td>' + res[2]
																										+ '</td><td>' + res[3]
																										+ '</td></tr>';
			}

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

			function scan()
			{
				cordova.plugins.barcodeScanner.scan(
		       function (result) {
							 var value = result.text;

							 //Timestamp String
							 var d = new Date();
							 var date = d.getFullYear() +'-'+
							            month[d.getMonth()] +'-'+
							            d.getDate() +' '+
							            d.getHours() +':'+
							            d.getMinutes() +':'+
							            d.getSeconds();

							 //Make sure there is a table first
							 if(!window.localStorage.getItem("LastResult")){
							    //Render the Table First
							    document.getElementById('lastResult').innerHTML = "<p>\n<h3 align='center'>Last Scan</h3>\n<div align='center' data-role='table' class='wow ui-content'>\n<div data-role='header'>\n<td>Time</td>\n<td>Location</td>\n<td>Type</td>\n</div>\n<div data-role='row'>\n<div id='scan'></div>\n</div>\n</div>\n</p>";
							 }
							 //Update LastResult
							 var id = 'demo';
							 if(window.localStorage.getItem('Loggedin')){
							     id = window.localStorage.getItem('Identity');
							 }
							 var last = id +'|'+ date +'|'+ result.text;
							 window.localStorage.setItem("LastResult", last);

							 //Update LocalData
							 window.localStorage.setItem("LocalData", window.localStorage.getItem("LocalData") + '\\' + last);

							 //Update the last result
							 var data = window.localStorage.getItem("LastResult");
							 var res = data.split("|");
							 document.getElementById('scan').innerHTML = '<tr><td>' + res[1]
							                                           + '</td><td>' + res[2]
							                                           + '</td><td>' + res[3]
							                                           + '</td></tr>';

							 //increment counters
							 if (res[3] == "MUG") {
									 var mugs = parseInt(window.localStorage.getItem("mugs"));
									 mugs++;
									 window.localStorage.setItem("mugs", mugs);

									 var points = parseInt(window.localStorage.getItem("points"));
									 points = points + 1;
									 window.localStorage.setItem("points", points);
							 }
							 else if (res[3] == "BOTTLE") {
									 var bottles = parseInt(window.localStorage.getItem("bottles"));
									 bottles++;
									 window.localStorage.setItem("bottles", bottles);

									 var points = parseInt(window.localStorage.getItem("points"));
									 points = points + 1;
									 window.localStorage.setItem("points", points);
							 }
							 else if (res[3] == "BAG") {
									 var bags = parseInt(window.localStorage.getItem("bags"));
									 bags++;
									 window.localStorage.setItem("bags", bags);

									 var points = parseInt(window.localStorage.getItem("points"));
									 points = points + 1;
									 window.localStorage.setItem("points", points);
							 }

               window.location.reload();
		       },
		       function (error) {
		           alert("Scanning failed: " + error);
		       },
		       {
		           showTorchButton : true, // iOS and Android
		           prompt : "Place a barcode inside the scan area", // Android
		           resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
		           formats : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
		       }
		    );
			}
