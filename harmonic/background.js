

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		  let licpUrl = JSON.stringify(tab.url);
		  licpUrl.includes("https://www.linkedin.com/sales/company")
		? chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			// tabs[0].id
				chrome.tabs.sendMessage(tabs[0].id, { licpUrl });
		  })
		: console.log(false);
});
