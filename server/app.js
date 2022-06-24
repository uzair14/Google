const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

results = [
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
    {Name: "Kante", Position: "CDM", Age: "31", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p116594.png" },
    {Name: "Jorginho", Position: "CM", Age: "30", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p85955.png" },
    {Name: "Alonso", Position: "LB", Age: "31", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p82263.png"},
    {Name: "Mount", Position: "LW", Age: "23", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p184341.png" },
    {Name: "Havertz", Position: "RW", Age: "23", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png" },
    {Name: "Lukaku", Position: "ST", Age: "29", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p66749.png" }
]

manCityPlayers = [
  {Name: "Ederson", Position: "GK", Age: "28", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png"},
  {Name: "Zinchenko", Position: "LB", Age: "25", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p206325.png"},
  {Name: "Stones", Position: "CB", Age: "28", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p97299.png" },
  {Name: "Cancelo", Position: "CB", Age: "28", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p121145.png" },
  {Name: "Walker", Position: "RB", Age: "32", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png" },
  {Name: "De Bruyne", Position: "CM", Age: "30", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png" },
  {Name: "Foden", Position: "CM", Age: "22", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209244.png" },
  {Name: "Rodri", Position: "CDM", Age: "26", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p220566.png"},
  {Name: "Sterling", Position: "LW", Age: "27", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p103955.png" },
  {Name: "Mahrez", Position: "RW", Age: "31", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p103025.png" },
  {Name: "Grealish", Position: "LW", Age: "26", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p114283.png" }
]

liverpoolPlayers = [
  {Name: "Alisson", Position: "GK", Age: "29", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p116535.png"},
  {Name: "Van Dijk", Position: "CB", Age: "30", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png"},
  {Name: "Gomez", Position: "CB", Age: "25", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p171287.png" },
  {Name: "Matip", Position: "CB", Age: "30", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p60914.png" },
  {Name: "Robertson", Position: "LB", Age: "28", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p122798.png" },
  {Name: "Fabinho", Position: "CDM", Age: "28", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p116643.png" },
  {Name: "Henderson", Position: "CM", Age: "32", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p56979.png" },
  {Name: "Keita", Position: "CM", Age: "27", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p175592.png"},
  {Name: "Mane", Position: "LW", Age: "30", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p110979.png" },
  {Name: "Salah", Position: "RW", Age: "30", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png" },
  {Name: "Firmino", Position: "CF", Age: "30", img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p92217.png" }
]

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/results', (req, res) => {
  res.send(results)
})

// To do: Create a route for retrieving all quotes
app.get('/teams', (req, res) => {
  res.send(footballTeams);
})

app.get('/chelseaplayers', (req, res) => {
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
