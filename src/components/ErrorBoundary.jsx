import React, {Component} from 'react'



class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false, 
      };
    }

    componentDidCatch(error, errorInfo) {   
      console.log(error, errorInfo); 
     }
  
    static getDerivedStateFromError(error) {       return {
       hasError: true 
      };  
    }
   
    render() {
      if (this.state.hasError)    {
      return <h1 style={{color:'red'}} className='section'>Something went wrong!!!</h1>;  
      
      }
      return this.props.children; 
    }
  }


  export default ErrorBoundary;