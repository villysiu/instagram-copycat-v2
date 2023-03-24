
import Title from './Title';
import Home from './Home';
import PersonActions from './PersonActions'

const Header = () =>{

    return(
        <div className="header" >
          
            <Title />
            <div className="header_buttons">
              <Home  />
              <PersonActions />
                
            </div>
            
        </div>
           
    )
 
}
export default Header;