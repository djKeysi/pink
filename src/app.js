import { ContextMenu } from './menu'
import './styles.css'
console.log('ddd');

const contexmenu = new ContextMenu('.menu')

document.addEventListener( "contextmenu", function(e) {
    e.preventDefault()
    console.log(e);
    
    

//    //console.log(contexmenu)
//    //const menu = document.getElementById('custom-menu').style;
// //    contexmenu.display = 'block';  // Показываем наш контекстное меню!
   contexmenu.test(e)
 
   //contexmenu.classList.add('.open')

//    contexmenu.open()
  });
  contexmenu.add()