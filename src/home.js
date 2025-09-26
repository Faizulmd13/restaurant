export default function loadHome(){
    const main = document.querySelector("main");
    main.innerHTML = `
    <div class="main-header">
        <h1 class="title-text">Maaran Parotta Shop</h1>
        <p class="subtitle-text">Authentic parotta in Madurai</p>
        <img
          src="https://images.unsplash.com/photo-1536305030588-45dc07a2a372?q=80&w=870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Restaurant Interior"
          class="page-image"
        />
      </div>

      <p id="home-desc">
        Welcome to <strong>Maaran Parotta Shop</strong>, where traditional South
        Indian flavors meet the comforting simplicity of home-cooked meals.
        Nestled in the heart of our neighborhood, our shop offers a warm and
        welcoming experience with the aroma of freshly made parotta and the
        taste of authentic Tamil cuisine. Since our humble beginnings, we have
        been serving our community with care, using only the finest ingredients
        to craft every parotta and curry. Our menu features classic South Indian
        flavors, made with love and tradition. Whether you're stopping by for a
        quick bite, a family meal, or a comforting snack, Maaran Parotta Shop
        promises a taste of home and a truly satisfying experience.
      </p>
    `;
}
