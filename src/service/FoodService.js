class FoodService {
    _api = 'https://www.themealdb.com/api/json/v1/1/random.php';
    getResource = async (url) =>  {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getRandomMeals = async () => {
        const res = await this.getResource(this._api);
        return this._getData(res.meals[0])
    }

    _getData = (meal) => {
        return {
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb ? meal.strMealThumb : 'https://smehden.club/wp-content/uploads/2019/10/kartinka_net_foto_4_17144226.jpg',
            strInstructions: meal.strInstructions,
        }
    }
}

export default FoodService;