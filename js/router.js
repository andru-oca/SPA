

const route = () => {
/* 
SE LE COLOCA EN EL PUSH Y SE LLAMA A OTRA FUNCION PARA MANEJAR
SU RUTA O PATH
*/
 e = window.event ;
 window.history.pushState({}, '' , `${e.target.innerText.toLowerCase()}`)  ; 
 handleLocation();

}


/*ROUTING*/

const routes = {
    404 : "./views/404.html",
    "/" : "./views/init.html",
    "/home" : "./views/init.html",
    "/about" : "/.views/about.html",
    "/sales" : "./views/sales.html",
    "/contact" : "./views/contact.html",

}


const handleLocation = async ()=>{
    const path = window.location.pathname;
    console.log(path);
    const route = routes[path] || routes[404];
    const html = await fetch(route).then(data => data.text());
    document.getElementById('root').innerHTML = html;

}


window.onpopstate = handleLocation;

window.route = route ; 

handleLocation();

