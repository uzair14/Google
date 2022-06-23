/*const fetchTeams = async () => {
    const response = await fetch('http://localhost:3000/teams');
    const data = await response.text();
    console.log(data);
    const descrip = document.getElementById('text');
    descrip.textContent = data;
}*/

function getAllTeams(){
    fetch(`http://localhost:3000/teams`)
        .then(r => r.json())
        .then(appendTeams)
        .catch(console.warn)
};

function appendTeams(teams){
    teams.forEach(appendTeam);
};

function appendTeam(teamData){
    const teams = document.createElement('section');
    const bckimg = document.createElement('img')
    bckimg.src = teamData.img
    teams.innerText = teamData.Name + "\n \n"
    const teamsList = document.querySelector('article');
    teams.append(bckimg);
    teamsList.append(teams);
}

  getAllTeams();

