export default function loadAbout(){
    const main = document.querySelector("main");
    main.innerHTML = `
    <div class="about-header">
        <h1 class="title-text">About Us</h1>
        <p class="subtitle-text">Our story, our passion, our commitment</p>
        <img
          src="https://images.unsplash.com/flagged/photo-1561350117-501b4661f8d4?q=80&w=870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="page-image"
        />
      </div>

      <p id="about-desc">
        <strong>Maaran Parotta Shop</strong> began as a dream of bringing
        authentic South Indian flavors to our beloved neighborhood. Founded in
        2010 by the Maaran family, who have been making parotta for generations,
        our shop has become a favorite spot for locals and visitors alike. Our
        commitment to authenticity extends beyond our recipes. We use
        traditional methods to prepare our parotta, using only the finest
        ingredients like stone-ground atta, fresh ghee, and hand-pounded spices.
        Our curries are made with love, using time-honored recipes passed down
        through our family. The shop's warm and welcoming atmosphere reflects
        our philosophy that food should be a celebration of home, family, and
        tradition. Our rustic décor, the aroma of freshly cooked parotta, and
        the friendly service create a cozy experience that feels like a visit to
        a traditional South Indian kitchen.
      </p>
    `;
}
