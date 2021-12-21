const recipes = [
  {
    recipe_name: "Blueberry Cobbler",
    ingredients: [
      "2 cans blueberry pie filling",
      "1 box yellow cake mix (butter kind is best)",
      "1 ½  stick of butter",
      "Cinnamon and sugar, combined"
    ],
    procedure:
      "Preheat oven to 400 degrees.  Pour pie filling into 9x13 pan. Pour dry cake mix over pie filling. Cut stick of butter into 12 pieces, and put on top of cake mix. Sprinkle with cinnamon sugar. Bake for 30 minutes.",
    category: "Dessert"
  },
  {
    recipe_name: "Artichoke Dip",
    ingredients: [
      "1 C. Miracle Whip",
      "1 C. Parmesan Cheese ",
      "1 - 14 oz. Jar Artichoke Hearts"
    ],
    procedure:
      "Mix and bake at 350 degrees for 20-25 minutes. Serve with tortilla chips.**Or, put on Boboli pizza crust and bake for 8-10 minutes at 450 degrees.",
    category: "Side"
  },
  {
    recipe_name: "Banana Bread",
    ingredients: [
      "1 ¾ C. Flour",
      "¼ tsp. Salts",
      "2/3 c. Sugar",
      "1 C. Mashed Bananas",
      "2 tsp. Baking Power",
      "1/3 C. Butter or Margarine",
      "1/2 tsp. Baking Soda",
      "2 Tbsp. Milk",
      "1 Tbsp. Cinnamon",
      "2 Eggs"
    ],
    procedure:
      "Combine 1 Cup flour, sugar, baking powder, baking soda, salt and cinnamon. Add Bananas, margarine and milk. Beat til blended. Add eggs and remaining flour. Bake at 350 degrees for 55-60 minutes.",
    category: "Snack"
  },
  {
    recipe_name: "Kimberly's Beef Tips",
    ingredients: [
      "2 lb. Beef Tips",
      "2 pkgs. Brown Gravy",
      "1 onion, chopped",
      "2 ½ cups water",
      "Paprika"
    ],
    procedure:
      "Saute beef tips, chopped onion and paprika in ½ cup water over medium heat. When beef tips are cooked all the way through, add 2 cups cold water and the gravy packs. Simmer over low heat until sauce thickens and tips are tender. Serve over noodles or rice.",
    category: "Entree"
  },
  {
    recipe_name: "Bourbon Slush",
    ingredients: [
      "1 Can 12oz. Frozen Orange Juice",
      "2 Cans 12 oz. Frozen Lemonade",
      "2 Cup Sugar",
      "1 ½ Cup Bourbon",
      "4 Cups Cold tea",
      "10 Cups water"
    ],
    procedure: "Combine ingredients and freeze.",
    category: "Drink"
  },
  {
    recipe_name: "Ham n Cheese Bunwiches",
    ingredients: [
      "1 stick butter, softened",
      "1 tsp. Dry mustard",
      "1 tsp. Poppyseeds",
      "1 tsp. Minced onion",
      "2 lb. Ham, sliced thin",
      "12 slices Swiss cheese",
      "12 hamburger buns"
    ],
    procedure:
      "Make a paste of the butter, mustard, poppy seeds and minced onion and put on the bottom of the buns. Top with ham, a slice of cheese and the top bun. Wrap in foil and bake 15 minutes at 325 degrees, or until cheese melts. (Can also be made the day before.)",
    category: "Entree"
  },
  {
    recipe_name: "Chicken Broccoli Casserole",
    ingredients: [
      "10 OZ. Can White Chunk Chicken",
      "4 Cups Frozen Broccoli Cuts",
      "1 Can Cream of Chicken Soup",
      "¾ Cup Mayonnaise",
      "1 tsp. Lemon Juice",
      "1 tsp. Curry Powder",
      "½ Cup Shredded Cheese",
      "Bread Crumbs"
    ],
    procedure:
      "Layer Broccoli in a 7x11” baking dish. Top with Chicken. In a bowl combine soup, mayo, lemon juice and curry powder. Spread the mixture over the chicken and broccoli. Sprinkle cheese on top, and then add a light layer of bread crumbs. Cover and bake at 350 degrees for one hour. If desired, place under broiler until lightly browned.",
    category: "Entree"
  },
  {
    recipe_name: "Chicken Terrific",
    ingredients: [
      "Chicken(double # of people)",
      "lemon juice",
      "Salt ",
      " Pepper",
      "Celery Salt",
      "Paprika",
      "1 can Cream of Celery Soup",
      "1 can Cream of Chicken Soup",
      "2/3 cup white wine",
      "Parmesan  Cheese"
    ],
    procedure:
      "Rinse & pat breasts dry. Pour lemon juice in bowl and dip breasts. Sprinkle on salt, pepper, celery salt and paprika. Put in crock pot.  In small bowl mix soups & wine. Pour soup mixture over breast. Sprinkle parmesan cheese on top. Cook 8-10 hours on low.",
    category: "Entree"
  },
  {
    recipe_name: "Chocolate Chip Cookies",
    ingredients: [
      "¾ c. Butter Flavor Crisco",
      "1 ¼ c. Brown Sugar",
      "2 Tbsp. Milk",
      "1 Tbsp. Vanilla",
      "1 Egg",
      "1 ¾ c. Flour",
      "Pinch salt",
      "¾ tsp. Baking soda",
      "12 oz. Chocolate chips"
    ],
    procedure:
      "Combine Crisco, brown sugar, milk and vanilla in a large bowl until smooth. Add egg. In a small bowl combine flour, salt, and baking soda. Gradually add flour mixture to Crisco mixture. When all combined, add chocolate chips.  Bake at preheated 375 degree oven for 8 ½ minutes.",
    category: "Dessert"
  },
  {
    recipe_name: "Chocolate Peanut Butter Bars",
    ingredients: [
      "2 C. Graham Cracker Crumbs",
      "1 C. Butter, melted",
      "1 box Powdered Sugar",
      "1 C. Peanut Butter",
      "12 oz. Bag Chocolate Chips"
    ],
    procedure:
      "Mix all ingredients together except chocolate chips. Press into 13x9 greased pan. Melt chocolate chips and pour over Peanut Butter mixture. Chill until hard.",
    category: "Dessert"
  },
  {
    recipe_name: "Clandestine Dip",
    ingredients: [
      "3 tomatoes",
      "green onions",
      "1 can green chilies",
      "1 can olives (chopped)",
      "3T olive oil",
      "1 ½ T wine vinegar",
      "1 tsp. Garlic salt",
      "1 tsp. salt"
    ],
    procedure: "Mix together and let sit for 6-7 hours in refrigerator.",
    category: "Side"
  },
  {
    recipe_name: "Crockpot Beef Stew",
    ingredients: [
      "1 LB. Beef Stew Meat",
      "3 carrots, peeled and sliced",
      "2 potatoes, peeled and cubed",
      "1 onion, sliced",
      "2 tsp. Dried Italian Seasonings",
      "1/8 tsp. Black pepper",
      "2 Beef Bouillon cubes",
      "2 C. boiling Water"
    ],
    procedure:
      "In a crockpot coated with cooking spray, combine stew meat, carrots, potatoes, onion, and seasonings. Dissolve bouillon cubes in water. Pour over stew mixture. Cook 8-10 hours on low.",
    category: "Entree"
  },
  {
    recipe_name: "Egg Casserole",
    ingredients: [
      "1 lb. Bacon Cooked",
      "Pepper",
      "2-3 oz. Pkgs. Chipped Beef",
      "1 Qt. milk",
      "½ C. Butter",
      "½ C. Flour",
      "Eggs:",
      "16 Eggs",
      "1 C. Evaporated Milk",
      "¾ tsp. Salt",
      "¼ C. Butter"
    ],
    procedure:
      "For sauce, fry bacon and then dice and drain grease from pan. Add beef and butter.  Then sprinkle flour, add pepper to taste; stir in milk and cook until thickened.  For eggs, beat eggs with salt and milk. Then scramble eggs in butter. Spead eggs in bottom of 9x13 pan. Cover with sauce. Bake 1 hour at 275 degrees.",
    category: "Entree"
  },
  {
    recipe_name: "Egg Dip",
    ingredients: [
      "4 Tbsp. Mayo",
      "3 Hard Boiled Eggs, Mashed",
      "½ tsp. Paprika",
      "¼ tsp. salt",
      "1 Tub Soft cream Cheese",
      "1 Small Onion, Chopped"
    ],
    procedure: "Mix together, chill, serve with Ritz Crackers.",
    category: "Side"
  },
  {
    recipe_name: "Flank Steak",
    ingredients: ["2 Tbsp. Oil", "1 tsp. Garlic Salt", "1 tsp. Oregeno"],
    procedure:
      "Cut Steak diagonal on both sides. Brush oil mixture over both sides using all the mixture. Drizzle vinegar on both sides. Place in a glass dish covered with Saran Wrap for 2-3 hours. When grilling, baste with tomato sauce.",
    category: "Entree"
  },
  {
    recipe_name: "Garlic n Parmesano Breadsticks",
    ingredients: [
      "½ Stick Butter Melted",
      "1 Loaf Frozen Bread Dough",
      "1 Crushed Garlic Clove",
      "1/3 C. Parmesan Cheese",
      "Garlic Powder or Garlic Salt"
    ],
    procedure:
      "(Thaw bread in 300 degree oven for approx. 30 minutes. ) Optional thaw method. Melt butter and crushed garlic together.  Stretch out the dough on greased baking sheet. Cut into 1 inch bread sticks. Brush with butter/garlic mixture. Sprinkle with garlic powder or garlic salt. Bake at 375 degrees until brown (about 15 minutes). Baste again and sprinkle with parmesan cheese and bake another 5 to 10 minutes.",
    category: "Side"
  },
  {
    recipe_name: "Gooey Butter Cake",
    ingredients: [
      "1 Box Yellow Cake Mix",
      "3 Eggs",
      "1 Stick Melted Butter",
      "1- 8 oz. Pkg. Cream Cheese",
      "1 Box Powdered Sugar",
      "1 tsp. Vanilla"
    ],
    procedure:
      "Mix cake mix, 2 eggs, and melted butter together. Spread in the bottom of a greased 13x9 pan. Mix cream cheese, egg, sugar and vanilla together and pour over cake mixture. Bake at 350 degrees for 30-35 minutes. Sprinkle with powdered sugar while hot.",
    category: "Dessert"
  },
  {
    recipe_name: "Gooey Butter Cookies",
    ingredients: [
      "1 egg",
      "1 box yellow cake mix",
      "8 oz. Pkg. Cream cheese",
      "1 stick softened butter",
      "Powdered sugar"
    ],
    procedure:
      "Preheat oven to 350 degrees. Mix all ingredients. Knead with hands. (Will be very sticky and messy!) Refrigerate at least 4 hours. Make into balls, roll in powered sugar. Bake 10-12 minutes.",
    category: "Dessert"
  },
  {
    recipe_name: "Jello Salad",
    ingredients: [
      "1 c. Boiling Water",
      "1 pkg. Jello (any flavor)",
      "1 pkg. Cream Cheese",
      "1/3 c. Sugar",
      "1 large can Milnot",
      "1 tsp. Vanilla"
    ],
    procedure:
      "Mix together boiling water and jello until jello dissolves. In a separate bowl, mix together cream cheese and sugar. Add cream cheese mixture to jello and then add Milnot and vanilla. Pour in mold and chill until firm.",
    category: "Dessert"
  },
  {
    recipe_name: "Lasagne",
    ingredients: [
      "2 LB. Ground Beef",
      "1 large can crushed tomatoes",
      "1 small can tomato paste",
      "1 tsp. basil",
      "1 tsp. Oregano",
      "1 Tb. Garlic Salt",
      "24 oz. Cottage Cheese",
      "1 cup parmesan cheese",
      "16 oz. Mozzarella",
      "1 Box lasagna noodles"
    ],
    procedure:
      "Brown ground beef.  Cook noodles.  Mix beef, tomatoes, tomato paste, basil, oregano, and garlic salt together. Cook over medium heat for 30 minutes. Mix cottage cheese and parmesan together. Make 3 layers. Noodles, meat sauce, cottage cheese mixture and then mozzarella. Bake 45 minutes at 350. Let sit for 15 minutes.",
    category: "Entree"
  },
  {
    recipe_name: "Marlowe Chili",
    ingredients: [
      "2 lb. Ground Beef",
      "1-15oz. Can Tomato Sauce",
      "1-6oz. Can Tomato Paste",
      "2 T. Chili Powder",
      "1 ½ t. salt",
      "2-15 oz. Cans water",
      "1 onion",
      "Garlic Salt"
    ],
    procedure:
      "Brown beef in large skillet, drain well. Combine with remaining ingredients in slow cooker. Cover and cook on low 7-8 hours.",
    category: "Entree"
  },
  {
    recipe_name: "Mexican Casserole",
    ingredients: [
      "1 LB. Ground Beef",
      "1 medium Onion, chopped",
      "1 - 8 oz. Jar Mild Salsa",
      "½ c. Sour Cream",
      "1 can Cream of Chicken Soup",
      "8 flour tortillas, cut in 1 inch strips",
      "8 oz. Shredded Cheddar Cheese",
      "1 can Diced Mild Chiles"
    ],
    procedure:
      "Cook ground beef and onion together until beef is brown. Drain beef. Spread ½ cup salsa in bottom of ungreased 8x8 baking dish. Mix salsa, sour cream, soup and chilies. Layer ½ tortillas, then beef mixture, then soup mixture, then cheese. Repeat. Bake uncovered at 350 degrees until casserole is hot & bubbly, about 30 minutes. Let stand 10 minutes.",
    category: "Entree"
  },
  {
    recipe_name: "Mini Cheesecakes",
    ingredients: [
      "12 Vanilla Wafers",
      "2 8oz. Pkgs. Cream Cheese",
      "½ c. Sugar",
      "1 tsp. Vanilla",
      "2 Eggs"
    ],
    procedure:
      "Line muffin tins with liners. Place one vanilla wafer in each liner. Mix cream cheese, vanilla & sugar on medium speed until well blended. Add eggs. Mix well. Pour over vanilla wafers filling each ¾ full. Bake 25 minutes at 325 degrees. Remove from pan when cool. Chill. ** I usually top with sour cream mixed with sugar and then put fruit on. ** For a regular cheesecake, use a crust and bake for 40 minutes. Chill 3 hours.",
    category: "Dessert"
  },
  {
    recipe_name: "Marlowe Mostaccioli",
    ingredients: [
      "2 lb. Ground beef",
      "small onion, chopped",
      "40 oz. Spaghetti Sauce",
      "1 cup water",
      "16 oz. Mostaccioli noodles",
      "12 oz. Mozzarella cheese",
      "Parmesan cheese",
      "minced garlic",
      "Garlic salt (optional)"
    ],
    procedure:
      "In skillet cook meat, onions, minced garlic and garlic salt until meat is browned and onion is tender, stirring to break meat into chunks. Stir in spaghetti sauce and water; simmer 10 minutes. Meanwhile, cook mostaccioli as directed; drain. Mix the sauce with noodles in a 9x13 pan. Sprinkle Parmesan over mixture. Then top with mozzarella. Bake at 375 degrees for 30-45 minutes.",
    category: "Entree"
  },
  {
    recipe_name: "Al's Peach Pie",
    ingredients: [
      "5 c. fresh peaches, sliced",
      "1 cup sugar",
      "pastry for double 9-inch pie",
      "1/3  - ½ cup flour",
      "¼ - ½ tsp. cinnamon",
      "2 tbs. butter",
      "2 T. sugar"
    ],
    procedure:
      "Preheat oven to 425 degrees. Stir together flour,  1 cup sugar and cinnamon and set aside. Wash peel and slice fresh peaches. Mix together peaches with the combined dry ingredients. Turn into pastry-lined pie pan and dot with butter. Cover with top crust, seal the edges, and cut slits in the top. Sprinkle top with 2 tablespoons butter. Cover the edges with foil to prevent over browning; remove foil for the last 15 minutes of baking. Bake 35-45 minutes or until crust is brown and juice begins to bubble through the slits in the crust. ",
    category: "Dessert"
  },
  {
    recipe_name: "Pizza Dough",
    ingredients: [
      "1 PKG. Active Dry yeast",
      "1 c. warm water",
      "1 Tbsp. Sugar",
      "1 tsp. salt",
      "2 Tbsp. Vegetable oil",
      "2 ½ - 2 ¾ c. flour"
    ],
    procedure:
      "Dissolve yeast in warm water. Stir in remaining ingredients, beat with a spoon vigorously 20 strokes. Spread on greased cookie sheet, let stand for 5 minutes. Put on sauce and toppings. Bake at 425 for 20-25 mins. **Double recipe for thick crust.",
    category: "Entree"
  },
  {
    recipe_name: "Popovers",
    ingredients: ["1 c. Milk", "1 C. Flour", "1 Egg"],
    procedure:
      "Mix together, place in muffin tins, bake at 400 degrees for 30 minutes. **Can make plain or add other ingredients (cheese, orange rind, etc.)",
    category: "Side"
  },
  {
    recipe_name: "Potatoe Casserole",
    ingredients: [
      "2 lb. Frozen hash browns",
      "½ c. melted butter",
      "1 tsp. Salt",
      "¼ tsp. pepper",
      "½ c. chopped onion",
      "1 can Cream of chicken soup",
      "10 oz. Grated cheddar cheese",
      "2 c. crushed Corn Flakes",
      "¼ c. melted butter",
      "1 pt. Sour cream"
    ],
    procedure:
      "Mix everything together except ¼ c. butter and Corn Flakes. Mix butter and Corn Flakes and put on top. Bake 45 minutes at 350.",
    category: "Entree"
  }
];
