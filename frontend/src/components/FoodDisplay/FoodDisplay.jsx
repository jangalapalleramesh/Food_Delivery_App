// import React, { useContext } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItems from '../FoodItems/FoodItems';
// import './FoodDisplay.css'

// const FoodDisplay = ({category}) => {
//     const {food_list }= useContext(StoreContext);

//     // Ensure food_list is an array
//     if (!Array.isArray(food_list)) {
//         console.error('Expected food_list to be an array, but got:', food_list);
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="food-display">
//             <h2>Top Dishes Near By You</h2>
//             <div className="food-display-list">
//                 {food_list.map((item) => {
//                     if(category==="All" || category===item.category){
//                         return (
//                             <FoodItems 
//                                 key={item._id}  // Use a unique identifier as the key
//                                 id={item._id}
//                                 name={item.name}
//                                 image={item.image}
//                                 price={item.price}
//                                 description={item.description}
//                                 category={item.category}  // Ensure category is defined
//                             />
//                         )
//                     }
//                 }
                
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FoodDisplay;

import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItems from '../FoodItems/FoodItems';
import './FoodDisplay.css';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  

  // Ensure food_list is an array
  if (!Array.isArray(food_list)) {
    console.error('Expected food_list to be an array, but got:', food_list);
    return <div>Loading...</div>;
  }

  // Filter the food_list based on the category
  const filteredItems = category === "All" ? food_list : food_list.filter(item => item.category === category);

  return (
    <div className="food-display">
      <h2>Top Dishes Near By You</h2>
      <div className="food-display-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodItems 
              key={item._id}  // Use a unique identifier as the key
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
              category={item.category}
            />
          ))
        ) : (
          <p>No items available in this category.</p>  // Display a fallback message if no items match
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;

