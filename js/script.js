let jobName = document.getElementById("job_title");
let desc = document.getElementById("desc");
let workplace = document.getElementById("place");
let button = document.getElementById("btn");
button.addEventListener("click", randJob);

async function randJob() {
  let data = await fetch("../lib/OpenJsonData.json").then(
    response => response.json()
  );
  let random = Math.floor(Math.random() * Object.keys(data).length)

  jobName.innerHTML = data[random]["Titel"];
  desc.innerHTML = data[random]["Description"];
  workplace.innerHTML = data[random]["Place"];
}
