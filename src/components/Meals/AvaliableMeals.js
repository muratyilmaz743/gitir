import classes from "./AvaliableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    }
]

const AvaliableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
    <li>
        <div>
            <h3>{meal.name}</h3>
            <p>{meal.price}</p>
            <span>{meal.description}</span>
        </div>
    </li>)
    
    return <section className={classes.meals}>
        <ul>
            {mealsList}   
        </ul>
    </section>
}

export default AvaliableMeals;