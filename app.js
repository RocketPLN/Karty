const transfer = ['ZOSTAJE', 'ZOSTAJE', 'Wypożyczeny', 'Przechodzi']
const ligi = ['Premier League', 'Bundesliga','Ligue 1','Serie A', 'Laliga', 'Reszta Świata']
const angilia = ['Arsenal', 'ManCity', 'Newcastle', 'Spurs', 'ManUtd', 'Liverpool', 'Brighton', 'Chelsea', 'Fulham', 'Crystal', 'AstonVilla', 'Leicester', 'Bournemouth', 'Leeds', 'WestHam', 'Everton', 'Nottinhgam', 'Southampton', 'Watford', 'Burnley']
const niemcy = ['Bayern', 'Freiburg', 'RBLiepzig', 'Eintracht', 'Union', 'Borussia', 'Wolfsburg', 'BorrusiaM', 'Werder', 'Mainz', 'Hoffenheim', 'Bayer', 'Koln', 'Augsburg', 'Hertha', 'Stuttgart', 'Bochum', 'Schalke']
const francja = ['PSG','Lens','Rennes','OM','Lorient','Monaco','Lille','Lyon','Nice','Clermont','Stade Reims','Toulouse','Troyes','Montpellier','Nantes','Brest','Auxerre','Ajaccio','RC Strasbourg','Angers']
const wlochy = ['Napoli','Milan','Juventus','Lazio','Inter','Atalanta','Roma','Udinese','Torino','Fiorentina','Bologna','Salernitana','Empoli','Monza','Sassuolo','Lecce','Spezia','Genoa','Sampdoria','Hellas Werona']
const hiszpania = ['Barca', 'Real', 'Sociedad', 'AtleticB', 'Atletico', 'Betis', 'Ossasuna', 'Villareal', 'Valencia', 'Mallorca', 'Girona', 'Almeria', 'Getafe', 'Espanyol', 'Celta', 'Sevilla', 'Cadiz', 'Elche', 'Rayo', 'Levante']
const reszta = ['Inter Miami', 'Sporting', 'Porto', 'Benfica', 'Blackburn rovers', 'Swansea City', 'Norwitch', 'Watford', 'Ajax', 'PSV', 'Feyenoord', 'AZ', 'Genk', 'Club Brugge', 'Gent', 'Anderlecht', 'Celtic', 'Los Angeles', 'NY RB', 'NY City', 'Charlotte']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function zakres(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

// var mi = prompt(`Podaj Minimalna Ocene: `)
// var ma = prompt(`Podaj Maksymalna Ocene: `)

// document.write(`<br> Min: ${mi} | Maks: ${ma}`)

function wa() {
    mi = ocen.min.value
    ma = ocen.max.value
    document.getElementById('min').innerHTML = mi
    document.getElementById('max').innerHTML = ma
    los()
}

function los() {

    let transf = getRandomInt(4)
    let ocena = zakres(mi, ma)
    x = getRandomInt(6)
    a = getRandomInt(20)
    b = getRandomInt(18)
    c = getRandomInt(21)

    document.getElementById('ocena').innerHTML = `Ocena: ${ocena}`

    if (transf >= 2) {
    document.getElementById('transf').innerHTML = `<br>${transfer[transf]} do:`
    document.getElementById('ligi').innerHTML = ` ${ligi[x]}<br>`
    
        if (x == 0 ) {
            document.getElementById('klub').innerHTML = `Klubu: ${angilia[a]}`
            document.getElementById('zdj').innerHTML = "<br><img src="+x+".png class='main'>"
        }
        if (x == 1 ) {
            document.getElementById('klub').innerHTML = `Klubu: ${niemcy[b]}`
            document.getElementById('zdj').innerHTML = "<br><img src="+x+".png class='bund'>"
        }
        if (x == 2 ) {
            document.getElementById('klub').innerHTML = `Klubu: ${francja[a]}`
            document.getElementById('zdj').innerHTML = "<br><img src="+x+".png class='main'>"
        }
        if (x == 3 ) {
            document.getElementById('klub').innerHTML = `Klubu: ${wlochy[a]}`
         document.getElementById('zdj').innerHTML = "<br><img src="+x+".png class='main'>"
        }
        if (x == 4 ) {
            document.getElementById('klub').innerHTML = `Klubu: ${hiszpania[a]}`
            document.getElementById('zdj').innerHTML = "<br><img src="+x+".png class='main'>"
        }
        if (x == 5) {
            document.getElementById('klub').innerHTML = `Klubu: ${reszta[c]}`
            document.getElementById('zdj').innerHTML = "<br><img src="+x+".png class='main'>"
        }
    }
    else {
        document.getElementById('transf').innerHTML = `<br>${transfer[0]}`
        document.getElementById('ligi').innerHTML = ''
        document.getElementById('klub').innerHTML = ''
        document.getElementById('zdj').innerHTML = ''
    }
}  