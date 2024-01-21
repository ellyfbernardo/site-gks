import { NavLink } from "react-router-dom";
import './header.css';

function Header(){


     
     return(
          <>
               <header className='content'>
                    
                         <img className='logo'  src="../src/img/LOGO_GKS.png" alt="logo GKS" />

                         <nav>
                              <ul className=''>
                                   <li><NavLink className=''
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >GKS - KITE SCHOOL</NavLink></li>
                                   <li><NavLink className=''
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >QUEM SOMOS</NavLink></li>
                                   <li><NavLink className=''
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >NOSSAS AULAS</NavLink></li>
                                   <li><NavLink className=''
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >PRAIAS</NavLink></li>
                                   <li><NavLink className=''
                                        activeClassName="is-active"
                                        to="/"
                                        exact
                                        >CONTATO</NavLink></li>
                              </ul>
                         </nav>
                   
               </header>
          
          </>
     )
}

export default Header;