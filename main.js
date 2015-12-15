
console.log('we are in!');
document.addEventListener('DOMContentLoaded', function() {
    var uploadfiled = document.getElementById("uploadedfile");
    uploadfiled.addEventListener('change',
    function(event){
        openFile(event);
    });
});

function openFile(event) {
		  	//var Papa = require('papaparse');
		    var input = event.target;
		    console.log("openFile");
		    var reader = new FileReader();
		    reader.onload = function(){
		      var text = reader.result;
		      console.log(reader.result);
		      data = Papa.parse(text,{
		      	header:true
		      });
		      var dataArray = data.data;
		      //alert("parsed..");
		      // chrome.tabs.getSelected(null, function(tab) {
		      // 	chrome.tabs.executeScript(tab.id,{code:'fillTheForm();'}, function(){
		      // 		alert(Object.keys(dataArray).length);
		      // 		for (var i = 0; i < Object.keys(dataArray).length; i++) {
			     //       // chrome.extension.getBackgroundPage().console.log(dataArray[i]);
				    // 	fillTheForm(dataArray[i]);
				    // };
		      // 	});
		      // });
			// chrome.extension.onRequest.addListener(
			//   function(request, sender, sendResponse) {
			//     // LOG THE CONTENTS HERE
			//     console.log(request.content);
			//     //fillTheForm(dataArray);
			//   });
			//var someString = "cccccddd";
			//chrome.tabs.getSelected(null, function(tab) {

			  // Now inject a script onto the page
// 			  var theCode = 'function fillTheForm (dataArray) {
// 	var typeMap = {"Foreign Branch":"1","FZC":"2","FZE":"3","Local Branch":"4","NULL":"5"};
// 	document.getElementsByName("arabic_name")[0].value=dataArray["Arabic Name"];
// 	document.getElementsByName("activity_type")[0].value=dataArray["Company Activity"];
// 	document.getElementsByName("licenseNumber")[0].value=dataArray["Contract"];
// 	document.getElementsByName("issue_date")[0].value=dataArray["Contract start date"].replace(".","/");
// 	document.getElementsByName("name")[0].value=dataArray["Customer Name"];
// 	document.getElementsByName("customer_number")[0].value=dataArray["Customer Number"];
// 	document.getElementsByName("email")[0].value=dataArray["E-mail 1"];
// 	document.getElementsByName("expiry_date")[0].value=dataArray["End of Term"].replace(".","/");
// 	document.getElementsByName("current_location")[0].value=dataArray["Facility Type"];
// 	document.getElementsByName("fax")[0].value=dataArray["Fax Number"];
// 	document.getElementsByName("type")[0].value=typeMap[dataArray["Legal Form"]];
// 	document.getElementsByName("authorized_manager")[0].value=dataArray["Manager"];
// 	document.getElementsByName("mobile")[0].value=dataArray["Primary Mobile"];
// 	document.getElementsByName("office_tel")[0].value=dataArray["Primary Telephone"];
// 	document.getElementsByName("status")[0].value="1";
// 	//document.getElementsByName("submit")[0].click();
// }';
			// chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
   //          	console.log("Omer: sent...");
   //          });

			for (var i = 0; i < Object.keys(dataArray).length; i++) {
				 var theCode = //'window.onload = function() {'+
				    'var typeMap = {"Foreign Branch":"1","FZC":"2","FZE":"3","Local Branch":"4","NULL":"5"};'+
					'document.getElementsByName("arabic_name")[0].value="'+dataArray[i]["Arabic Name"]+'";'+
					'document.getElementsByName("activity_type")[0].value="'+dataArray[i]["Company Activity"]+'";'+
					'document.getElementsByName("licenseNumber")[0].value="'+dataArray[i]["Contract"]+'";'+
					'document.getElementsByName("issue_date")[0].value="'+dataArray[i]["Contract start date"].replace(".","/").replace(".","/")+'";'+
					'document.getElementsByName("name")[0].value="'+dataArray[i]["Customer Name"]+'";'+
					'document.getElementsByName("customer_number")[0].value="'+dataArray[i]["Customer Number"]+'";'+
					'document.getElementsByName("email")[0].value="'+dataArray[i]["E-mail 1"]+'";'+
					'document.getElementsByName("expiry_date")[0].value="'+dataArray[i]["End of Term"].replace(".","/").replace(".","/")+'";'+
					'document.getElementsByName("current_location")[0].value="'+dataArray[i]["Facility Type"]+'";'+
					'document.getElementsByName("fax")[0].value="'+dataArray[i]["Fax Number"]+'";'+
					'document.getElementsByName("type")[0].value=typeMap["'+dataArray[i]["Legal Form"]+'"];'+
					'document.getElementsByName("authorized_manager")[0].value="'+dataArray[i]["Manager"]+'";'+
					'document.getElementsByName("mobile")[0].value="'+dataArray[i]["Primary Mobile"]+'";'+
					'document.getElementsByName("office_tel")[0].value="'+dataArray[i]["Primary Telephone"]+'";'+
					'document.getElementsByName("status")[0].value="1";'+
					'document.getElementsByName("btnAdd")[0].click();';
					alert("next?");
			     chrome.tabs.executeScript(null, {
			       //code: "chrome.extension.sendRequest({content: document.body.innerHTML}, function(response) { console.log('success'); });"
			        // code: 'document.getElementsByName("arabic_name")[0].value="'+someString+
			        // '";document.getElementsByName("btnAdd")[0].click();'
			  //      code: 'document.getElementsByName("arabic_name")[0].value='+dataArray[i]["Arabic Name"]+';'+
					// 'document.getElementsByName("activity_type")[0].value='+dataArray[i]["Company Activity"]+';'+
					// 'console.log('+dataArray[i]["Contract"]+');'
					code: theCode
			     }, function() {
			      //console.log('done');
			      	var redirectCode = 'setTimeout(function(){window.location.href = "https://www.rakftzeservices.com/admin_panel/add_company.php"},1000);';
			      	chrome.tabs.executeScript(null, {
			      		code: redirectCode
			      	});
			      //$('.header').hide();
			       });
		    };

			 //  sleep(20000);
			 // alert("next?");

			//};

		}
		    reader.readAsText(input.files[0]);

}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// function fillTheForm () {
// 	var typeMap = {"Foreign Branch":"1","FZC":"2","FZE":"3","Local Branch":"4","NULL":"5"};
// 	document.getElementsByName("arabic_name")[0].value=dataArray["Arabic Name"];
// 	document.getElementsByName("activity_type")[0].value=dataArray["Company Activity"];
// 	document.getElementsByName("licenseNumber")[0].value=dataArray["Contract"];
// 	document.getElementsByName("issue_date")[0].value=dataArray["Contract start date"].replace(".","/");
// 	document.getElementsByName("name")[0].value=dataArray["Customer Name"];
// 	document.getElementsByName("customer_number")[0].value=dataArray["Customer Number"];
// 	document.getElementsByName("email")[0].value=dataArray["E-mail 1"];
// 	document.getElementsByName("expiry_date")[0].value=dataArray["End of Term"].replace(".","/");
// 	document.getElementsByName("current_location")[0].value=dataArray["Facility Type"];
// 	document.getElementsByName("fax")[0].value=dataArray["Fax Number"];
// 	document.getElementsByName("type")[0].value=typeMap[dataArray["Legal Form"]];
// 	document.getElementsByName("authorized_manager")[0].value=dataArray["Manager"];
// 	document.getElementsByName("mobile")[0].value=dataArray["Primary Mobile"];
// 	document.getElementsByName("office_tel")[0].value=dataArray["Primary Telephone"];
// 	document.getElementsByName("status")[0].value="1";
// 	//document.getElementsByName("submit")[0].click();
// }
