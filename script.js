let s = document.querySelector('.switch')
let b = document.querySelector('.bulb') 
let bk = document.querySelector('.bulb i')
let bo = document.querySelector('.light')
bo.addEventListener('click', function(fn){
    console.log(fn)
    if(s.style.backgroundColor == 'white' && fn.target.className =='switch' ){
        s.style.backgroundColor = 'rgb(18, 238, 18)'
        b.innerHTML = '<i class="ri-lightbulb-flash-line"></i>'
        bk.style.color = 'yellow'
        bo.style.background = 'radial-gradient( 300px at center,rgba(207, 206, 99, 1), rgba(76, 82, 45, 1),black)'
       

    }else{
        s.style.backgroundColor = 'white'
        b.innerHTML = '<i class="ri-lightbulb-flash-fill"></i>'
        bo.style.background = 'radial-gradient(rgba(27, 19, 19, 1),black)'
        

    }
  

})