
import Title from './Title';
import Home from './Home';
import Info from './Info'
import PersonActions from './PersonActions'

const Header = () =>{

    return(
        <div className="header" >
          
            <Title />
            <div className="header_buttons">
              <Home  />
              <Info /> 
              <PersonActions />
                
            </div>
            
        </div>
           
    )
 
}
export default Header;