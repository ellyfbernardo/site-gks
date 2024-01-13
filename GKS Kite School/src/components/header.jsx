import './header.css';

function Header(){


     
     return(
          <>
               <header>
                    <div className='content'>
                         <img className='logo'  src="../src/img/LOGO_GKS.png" alt="logo GKS" />

                         <nav>
                              <ul>
                                   <li>GKS - KITE SCHOOL</li>
                                   <li>QUEM SOMOS</li>
                                   <li>NOSSAS AULAS</li>
                                   <li>PRAIAS</li>
                                   <li>CONTATO</li>
                              </ul>
                         </nav>
                    </div>
               </header>
          
          </>
     )
}

export default Header;