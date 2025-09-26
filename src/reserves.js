export default function loadReserve() {
  const main = document.querySelector("main");
  main.textContent = "";

  const header = document.createElement("div");
  header.classList.add("reserve-header");

  const title = document.createElement("h1");
  title.classList.add("title-text");
  title.textContent = "Make a Reservation";

  const subtitle = document.createElement("p");
  subtitle.classList.add("subtitle-text");
  subtitle.textContent = "Book your table for an unforgettable experience";

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1617692855027-33b14f061079?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  img.setAttribute("alt", "Restaurant table setting");
  img.classList.add("page-image");

  header.append(title, subtitle, img);

  const form = document.createElement("form");
  form.id = "reservation-form";

  function addInput(labelText, type, name) {
    const label = document.createElement("label");
    label.setAttribute("for", name);
    label.textContent = labelText;

    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.required = true;

    form.append(label, input);
  }

  addInput("Full Name", "text", "name");
  addInput("Email Address", "text", "email");
  addInput("Phone Number", "number", "phone");

  addInput("Preferred Date", "date", "date");

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "Preferred Time";

  const timeSelect = document.createElement("select");
  timeSelect.name = "time";
  timeSelect.required = true;

  const timeOptions = [
    ["1", "Select a time"],
    ["2", "5:00 PM"],
    ["3", "5:30 PM"],
    ["4", "6:00 PM"],
    ["5", "6:30 PM"],
    ["6", "7:00 PM"],
    ["7", "7:30 PM"],
    ["8", "8:00 PM"],
    ["9", "8:30 PM"],
    ["10", "9:00 PM"],
  ];

  timeOptions.forEach(([value, text]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    timeSelect.appendChild(option);
  });

  form.append(timeLabel, timeSelect);

  const guestLabel = document.createElement("label");
  guestLabel.setAttribute("for", "guest-count");
  guestLabel.textContent = "Number of Guests";

  const guestSelect = document.createElement("select");
  guestSelect.name = "guest-count";
  guestSelect.required = true;

  const guestOptions = [
    ["default", "Select Number of guests"],
    ["1", "1 Guest"],
    ["2", "2 Guests"],
    ["3", "3 Guests"],
    ["4", "4 Guests"],
    ["5", "5 Guests"],
    ["6", "6 Guests"],
    ["7", "7 Guests"],
    ["8", "8 Guests"],
  ];

  guestOptions.forEach(([value, text]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    guestSelect.appendChild(option);
  });

  form.append(guestLabel, guestSelect);

  const requestLabel = document.createElement("label");
  requestLabel.setAttribute("for", "requests");
  requestLabel.textContent = "Special Requests";

  const textarea = document.createElement("textarea");
  textarea.name = "requests";

  form.append(requestLabel, textarea);

  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("sbt-btn", "btn");
  button.textContent = "Make Reservation";

  form.appendChild(button);

  main.append(header, form);
}
