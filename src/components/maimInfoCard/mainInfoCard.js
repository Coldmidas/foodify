import {Component} from 'react'
import './mainInfoCard.scss'
import FoodService from '../../service/FoodService'
import Spinner from '../spinner/Spinner'

class FoodCard extends Component {

    
    state = {
        meal: {},
        loading: true
    }

    foodService = new FoodService();

    onLoad = (meal) => { 
        this.setState({meal, loading: false})
    }

    onLoadingUpdate = () => {
        this.setState({
            loading: true
        })
        
    }

    randomMeals = () => {
        this.onLoadingUpdate();
        this.foodService
            .getRandomMeals()
            .then(this.onLoad)        
            
    }
    componentDidMount() {
        this.randomMeals();
    }

        
    
    render() {
        const {meal,loading} = this.state;
        
        return (
            <div className="CardWrapper">
                {loading ? <Spinner/> : <ViewBox meal={meal}/>}
                <div className="buttons__wrapper">
                    <button className="buttons buttons__skip" onClick = {this.randomMeals}>Skip</button> 
                    <button type="button" className="buttons buttons__like">Like</button>
                </div>  
            </div>  
        )
    }

}

const ViewBox = ({meal}) => {
    const  {strMeal,strInstructions,strMealThumb,} = meal;
       
    return (
        <div className="card">
            <img src={strMealThumb} className="card__picture" alt={strMeal}/>
            <div className="card__body">
                <h3 className="card__title">{strMeal}</h3>
                <p className="card__text">{strInstructions}</p>
            </div>
        </div>
            
        
    )
}


export default FoodCard

