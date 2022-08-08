// const waitForAddedNodeNewLicp = (params) => {
// 	new MutationObserver(function (mutations) {
// 		const el = document.querySelectorAll(params.selector);
// 		if (el) {
// 			params.done(el);
// 		}
// 	}).observe(params.parent || document, {
// 		subtree: !!params.recursive || !params.parent,
// 		childList: true,
// 	});
// };

// waitForAddedNodeNewLicp({
// 	selector: "span.result-lockup__position-company>a",
// 	parent: document.querySelector("ol[search-results__result-list]"),
// 	recursive: false,
// 	done: (el) => {
// 		for (const value of el.values()) {
// 			let company = value.textContent.trim();
//             let remove_after= company.indexOf('\n');
//             let companyName =  company.substring(0, remove_after);
// 			companyName&&getStorageKeyValueNewLicp(companyName, (key) => {
// 				if (key && document.getElementById(value.id)) {
// 					document.getElementById(value.id).classList +=
// 						"bgColor rounded-md p-4 ";
// 				}
// 			});
// 			value.setAttribute("target", "_blank");
// 			document.getElementById(value.id).addEventListener("click", () => {
// 				document.getElementById(value.id).classList +=
// 					"bgColor rounded-md p-4 ";
// 				setStorageKeyNewLicp(companyName, companyName);
// 			});
// 		}
// 	},
// });

// const setStorageKeyNewLicp = (key, value) => {
// 	console.log(key, value);
// 	chrome.storage.local.set({ [key]: value });
// 	// chrome.storage.sync.set({ [key]: value });
// };

// const getStorageKeyValueNewLicp = (key, onGetStorageKeyValue) => {
// 	if(chrome.storage.sync.get([key])){
// 		chrome.storage.sync.get([key], function (result) {
// 			onGetStorageKeyValue(result[key]);
// 		});
// 	}
// 	if(chrome.storage.local.get([key])){
// 		chrome.storage.local.get([key], function (result) {
// 			onGetStorageKeyValue(result[key]);
// 		});
// 	};
// } 

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log(request)
// 	const licpUrl = request.licpUrl
// 		.replace("https://www.linkedin.com", "")
// 		.split("&")[0]
// 		.replace(/["]+/g, "");

// 	const allLicpUrls = document.querySelectorAll(
// 		"a[class='ember-view t-14 t-black--light t-bold']"
// 	);

// 	for (const companyProfile of allLicpUrls) {
// 		let companyProfileHref = companyProfile.getAttribute("href");
//         console.log(companyProfileHref)
// 		if (companyProfileHref === licpUrl) {
// 			document.getElementById(companyProfile.id).classList +=
// 				" bgColor rounded-md p-4 ";
//             let company = value.textContent.trim();
//             let remove_after= company.indexOf('\n');
//             let companyName =  company.substring(0, remove_after);		
//             getStorageKeyValueNewLicp(companyName, (key) => {
//                 console.log(1)
// 				if (!key) {
//                     console.log(2)
// 					setStorageKeyNewLicp(companyName, companyName);
// 				}
// 			});
// 		}
// 	}
// 	//Keeping sendResponse below for testing purposes
// 	sendResponse({ farewell: "goodbye" });
// 	return true
// });



//     // {
//     //   "matches": [
//     //     "https://*.linkedin.com/sales/search/people/list/*"
//     //   ],
//     //   "js": [
//     //     "content-script-new-licps.js"
//     //   ],
//     //   "css": [
//     //     "content-script-people.css"
//     //   ],
//     //   "run_at": "document_end"
//     // }