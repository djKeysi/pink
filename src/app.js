import { ContextMenu } from './menu'
import './styles.css'
<<<<<<< HEAD
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
=======
import { ContextMenu } from './menu.js'

// Событие которое произойдет после загрузки DOM элементов
document.addEventListener('DOMContentLoaded', () => {
    const menu = new ContextMenu('.menu')

    // Событие при вызове контекстного меню
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        // Открытие меню и передача в метод координат клика
        menu.open(e)
    })
})
>>>>>>> 64cf6fd5444d9e41ba47daa62261b0970c0668fc
