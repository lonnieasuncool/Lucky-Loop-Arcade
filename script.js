const menuItems = [
  {id:'turkey-melt',name:'Turkey & cheese melt',description:'Toasty sourdough, turkey, cheddar, and a little crunch.',price:4.5,category:'savory',speed:'Ready in ~2 min',image:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',alt:'Turkey and cheese sandwich'},
  {id:'popcorn',name:'Buttery popcorn cup',description:'Light, salty, and easy to grab on the way to your next class.',price:2.0,category:'savory',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&w=800&q=80',alt:'Cup of fresh popcorn'},
  {id:'pretzel',name:'Soft pretzel',description:'Warm, salty, and made for sharing — or not sharing.',price:2.5,category:'savory',speed:'Ready in ~1 min',image:'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',alt:'Soft baked pretzel'},
  {id:'crackers',name:'Cheese cracker pack',description:'Crunchy, cheesy, and packed for a quick bite between classes.',price:1.75,category:'savory',speed:'Ready to grab',image:'assets/cheese-crackers.png',alt:'Cheese cracker snack'},
  {id:'chomps',name:'Chomps meat stick',description:'A protein-packed meat stick that is easy to grab and go.',price:2.5,category:'savory',speed:'Ready to grab',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Healthy%20Snacks%20Chomps%20Stick%20Grass%20Fed%20Beef%20Stick%20%2815114432395%29.jpg?width=800',alt:'Chomps meat stick'},
  {id:'seaweed',name:'Seaweed snack',description:'Crispy, savory seaweed sheets for a light snack between classes.',price:1.5,category:'savory',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',alt:'Seaweed snack sheets'},
  {id:'hot-cheetos',name:'Flamin’ Hot Cheetos — 1 bag',description:'One full bag of crunchy, cheesy, spicy Cheetos for the walk to class.',price:1.75,category:'savory',speed:'Ready to grab',image:'assets/hot-cheetos.png',alt:'One bag of Flamin’ Hot Cheetos'},
  {id:'takis',name:'Takis Fuego — 1 bag',description:'One bag of rolled tortilla chips with a bold chili-lime kick.',price:1.75,category:'savory',speed:'Ready to grab',image:'assets/takis.png',alt:'One bag of Takis Fuego'},
  {id:'doritos',name:'Doritos Nacho Cheese',description:'A crunchy, cheesy classic in a grab-and-go snack bag.',price:1.75,category:'savory',speed:'Ready to grab',image:'assets/doritos.png',alt:'Bag of Doritos Nacho Cheese'},
  {id:'pringles',name:'Pringles Original',description:'Stackable original potato crisps in a snack-size can.',price:2.0,category:'savory',speed:'Ready to grab',image:'assets/pringles.png',alt:'Can of Pringles Original potato crisps'},
  {id:'fruit',name:'Fruit cup',description:'A bright mix of fresh fruit for a quick reset between classes.',price:2.75,category:'sweet',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80',alt:'Cup of colorful fresh fruit'},
  {id:'oreos',name:'OREO snack pack',description:'The original OREO chocolate sandwich cookies, ready to take with you.',price:1.5,category:'sweet',speed:'Ready to grab',image:'assets/oreo.png',alt:'OREO chocolate sandwich cookies'},
  {id:'granola',name:'Chewy granola bar',description:'A compact oat-and-chocolate boost when you need to keep moving.',price:1.5,category:'sweet',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80',alt:'Granola bars'},
  {id:'reeses',name:'Reese’s',description:'Chocolate and peanut butter in a quick, individually wrapped treat.',price:1.5,category:'sweet',speed:'Ready to grab',image:'assets/reeses.png',alt:'Reese’s Peanut Butter Cups'},
  {id:'kitkat',name:'KitKat',description:'Crispy wafer fingers covered in smooth milk chocolate.',price:1.5,category:'sweet',speed:'Ready to grab',image:'assets/kitkat.png',alt:'KitKat chocolate wafer bar'},
  {id:'trolli',name:'Trolli',description:'Chewy, colorful gummy candy for a fun little sugar boost.',price:1.5,category:'sweet',speed:'Ready to grab',image:'assets/trolli.png',alt:'Trolli gummy candy'},
  {id:'skittles',name:'Skittles',description:'Taste the rainbow with a small, colorful candy pack.',price:1.5,category:'sweet',speed:'Ready to grab',image:'assets/skittles.png',alt:'Pack of Skittles candy'},
  {id:'sour-patch',name:'Sour Patch Kids',description:'Soft, chewy candy with a sour-then-sweet finish.',price:1.5,category:'sweet',speed:'Ready to grab',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Sour-Patch-Kids.jpg?width=800',alt:'Sour Patch Kids candy'},
  {id:'jolly-rancher',name:'Jolly Ranchers',description:'A colorful mix of classic hard candies for a long-lasting sweet.',price:1.5,category:'sweet',speed:'Ready to grab',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jolly%20Ranchers.jpg?width=800',alt:'Jolly Rancher hard candies'},
  {id:'nerds-clusters',name:'Nerds Gummy Clusters',description:'Crunchy Nerds candy around a chewy gummy center.',price:2.0,category:'sweet',speed:'Ready to grab',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Nerds.jpg?width=800',alt:'Nerds candy'},
  {id:'pocky',name:'Pocky',description:'Crispy biscuit sticks dipped in sweet chocolate.',price:2.0,category:'sweet',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=800&q=80',alt:'Chocolate biscuit snack sticks'},
  {id:'fruit-roll-ups',name:'Fruit Roll-Ups',description:'A chewy, fruity roll-up that is easy to take with you.',price:1.5,category:'sweet',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80',alt:'Colorful fruit candy'},
  {id:'gushers',name:'Gushers',description:'Chewy fruit snacks with a juicy center in every bite.',price:1.5,category:'sweet',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=800&q=80',alt:'Fruit gummy snacks'},
  {id:'cheez-its',name:'Cheez-It snack pack',description:'Crispy baked cheese crackers with a classic salty crunch.',price:1.75,category:'savory',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1621939514649-280e2aa1f6d6?auto=format&fit=crop&w=800&q=80',alt:'Cheese crackers'},
  {id:'goldfish',name:'Goldfish snack pack',description:'Cheddar crackers shaped like tiny fish and ready to munch.',price:1.5,category:'savory',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1621939514649-280e2aa1f6d6?auto=format&fit=crop&w=800&q=80',alt:'Small cheddar crackers'},
  {id:'sunchips',name:'SunChips',description:'Crunchy multigrain chips with a wavy bite.',price:1.75,category:'savory',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',alt:'Crunchy snack chips'},
  {id:'jerky',name:'Beef jerky',description:'Chewy, savory strips for a filling protein boost.',price:2.5,category:'savory',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',alt:'Beef jerky strips'},
  {id:'yogurt',name:'Berry yogurt cup',description:'Cool, creamy yogurt with berries and crunchy granola.',price:3.25,category:'sweet',speed:'Ready to grab',image:'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',alt:'Yogurt topped with berries'},
  {id:'smoothie',name:'Strawberry smoothie',description:'A cool blend of strawberries, banana, and yogurt.',price:4.0,category:'drinks',speed:'Ready in ~2 min',image:'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80',alt:'Strawberry smoothie'},
  {id:'water',name:'Cold water',description:'The underrated MVP of getting through the school day.',price:1.0,category:'drinks',speed:'Ready to grab',image:'assets/water.png',alt:'Bottle of drinking water'}
];

const menuGrid = document.querySelector('#menu-grid');

function renderMenu(filter = 'all') {
  menuGrid.innerHTML = menuItems.filter(item => filter === 'all' || item.category === filter).map(item => `
    <article class="menu-card">
      <img class="menu-card-image" src="${item.image}" alt="${item.alt}" loading="lazy" />
      <div class="menu-card-body">
        <div class="menu-card-top"><h3>${item.name}</h3><span class="price">$${item.price.toFixed(2)}</span></div>
        <p>${item.description}</p>
        <div class="card-footer"><span class="speed">⚡ ${item.speed}</span><span class="grab-label">Buy in person</span></div>
      </div>
    </article>`).join('');
}

document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter-button.active').classList.remove('active'); button.classList.add('active'); renderMenu(button.dataset.filter);
}));

renderMenu();
