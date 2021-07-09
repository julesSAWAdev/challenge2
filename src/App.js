import React, { Component} from 'react'; 

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items: [],
      isLoaded: false,
      albumID: '',
    }


  }
  handleSubmit = (event) =>{
      event.preventDefault()
      const data = this.state
      console.log(data)

      fetch('https://jsonplaceholder.typicode.com/albums/'+ data.albumID +'/photos')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result
        });
      });

      //console.log(result);
    }
    handleInputChange = (event) =>{
      event.preventDefault()
      //console.log(event)
      //console.log(event.target.name)
      //console.log(event.target.value)
      this.setState({
        [event.target.name]: event.target.value
     })
    }

  

  render(){
    const {albumID} = this.state;
    var {isLoaded, items } = this.state;
    return(
        
     <div>
      <center>
       <h1>Type the Album ID</h1>
       <form onSubmit={this.handleSubmit}>
       <p><input type='number' placeholder='Album ID' name='albumID' onChange={this.handleInputChange}/></p>
       <p><button>View Album</button></p>
       </form>
      </center>
        {(() => {
        if (isLoaded) {
          return (
            <div>{items.map(item => (

          <ul key={item.id}>
            Title: {item.title} 
            <br/>
            <img src={item.url} width="100px" height="100px" alt="BigCo Inc. logo"/>
          </ul>

          ))}</div>
          )
        }    
      })()}
     </div>
     ) 
    
    
  }
}

export default App;
