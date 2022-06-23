// let textbox = document.getElementById("inputspan");
const queries = document.getElementById('application');
const txt = document.getElementById('txt');

const getTeams = async () => {
    const res = await fetch('http://localhost:3000/list/');
    const t = await res.json();
    
    queries.innerHTML = 
    `<ul id="pt">
        
    </ul>`;
    const unList = document.getElementById('pt');
    for (query of t) {
        let li = document.createElement('li');
        li.innerHTML = `<a target="_blank" class="ptli" href="${query.link}">${query.name}</a>`;
        unList.appendChild(li);
    }
    
}

txt.addEventListener('click', () => {
    getTeams().catch(err => console.log(err));
})
