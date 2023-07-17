let myLeads = [];
const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("dlt-btn");
console.log(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabs = [{ url: "kkkkkkkkkkkkkkkkkkkkkkk" }];

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}
function render(leads) {
  let listItem = "";

  for (let i = 0; i < leads.length; i++) {
    listItem +=
      "<li> <a  target='_blank' href=' " +
      myLeads[i] +
      "'>" +
      myLeads[i] +
      "</a></li>";
  }
  ulEl.innerHTML = listItem;
}
tabBtn.addEventListener("click", function () {
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
buttonEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
