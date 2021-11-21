import { Component } from 'react'
import './addForm.scss'
import '../buttons/buttons.scss'


class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strMeal: '',
            strInstructions: '',
            active: false
        }
    }
    onChangeValue = (e) => {
        this.setState({
             [e.target.name]: e.target.value 
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
         if (this.state.strMeal.length < 3 || !this.state.strInstructions === 0 ) return;
        this.props.onAdd(this.state.strMeal, this.state.strInstructions);
        this.setState({
            strMeal: '',
            strInstructions: ''
        })
    }

    onActive = () => {
        this.setState(({active}) => ({
            active: !active
        }))
    }

    render () {

        const {strMeal, strInstructions, active} = this.state;

        
        let classNames = "form";
        if (active) {
            classNames += ' form-active';
        }

        let overlay = "overlay";
        if (active) {
            overlay += ' overlay-active';
        }

        return (
            <>
            <div className={overlay} >
            <div className="overlay__close" onClick={this.onActive}>&times;</div>
                <form action="#" className={classNames}  onSubmit = {this.onSubmit}>
                    <h3 className="form__title">Add custom dish</h3> 
                    <div class="form__close" onClick={this.onActive}>&times;</div>
                    <input className="form__item-name" type="text" name="strMeal" placeholder="Dish title" onChange={this.onChangeValue} value={strMeal}/>
                    <textarea className="form__text-area" name="strInstructions" placeholder="Dish description..." onChange={this.onChangeValue} value={strInstructions}/>
                    <input className="form__btn" type="submit" value="Add custom dish"/>
                </form>
            </div>
            <button type="button" className="buttons buttons-form buttons-active" onClick={this.onActive}>Add custom dish</button>

            
            </>
        )
    }
}

export default AddForm
