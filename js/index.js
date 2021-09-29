const burger = document.querySelector('.burger');
const mobileLinks = document.querySelector('.menu-nav');
burger.addEventListener('click', (e)=>{
    burger.classList.toggle('open');
    mobileLinks.classList.toggle('nav-links-animation');
});


// menu- top
const subMenuParent = document.querySelector('.nav-submenu-parent');
const subMenu = document.querySelector('.nav-submenu');
const subMenuLinks = document.querySelectorAll('.submenu__link')
let SubMenuTop = subMenuParent.offsetHeight;

subMenu.style.top = `${SubMenuTop}px`;

document.body.addEventListener('mouseover',(e)=>{
    if(e.target.classList.contains('nav-submenu-parent') || e.target.classList.contains('nav-submenu') || e.target.classList.contains('submenu__link_drop')||e.target.classList.contains('submenu__link')){
        subMenu.classList.add('nav-menu-show');
    
        if(e.target.classList.contains('submenu__link')){
            e.target.classList.add('submenu__link_active');
        }
        else{
            
            
            subMenuLinks.forEach(item=>{
                item.classList.remove('submenu__link_active');
            })
        }
    }
    else{
        subMenu.classList.remove('nav-menu-show');
        
  
    }
    
});