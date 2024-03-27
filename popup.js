
const button = document.getElementById("button");
const tabTitle = document.querySelector('.title');

button.addEventListener("click", async () => {
  chrome.tabs.query(
    { "currentWindow": true, "active": true },
    function (tabs) {
      let gettitle = tabs[0].title;
      
      tabTitle.innerHTML = gettitle;
    });
});