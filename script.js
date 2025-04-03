document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.json")
      .then(response => response.json())
      .then(menuData => {
        const menuList = document.getElementById("menu-list");
        const orderList = document.getElementById("order-list");
        
        menuData.items.forEach(item => {
          const li = document.createElement("li");
          li.textContent = `${item.name} - ${item.price}`;
          li.addEventListener("click", () => addToOrder(item));
          menuList.appendChild(li);
        });
  
        function addToOrder(item) {
          const li = document.createElement("li");
          li.textContent = `${item.name} - ${item.price}`;
          orderList.appendChild(li);
        }
      })
      .catch(error => console.error("Feil ved henting av meny:", error));
  });
  