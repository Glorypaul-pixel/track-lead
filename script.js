let myLeads = [];
let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
console.log(localStorage.getItem("myLeads"));
buttonEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItem = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItem +=
      "<li> <a  target='_blank' href=' " +
      myLeads[i] +
      "'>" +
      myLeads[i] +
      "</a></li>";
  }
  ulEl.innerHTML = listItem;
}
