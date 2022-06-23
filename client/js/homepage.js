// let textbox = document.getElementById("inputspan");
const results = document.getElementById('searchForm');
const txt = document.getElementById('txt');

const getTeams = async () => {
    const response = await fetch('http://localhost:3000/results/');
    const t = await response.json();
    results.innerHTML = `<ul id="pt"> </ul>`;
    const ptlist = document.getElementById('pt');
    for (query of t) {
        let el = document.createElement('li');
        el.innerHTML = `<a target="_blank" class="ptli" href="${query.link}">${query.name}</a>`;
        ptlist.appendChild(el);
    }
    
}

txt.addEventListener('click', () => {
    getTeams().catch(err => console.log(err));
})
