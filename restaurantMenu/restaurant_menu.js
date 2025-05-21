// arrays
const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $6', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $23', 'Pasta - $16', 'Burger - $12', 'Salmon - $20'];
const dessertMenu = ['Cake - $5', 'Ice Cream - $3', 'Pudding - $4', 'Fruit Salad - $3'];

// map method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join(' '); 
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// forEach
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;