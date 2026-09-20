document.getElementById("year").textContent = new Date().getFullYear();

const tabList = document.querySelector(".preview-tabs");
const tabs = Array.from(tabList.querySelectorAll(".preview-tab"));

function selectTab(selectedTab) {
  tabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !isSelected;
  });
}

// Enhance the gallery only when JavaScript is available; otherwise all views remain readable.
tabList.setAttribute("role", "tablist");
tabs.forEach((tab, index) => {
  const panel = document.getElementById(tab.getAttribute("aria-controls"));
  tab.setAttribute("role", "tab");
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("aria-labelledby", tab.id);
  panel.tabIndex = 0;
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(tabs[nextIndex]);
    tabs[nextIndex].focus();
  });
});
selectTab(tabs[0]);
tabList.hidden = false;
