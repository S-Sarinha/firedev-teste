import React from 'react';
//import Carousel from 'react-elastic-carousel'
import Navbar from '../components/navbar'
import Rotas from './rotas'
import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'


class App extends React.Component {
  render(){
    return(
      <>
        <Navbar />
        <div className="Container">      
            <Rotas/>
        </div> 
      </>

        
    )
  }
}
 
export default App;
