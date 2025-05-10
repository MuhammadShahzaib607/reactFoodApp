// API ==>> "https://dummyjson.com/recipes"
import { useEffect, useState } from 'react';
import { Card } from "./card.jsx";

export const CardsContainer = () => {
    const [foodData, setFoodData] = useState([]);
    const [allFoodData, setAllFoodData] = useState([]); // Backup for original data

    // Fetch data on mount
    useEffect(() => {
        fetch(`https://dummyjson.com/recipes`)
            .then((res) => res.json())
            .then((resJson) => {
                setFoodData(resJson.recipes);
                setAllFoodData(resJson.recipes); // Backup
            })
            .catch((err) => console.log(err));
    }, []);
      
    // Filter by category
    const selectCategory = (category) => {
        if (category === "All") {
            setFoodData(allFoodData);  // Reset to original data
        } else {
            const filteredData = allFoodData.filter((item) => {
                return item.mealType.includes(category);
            });
            setFoodData(filteredData);
        }
    };
    
    const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snack"];

    return (
        <>
            <div className='searchInputContainer'>
                <input type="text" placeholder='What do you want to eat today?' />
                <button className='searchBtn'>Search</button>
            </div>

            <div className="categories">
                {categories.map((category) => (
                    <div 
                        className="category" 
                        key={category} 
                        onClick={() => selectCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>

            <div className='cardsContainer'>
                {foodData.map((item) => (
                    <Card
                        key={item.id}  // Unique key
                        foodName={item.name}
                        reviews={item.reviewCount}
                        img={item.image}
                        distance={item.cuisine}
                        stars={item.rating}
                    />
                ))}
            </div>
        </>
    );
};
