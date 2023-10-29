import React from 'react'
import PropTypes from 'prop-types';
import { Link,Outlet} from 'react-router-dom';
function Navbar(props){
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
              <a className="navbar-brand" href="/">{props.title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={'about/'}>About</Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link className="nav-link" href="/">Pricing</Link>
                      </li> */}
              
                    </ul>
                    {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                     <div className={`float-right form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode3} type="checkbox" role="switch" id="flexSwitchCheckChecked1" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked1">Enable Grey Mode</label>
                    </div>
                    <div className={`float-right form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckChecked2" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked2">Enable Blue Mode</label>
                    </div>


                    <div className={`float-right form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked3" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked3">Enable Dark Mode</label>
                    </div>
              </div>
           </div>
      </nav>
      
      <Outlet/>
      {/* <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>






      </Routes> */}
        </>

        
        
    );

}

// Validating prop types 

Navbar.propTypes = {title:PropTypes.string.isRequired}

export default Navbar;

