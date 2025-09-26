export default function loadMenu() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="menu-header">
        <h1 class="title-text">Our Menu</h1>
        <p class="subtitle-text">
          Fresh ingredients, traditional recipes, modern presentation
        </p>
        <img
          src="https://images.unsplash.com/photo-1557499305-bd68d0ad468d?q=80&amp;w=1262&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Delicious Food"
          class="page-image"
        />
      </div>

      <div class="menu-section">
        <div class="category">
          <h2 class="category-title">Appetizers</h2>
          <div class="category-item">
            <div class="item-details">
              <h3>Parotta Platter</h3>
              <p>A selection of freshly made parotta with chutney and curry</p>
            </div>
            <div class="item-price">₹40</div>
          </div>
          <div class="category-item">
            <div class="item-details">
              <h3>Egg Parotta</h3>
              <p>soft parotta filled with spicy egg curry</p>
            </div>
            <div class="item-price">₹35</div>
          </div>
          <div class="category-item">
            <div class="item-details">
              <h3>Chicken Tikka</h3>
              <p>Grilled chicken skewers with mint chutney</p>
            </div>
            <div class="item-price">₹30</div>
          </div>
        </div>
        <div class="category">
          <h2 class="category-title">Main Courses</h2>
          <div class="category-item">
            <div class="item-details">
              <h3>Chicken Parotta</h3>
              <p>Fluffy parotta with spicy chicken curry</p>
            </div>
            <div class="item-price">₹60</div>
          </div>
          <div class="category-item">
            <div class="item-details">
              <h3>Fish Parotta</h3>
              <p>Parotta filled with tender fish curry</p>
            </div>
            <div class="item-price">₹65</div>
          </div>
          <div class="category-item">
            <div class="item-details">
              <h3>Mutton Parotta</h3>
              <p>Parotta filled with rich and flavourful mutton curry</p>
            </div>
            <div class="item-price">₹70</div>
          </div>
        </div>
        <div class="category">
          <h2 class="category-title">Desserts</h2>
          <div class="category-item">
            <div class="item-details">
              <h3>Pani Puri</h3>
              <p>Crunchy hollow puris with spicy tamarind water and chaat</p>
            </div>
            <div class="item-price">₹25</div>
          </div>
          <div class="category-item">
            <div class="item-details">
              <h3>Sweet Parotta</h3>
              <p>A sweet version of parotta with jaggery and cardamom</p>
            </div>
            <div class="item-price">₹30</div>
          </div>
        </div>
      </div>
    `;
}
