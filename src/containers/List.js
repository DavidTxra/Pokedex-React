import React, { Component } from 'react';
import './List.css';

class List extends Component {

    state = {
        data: [],  
    };
    
    async componentDidMount() 
    {
        try {
            let details = [];
            for (let i = 1; i <= 151; i++) {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await res.json();
                details.push(data.name)
               this.setState({ data: details });
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

  render() 
  {

      return (
        <div>
            <ul>
            { 
              this.state.data.map((item, i) => {
                return <div key={i}>
                    <img src={`/img-pokemon/${i+1}.png`} alt="pokemon"/>
                    <h3>{item}</h3>
                    <hr></hr>
                </div>
              })
            }
            </ul>
        </div>
      );  
  }
}

export default List;