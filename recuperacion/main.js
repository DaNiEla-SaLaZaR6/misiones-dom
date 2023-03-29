const email=document.getElementById('email')
const usuario=document.getElementById('usuario')
const login=document.getElementById('boton')
const error =document.querySelector('.error')

const personas=async()=>{
    let url=await fetch ('https://jsonplaceholder.typicode.com/users')
    let respuesta = await url.json ()
    console.log(respuesta)
    localStorage.setItem('respuesta',JSON.stringify(respuesta))

}
personas()

login.addEventListener('click', () => {
    const dato=JSON.parse(localStorage.getItem('respuesta'))
    const verdadero=dato.find(element => element.username==usuario.value && element.email==email.value)
    if(verdadero){
        location.href='./index2.html'
    }else{
        error.style.display='block'
        setTimeout(()=>{
            error.style.display='none'
        },'2000')
    }
    if('click'){
        usuario.value=''
        email.value=''
    }


})