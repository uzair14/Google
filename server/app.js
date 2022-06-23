const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

list = [
  {name: 'Arsenal FC', link: 'https://www.arsenal.com/'},
  {name: 'Chelsea FC', link: 'https://www.chelseafc.com/en'},
  {name: 'Crystal Palace FC', link: 'https://www.cpfc.co.uk/'},
  {name: 'Everton FC', link: 'https://www.evertonfc.com/'},
  {name: 'Leicester City FC', link: 'https://www.lcfc.com/'},
  {name: 'Liverpool FC', link: 'https://www.liverpoolfc.com/'},
  {name: 'Man City FC', link: 'https://www.mancity.com/'},
  {name: 'Man United FC', link: 'https://www.manutd.com/'},
  {name: 'Nottingham Forest FC', link: 'https://www.nottinghamforest.co.uk/'},
  {name: 'Tottenham FC', link: 'https://www.tottenhamhotspur.com/'}
]
footballTeams = [
    {Name: "Arsenal", SN: "Emirates", img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/160px-Arsenal_FC.svg.png" },
    {Name: "Chelsea", SN: "Stamford Bridge", img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/180px-Chelsea_FC.svg.png"},
    {Name: "Crystal Palace", SN: "Selhurst Park", img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Crystal_Palace_FC_logo.svg/160px-Crystal_Palace_FC_logo.svg.png"},
    {Name: "Everton", SN: "Goodison Park", img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/180px-Everton_FC_logo.svg.png"},
    {Name: "Leicester City", SN: "King Power Stadium", img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/180px-Leicester_City_crest.svg.png"},
    {Name: "Liverpool", SN: "Anfield", img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/180px-Liverpool_FC.svg.png"},
    {Name: "Manchester City", SN: "Etihad Stadium", img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/180px-Manchester_City_FC_badge.svg.png"},
    {Name: "Manchester United", SN: "Old Trafford", img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/190px-Manchester_United_FC_crest.svg.png"},
    {Name: "Nottingham Forest", SN: "The City Ground", img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/100px-Nottingham_Forest_F.C._logo.svg.png"},
    {Name: "Tottenham Hotspur", SN: "Tottenham Hotspur Stadium", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/120px-Tottenham_Hotspur.svg.png"},
    {Name: "West Ham United", SN: "London Stadium", img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/160px-West_Ham_United_FC_logo.svg.png"},
    {Name: "Wolverhampton Wanderers", SN: "Molineux Stadium", img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/180px-Wolverhampton_Wanderers.svg.png"}
]

chelseaPlayers = [
    {Name: "Mendy", Position: "GK", Age: "30", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p228286.png"},
    {Name: "Azpilicueta", Position: "CB", Age: "32", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p41328.png"},
    {Name: "Thiago Silva", Position: "CB", Age: "37", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p51090.png" },
    {Name: "Rudiger", Position: "CB", Age: "29", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p102380.png" },
    {Name: "James", Position: "RB", Age: "22", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p225796.png" },
    {Name: "Kante", Position: "CM", Age: "31", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p116594.png" },
    {Name: "Jorginho", Position: "CM", Age: "30", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p85955.png" },
    {Name: "Alonso", Position: "LB", Age: "31", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p82263.png"},
    {Name: "Mount", Position: "LW", Age: "23", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p184341.png" },
    {Name: "Havertz", Position: "RW", Age: "23", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png" },
    {Name: "Lukaku", Position: "ST", Age: "29", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p66749.png" }
]

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

// To do: Create a route for retrieving all quotes
app.get('/teams', (req, res) => {
  res.send(footballTeams);
})

app.get('/chelseaplayer', (req, res) => {
    const randomValue = chelseaPlayers[parseInt(Math.random()* chelseaPlayers.length)]
    res.send(randomValue);
  })

  app.get('/manCityPlayers', (req, res) => {
    const randomValue = manCityPlayers[parseInt(Math.random()* manCityPlayers.length)]
    res.send(randomValue);
  })

  app.get('/liverpoolPlayers', (req, res) => {
    const randomValue = liverpoolPlayers[parseInt(Math.random()* liverpoolPlayers.length)]
    res.send(randomValue);
  })

  app.get('/list', (req, res) => {
    res.send(list)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
