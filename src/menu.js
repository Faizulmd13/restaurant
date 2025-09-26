export default function loadMenu() {
  const main = document.querySelector("main");
  main.textContent = "";

  const header = document.createElement("div");
  header.classList.add("menu-header");

  const title = document.createElement("h1");
  title.classList.add("title-text");
  title.textContent = "Our Menu";

  const subtitle = document.createElement("p");
  subtitle.classList.add("subtitle-text");
  subtitle.textContent =
    "Fresh ingredients, traditional recipes, modern presentation";

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1557499305-bd68d0ad468d?q=80&w=1262&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  img.setAttribute("alt", "Delicious Food");
  img.classList.add("page-image");

  header.append(title, subtitle, img);

  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");

  function createCategory(titleText, items) {
    const category = document.createElement("div");
    category.classList.add("category");

    const categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("category-title");
    categoryTitle.textContent = titleText;

    category.appendChild(categoryTitle);

    items.forEach(({ name, description, price }) => {
      const item = document.createElement("div");
      item.classList.add("category-item");

      const details = document.createElement("div");
      details.classList.add("item-details");

      const itemName = document.createElement("h3");
      itemName.textContent = name;

      const itemDesc = document.createElement("p");
      itemDesc.textContent = description;

      details.append(itemName, itemDesc);

      const itemPrice = document.createElement("div");
      itemPrice.classList.add("item-price");
      itemPrice.textContent = price;

      item.append(details, itemPrice);
      category.appendChild(item);
    });

    return category;
  }

  const appetizers = createCategory("Appetizers", [
    {
      name: "Parotta Platter",
      description: "A selection of freshly made parotta with chutney and curry",
      price: "₹40",
    },
    {
      name: "Egg Parotta",
      description: "soft parotta filled with spicy egg curry",
      price: "₹35",
    },
    {
      name: "Chicken Tikka",
      description: "Grilled chicken skewers with mint chutney",
      price: "₹30",
    },
  ]);

  const mains = createCategory("Main Courses", [
    {
      name: "Chicken Parotta",
      description: "Fluffy parotta with spicy chicken curry",
      price: "₹60",
    },
    {
      name: "Fish Parotta",
      description: "Parotta filled with tender fish curry",
      price: "₹65",
    },
    {
      name: "Mutton Parotta",
      description: "Parotta filled with rich and flavourful mutton curry",
      price: "₹70",
    },
  ]);

  const desserts = createCategory("Desserts", [
    {
      name: "Pani Puri",
      description: "Crunchy hollow puris with spicy tamarind water and chaat",
      price: "₹25",
    },
    {
      name: "Sweet Parotta",
      description: "A sweet version of parotta with jaggery and cardamom",
      price: "₹30",
    },
  ]);

  menuSection.append(appetizers, mains, desserts);
  main.append(header, menuSection);
}
