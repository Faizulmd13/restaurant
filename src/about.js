export default function loadAbout() {
  const main = document.querySelector("main");
  main.textContent = "";

  const aboutHeader = document.createElement("div");
  aboutHeader.classList.add("about-header");

  const titleText = document.createElement("h1");
  titleText.classList.add("title-text");
  titleText.textContent = "About Us";

  const subtitleText = document.createElement("p");
  subtitleText.classList.add("subtitle-text");
  subtitleText.textContent = "Our story, our passion, our commitment";

  const pageImage = document.createElement("img");
  pageImage.classList.add("page-image");
  pageImage.src =
    "https://images.unsplash.com/flagged/photo-1561350117-501b4661f8d4?q=80&w=870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  aboutHeader.appendChild(titleText);
  aboutHeader.appendChild(subtitleText);
  aboutHeader.appendChild(pageImage);

  const aboutDesc = document.createElement("p");
  aboutDesc.id = "about-desc";

  aboutDesc.textContent = `Maaran Parotta Shop began as a dream of bringing
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
        a traditional South Indian kitchen.`;

  main.appendChild(aboutHeader);
  main.appendChild(aboutDesc);
}
