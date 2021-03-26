// At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). 

//Take a look at an example:

const tekkenCharacter = { player: 'Hwoarang', fightingStyle: 'Tae Kwon Doe', human: true }; 

// The above code defines a Tekken video game character object called tekkenCharacter. It has three properties, each of which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:

tekkenCharacter.origin = 'South Korea';

// This uses dot notation. If you were to observe the tekkenCharacter object, it will now include the origin property. Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:

tekkenCharacter['hair color'] = 'dyed orange'; 

// A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
};
  
  // Only change code below this line
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
  // Only change code above this line
  
  console.log(foods);