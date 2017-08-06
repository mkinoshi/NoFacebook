chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    var bm_urls = new Array();
    var views = chrome.extension.getViews();

    function fetch_bookmarks(parentNode, parentId) {
        parentNode.forEach(function(bookmark) {
            if(! (bookmark.url === undefined || bookmark.url === null)) {
                if (bookmark.parentId === parentId) {
                  bm_urls.push(bookmark.url);
                }
            }
            if (bookmark.children) {
                fetch_bookmarks(bookmark.children, parentId);
            }
        });
    }
    if (tab.url.split('/')[2].includes('facebook')) {
      chrome.bookmarks.search('NoFacebook', function(res) {
        const parentId = res[0].id;
        chrome.bookmarks.getTree(function(rootNode) {
          fetch_bookmarks(rootNode, parentId);
          chrome.tabs.update(tab.id, {url: bm_urls[Math.floor(Math.random() * bm_urls.length)]});
      });
      })
    }
  }
})