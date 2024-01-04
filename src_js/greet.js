function generateGreeting(name) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Günaydın " + name;
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Tünaydın " + name;
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Good evening " + name;
  } else {
    greeting = "İyi akşamlar " + name;
  }

  return greeting;
}

// Set the greeting in the HTML element with the id "greeting"
const name = "Ömer"; // Replace with the desired name
const greetingElement = document.getElementById("greeting");
greetingElement.textContent = generateGreeting(name);
