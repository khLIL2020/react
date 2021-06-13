

  class Welcome extends React.Component {
    state = {
     fullName:"Khalil BEN ZINA", bio: "my name is Khalil", imgSrc: IMG,profession:"bataal",button: false,
    };
    render() {
      return( 
      
      <div>
      <h1>{this.state.fullName}</h1>)
   <img src={this.state.imgSrc}/>
   <h1>{this.state.bio}</h1>)
   <h1>{this.state.profession}</h1>)
     </div>
      
      
      )}
   }
   export default Welcome;