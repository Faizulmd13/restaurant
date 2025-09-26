export default function loadReserve(){
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="reserve-header">
        <h1 class="title-text">Make a Reservation</h1>
        <p title="subtitle-text">
          Book your table for an unforgettable experience
        </p>
        <img
          src="https://images.unsplash.com/photo-1617692855027-33b14f061079?q=80&w=870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Restaurant table setting"
          class="page-image"
        />
      </div>

      <form id="reservation-form">
        <label for="name">Full Name</label>
        <input type="text" name="name" required />

        <label for="email">Email Address</label>
        <input type="text" name="email" required />

        <label for="phone">Phone Number</label>
        <input type="number" name="phone" required />

        <label for="date">Preferred Date</label>
        <input type="date" name="date" required />

        <label for="time">Preferred Time</label>
        <select name="time" required>
          <option value="1">Select a time</option>
          <option value="2">5:00 PM</option>
          <option value="3">5:30 PM</option>
          <option value="4">6:00 PM</option>
          <option value="5">6:30 PM</option>
          <option value="6">7:00 PM</option>
          <option value="7">7:30 PM</option>
          <option value="8">8:00 PM</option>
          <option value="9">8:30 PM</option>
          <option value="10">9:00 PM</option>
        </select>

        <label for="guest-count">Number of Guests</label>
        <select name="guest-count" required>
          <option value="default">Select Number of guests</option>
          <option value="1">1 Guests</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
          <option value="7">7 Guests</option>
          <option value="8">8 Guests</option>
        </select>

        <label for="requests">Special Requests</label>
        <textarea name="requests"></textarea>

        <button type="submit" class="sbt-btn btn">Make Reservation</button>
      </form>
    `;
}
