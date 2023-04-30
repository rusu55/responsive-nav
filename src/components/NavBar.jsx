import React, {useState, useRef, useEffect} from 'react';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');

    const openNav = useRef();

    useEffect(() =>{
        openNav.current.addEventListener('click',  handleSubMenu);        
        return () => openNav.current.removeEventListener('click', handleSubMenu);        
    }, [])

    const handleSubMenu = (event) =>{
        if(event.target.hasAttribute('data-toggle') && window.innerWidth <= 991){
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            
            if(menuItemHasChildren.classList.contains('active')){
                colapseSubMenu()
            }
            else{
                menuItemHasChildren.classList.add('active')
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    };

    const colapseSubMenu = () =>{
        openNav.current.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        openNav.current.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    };
    
    const handleToggle = () =>{
        setToggle(!toggle);
    };

  return (
    <section className='navbar'>
       
            <div className="navbar__main">
                <div className="logo">
                    <a href="">LOGO</a>
                </div>
                <div onClick={handleToggle} className="open-nav-menu">
                    <span></span>
                </div>
                <div class={toggle ? 'menu-overlay active' : 'menu-overlay'}>
                </div>
                {/* NAVIGATION */}
                    <nav  ref={openNav} className={toggle ? 'nav-menu open' : 'nav-menu'}>
                        <div onClick={handleToggle} class="close-nav-menu">
                           <span>Close</span>
                        </div>
                        <ul className="menu">
                            <li className="menu-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">About</a>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#" data-toggle="sub-menu">Services<i className="plus"></i></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="#">Home 1</a></li>
                                    <li className="menu-item"><a href="#">Home 2</a></li>
                                    <li className="menu-item"><a href="#">Home 3</a></li>
                                    <li className="menu-item"><a href="#">Home 4</a></li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                {/* NAVIGATION */}
            </div>
        
    </section>
  )
}

export default NavBar