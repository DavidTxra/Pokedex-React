class Pokemon {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.type = data.types[0].type.name;    
    }
  }
  
  export default Pokemon;