const fetchPlayer = async () => {
    const response = await fetch('http://localhost:3000/chelseaplayers/');
    const data = await response.json();
    //console.log(data);
    const descrip = document.getElementById('text');
    const descrip1 = document.getElementById('text1');
    const descrip2 = document.getElementById('text2');
    const player = document.getElementById('img');
    descrip.textContent = "Name: " + data.Name;
    descrip1.textContent = "Positon: " + data.Position;
    descrip2.textContent = "Age: " + data.Age;
    player.src = data.img;
}

const button = document.getElementById('nextPlayer')
button.addEventListener('click', () => {
  fetchPlayer().catch(error => console.log(error))
})

fetchPlayer().catch(error => console.log(error));
