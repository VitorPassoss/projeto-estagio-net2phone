


const menuItens = document.querySelectorAll('.list-nav a[href^="#"]');


function TrocarItem(numero){
    let carrosel = document.querySelector('#carrosel')
    let indice = numero
    switch (indice) {
        case 0:
            carrosel.children[0].classList.add('visivel')
            carrosel.children[0].classList.remove('invisivel')
            carrosel.children[1].classList.add('invisivel')
            carrosel.children[2].classList.add('invisivel')
            carrosel.children[3].classList.add('invisivel')
            ViewButton(1,0)
           

            var button2 = document.querySelector('.button2')
            var button3 = document.querySelector('.button3')
            var button4 = document.querySelector('.button4')
            var button5 = document.querySelector('.button5')
            button2.style.boxShadow = 'none'
            button2.style.transform = 'translateY(5px)'
            
            

            setTimeout(function(){
              button2.style.boxShadow = '0px 5px black'
              button2.style.transform = 'translateY(0px)'
            }, 150);
            button2.style.backgroundColor = '#0dcaf0'
            button3.style.backgroundColor = '#e1e2e4'
            button4.style.backgroundColor = '#e1e2e4'
            button5.style.backgroundColor = '#e1e2e4'

          
            
            
            gsap.from("#Um", {
              opacity: 0,
              x: 10,
              delay: 0.2,
              duration: 0.2,
              stagger: 0.5,
            });
                

          break;
        case 1:
         
            carrosel.children[1].classList.add('visivel')
            carrosel.children[1].classList.remove('invisivel')
            carrosel.children[0].classList.add('invisivel')
            carrosel.children[2].classList.add('invisivel')
            carrosel.children[3].classList.add('invisivel')
            var button3 = document.querySelector('.button3')
            var button2 = document.querySelector('.button2')
            var button4 = document.querySelector('.button4')
            var button5 = document.querySelector('.button5')
            
            button3.style.boxShadow = 'none'
            button3.style.transform = 'translateY(5px)'
            
            setTimeout(function(){
              button3.style.boxShadow = '0px 5px black'
              button3.style.transform = 'translateY(0px)'
            }, 150);

            button3.style.backgroundColor = '#0dcaf0'
            button2.style.backgroundColor = '#e1e2e4'
            button4.style.backgroundColor = '#e1e2e4'
            button5.style.backgroundColor = '#e1e2e4'
            ViewButton(2,1)
            gsap.from("#Dois", {
              opacity: 0,
              x: 10,
              delay: 0.2,
              duration: 0.2,
              stagger: 0.5,
            });
            
           
                
  
          break;
        case 2:
            carrosel.children[2].classList.add('visivel')
            carrosel.children[2].classList.remove('invisivel')
            carrosel.children[0].classList.add('invisivel')
            carrosel.children[1].classList.add('invisivel')
            carrosel.children[3].classList.add('invisivel')
            var button4 = document.querySelector('.button4')
            var button3 = document.querySelector('.button3')
            var button2 = document.querySelector('.button2')
            var button5 = document.querySelector('.button5')
            button4.style.boxShadow = 'none'
            button4.style.transform = 'translateY(5px)'
            setTimeout(function(){
              button4.style.boxShadow = '0px 5px black'
              button4.style.transform = 'translateY(0px)'
            }, 150);

            button4.style.backgroundColor = '#0dcaf0'
            button2.style.backgroundColor = '#e1e2e4'
            button3.style.backgroundColor = '#e1e2e4'
            button5.style.backgroundColor = '#e1e2e4'
            ViewButton(3,2)

            gsap.from("#Tres", {
              opacity: 0,
              x: 10,
              delay: 0.2,
              duration: 0.2,
              stagger: 0.5,
            });
                

          break;
        case 3:
            carrosel.children[3].classList.add('visivel')
            carrosel.children[3].classList.remove('invisivel')
            carrosel.children[0].classList.add('invisivel')
            carrosel.children[1].classList.add('invisivel')
            carrosel.children[2].classList.add('invisivel')
            var button5 = document.querySelector('.button5')
            var button4 = document.querySelector('.button4')
            var button3 = document.querySelector('.button3')
            var button2 = document.querySelector('.button2')
            button5.style.boxShadow = 'none'
            button5.style.transform = 'translateY(5px)'
            setTimeout(function(){
              button5.style.boxShadow = '0px 5px black'
              button5.style.transform = 'translateY(0px)'
            }, 150);
            ViewButton(4,3)
            button5.style.backgroundColor = '#0dcaf0'
            button2.style.backgroundColor = '#e1e2e4'
            button3.style.backgroundColor = '#e1e2e4'
            button4.style.backgroundColor = '#e1e2e4'

            gsap.from("#Quatro", {
              opacity: 0,
              x: 10,
              delay: 0.2,
              duration: 0.2,
              stagger: 0.5,
            });
            break;
        default:
          alert('algum erro no carrosel por favor atualize a pagina')
          break;
      }
    
}




function ViewButton(valor,number){
  let var1 = document.querySelector(`#buttondiv${valor}`)
  
  let vartest1 = document.querySelector('#buttondiv1')
  let vartest2 = document.querySelector('#buttondiv2')
  let vartest3 = document.querySelector('#buttondiv3')
  let vartest4 = document.querySelector('#buttondiv4')

  let arraytest = [vartest1,vartest2,vartest3,vartest4]

  for(i = 0; i < 4; i++){
     
    if(i == number && var1.children[1].classList[0] == undefined){

      var1.children[1].classList.add('itemView')
    }else{
      arraytest[i].children[1].classList.remove('itemView')
    }
  }

 
   
  
  }



setInterval(function(){
  
    let numeroaleatorio =  Math.floor(Math.random() * 4);

    TrocarItem(numeroaleatorio)

  },8000)


  








gsap.from("#startFront", {
  opacity: 0,
  y: -10,
  delay: 0.5,
  duration: 0.5,
  stagger: 0.3,
});


gsap.from(".titulo", {
  opacity: 0,
  y: -10,
  delay: 0.5,
  duration: 0.5,
  stagger: 0.3,
});


gsap.from(".element2", {
  opacity: 0,
  x: 30,
  delay: 0.5,
  duration: 0.5,
  stagger: 0.3,
});


gsap.from(".texto", {
  opacity: 0,
  x: -10,
  delay: 0.5,
  duration: 0.5,
  stagger: 1.0,
});






gsap.from("#carrosel", {
  opacity: 0,
  x: -10,
  delay: 0.5,
  duration: 0.5,
});







function fazPost(url, body) {
  alert("formulario enviado")
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  return request.responseText
 
}


function cadastraUsuario() {
  event.preventDefault()
  let url = "https://go.pccom.pro/crmpro/api/v1/LeadCapture/cff267546e3b44a7f776c860f80f7516"
  let nome = document.getElementById("nome").value
  let email = document.getElementById("email").value
  let telefone = document.getElementById("telefone").value
  let desc = document.getElementById("desc").value

  body = {
      "name": nome,
      "emailAddress": email,
      "phoneNumber": telefone,
      "description": desc
  }

  fazPost(url, body)
}









menuItens.forEach(item => {
   item.addEventListener('click', scrollToId)
});

function scrollToId(event){
  event.preventDefault();
   
  const to = getScrollTopByHref(event.target) - 200
  
  scrollToPosition(to)
}

function getScrollTopByHref(element){
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
  smoothScrollTo(0, to , 250);
} 

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 100;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); 
};




