let jobName = document.getElementById("job");
let button = document.getElementById("btn");
button.addEventListener("click", randJob);

async function randJob() {
  let data = await fetch("../lib/OpenJsonData.json").then(
    response => response.json()
  );
  let random = Math.floor(Math.random() * Object.keys(data).length)

  jobName.innerHTML = data[random]["Titel"];
}
