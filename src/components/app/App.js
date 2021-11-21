import {Component} from 'react'
import MenuItems from '../menuItems/menuItems';
import FoodCard from '../maimInfoCard/mainInfoCard'
import './app.scss'
import AddForm from '../form/addForm'
import AddCard from '../Favourites/addCard/addCard'

import {
  
  HashRouter,
  Route,
  Switch
} from "react-router-dom";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {strMeal: '',strInstructions: '', id: '1'},
            {strMeal: '',strInstructions: '', id: '2'},
            {strMeal: '',strInstructions: '', id: '3'}
        ]
    }
    this.maxId = 4;
  }

  addItem = (strMeal, strInstructions,strMealThumb,id) => {
    const newItem = {
        strMeal, 
        strInstructions,
        strMealThumb: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

 

  render() {
    // const data = this.data;
    return (
      <HashRouter>
        
          <div className="App">
          
          <MenuItems/>
          
          <main>
            <Switch>
              <Route exact path="/"><FoodCard/></Route>

              <Route exact path="/favorites">
                <>
                  
                  <AddCard
                  // data={data}
                  // onDelete={this.deleteItem}
                  /> 
                   <AddCard/>
                   <AddCard/>
                   <AddCard/>
                   <AddCard/>
                   <AddCard/>
                </>
                <AddForm onAdd={this.addItem}/>
                </Route>
            </Switch>
          </main>
         
        </div>
      </HashRouter>
    );
  }
}

export default App;
