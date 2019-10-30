import React, { Component } from 'react';
import './List.css';

class List extends Component {

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
            <hr></hr>
        </div>
    ));

      return (
        <div>
            <ul>
            {searchBox}
            {selectBox && <ul>{selectBox}</ul>}
            </ul>
        </div>
      );  
  }
}

export default List;