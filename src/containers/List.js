import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import './List.css';
import Details from './Details.js';

class List extends Component {

  handleClick = event => {
    console.log(event.currentTarget)
   }

    state = {
        data: [],
        value: '', 
        filterData: [] 
    };

    async componentDidMount() 
    {
        try {
            let details = [];
            for (let i = 1; i <= 151; i++) {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await res.json();
                details.push(data)
               this.setState({ data: details });
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    handleChange = e => {
        this.setState({
          filterData: this.state.data
        });
      };
    
      filterList = e => {
        const updatedList = this.state.data.filter(item => {
          return (
            item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
          );
        });
        this.setState({ filterData: updatedList });
      };

  render() 
  {

    const searchBox = (
        <input
          type="text"
          onClick={this.handleChange}
          onChange={this.filterList}
          id="search"
        />
    );

    const selectBox = this.state.filterData.map((option,i) => (
        <div key={i}>
            <img src={`/img-pokemon/${option.id}.png`} alt="pokemon"/>
            <h3>{option.name}</h3> 
            <Route path={option.name} component={Details} />
            <BrowserRouter>
              <Link to="/d">
                En savoir plus{" "}
              </Link>
            <Switch>  
              <Route exact path="/d" render={() => 
              <div>
                  <p>Poids : {option.weight}</p>
                  <p>Taille : {option.height}</p>
                  <p>Type : {option.types[0].type.name}</p>
                  <p>Attaque : {option.moves[0].move.name}</p>
                  <div className="stats">
                  <p>Stats</p>
                  <small>{option.stats[0].stat.name} : {option.stats[0].base_stat}</small><br/>
                  <small>{option.stats[1].stat.name} : {option.stats[1].base_stat}</small><br/>
                  <small>{option.stats[2].stat.name} : {option.stats[2].base_stat}</small><br/>
                  <small>{option.stats[3].stat.name} : {option.stats[3].base_stat}</small><br/>
                  <small>{option.stats[4].stat.name} : {option.stats[4].base_stat}</small><br/>
                  <small>{option.stats[5].stat.name} : {option.stats[5].base_stat}</small><br/>
                </div>  
              </div>
            } 
            />
            </Switch>
        </BrowserRouter>
            <hr></hr>
        </div> 
    ));

      return (
          <div>
            <p>Recherche :</p>
            {searchBox}
            {selectBox && <div>{selectBox}</div>}
          </div>
      );  
  }
}

export default List;