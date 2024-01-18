import { NavLink } from "react-router-dom";

// import './header.css';
function Header(){


     
     return(
          <>
               <header className=' flex justify-between'>
                    
                         <img className='logo w-24 md:w-32 lg:w-48 mt-3 ml-3'  src="../src/img/LOGO_GKS.png" alt="logo GKS" />

                         <nav>
                              <ul className=' flex '>
                                   <NavLink className=' m-2 '
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >GKS - KITE SCHOOL</NavLink>
                                   <NavLink className=' m-2 '
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >QUEM SOMOS</NavLink>
                                   <NavLink className=' m-2 '
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >NOSSAS AULAS</NavLink>
                                   <NavLink className=' m-2 '
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >PRAIAS</NavLink>
                                   <NavLink className=' m-2 '
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >CONTATO</NavLink>
                              </ul>
                         </nav>
                   
               </header>
          
          </>
     )
}

export default Header;