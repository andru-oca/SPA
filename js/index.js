
/*GENERADORM QUE ME PERMITE INYECTAR EN EL STATE DEL */




const route = e => {
    e = e || window.event ;
    window.history.pushState({}, '' , `#${e.target.innerText.toLowerCase()}`)  ; 
    handleLocation();
}


/*ROUTING*/

const routes = {
    404 : "./views/404.html",
    "/" : "./views/init.html",
    "" : "./views/init.html",
    home : "./views/init.html",
    about : "/.views/about.html",
    sales : "./views/sales.html",
    contact : "./views/contact.html"
}


const handleLocation = async ()=>{
    const path = window.location.hash.replace('#','');
    const route = routes[path] || routes[404];
    const html = await fetch(route).then(data => data.text());
    document.getElementById('root').innerHTML = html;

}


window.onpopstate = handleLocation;

window.route = route ; 

handleLocation();

