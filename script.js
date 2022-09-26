setInterval(() => {
  let dateTime = new Date();
  let date = dateTime.toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  document.getElementById("date").innerHTML = date;
  document.getElementById("hours").innerHTML = dateTime.getHours();
  document.getElementById("minutes").innerHTML = dateTime.getMinutes();
  document.getElementById("seconds").innerHTML = dateTime.getSeconds();
}, 1000);
