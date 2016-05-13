/*--------------------------*/
/*etecetera variables ETC...*/


var dbt = 0;
var stt = 0;
var ftt = 0;
var tvt = 0;
var dtt = 0;
var dtd = 0;

var seMove = true;
var swMove = true;
var nehMove = true;
var nwMove = true;
var northMove = true;
var southMove = true;
var eastMove = true;
var westMove = true;
var upMove = true;
var downMove = true;

var points = 0;
var tokens = 0;

var yourName = "userName";
var talkingTo = "noOne";

var previousCommand = "";
var previousPoints = 0;
var previousTokens = 0;


/*--------------------------*/
/*EventHold! We made Events!*/


var events = {};

events["softBallT"] = {locationID: "001.2", active: "false", chance: 0.33, functionIPlay: "softBallEvent", chanceFunction: "true", playable: "true", points: 5, tokens: 0}
events["gateSwapInfo"] = {locationID: "005.1", active: "false", chance: 1, functionIPlay: "gateO/CEvent", chanceFunction: "false", playable: "true", points: 1, tokens: 0}


/*--------------------------*/
/*Bad security Negate Points*/


var previousSecurity = 0;
var security = 0;



/*--------------------------*/
/*Location...... You are here*/




var currentLocation = "000";




/*--------------------------*/
/*Location variable holder #*/




var locations = {};



locations["TheCircle"] = {locationID: "000", NE: "000", NW: "000", SE: "000", SW: "000", N: "001", E: "003", W: "000", S: "001.1", U: "000.1", D: "000", title: "CIRCLE", desc: "You are standing upon a concrete platform in the center of a gravel circle filled with a number of large trees. This gravel circle is surrounded by  a low brick wall and lies within a large park. To the south there is a volleyball court and past it there are some basketball hoops. To the north there is a soccer field.  To the west you can reach Adams street and to the east you can see the facade of East Side High School.", img: "http://i.imgur.com/40tJ3m7.png", width: "30vw", look: "none", WN: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NSW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NNW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High."};



locations["UpATree"] = {locationID: "000.1", NE: "000", NW: "000", SE: "000", SW: "000", N: "000", E: "000", W: "000", S: "000", U: "000.1", D: "000", title: "UP A TREE", desc: "You nimbly climb the tree and seat yourself on a sturdy thick branch. You are not the first person to enjoy the view of the park from here, there are a number of carvings on the tree left by previous visitors. There is also a small hole in the tree.", img: "http://i.imgur.com/IVTEc23.jpg", width: "30vw", look: " You are sitting on a sturdy thick branch of a tree in Independence Park. You are not the first person to enjoy the view of from here, there are a number of carvings on the tree left by previous visitors. There is also a small hole in the tree.", UN: "The branches are not sturdy enough to climb any higher."};


locations["holeStorage"] = {locationID: "-0-0", NE: "", NW: "", SE: "", SW: "", N: "7-2", E: "", W: "", S: "", U: "", D: "", title: "The dark hole...", desc: "The hole is dark... you cant get out... however you can move north.", width: "30vw", look: "none"};

locations["oldBatCave"] = {locationID: "7-2", NE: "", NW: "", SE: "", SW: "", N: "", E: "", W: "", S: "-0-0", U: "", D: "", title: "The darker hole...", desc: "There is a old man in here..?", width: "30vw", look: "none"};


locations["SoccerField"] = {locationID: "001", NE: "001", NW: "001", SE: "001", SW: "001", N: "001.2", E: "004", W: "001", S: "000", U: "001", D: "001", title: "SOCCER FIELD", desc: "You are standing on the sidelines of a soccer field. There are no games currently being played.", img: "http://i.imgur.com/SPY8pCJ.jpg", width: "30vw", look: "none", WN: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NSW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NNW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High."};


locations["VolleyBallCourts"] = {locationID: "001.1", NE: "001.1", NW: "001.1", SE: "001.1", SW: "001.1", N: "000", E: "001.1", W: "001.1", S: "002", U: "001.1", D: "001.1", title: "VOLLEYBALL COURT", desc: "You are standing on the edge of a paved volleyball court. There are a number of local Ironbound residents playing a pick-up game.", width: "30vw", img: "http://i.imgur.com/geOstXb.png", look: "none", WN: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NSW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NNW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High."};


locations["SoftballField"] = {locationID: "001.2", NE: "001.2", NW: "001.2", SE: "001.2", SW: "001.2", N: "001.2", E: "001.2", W: "001.2", S: "001", U: "001.2", D: "001.2", title: "SOFTBALL FIELD", desc: "On the other side of a tall fence, the East Side Softball team is practicing for their game against Shabazz tomorrow.", img: "http://i.imgur.com/cQnjSzF.png", width: "30vw", look: "none", WN: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NSW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NNW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High."};


locations["DeosHotDog"] = {locationID: "004.1", NE: "004.1", NW: "004.1", SE: "004", SW: "004.1", N: "004.1", E: "004", W: "004.1", S: "004", U: "004.1", D: "004.1", title: "DEO'S HOT DOG TRUCK", desc: "You are standing at the side of Deo’s Hotdog truck. The aroma of frankfurters and french fries wafts through the air. Through the order window, you can see Angel, the hotdog guy, diligently preparing food. Next to the order window an extensive menu is hung.", img: "http://i.imgur.com/ILetwUh.jpg", width: "30vw", look: "none", NN: "You walk farther north on Van Buren until you hit Walnut Street. You don’t want your visit to East Side High School to end so you turn around and head back."};


locations["BasketBallCourts"] = {locationID: "002", NE: "002", NW: "002", SE: "002", SW: "002", N: "001.1", E: "002", W: "002", S: "002", U: "002", D: "002", title: "BASKETBALL COURT", desc: "There are a few Ann Street school students playing a game of H-O-R-S-E.", width: "30vw", img: "http://i.imgur.com/H3DbZj6.png", look: "none", EN: "An iron gate blocks your way out of the park.", WN: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NSW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High.", NNW: "Going west would lead you out of the park and onto Adams Street and away from East Side High School. After careful consideration you decide to stick around and visit East Side High."};


locations["VanBurenSt"] = {locationID: "003", NE: "003", NW: "003", SE: "003", SW: "003", N: "004", E: "006", W: "000", S: "005", U: "003", D: "003", title: "VAN BUREN STREET", desc: "After carefully crossing the street you are standing on the sidewalk in front of East Side High School. There are a number of red doors that give access to the building. To the west there is a large sign indicating the entrance to Independence Park.", img: "http://i.imgur.com/KwxUVNn.png", width: "30vw", look: "none"};

locations["VanBurenStN"] = {locationID: "004", NE: "004", NW: "004.1", SE: "004", SW: "004", N: "004", E: "005.4", W: "001", S: "003", U: "004", D: "004", title: "CORNER OF VAN BUREN AND NEW YORK AVE", desc: "You are on Van Buren Street just north of East Side High School. To the west there is an entrance to the park that leads to a soccer field. To the east there are beautiful residential homes that face the park and must be at least a hundred years old. Van Buren Street continues to the north. There is a hot dog truck parked next to the softball field. ", img: "http://i.imgur.com/0Jkf8cc.jpg", width: "30vw", EN: "It would be impolite and a general bad idea to enter someone's house uninvited.", look: "none"};

locations["VanBurenStS"] = {locationID: "005", NE: "005", NW: "005", SE: "005", SW: "005", N: "003", E: "005.1", W: "005", S: "005", U: "005", D: "005", title: "CORNER OF VAN BUREN AND NICHOLS STREET", desc: "You are standing at the corner of Van Buren and Nichols Streets. Van Buren StSreet runs north and south from this point, Nichols Street heads east and Independence Park lies to the west. At your feet a quarter is lying on the ground.", width: "30vw", img: "http://i.imgur.com/sU5jIWa.png", look: "none", WN: "An iron gate blocks your way into the park.", SN: "You walk farther south on Van Buren until you hit the corner of East Kinney Street. You don’t want your visit to East Side High School to end so you turn around and head back."};


locations["NicholsSt"] = {locationID: "005.1", NE: "005.1", NW: "005.1", SE: "005.1", SW: "005.1", N: "005.1", E: "005.3", W: "005", S: "005.1", U: "005.1", D: "005.1", title: "NICHOLS ST", desc: "You are standing in the middle of Nichols Street between Van Buren and Pulaski Street. To the north is a high chainlink fence that blocks the way into an alley that lies between East Side’s A-Building and C-Building. There is a large closed gate in the middle of the fence. To the Northeast there is a brown metal door. To the south lies St. Casmir’s Church.", width: "30vw", img: "http://i.imgur.com/SpnErSo.jpg", look: "none", NN: "The gate is closed."};



locations["NicholscornerPulaski"] = {locationID: "005.3", NE: "005.3", NW: "005.3", SE: "005.3", SW: "005.3", N: "005.4", E: "005.3", W: "005.1", S: "005.3", U: "005.3", D: "005.3", title: "Corner of Nichols and Pulaski Street", desc: "You are standing at the southeast corner of East Side High School where Nichols and Pulaski Streets meet. To the southwest the facade of St. Casimirs Church rises skyward and to the east is the entrance to Linda’s Portuguese Bakery.", width: "30vw", img: "http://i.imgur.com/sU5jIWa.png", look: "none", EN: "As you walk through the threshold of Linda’s Bakery the aroma of fresh bread wafts through your nostrils. You close your eyes and inhale to relish the smell. When you reopen them you see the long line ahead of you and decide to return later.", NSW: "The door to the church is locked.", SN: "You walk further south on Pulaski until you hit East Kinney Street. You don’t want your visit to East Side High School to end so you turn around and head back."};



locations["pulaskiNewYork"] = {locationID: "005.4", NE: "005.4", NW: "005.4", SE: "005.4", SW: "005.4", N: "005.4", E: "005.4", W: "004", S: "005.3", U: "005.4", D: "005.4", title: "Corner of New York Ave and Pulaski Street", desc: "There is a greenhouse in the state of disrepair here at the southwest corner of Pulaski Street and New York Avenue. To the south further down Pulaski Street you can see East Side High School.", width: "30vw", img: "http://i.imgur.com/sU5jIWa.png", look: "none", NSW: "Even if the front door of this spooky house wasn’t boarded up you probably wouldn’t have the courage to go inside."};



locations["Alley"] = {locationID: "005.2", NE: "005.2", NW: "005.2", SE: "005.2", SW: "005.2", N: "005.2", E: "005.2", W: "005.2", S: "005.1", U: "005.2", D: "005.2", title: "ALLEY", desc: "This colorfully muraled alley lies between two of the three buildings that make up East Side High School. There are two garage doors on the eastern wall and at the far end of the alley there is a bank of red doors that give entrance to A-Building.", width: "30vw", img: "http://i.imgur.com/BBOSTHm.jpg", look: "none"};


locations["lobbyFoyer"] = {locationID: "006", NE: "006", NW: "006", SE: "006", SW: "006", N: "006", E: "007", W: "003", S: "006", U: "006", D: "006", title: "LOBBY FOYER", desc: "You are standing in a small vestibule between two sets of red door that give entrance into East Side High School. There is a large mural of a torch on the north wall and there is a ticket window set in the south wall.", img: "http://i.imgur.com/FmEDwsl.jpg", width: "30vw", look: "none"};


locations["westLobby"] = {locationID: "007", NE: "007", NW: "007", SE: "007.5", SW: "007", N: "007", E: "008", W: "006", S: "009.1", U: "007", D: "007", title: "MAIN LOBBY", desc: "You are at the western end of East Side High School’s main lobby. Sitting attentively at the front desk is a security guard. There is a large painted plywood sculpture prominently standing next to the desk. The security guard eyes you carefully.", width: "30vw", img: "http://i.imgur.com/Y8b5TCO.jpg", look: "none"};

locations["alleyVesibule"] = {locationID: "007.5", NE: "008", NW: "007", SE: "007.5", SW: "007.5", N: "007.5", E: "007.5", W: "007.5", S: "005.2", U: "007.5", D: "007.5", title: "Alley Vestibule", desc: "This is a small area south of the main lobby. To the west there is are elevator doors, to the south is an exit to an alley and to the east there are stairs.", width: "30vw", img: "http://i.imgur.com/GnFkzMJ.jpg", look: "none"};

locations["eastLobby"] = {locationID: "008", NE: "008", NW: "008", SE: "008", SW: "007.5", N: "008", E: "022.1", W: "007", S: "008", U: "008", D: "008", title: "MAIN LOBBY", desc: "You are at the eastern end of the main lobby. There is a seating area here with chairs arranged rectangularly and an octagonal table in the center. On the south wall there is a trophy case and three fish tanks. Hanging from a pillar there is a screen with digital signage showing information about school events. A bank red doors lead outside to the north. To the east a hallway continues into the building and to the southwest there is a small vestibule with stairs, an elevator and an exit.", width: "30vw", img: "http://i.imgur.com/wlcS9Pp.jpg", look: "none"};

locations["audWest"] = {locationID: "022.1", NE: "022.1", NW: "022.1", SE: "022.1", SW: "022.1", N: "022.1", E: "022.2", W: "008", S: "022.1", U: "022.1", D: "022.1", title: "Auditorium Hallway", desc: "", width: "30vw", img: "http://i.imgur.com/wlcS9Pp.jpg", look: "none"};

locations["audEast"] = {locationID: "022.2", NE: "022.2", NW: "022.2", SE: "022.2", SW: "022.2", N: "022.2", E: "022.2", W: "022.1", S: "023", U: "022.2", D: "022.2", title: "Auditorium Hallway", desc: "", width: "30vw", img: "http://i.imgur.com/wlcS9Pp.jpg", look: "none"};

locations["BottomOfStairs"] = {locationID: "023", NE: "023", NW: "023", SE: "023", SW: "023", N: "022.2", E: "023", W: "023", S: "023", U: "023", D: "023", title: "Bottom of Stairs", desc: "", width: "30vw", img: "http://i.imgur.com/cq88jjs.jpg", look: "none"};




locations["hallWay0"] = {locationID: "009.1", NE: "009.1", NW: "009.1", SE: "009.1", SW: "009.1", N: "007", E: "020", W: "012", S: "009.2", U: "009.1", D: "009.1", title: "Hallway", desc: "You are at the northern end of a hallway located just outside the main office. The entrance to the main office is to the west and the entrance to the guidance office is to the east. There is a water fountain here and doorway to the men's lavatory to the northeast. There are numerous college pennants that line the entire stretch of the hallway.  ", width: "30vw", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4sW0ki48RAx0qh3OX44OUa_hEYsnbfSo-1qzgGwvJau3F1BKkDA", look: "none"};
locations["hallWay1"] = {locationID: "009.2", NE: "009.2", NW: "009.2", SE: "009.2", SW: "009.2", N: "009.1", E: "", W: "", S: "009.3", U: "009.2", D: "009.2", title: "Hallway", desc: "You are at the middle of the hallway located just outside the main office. The west leads you to the entrance of the office while the east sends you to back end of the guidance office. Meanwhile south continues further down the hallway.", width: "30vw", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4sW0ki48RAx0qh3OX44OUa_hEYsnbfSo-1qzgGwvJau3F1BKkDA", look: "none"};
locations["hallWay2"] = {locationID: "009.3", NE: "009.3", NW: "009.3", SE: "009.3", SW: "009.3", N: "009.2", E: "", W: "", S: "014", U: "009.3", D: "009.3", title: "Hallway", desc: "You are at the south end of the hallway located just outside the main office. To the west is a doorway to the principal’s conference room and to the east is a door to another office. To the southeast is a stairway leading up.", width: "30vw", img: "http://i.imgur.com/dFeWcaH.jpg", look: "none"};


locations["mainoffice"] = {locationID: "012", NE: "012", NW: "012", SE: "012", SW: "012", N: "012", E: "009.1", W: "013", S: "012", U: "012", D: "012", title: "Main Office", desc: "", width: "30vw", img: "http://i.imgur.com/2dNM0CG.jpg", look: "none"};

locations["behindDesk"] = {locationID: "013", NE: "013", NW: "013", SE: "013", SW: "013", N: "013", E: "012", W: "013", S: "012", U: "013", D: "013", title: "Main Office", desc: "", width: "30vw", img: "http://i.imgur.com/2dNM0CG.jpg", look: "none"};




locations["stairway"] = {locationID: "014", NE: "014", NW: "014", SE: "014", SW: "014", N: "009.3", E: "014", W: "014", S: "014", U: "", D: "", title: "sw", desc: "", width: "30vw", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4sW0ki48RAx0qh3OX44OUa_hEYsnbfSo-1qzgGwvJau3F1BKkDA", look: "none"};




locations["guidance"] = {locationID: "020", NE: "020", NW: "020", SE: "020", SW: "020", N: "020", E: "021", W: "009.1", S: "020", U: "020", D: "020", title: "GUIDANCE OFFICE", desc: "", width: "30vw", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4sW0ki48RAx0qh3OX44OUa_hEYsnbfSo-1qzgGwvJau3F1BKkDA", look: "none"};

locations["IdOffice"] = {locationID: "021", NE: "021", NW: "021", SE: "021", SW: "021", N: "021", E: "021", W: "020", S: "021", U: "021", D: "021", title: "ID OFFICE", desc: 'You find Mr. Rodriguez in this small side room fiddling with the ID printer. A large sign on the wall reads: "REPLACEMENT ID - 1 ESHS token."', width: "30vw", img: "http://i.imgur.com/b880rhe.jpg", look: "none"};




locations["YES!Program"] = {locationID: "999", NE: "", NW: "", SE: "", SW: "", N: "", E: "", W: "", S: "", U: "", D: "", title: "", desc: "", width: "30vw", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4sW0ki48RAx0qh3OX44OUa_hEYsnbfSo-1qzgGwvJau3F1BKkDA", look: "none"};
locations["InventoryHolder"] = {locationID: "9999", NE: "", NW: "", SE: "", SW: "", N: "", E: "", W: "", S: "", U: "", D: "", title: "", desc: "", width: "30vw", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4sW0ki48RAx0qh3OX44OUa_hEYsnbfSo-1qzgGwvJau3F1BKkDA", look: "none"};





/*--------------------------*/
/*AI Creator For Speaching..*/


var talkCharacters = {}



////// POSSIBLE EVENTS

//// InstantChange
// Instant: true/false


//// token pricing.

// checkTokens
// EventFalse
// EventTokenCost


//// Requirments List.

// CheckList: (howMuch)
// CheckList1
// List1: true/false
// CheckList2
// List2: true/false
// CheckList3
// List3: true/false
// ChackList1False
// CheckList2False
// CheckList3False
// CheckList12False
// CheckList23False
// CheckList123False
// CheckList13False
// CheckListTrue

//// EDIT INNER CONTENT.
// Change: true/false
// IcChange

// StartChange: true/false
// IcStartChange

// ChangeOther: true/false
// ChangeOtherId: idChange
// ChangeTo



talkCharacters["dummy"] = {
    locationID: "VOIDER",
    
    name: "dummy", 
    
    talking: "false", 
    
    start: '<div class="choiceOne" id="a"><h1>1. Hello</h1></div><div class="choiceTwo" id="b"><h1>2. Goodbye</h1></div><div class="choiceThree" id="c"><h1>3. ~DANCE~</h1></div>', 
    
    startOpen: '', 
    
    a:' ', 
    b:' ',
    c:' ',
    
    aOpen: '', 
    bOpen: '', 
    cOpen: '', 
    
    aEvent: "none",
    bEvent: "none",
    
    
}


talkCharacters["mrRamos"] = {
    locationID: "007",
    
    name: "mr ramos",
    name2: "mr",
    name3: "ramos",
    
    talking: "false", 
    
    start: '<div class="choiceOne" id="a"><h1>1. I am a new student.</h1></div><div class="choiceTwo" id="b"><h1>2. I am here to see the basketball game.</h1></div><div class="choiceThree" id="c"><h1>3. Just passing through.</h1></div>', 
    
    startOpen: 'How may I help you?',
    
    StartImg: 'http://i.imgur.com/6yiBSzI.jpg',
    
    a:' ', 
    b:'<div class="choiceOne" id="ba"><h1>1. I don’t have a ticket. Where can I get one?</h1></div><div class="choiceTwo" id="a"><h1>2.</h1></div><div class="choiceThree" id="a"><h1>3.</h1></div>',
    c:' ',
    
    ba:' ',
    
    aOpen: 'You need to get an ID, go see Mr. Rodriguez in guidance.', 
    bOpen: 'Give your ticket to the security guard by the entrance to the gym.', 
    cOpen: '', 
    
    baOpen: ' They are selling them at the trading post.', 
    
    
    aImg: "http://i.imgur.com/pUMBLhA.jpg",
    
    aEvent: "none",
    bEvent: "none",
    
    
}


talkCharacters["angelHotDog"] = {
    locationID: "004.1",
    
    name: "angel", 
    
    talking: "false", 
    
    StartImg: "http://i.imgur.com/ylwzlzP.png",
    
    start: '<div class="choiceOne" id="a"><h1>1. Yes</h1></div><div class="choiceTwo" id="b"><h1>2. No</h1></div>', 
    
    startOpen: 'How can I help ya? Wanna buy a hotdog?', 
    
    a:' ', 
    b:' ',
    
    
    aaOpen: '',
    
    bOpen: 'Have a great Day!', 
    
    aEvent: "deoHotDog",
    bEvent: "none",
}


talkCharacters["mrRodriguez"] = {
    locationID: "021",
    
    name: "mr rodriguez",
    name2: "rodriguez",
    name3: "mr",
    
    talking: "false",
    StartImg: "http://i.imgur.com/b880rhe.jpg",
    
    start: '<div class="choiceOne" id="a"><h1>1. Can I get an ID?</h1></div><div class="choiceTwo" id="b"><h1>2. May I get an ID?</h1></div><div class="choiceThree" id="c"><h1>3. I can explain why I missed B-Mod yesterday…</h1></div>', 
    
    startOpen: "Make it quick kid, I’m in the middle of something.", 
    
    a:' ', 
    b:' ',
    c:' ',
    
    aOpen: '"I don’t know, can you?"', 
    bOpen: '"Sure kid, that’ll be 1 token." Mr. Rodriguez quickly takes your picture and after a few brief moments hands you an ID fresh out of the printer.', 
    cOpen: '"I don’t wanna hear it."', 
    
    aEvent: "backToStart",
    
    
    bEvent: "checkTokens",
    bEventFalse: '"Sure kid, that’ll be 1 token... Mmm sorry kid you dont have 1 token."',
    bEventTokenCost: 1,
    bItem: "ID Card",
    bStartChange: "true",
    bIcStartChange: '<div class="choiceOne" id="a"><h1>1. Can I get an ID?</h1></div><div class="choiceTwo" id="c"><h1>2. I can explain why I missed B-Mod yesterday…</h1></div>',
    bChangeOther: "true",
    bChangeOtherId: "a",
    bChangeTo: '<div class="choiceOne" id="a"><h1>1. Can I get an ID?</h1></div><div class="choiceTwo" id="c"><h1>2. I can explain why I missed B-Mod yesterday…</h1></div>',
    
    
    cEvent: "none"
    
}



talkCharacters["circleN1-g3l"] = {
    locationID: "000",
    
    name: "n1-g3l", 
    
    talking: "false", 
    
    start: '<div class="choiceOne" id="a"><h1>1. Yes I would like a hint!</h1></div><div class="choiceTwo" id="b"><h1>2. No thank you I am good.</h1></div>', 
    
    startOpen: "N1-g3l, a wily little clockwork robot waddles up to you and speaks in a mechanical voice with a British accent,  “Welcome to EAST SIDE HIGH SCHOOL: THE TEXT ADVENTURE! Whenever you are having a tough time in the game summon me and I will see if I can help. Never get frustrated and remember to keep LOOKING UP.” N1-g3l gives you a short bow and scuttles away quickly.", 
    
    a:' ', 
    b:' ',
    
    aOpen: "Hello. I still am dummy.", 
    bOpen: "Ok bye then.", 
    
    bEvent: "none", 
    
    aaEvent: "none"
}



/*--------------------------*/
/*token location holder #map*/




var tokenLocations = {};

tokenLocations["insideHole"] = {tokenTaken: "no", locationID: "000", desc: "As you look away you think you might have caught a glimpse of something shiny and red. It resembled a Token.", visible: "yes", howToSee: "lookInHole"}

tokenLocations["inSand"] = {tokenTaken: "no", locationID: "008", desc: "Digging in the bottom of the middle tank reveals a shiny red token. Luckily, the security guard is busy signing in a guest so he doesn’t notice you.", visible: "yes", howToSee: "digSand"}




/*--------------------------*/
/*items location holder #map*/



var inventory = {};

inventory["shaker of fish food"] = {locationID: "008", name: "Shaker of Fish Food", name2: "Shaker", pickname: "the shaker of fish food.", pick2name: "The shaker of fish food", desc: "The shaker reads: 'Sabor Pescado La Ultimo Comida para Los Fishies Latinos!' with an image of a fish dancing the salsa next to a word balloon saying: 'Que Delicioso.'", takeable: "yes", eventRun: "none", specialDef: "no"};


inventory["pamphlet"] = {locationID: "000", name: "Pamphlet", name2: "-----3--3---3-", pickname: "the pamphlet.", pick2name: "The pamphlet", desc:"</h1><h1 class='inBoxText' style='font-size: 0.65vw;'>Welcome to <br>EAST SIDE HIGH SCHOOL THE TEXT ADVENTURE GAME! <br><br>Here are some common commands to the game: <br><br>Directions: <br>north, n, move north <br>west, w, move west <br>south, s, move south <br>east, e, move east <br>up, u, move up, climb, climb up <br>down, d, move down <br>northwest, nw, move northwest <br>northeast, ne, move northeast <br>southwest, sw, move southwest <br>southeast, se, move southeast <br><br>Actions: <br>inventory, i, check inventory <br>drop, place	 <br>pick up, take <br>tokens, tk <br>points, pt <br>look at <br>again <br>wait <br>commands <br><br>To talk to a character in the game: <br>Talk to (character name) <br>If you need a hint you can “talk to N1-g3l” and he will help out if her can! <br><br>ENJOY THE GAME!!!", takeable: "yes", eventRun: "none", specialDef: "no"};

inventory["softBall"] = {locationID: "void", name: "Softball", name2: "Ball", pickname: "the well-worn softball.", pick2name: "The well-worn softball", desc: "This well-worn softball appears to have seen many games.", takeable: "yes", eventRun: "none", specialDef: "no"};


inventory["stick"] = {locationID: "000", name: "Stick", name2: "Twig", pickname: "the stick.", pick2name: "The stick", desc: "There is nothing special about this typical stick.", takeable: "yes", eventRun: "none", specialDef: "no"};


inventory["picture"] = {locationID: "-0-0", name: "Picture", name2: "Photo", pickname: "the picture.", pick2name: "The picture", desc: 'This is a photograph taken of this year’s student council. On the back there is some writing: "Photo 36, Page 12, 2016 YB"', takeable: "yes", eventRun: "none", specialDef: "no"};


inventory["idCard"] = {locationID: "VOID", name: "ID Card", name2: "Student ID Card", pickname: "the ID card.", pick2name: "The ID card", desc: 'Your eyes are half closed and you have a weird expression in the photo on your plastic ID Card.', takeable: "yes", eventRun: "none", specialDef: "no"};


inventory["gluedQuarter"] = {locationID: "005", name: "Shiny Quarter", name2: "Quarter", pickname: "the quarter.", pick2name: "The quarter", desc: "As you bend over to try to pick up the quarter. You realise it was glued to the floor. In the corner of your eyes to the west, you can see a group of 8th graders in the Basketball Courts laughing at you.", takeable: "no", eventRun: "none", specialDef: "no"};

inventory["flowers"] = {locationID: "005.3", name: "Flower", name2: "Flowers", pickname: "the flower.", pick2name: "The flower", desc: "That would be sacrilege.", takeable: "no", eventRun: "none", specialDef: "  "};

inventory["fish"] = {locationID: "008", name: "Fish", name2: "----------3--3--3---", pickname: "the quarter.", pick2name: "The quarter", desc: "Take fish from which tank?", takeable: "no", eventRun: "none", specialDef: ""};

inventory["basketBallBall"] = {locationID: "002", name: "Ball", name2: "Basket Ball", pickname: "the ball.", pick2name: "The ball", desc: "While the kids are playing you jump onto the court and snatch the ball. As you attempt to flee the 8th graders quickly tackle you and take their ball back. A feeling of deep embarrassment sets in as you realize that you not only tried to steal from children but they also EASILY overpowered you.</h1><h1 class='inBoxText' style='color: red;'>We should subtract a point from your score.</h1>", takeable: "no", eventRun: "none", pointRemove: "1", specialDef: ""};

inventory["leftFish"] = {locationID: "008", name: "fish from left tank", name2: "------3--3---3-", pickname: "fishy fish", pick2name: "fiiiiesh", desc: 'You roll up your sleeve and reach into the left tank, but the fish you targeted slips out of your reach. “Stop messing with the tank!” yells the security guard.', takeable: "no", eventRun: "removeSecurity", pointRemove: "1", specialDef: ""};

inventory["middleFish"] = {locationID: "008", name: "fish from middle tank", name2: "------3--3---3-", pickname: "fishy fish", pick2name: "fiiiiesh", desc: 'You roll up your sleeve and reach into the middle tank, but the fish you targeted slips out of your reach. All of the motion kicks up some sand and you catch a glimpse of something shiny buried at the bottom of the tank. The security guard yells, "Keep your hands out of the tank!"', takeable: "no", eventRun: "removeSecurity", pointRemove: "1", specialDef: ""};

inventory["rightFish"] = {locationID: "008", name: "fish from right tank", name2: "------3--3---3-", pickname: "fishy fish", pick2name: "fiiiiesh", desc: 'You roll up your sleeve and reach into the right tank, but the fish you targeted slips out of your reach. The security guard eyes you suspiciously.', takeable: "no", eventRun: "removeSecurity", pointRemove: "1", specialDef: ""};

inventory["hotdog"] = {locationID: "VOID", name: "Hotdog", name2: "------3--3---3-", pickname: "the hotdog.", pick2name: "The hotdog", desc: 'Hot Diggity Dog!', takeable: "yes", eventRun: "none", specialDef: "no"};



/*--------------------------*/
/*lookable items #map.......*/



var roomObjects = {};

roomObjects[""] = {locationID: "", name: "", visible: "", name2: "--3---2--1---2-3---2-2-45--f-f-", numDesc: 0, desc1: '', img: "", width: "30vw"}

roomObjects["hotDogTruck"] = {locationID: "004", name: "truck", visible: "yes", name2: "hotdog truck", numDesc: 1, desc1: 'This vintage hotdog truck has been a feature of the park for years. Proudly painted, the side of the truck reads: "DEO`s ITALIAN HOTDOGS".', img: "http://i.imgur.com/RClF0kG.jpg", width: "30vw"}

roomObjects["hotDogTruckOther"] = {locationID: "004.1", name: "truck", visible: "yes", name2: "hotdog truck", numDesc: 1, desc1: 'This vintage hotdog truck has been a feature of the park for years. Proudly painted, the side of the truck reads: "DEO`s ITALIAN HOTDOGS".', width: "30vw"}

roomObjects["menu"] = {locationID: "004.1", name: "menu", visible: "yes", name2: "--3---2--1---2-3---2-2-45--f-f-", numDesc: 1, desc1: 'The menu lists a variety of tasty offerings, but the final item catches your eye: "East Side Student Special! Italian Hotdog - 1 ESHS token. Student ID required."', img: "http://i.imgur.com/ylwzlzP.png", width: "30vw"}

roomObjects["tree"] = {locationID: "000", name: "Tree", name2: "Trees", visible: "yes", numDesc: 1, desc1: "One of the trees has some low branches that look perfect for climbing.", width: "30vw"};

roomObjects["TrophyCase"] = {locationID: "008", name: "Trophy Case", name2: "Case", visible: "yes", numDesc: 1, desc1: 'Inside the case you see numerous state championship basketball trophies. Placed in a prominent position, one stands out from the rest it looks like a signed game ball.', width: "30vw", img: "http://i.imgur.com/HN7kcBZ.jpg"}

roomObjects["gameBall"] = {locationID: "008", name: "Game Ball", name2: "Ball", visible: "yes", numDesc: 1, desc1: 'This game ball is signed by NBA player and East Side alumnus, Randy Foye. This was the game ball that Mr. Foye scored his 1,000th point with against Union High School during his junior year.', width: "30vw", img: "http://i.imgur.com/OHwwST3.jpg"}

roomObjects["carvingsOnTree"] = {locationID: "00.01", name: "carvings", name2: "--3---2--1---2-3---2-2-45--f-f-", visible: "yes", numDesc: 6, desc1: '"Lead Programmer: Anthony DaLuz"', desc2: '"Story Writers: Raichel Echeverna, Wilmer Solano, Andrew Teheran, Rey Ricardo, Mariangela Zodda"', desc3: '"Graduate Mentor: Andre Zatta, and Marcel Lopes"', desc4: 'You see the initials "A.A + Z.Z" carved inside a heart.', desc5: '"T IS THE BEST TEACHER EVA!!!!"', desc6: '"Brought to you by East Side High School’s Media Arts Magnet Program."', width: "30vw"}

roomObjects["IndependenceSign"] = {locationID: "003", name: "sign", name2: "--3---2--1---2-3---2-2-45--f-f-", visible: "yes", numDesc: 1, desc1: 'The sign reads: <br> <h1 class="inBoxText" style="text-align: center; font-size: 20px">INDEPENDENCE PARK</h1><br><h1 class="inBoxText" style="text-align: center; margin-top: -15px; font-size: 15px;">ESSEX COUNTY PARK SYSTEM</h1><br><h1 class="inBoxText" style="text-align: center; margin-top: -15px; font-size: 15px;">Established 1895</h1>', img: "http://i.imgur.com/5tBzOdI.jpg", width: "30vw"}

roomObjects["LobbyMural"] = {locationID: "006", name: "mural", name2: "logo", visible: "yes", numDesc: 1, desc1: 'You bask in the majesty of East Side’s 100 year old symbol of enlightenment through knowledge. ', img: "http://i.imgur.com/OivrgTO.jpg", width: "15vw"}

roomObjects["AlleyMural"] = {locationID: "005.2", name: "mural", name2: "logo", visible: "yes", numDesc: 1, desc1: 'The mural covers the walls on the entire alley. On one wall, humongously written text reads, "DREAM!"', width: "30vw"}

roomObjects["TicketWindow"] = {locationID: "006", name: "ticket window", name2: "window", visible: "yes", numDesc: 1, desc1: "The ticket window seems as if it hasn't been used for some time. Above the window an announcement case reads:", img: "http://i.imgur.com/mpCbi3N.jpg", width: "15vw"}

roomObjects["BrickHouse"] = {locationID: "004", name: "brick house", name2: "house", visible: "yes", numDesc: 1, desc1: "Your eyes fall upon the loveliest of the Ironbound homes that look upon the park this old brick house with green trim is a great example of the architectural style of its day.", img: "http://i.imgur.com/JrPd6Wr.jpg", width: "30vw"}

roomObjects["rodriguezTeacher"] = {locationID: "021", name: "Mr Rodriguez", name2: "mr", visible: "yes", numDesc: 1, desc1: "Wearing an official red and white East Side jacket, Mr. Rodriguez  seems very busy with the task at hand.", img: "http://i.imgur.com/b880rhe.jpg", width: "30vw"}

roomObjects["desk"] = {locationID: "007", name: "Desk", name2: "-----3---3-2--", visible: "yes", numDesc: 1, desc1: "This curved front desk sits close to the entrance. There is an open sign-in book placed carefully on top.", img: "http://i.imgur.com/JrPd6Wr.jpg", width: "30vw"}

roomObjects["label"] = {locationID: "007", name: "Label", name2: "-----3---3-2--", visible: "yes", numDesc: 1, desc1: '"This Animodule has been brought to you by the Barat Foundation. Please visit our website at: <a href="http://baratfoundation.org/the-animodules" target="_blank"> http://baratfoundation.org/the-animodules/ </a> "', img: "http://i.imgur.com/JrPd6Wr.jpg", width: "30vw"}

roomObjects["sculpture"] = {locationID: "007", name: "Sculpture", name2: "Torch", visible: "yes", numDesc: 1, desc1: "This large painted plywood sculpture is a combination of a bust of a native american and a torch with the name of the school emblazoned on the side. Its bright colors and prominent lines is a proudly welcome visitors to the building. There is a label on the sculpture.", img: "http://i.imgur.com/FP7FsJ0.jpg", width: "12vw"}

roomObjects["sculpture2"] = {locationID: "007", name: "animodule", name2: "-----3---3-2--", visible: "yes", numDesc: 1, desc1: "This large painted plywood sculpture is a combination of a bust of a native american and a torch with the name of the school emblazoned on the side. Its bright colors and prominent lines is a proudly welcome visitors to the building. There is a label on the sculpture.", img: "http://i.imgur.com/FP7FsJ0.jpg", width: "12vw"}

roomObjects["mrRamos"] = {locationID: "007", name: "Security Guard", name2: "Mr Ramos", visible: "yes", numDesc: 1, desc1: "The security guard’s name tag identifies him as Mr. Ramos. He is examining you as carefully as you are examining him.", img: "http://i.imgur.com/TXrOUTk.jpg", width: "30vw"}

roomObjects["mrRamoss"] = {locationID: "007", name: "Mr", name2: "Ramos", visible: "yes", numDesc: 1, desc1: "The security guard’s name tag identifies him as Mr. Ramos. He is examining you as carefully as you are examining him.", img: "http://i.imgur.com/TXrOUTk.jpg", width: "30vw"}

roomObjects["school"] = {locationID: "003", name: "School", name2: "Building", visible: "yes", numDesc: 1, desc1: "The large brick school rises four stories in front of you. There is a banner on the side of the building daring you to be great!", width: "30vw"}

roomObjects["quarterOnFloor"] = {locationID: "005", name: "Shiny Quarter", name2: "Quarter", visible: "yes", numDesc: 1, desc1: "The quarter appears to be worth 25c.", img: "http://i.imgur.com/a1aXfso.jpg"}

roomObjects["gateFence"] = {locationID: "005.1", name: "Gate", name2: "Fence", visible: "yes", numDesc: 1, desc1: "There is a gate in the chain link fence is closed and is secured with a latch.", img: "http://i.imgur.com/a1aXfso.jpg"}

roomObjects["team/practice"] = {locationID: "001.2", name: "Team", name2: "Practice", visible: "yes", numDesc: 6, desc1: "East Side’s left fielder catches the pitcher unaware and steals second base.", desc2: "The pitcher delivers a blazing fastball that zips past the batter.", desc3: "The catcher hits a high fastball that quickly careens into the outfield. The second baseman can only look up in astonishment.", desc4: 'Coach Capitani barks a reprimand at Gissely the second baseman, "stop over-throwing first base!"', desc5: "Eugenia, the catcher, tags out a runner caught between 3rd base and home.", desc6: "Gisselly the second baseman and Destiny the first baseman skillfully turn a double play.", watch: "yes"}

roomObjects["team/game"] = {locationID: "001.2", name: "Game", name2: "536245267166166611", visible: "yes", numDesc: 6, desc1: "East Side’s left fielder catches the pitcher unaware and steals second base.", desc2: "The pitcher delivers a blazing fastball that zips past the batter.", desc3: "The catcher hits a high fastball that quickly careens into the outfield. The second baseman can only look up in astonishment.", desc4: 'Coach Capitani barks a reprimand at Gissely the second baseman, "stop over-throwing first base!"', desc5: "Eugenia, the catcher, tags out a runner caught between 3rd base and home.", desc6: "Gisselly the second baseman and Destiny the first baseman skillfully turn a double play.", watch: "yes"}

roomObjects["garageDoors"] = {locationID: "005.2", name: "garage", name2: "garage door", visible: "yes", numDesc: 1, desc1: 'The two steel garage doors are closed.', img: "http://i.imgur.com/RClF0kG.jpg", width: "30vw"}

roomObjects["garawgeDoors"] = {locationID: "005.2", name: "garage doors", name2: "-----4----3", visible: "yes", numDesc: 1, desc1: 'The two steel garage doors are closed.', img: "http://i.imgur.com/RClF0kG.jpg", width: "30vw"}

roomObjects["church"] = {locationID: "005.3", name: "church", name2: "-----4----3", visible: "yes", numDesc: 1, desc1: 'Flowers line the steps leading to the entrance of this lovely church.', img: "http://i.imgur.com/RClF0kG.jpg", width: "30vw"}

roomObjects["greenhouse"] = {locationID: "005.4", name: "house", name2: "green house", visible: "yes", numDesc: 1, desc1: 'The windows and doors are boarded up on this creepy looking house badly in need of a new paint job.', img: "http://i.imgur.com/RClF0kG.jpg", width: "30vw"}

roomObjects["fishtanks"] = {locationID: "008", name: "fish tanks", name2: "tanks", visible: "yes", numDesc: 1, desc1: 'Which tank would you like to examine?', img: "http://i.imgur.com/8HGNods.jpg", width: "30vw"}
roomObjects["fishwtanks"] = {locationID: "008", name: "tank", name2: "2131231231232", visible: "yes", numDesc: 1, desc1: 'Which tank would you like to examine?', img: "http://i.imgur.com/8HGNods.jpg", width: "30vw"}
roomObjects["leftFish"] = {locationID: "008", name: "left fish tank", name2: "left tank", visible: "yes", numDesc: 1, desc1: 'In the left fish tank there are a number of small Brook Trout a species of freshwater fish native to eastern United States and Canada.w', img: "http://i.imgur.com/ZWRlDE4.jpg", width: "30vw"}
roomObjects["middleFish"] = {locationID: "008", name: "middle fish tank", name2: "middle tank", visible: "yes", numDesc: 1, desc1: 'The middle fish tank house African Cichlids, a popular freshwater fish kept in the home aquariums.', img: "http://i.imgur.com/iziHyGh.jpg", width: "30vw"}
roomObjects["rightfish"] = {locationID: "008", name: "right fish tank", name2: "right tank", visible: "yes", numDesc: 1, desc1: 'The right fish tank is home to a variety of Amazon Tropical fish. On top of the right fish tank is a small shaker of fish food.', img: "http://i.imgur.com/GWvA0q4.jpg", width: "30vw"}

roomObjects["fountain"] = {locationID: "009.1", name: "fountain", name2: "water fountain", visible: "yes", numDesc: 1, desc1: 'You make sure that this clean little metal water fountain has an up-to-date filter underneath.', img: "http://i.imgur.com/dSMb008.jpg", width: "30vw"}

roomObjects["flags"] = {locationID: "009.1", name: "flag", name2: "flags", visible: "yes", numDesc: 10, desc1: 'Your eyes fall upon a red and white flag from Montclair State University.', desc2: 'This red, black and white flag represents Rutgers university.', desc3: 'An orange and black pennant exhibits the school spirit of William Paterson University. ', desc4: 'New Jersey City University is honored in green, white and yellow.', desc5: 'A pirate can be seen on this blue, white and gray pennant from Seton Hall University.', desc6: 'The blue and white colors of Kean University look particularly sharp on this banner.', desc7: 'You gaze upon the bright red and white ensign of New Jersey Institute of Technology.', desc8: 'A green and yellow pennant symbolizes Essex County College.', desc9: 'You see Essex County College’s green and yellow pennant.', desc10: '', img: "http://i.imgur.com/iziHyGh.jpg", width: "30vw"}




/*--------------------------*/
/*GameMainScript(DoNotTouch)*/





$(document).ready(function(){
    
    
    
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            $(".textBox").append('<h1 class="inBoxTitle">' + locations[key]['title'].toUpperCase() + '</h1>');
            openingLook();
        };
    });
    
    $("input").click(function(){
        $("input").val("");
        $("input").css({color: "black"});
    });
    
    $("input").keyup(function(e){
        var code = e.which;
        if(code==13)e.preventDefault();
        if(code==13 && $("input").val().indexOf("<") == -1 && $("input").val().length != 0){
            commandListSearch($("input").val().toLowerCase());
            
        }
        
        
        
        
        
    });
    
})




/*--------------------------*/
/*Functions for system of AI*/




function southWest(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['SW'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['NSW'] + '</h1>');
            }
            if(locations[key]['SW'] !== currentLocation){
                currentLocation = locations[key]['SW']
                $(".lci").attr("src", locations[key]['img']);
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};




function southEast(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['SE'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['NSE'] + '</h1>');
            }
            if(locations[key]['SE'] !== currentLocation){
                currentLocation = locations[key]['SE']
                $(".lci").attr("src", locations[key]['img']);
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};




function northEast(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['NE'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['NNE'] + '</h1>');
            }
            if(locations[key]['NE'] !== currentLocation){
                currentLocation = locations[key]['NE']
                $(".lci").attr("src", locations[key]['img']);
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};




function northWest(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['NW'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['NNW'] + '</h1>');
            }
            if(locations[key]['NW'] !== currentLocation){
                currentLocation = locations[key]['NW']
                $(".lci").attr("src", locations[key]['img']);
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};





function north(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['N'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['NN'] + '</h1>');
            }
            if(locations[key]['N'] !== currentLocation){
                currentLocation = locations[key]['N']
                $(".lci").attr("src", locations[key]['img']);
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};




function south(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['S'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['SN'] + '</h1>');
            }
            if(locations[key]['S'] !== currentLocation){
                currentLocation = locations[key]['S']
                $(".lci").attr("src", locations[key]['img']);
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};




function east(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['E'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['EN'] + '</h1>');
            }
            if(locations[key]['E'] !== currentLocation){
                currentLocation = locations[key]['E']
                $(".lci").attr("src", locations[key]['img']);
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};




function west(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['W'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['WN'] + '</h1>');
            }
            if(locations[key]['W'] !== currentLocation){
                currentLocation = locations[key]['W']
                $(".lci").attr("src", locations[key]['img']);
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};




function up(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['U'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['UN'] + '</h1>');
            }
            if(locations[key]['U'] !== currentLocation){
                currentLocation = locations[key]['U']
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};




function down(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            if(locations[key]['D'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText">' + locations[key]['DN'] + '</h1>');
            }
            if(locations[key]['D'] !== currentLocation){
                currentLocation = locations[key]['D']
                $.each( locations, function( sekey, sevalue ) {
                    if(locations[sekey]['locationID'] == currentLocation){
                        $(".textBox").append('<h1 class="inBoxTitleS">' + locations[sekey]['title'].toUpperCase() + '</h1>');
                        openingLook();
                        $(".lci").css("width", locations[sekey]['width']);
                        $(".lci").attr("src", locations[sekey]['img']);
                        return false;
                    }
                    
                });
            }
            return false;
        };
    });
};





/*--------------------------*/
/*Talk functions Start......*/




// Talk Starter
function talkStart(){
    var string = $("input").val().toLowerCase();
    var stringSplitted = string.split(" ");
    
    $.each( talkCharacters, function( key, value ) {
        if((stringSplitted[2] == talkCharacters[key]["name"] || stringSplitted[2] == talkCharacters[key]["name2"] || stringSplitted[2] == talkCharacters[key]["name3"]) && currentLocation == talkCharacters[key]["locationID"]){
            $(".choicesHolder").html(talkCharacters[key]["start"]);
            $(".choicesHolder").css({visibility: "visible"});
            talkingTo = talkCharacters[key]["name"];
            $(".cr").css({visibility: "visible"});
            $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key]["startOpen"] + '</h1>');
            $(".lci").attr("src", talkCharacters[key]['StartImg']);
        }else if((stringSplitted[2] + " " + stringSplitted[3] == talkCharacters[key]["name"] || stringSplitted[2] + " " + stringSplitted[3] == talkCharacters[key]["name2"] || stringSplitted[2] + " " + stringSplitted[3] == talkCharacters[key]["name3"]) && currentLocation == talkCharacters[key]["locationID"]){
            $(".choicesHolder").html(talkCharacters[key]["start"]);
            $(".choicesHolder").css({visibility: "visible"});
            $(".cr").css({visibility: "visible"});
            talkingTo = talkCharacters[key]["name"];
            $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key]["startOpen"] + '</h1>');
            $(".lci").attr("src", talkCharacters[key]['StartImg']);
        };;
    });
};



// select choice 1, choice 2, choice 3
$(".choicesHolder").on('click', '.choiceOne', function () {
    var idChoice = $(".choiceOne").attr('id');
    $.each( talkCharacters, function( key, value ) {
        if(talkCharacters[key][idChoice + "Event"] == "none"){
            if(talkingTo == talkCharacters[key]["name"]){
                $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "Open"] + '</h1>');
                $(".choicesHolder").html(talkCharacters[key][idChoice]);
                $(".lci").attr("src", talkCharacters[key][idChoice + "Img"]);
                if(talkCharacters[key][idChoice] == " "){
                    $(".cr").css({visibility: "hidden"});
                }
            };
        };
        
        if(talkCharacters[key][idChoice + "Event"] == "backToStart"){
            if(talkingTo == talkCharacters[key]["name"]){
                $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "Open"] + '</h1>');
                $(".choicesHolder").html(talkCharacters[key]["start"])
            };
        };
        
        if(talkCharacters[key][idChoice + "Event"] == "deoHotDog" && talkingTo == talkCharacters[key]["name"]){
            if(talkingTo == talkCharacters[key]["name"] && tokens >= 1){
                dbt += 1;
            };
            
            if(talkingTo == talkCharacters[key]["name"] && inventory["idCard"]["locationID"] == "9999"){
                ftt += 1;
            };
            
            if(talkingTo == talkCharacters[key]["name"] && inventory["hotdog"]["locationID"] !== "VOID"){
                dtt += 1;
            };
            
            if(talkingTo == talkCharacters[key]["name"] && inventory["hotdog"]["locationID"] == "stomach"){
                tvt += 1;
            };
            
            if(dbt == 1 && ftt == 1 && dtt == 0 && tvt == 0){
                $(".textBox").append('<h1 class="inBoxText">Here ya go, Enjoy!</h1>');
                tokens -= 1;
                $(".textBox").append('<h1 class="inBoxText" style="color: red;">You lost 1 token!</h1>');
                $(".choicesHolder").css({visibility: "hidden"});
                $(".cr").css({visibility: "hidden"});
                inventory["hotdog"]["locationID"] = "9999";
            } else if(dbt == 0 && ftt == 1 && dtt == 0 && tvt == 0){
                $(".textBox").append('<h1 class="inBoxText">You don’t have a token? A hotdog costs 1 token.</h1>');
                $(".choicesHolder").css({visibility: "hidden"});
                $(".cr").css({visibility: "hidden"});
            } else if(dbt == 1 && ftt == 0 && dtt == 0 && tvt == 0){
                $(".textBox").append('<h1 class="inBoxText">Sorry, to get the discount on the hotdog you need your Student ID.</h1>');
                $(".choicesHolder").css({visibility: "hidden"});
                $(".cr").css({visibility: "hidden"});
            } else if(dbt == 0 && ftt == 0 && dtt == 0 && tvt == 0){
                $(".textBox").append('<h1 class="inBoxText">A token along with an ID Card, you don’t seem to have either.</h1>');
                $(".choicesHolder").css({visibility: "hidden"});
                $(".cr").css({visibility: "hidden"});
            } else if(dtt == 1 && tvt == 0){
                $(".textBox").append('<h1 class="inBoxText">You already have a hotdog kid. Finish that one first.</h1>');
                $(".choicesHolder").css({visibility: "hidden"});
                $(".cr").css({visibility: "hidden"});
            } else if(tvt == 1){
                $(".textBox").append('<h1 class="inBoxText">Take it easy kid you don’t want to over do it.</h1>');
                $(".choicesHolder").css({visibility: "hidden"});
                $(".cr").css({visibility: "hidden"});
            };
            
        };
        
        if(talkCharacters[key][idChoice + "Event"] == "checkTokens"){
            if(talkingTo == talkCharacters[key]["name"] && tokens >= talkCharacters[key][idChoice + "EventTokenCost"]){
                tokens -= 1;
                $(".textBox").append('<h1 class="inBoxText" style="color: red;">You lost ' + talkCharacters[key][idChoice + "EventTokenCost"] + ' token!</h1>');
                if(talkCharacters[key][idChoice + "Item"] !== "none"){
                    $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "Open"] + '</h1>');
                    $.each( inventory, function( sekey, sevalue ){
                        if(inventory[sekey]["name"] == talkCharacters[key][idChoice + "Item"]){
                            inventory[sekey]["locationID"] = "9999";
                            if(talkCharacters[key][idChoice + "StartChange"] == "true"){
                                talkCharacters[key]["start"] = talkCharacters[key][idChoice + "IcStartChange"];
                            }
                            
                            if(talkCharacters[key][idChoice + "ChangeOther"] == "true"){
                                talkCharacters[key][talkCharacters[key][idChoice + "ChangeOtherId"]] = talkCharacters[key][idChoice + "ChangeTo"];
                            }
                            idChoice = "close";
                            $(".choicesHolder").css({visibility: "hidden"});
                            $(".cr").css({visibility: "hidden"});
                            $(".pt").html("Points: " + points + "")
                            $(".tk").html("Tokens: " + tokens + "")
                            
                        }
                    })
                }
            };
            
            
            if(talkingTo == talkCharacters[key]["name"] && tokens < talkCharacters[key][idChoice + "EventTokenCost"]){
                $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "EventFalse"] + '</h1>');
                $(".choicesHolder").css({visibility: "hidden"});
                $(".cr").css({visibility: "hidden"});
            };
        };
    });
    
    scroller();
});



$(".choicesHolder").on('click', '.choiceTwo', function () {
    var idChoice = $(".choiceTwo").attr('id');
    
    $.each( talkCharacters, function( key, value ) {
        if(talkCharacters[key][idChoice + "Event"] == "none"){
            if(talkingTo == talkCharacters[key]["name"]){
                $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "Open"] + '</h1>');
                $(".choicesHolder").html(talkCharacters[key][idChoice]);
                $(".lci").attr("src", talkCharacters[key][idChoice + "Img"]);
                if(talkCharacters[key][idChoice] == " "){
                    $(".cr").css({visibility: "hidden"});
                }
            };
        };
        
        if(talkCharacters[key][idChoice + "Event"] == "checkTokens"){
            if(talkingTo == talkCharacters[key]["name"] && tokens >= talkCharacters[key][idChoice + "EventTokenCost"]){
                tokens -= 1;
                $(".textBox").append('<h1 class="inBoxText" style="color: red;">You lost ' + talkCharacters[key][idChoice + "EventTokenCost"] + ' token!</h1>');
                if(talkCharacters[key][idChoice + "Item"] !== "none"){
                    $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "Open"] + '</h1>');
                    $.each( inventory, function( sekey, sevalue ){
                        if(inventory[sekey]["name"] == talkCharacters[key][idChoice + "Item"]){
                            inventory[sekey]["locationID"] = "9999";
                            if(talkCharacters[key][idChoice + "StartChange"] == "true"){
                                talkCharacters[key]["start"] = talkCharacters[key][idChoice + "IcStartChange"];
                            }
                            
                            if(talkCharacters[key][idChoice + "ChangeOther"] == "true"){
                                talkCharacters[key][talkCharacters[key][idChoice + "ChangeOtherId"]] = talkCharacters[key][idChoice + "ChangeTo"];
                            }
                            idChoice = "close";
                            $(".choicesHolder").css({visibility: "hidden"});
                            $(".cr").css({visibility: "hidden"});
                            $(".pt").html("Points: " + points + "")
                            $(".tk").html("Tokens: " + tokens + "")
                            
                        }
                    })
                }
            };
            
            
            if(talkingTo == talkCharacters[key]["name"] && tokens < talkCharacters[key][idChoice + "EventTokenCost"]){
                $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "EventFalse"] + '</h1>');
                $(".choicesHolder").css({visibility: "hidden"});
                $(".cr").css({visibility: "hidden"});
            };
        };
    });
    
    scroller();
});



$(".choicesHolder").on('click', '.choiceThree', function () {
    var idChoice = $(".choiceThree").attr('id');
    
    $.each( talkCharacters, function( key, value ) {
        if(talkCharacters[key][idChoice + "Event"] == "none"){
            if(talkingTo == talkCharacters[key]["name"]){
                $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "Open"] + '</h1>');
                $(".lci").attr("src", talkCharacters[key][idChoice + "Img"]);
                $(".choicesHolder").html(talkCharacters[key][idChoice]);
                if(talkCharacters[key][idChoice] == " "){
                    $(".cr").css({visibility: "hidden"});
                }
            };
        };
        
        if(talkCharacters[key][idChoice + "Event"] == "checkTokens"){
            if(talkingTo == talkCharacters[key]["name"] && tokens >= talkCharacters[key][idChoice + "EventTokenCost"]){
                tokens -= 1;
                $(".textBox").append('<h1 class="inBoxText" style="color: red;">You lost ' + talkCharacters[key][idChoice + "EventTokenCost"] + ' token!</h1>');
                if(talkCharacters[key][idChoice + "Item"] !== "none"){
                    $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "Open"] + '</h1>');
                    $.each( inventory, function( sekey, sevalue ){
                        if(inventory[sekey]["name"] == talkCharacters[key][idChoice + "Item"]){
                            inventory[sekey]["locationID"] = "9999";
                            if(talkCharacters[key][idChoice + "StartChange"] == "true"){
                                talkCharacters[key]["start"] = talkCharacters[key][idChoice + "IcStartChange"];
                            }
                            
                            if(talkCharacters[key][idChoice + "ChangeOther"] == "true"){
                                talkCharacters[key][talkCharacters[key][idChoice + "ChangeOtherId"]] = talkCharacters[key][idChoice + "ChangeTo"];
                            }
                            idChoice = "close";
                            $(".choicesHolder").css({visibility: "hidden"});
                            $(".cr").css({visibility: "hidden"});
                            $(".pt").html("Points: " + points + "")
                            $(".tk").html("Tokens: " + tokens + "")
                            
                        }
                    })
                }
            };
            
            
            if(talkingTo == talkCharacters[key]["name"] && tokens < talkCharacters[key][idChoice + "EventTokenCost"]){
                $(".textBox").append('<h1 class="inBoxText">' + talkCharacters[key][idChoice + "EventFalse"] + '</h1>');
                $(".choicesHolder").css({visibility: "hidden"});
                $(".cr").css({visibility: "hidden"});
            };
        };
    });
    
    scroller();
});

// Change Branch





/*--------------------------*/
/*Check Inventory Controller*/


function checkInventory(){
    $.each( inventory, function( key, value) {
        if(inventory[key]['locationID'] === "9999"){
            dbt += 1;
        }
    });
    
    
    if(dbt == 1){
        $.each( inventory, function( key, value ) {
            if(inventory[key]['locationID'] == "9999"){
                $(".textBox").append('<h1 class="inBoxText"> Your inventory consists of: a ' + inventory[key]['name'].toLowerCase() + '.</h1>');
            };
            
        });
    };
    
    
    if(dbt > 1){
        
        $.each( inventory, function( key, value ) {
            if(inventory[key]['locationID'] == "9999" && stt == 0){
                $(".textBox").append('<span class="inBoxTextSpan"> Your inventory consists of: a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
            };
            
            if(inventory[key]['locationID'] == "9999" && stt > 0 && ftt + 1 == dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, and a ' + inventory[key]['name'].toLowerCase() + '.</span>');
                ftt += 1;
                return false;
            };
            
            if(inventory[key]['locationID'] == "9999" && stt > 0 && ftt + 1 !== dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
            };
            
            
            
            if(inventory[key]['locationID'] == "9999" && stt == 0){
                stt += 1;
            };
        });
    };
    
    
    
    
    
    if(dbt == 0){
        $(".textBox").append('<h1 class="inBoxText"> Your inventory consists of nothing. </h1>');
    };
    $(".textBox").append('<h1 class="inBoxText"> You have ' + tokens + ' Tokens </h1>');
    
    ftt = 0;
    stt = 0;
    dbt = 0;
}

/*--------------------------*/
/*Pick up and lay Controller*/


function pickUP(){
    var string = $("input").val().toLowerCase();
    var stringSplitted = string.split(" ");
    
    
    $.each( inventory, function( key, value) {
        if(inventory[key]['locationID'] === "9999" && (stringSplitted[0] == "pick" && (inventory[key]['name'].toLowerCase() === stringSplitted[2] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] + " " + stringSplitted[5]) || stringSplitted[0] == "take" && (inventory[key]['name'].toLowerCase() === stringSplitted[1] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4])) || inventory[key]['locationID'] === "9999" && (stringSplitted[0] == "pick" && (inventory[key]['name2'].toLowerCase() === stringSplitted[2] || inventory[key]['name2'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name2'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] || inventory[key]['name2'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] + " " + stringSplitted[5]) || stringSplitted[0] == "take" && (inventory[key]['name2'].toLowerCase() === stringSplitted[1] || inventory[key]['name2'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] || inventory[key]['name2'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name2'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4]))){
            dbt += 1;
            $(".textBox").append('<h1 class="inBoxText">' + inventory[key]['pick2name'] + ' is in your inventory silly.</h1>');
            return false;
        }
    });
    
    $.each( inventory, function( key, value) {
        if(inventory[key]['locationID'] === "-0-0" && currentLocation == "000.1" && (stringSplitted[0] == "pick" && (inventory[key]['name'].toLowerCase() === stringSplitted[2] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] + " " + stringSplitted[5]) || stringSplitted[0] == "take" && (inventory[key]['name'].toLowerCase() === stringSplitted[1] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4]))){
            dbt += 1;
            $(".textBox").append('<h1 class="inBoxText">You took ' + inventory[key]['pick2name'].toLowerCase() + ' out of the hole.</h1>');
            inventory[key]['locationID'] = "9999";
            return false;
        }
    });
    
    $.each( inventory, function( key, value) {
        if(inventory[key]['locationID'] == currentLocation && stringSplitted[1] == "all" && stringSplitted[0] == "take" && inventory[key]['takeable'] == "yes"){
            dbt += 1;
            tvt += 1;
        }
        
        if(inventory[key]['locationID'] == "-0-0" && currentLocation == "000.1" && stringSplitted[1] == "all" && stringSplitted[0] == "take" && inventory[key]['takeable'] == "yes"){
            dtd += 1;
            dtt += 1;
            inventory[key]['locationID'] = "9999";
        }
    });
    
    $.each( tokenLocations, function( key, value) {
        if(stringSplitted[0] == "take" && stringSplitted[1] == "token"){
            tokens += 1;
            $(".textBox").append('<h1 class="inBoxText">' + inventory[key]['pick2name'] + '</h1>');
            return false;
        }
    });
    
    
    
    $.each( inventory, function( key, value) {
        if(inventory[key]['locationID'] === currentLocation && (stringSplitted[0] == "pick" && (inventory[key]['name'].toLowerCase() === stringSplitted[2] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] + " " + stringSplitted[5]) || stringSplitted[0] == "take" && (inventory[key]['name'].toLowerCase() === stringSplitted[1] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4])) || inventory[key]['locationID'] === currentLocation && (stringSplitted[0] == "pick" && (inventory[key]['name2'].toLowerCase() === stringSplitted[2] || inventory[key]['name2'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name2'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] || inventory[key]['name2'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] + " " + stringSplitted[5]) || stringSplitted[0] == "take" && (inventory[key]['name2'].toLowerCase() === stringSplitted[1] || inventory[key]['name2'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] || inventory[key]['name2'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name2'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4]))){
            dbt += 1;
            if(inventory[key]['takeable'] == "yes"){
                $(".textBox").append('<h1 class="inBoxText"> You reach over and picked up ' + inventory[key]['pickname'] + '</h1>');
                inventory[key]['locationID'] = "9999";
            };
            
            if(inventory[key]['takeable'] == "no"){
                $(".textBox").append('<h1 class="inBoxText">' + inventory[key]['desc'] + '</h1>');
                if(inventory[key]['eventRun'] == "removePoint"){
                    points -= inventory[key]["pointRemove"];
                }
                
                if(inventory[key]['eventRun'] == "removeSecurity"){
                    security -= inventory[key]["pointRemove"];
                }
            };
            
            return false;
        };
    });
       
    if(dbt == 0 && dtd == 0){
        $(".textBox").append('<h1 class="inBoxText"> I dont see that here... </h1>');
    }
    
    if(tvt > 0){
        $.each( inventory, function( key, value ) {
            if(inventory[key]['locationID'] == currentLocation && stt == 0){
                $(".textBox").append('<span class="inBoxTextSpan"> You took: a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
                inventory[key]['locationID'] = "9999";
            };
            
            if(inventory[key]['locationID'] == currentLocation && stt > 0 && ftt + 1 == dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, and a ' + inventory[key]['name'].toLowerCase() + '.</span>');
                ftt += 1;
                inventory[key]['locationID'] = "9999";
                return false;
            };
            
            if(inventory[key]['locationID'] == currentLocation && stt > 0 && ftt + 1 !== dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
                inventory[key]['locationID'] = "9999";
            };
            
            
            
            if(inventory[key]['locationID'] == "9999" && stt == 0){
                stt += 1;
            };
        });
    }
    
    if(dtd > 0){
        $(".textBox").append('<h1 class="inBoxText"> You take everything that is in the hole. </h1>');
    }
    
    dbt = 0;
    stt = 0;
    tvt = 0;
}


function drop(){
    $.each( inventory, function( key, value) {
        if(inventory[key]['locationID'] === "9999" && inventory[key]['name'].toLowerCase() === $("input").val().toLowerCase().substring(5,10000) && currentLocation !== "000.1"){
            dbt += 1;
            $(".textBox").append('<h1 class="inBoxText"> You dropped ' + inventory[key]['pickname'] + '</h1>');
            inventory[key]['locationID'] = currentLocation
            return false;
        }
        
        if(inventory[key]['locationID'] === "9999" && inventory[key]['name'].toLowerCase() === $("input").val().toLowerCase().substring(5,10000) && currentLocation == "000.1"){
            dbt += 1;
            $(".textBox").append('<h1 class="inBoxText"> You watched as the ' + inventory[key]['pick2name'].toLowerCase() + ' fell to the ground below.</h1>');
            inventory[key]['locationID'] = "000"
            return false;
        }
    });
    
    if(dbt == 0){
        $(".textBox").append('<h1 class="inBoxText"> You do not have that item. </h1>');
    }
    
    dbt = 0;
}


/*--------------------------*/
/*Look around the room YACIN*/


function openingLook(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation){
            $(".textBox").append('<h1 class="inBoxText">' + locations[key]['desc'] + '</h1>');
            $.each( inventory, function( sekey, sevalue ) {
                if(inventory[sekey]['locationID'] == currentLocation && inventory[sekey]['specialDef'] == "no"){
                    dbt += 1;
                };
            });
        }
    });
    
    if(dbt == 1){
        $.each( inventory, function( key, value ) {
            if(inventory[key]['locationID'] == currentLocation && inventory[key]['specialDef'] == "no"){
                $(".textBox").append('<h1 class="inBoxText"> You see a ' + inventory[key]['name'].toLowerCase() + ' laying on the ground.</h1>');
            };
            
        });
    };
    
    if(dbt > 1){
        $.each( inventory, function( key, value ) {
            if(inventory[key]['locationID'] == currentLocation && stt == 0){
                
                $(".textBox").append('<span class="inBoxTextSpan"> You can see: a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
            };
            
            if(inventory[key]['locationID'] == currentLocation && stt > 0 && ftt + 1 == dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, and a ' + inventory[key]['name'].toLowerCase() + '.</span>');
                ftt += 1;
                return false;
            };
            
            if(inventory[key]['locationID'] == currentLocation && stt > 0 && ftt + 1 !== dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
            };
            
            
            
            if(inventory[key]['locationID'] == currentLocation && stt == 0){
                stt += 1;
            };
        });
    };
    ftt = 0;
    stt = 0;
    dbt = 0;
};



function lookAround(){
    $.each( locations, function( key, value ) {
        if(locations[key]['locationID'] == currentLocation && locations[key]["look"] == "none"){
            $(".textBox").append('<h1 class="inBoxTitleS">' + locations[key]['title'].toUpperCase() + '</h1>');
            $(".textBox").append('<h1 class="inBoxText">' + locations[key]['desc'] + '</h1>');
            $(".lci").attr("src", locations[key]['img']);
            $.each( inventory, function( sekey, sevalue ) {
                if(inventory[sekey]['locationID'] == currentLocation){
                    dbt += 1;
                };
            });
        }
        
        if(locations[key]['locationID'] == currentLocation && locations[key]["look"] !== "none"){
            $(".textBox").append('<h1 class="inBoxTitleS">' + locations[key]['title'].toUpperCase() + '</h1>');
            $(".textBox").append('<h1 class="inBoxText">' + locations[key]['look'] + '</h1>');
            $.each( inventory, function( sekey, sevalue ) {
                if(inventory[sekey]['locationID'] == currentLocation){
                    dbt += 1;
                };
            });
        }
    });
    
    if(dbt == 1){
        $.each( inventory, function( key, value ) {
            if(inventory[key]['locationID'] == currentLocation){
                $(".textBox").append('<h1 class="inBoxText"> You see a ' + inventory[key]['name'].toLowerCase() + ' here.</h1>');
            };
            
        });
    };
    
    if(dbt > 1){
        $.each( inventory, function( key, value ) {
            if(inventory[key]['locationID'] == currentLocation && stt == 0){
                
                $(".textBox").append('<span class="inBoxTextSpan"> You can see: a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
            };
            
            if(inventory[key]['locationID'] == currentLocation && stt > 0 && ftt + 1 == dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, and a ' + inventory[key]['name'].toLowerCase() + '.</span>');
                ftt += 1;
                return false;
            };
            
            if(inventory[key]['locationID'] == currentLocation && stt > 0 && ftt + 1 !== dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
            };
            
            
            
            if(inventory[key]['locationID'] == currentLocation && stt == 0){
                stt += 1;
            };
        });
    };
    ftt = 0;
    stt = 0;
    dbt = 0;
};


/*--------------------------*/
/*Look at command...........*/


function lookAt(){
    var string = $("input").val().toLowerCase();
    var stringSplitted = string.split(" ");
    dbt = 0;
    
    if(stringSplitted[0] == "look" && stringSplitted[1] == "at" || stringSplitted[0] == "l" && stringSplitted[1] == "at"){
        $.each( inventory, function( key, value ) {
                if(inventory[key]['locationID'] == "9999" && (inventory[key]['name'].toLowerCase() === stringSplitted[2] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] || inventory[key]['name'].toLowerCase() === stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] + " " + stringSplitted[5])){
                    $(".textBox").append('<h1 class="inBoxText">' + inventory[key]['desc'] + '</h1>');
                };
        });
        
        $.each( roomObjects, function( key, value ) {
                if(roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name'].toLowerCase() == stringSplitted[2] || roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name'].toLowerCase() == stringSplitted[2] + " " + stringSplitted[3] || roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name'].toLowerCase() == stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4] || roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name2'].toLowerCase() == stringSplitted[2] || roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name2'].toLowerCase() == stringSplitted[2] + " " + stringSplitted[3] || roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name2'].toLowerCase() == stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4]){
                    var numOfDesc = Math.floor(Math.random() * roomObjects[key]["numDesc"]) + 1;
                    $(".textBox").append('<h1 class="inBoxText">' + roomObjects[key]['desc' + numOfDesc + ""] + '</h1>');
                    $(".lci").attr("src", roomObjects[key]['img']);
                    $(".lci").css("width", roomObjects[key]['width']);
                };
        });
        return false;
    };
    
    if(stringSplitted[0] == "examine"){
        $.each( inventory, function( key, value ) {
                if(inventory[key]['locationID'] == "9999" && (inventory[key]['name'].toLowerCase() === stringSplitted[1] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] || inventory[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4])){
                    $(".textBox").append('<h1 class="inBoxText">' + inventory[key]['desc'] + '</h1>');
                };
        });
        
        $.each( roomObjects, function( key, value ) {
                 if(roomObjects[key]['locationID'] == currentLocation && (roomObjects[key]['name'].toLowerCase() === stringSplitted[1] || roomObjects[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] || roomObjects[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] || roomObjects[key]['name'].toLowerCase() === stringSplitted[1] + " " + stringSplitted[2] + " " + stringSplitted[3] + " " + stringSplitted[4])){
                    var numOfDesc = Math.floor(Math.random() * roomObjects[key]["numDesc"]) + 1;
                    $(".textBox").append('<h1 class="inBoxText">' + roomObjects[key]['desc' + numOfDesc + ""] + '</h1>');
                    $(".lci").attr("src", roomObjects[key]['img']);
                    $(".lci").css("width", roomObjects[key]['width']);
                };
        });
        return false;
    };

    
    
    if(stringSplitted[0] == "watch"){
        $.each( roomObjects, function( key, value ) {
                if(roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name'].toLowerCase() == stringSplitted[1] || roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name'].toLowerCase() == stringSplitted[1] + " " + stringSplitted[2] || roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name2'].toLowerCase() == stringSplitted[1] || roomObjects[key]['locationID'] == currentLocation && roomObjects[key]['name2'].toLowerCase() == stringSplitted[1] + " " + stringSplitted[2]){
                    if(roomObjects[key]["watch"] == "yes"){
                        var numOfDesc = Math.floor(Math.random() * roomObjects[key]["numDesc"]) + 1;
                        dbt += 1;
                        $(".textBox").append('<h1 class="inBoxText">' + roomObjects[key]['desc' + numOfDesc + ""] + '</h1>');
                        $(".lci").attr("src", roomObjects[key]['img']);
                        $(".lci").css("width", roomObjects[key]['width']);
                    };
                };
        });
        if(dbt == 0){
            $(".textBox").append('<h1 class="inBoxText">I dont think you can watch that. Even if you tried to watch it, it would be very boring for me and you.</h1>');
        }
        return false;
    };
    
    
    
    if(stringSplitted[0] == "look" && stringSplitted[1] == "in" || stringSplitted[0] == "l" && stringSplitted[1] == "in"){
            $.each( inventory, function(key, value) {
                if(currentLocation == "000.1" && inventory[key]["locationID"] == "-0-0"){
                    dbt += 1;
                };
            })
    };
    
    
    
    if(dbt == 1 && stringSplitted[0] == "look" && stringSplitted[1] == "in" || dbt == 1 && stringSplitted[0] == "l" && stringSplitted[1] == "in"){
        $.each( inventory, function( key, value ) {
            if(inventory[key]['locationID'] == "-0-0"){
                $(".textBox").append('<h1 class="inBoxText"> You can see a ' + inventory[key]['name'].toLowerCase() + ' in the hole.</h1>');
            };
            
        });
    };
    
    if(dbt > 1){
        $.each( inventory, function( key, value ) {
            if(inventory[key]['locationID'] == "-0-0" && stt == 0){
                
                $(".textBox").append('<span class="inBoxTextSpan"> You can see: a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
            };
            
            if(inventory[key]['locationID'] == "-0-0" && stt > 0 && ftt + 1 == dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, and a ' + inventory[key]['name'].toLowerCase() + ' in the hole.</span>');
                ftt += 1;
                return false;
            };
            
            if(inventory[key]['locationID'] == "-0-0" && stt > 0 && ftt + 1 !== dbt){
                $(".textBox").append('<span class="inBoxTextSpan">, a ' + inventory[key]['name'].toLowerCase() + '</span>');
                ftt += 1;
            };
            
            
            
            if(inventory[key]['locationID'] == "-0-0" && stt == 0){
                stt += 1;
            };
        });
    };
    
    
    if(dbt == 0 && stringSplitted[0] == "look" && stringSplitted[1] == "in" && currentLocation !== "000.1" || dbt == 0 && stringSplitted[0] == "l" && stringSplitted[1] == "in" && currentLocation !== "000.1"){
        $(".textBox").append('<h1 class="inBoxText"> There is no hole here. </h1>');
        return false;
    };
    
    if(dbt == 0 && stringSplitted[0] == "look" && stringSplitted[1] == "in" && currentLocation == "000.1" || dbt == 0 && stringSplitted[0] == "l" && stringSplitted[1] == "in" && currentLocation == "000.1"){
        $(".textBox").append('<h1 class="inBoxText"> There is nothing in the hole </h1>');
    };
    
    
    
    ftt = 0;
    stt = 0;
    dbt = 0;
    
    
}


/*--------------------------*/
/*Climb into stuff..........*/


function climbIn(){
    if(currentLocation == "000.1" && $("input").val().toLowerCase().substring(9,10001) == "hole"){
        $(".textBox").append("<h1 class='inBoxText'> As you try to climb into the small hole you begin to realize that you're way to big and you get the top of your head stuck. It takes you a few moments to pry yourself loose. As your head pops out you lose your balance and fall to the ground below and land on your backside. As you pick yourself up and dust yourself off you experience a throbbing pain, not only on your head but your butt aswell. </h1>");
        currentLocation = "000"
        $(".lci").attr("src", locations["TheCircle"]['img']);
    };
};


/*--------------------------*/
/*hole storage based items..*/


function putIn(){
    var string = $("input").val().toLowerCase();
    var stringSplitted = string.split(" ");
    
    $.each( inventory, function( key, value) {
        if(inventory[key]['locationID'] === "9999" && inventory[key]['name'].toLowerCase() === stringSplitted[1] && currentLocation !== "000.1" && stringSplitted[2] == "in" && stringSplitted[3] == "hole"){
            dbt += 1;
            $(".textBox").append('<h1 class="inBoxText"> The hole does not exist here. </h1>');
            return false;
        }
        
        if(inventory[key]['locationID'] === "9999" && inventory[key]['name'].toLowerCase() === stringSplitted[1] && currentLocation == "000.1"  && stringSplitted[2] == "in" && stringSplitted[3] == "hole"){
            dbt += 1;
            $(".textBox").append('<h1 class="inBoxText"> You placed ' + inventory[key]['pick2name'].toLowerCase() + ' into the hole.</h1>');
            inventory[key]['locationID'] = "-0-0"
            return false;
        }
    });
    
    if(dbt == 0  && stringSplitted[2] == "in" && stringSplitted[3] == "hole"){
        $(".textBox").append('<h1 class="inBoxText"> You do not have that item. </h1>');
    }
    
    dbt = 0;
};



/*--------------------------*/
/*Token commands all........*/


function tokenSee(){
    var string = $("input").val().toLowerCase();
    var stringSplitted = string.split(" ");
    
    $.each( tokenLocations, function( key, value) {
        if(tokenLocations[key]['howToSee'] == "lookInHole" && currentLocation == "000.1" && tokenLocations[key]['visible'] == "yes" && string == "look in hole" && tokenLocations[key]['tokenTaken'] == "no" || tokenLocations[key]['howToSee'] == "lookInHole" && currentLocation == "000.1" && tokenLocations[key]['visible'] == "yes" && string == "l in hole" && tokenLocations[key]['tokenTaken'] == "no"){
            $(".textBox").append('<h1 class="inBoxText">' + tokenLocations[key]['desc'] + '</h1>');
        };
        
        if(tokenLocations[key]['howToSee'] == "digSand" && currentLocation == "008" && tokenLocations[key]['tokenTaken'] == "no" && (string == "dig in sand" || string == "search sand" || string == "search bottom of middle tank")){
            $(".textBox").append('<h1 class="inBoxText">' + tokenLocations[key]['desc'] + '</h1>');
        };
    });
}


function takeToken(){
    var string = $("input").val().toLowerCase();
    var stringSplitted = string.split(" ");
    
    $.each( tokenLocations, function( key, value) {
        if(tokenLocations[key]['howToSee'] == "lookInHole" && currentLocation == "000.1" && tokenLocations[key]['visible'] == "yes" && string == "take token" && tokenLocations[key]['tokenTaken'] == "no"){
            $(".textBox").append('<h1 class="inBoxText"> You took the token out of the hole. </h1>');
            tokenLocations[key]['tokenTaken'] = "yes";
            tokens += 1;
            points += 5;
        };
        if(tokenLocations[key]['howToSee'] == "digSand" && currentLocation == "008" && tokenLocations[key]['visible'] == "yes" && string == "take token" && tokenLocations[key]['tokenTaken'] == "no"){
            $(".textBox").append('<h1 class="inBoxText"> You take the shiny red East Side Token. You have gained a point! </h1>');
            tokenLocations[key]['tokenTaken'] = "yes";
            tokens += 1;
            points += 5;
        };
    });
}



/*--------------------------*/
/*Wait command..............*/

var num = 8;

function wait(){
    randomNum15 = Math.floor(Math.random() * num) + 1;
    
    if(randomNum15 == 1){
        $(".textBox").append('<h1 class="inBoxText">You stand there for a moment twiddling your thumbs.</h1>');
    }else if(randomNum15 == 2){
        $(".textBox").append('<h1 class="inBoxText">You pass the time wondering what will be on tomorrow’s lunch menu.</h1>');
    }else if(randomNum15 == 3){
        $(".textBox").append('<h1 class="inBoxText">Your stomach growls in hunger.</h1>');
    }else if(randomNum15 == 4){
        $(".textBox").append('<h1 class="inBoxText">In your head you count the days until summer.</h1>');
    }else if(randomNum15 == 5){
        $(".textBox").append('<h1 class="inBoxText">You let out a sigh.</h1>');
    }else if(randomNum15 == 6){
        $(".textBox").append('<h1 class="inBoxText">You stare blankly into space.</h1>');
    }else if(randomNum15 == 7){
        $(".textBox").append('<h1 class="inBoxText">You lose yourself in a daydream about unicorns.</h1>')
    }else if(randomNum15 == 8){
        $(".textBox").append('<h1 class="inBoxText">You do ten push-ups... Gotta keep in Shape!</h1>')
        points += 1;
        num = 7;    
    }
}



/*--------------------------*/
/*Help commands.............*/



function helperList() {
    $(".textBox").append('<h1 class="inBoxText" style="font-size: 0.65vw;">Welcome to <br>EAST SIDE HIGH SCHOOL THE TEXT ADVENTURE GAME! <br><br>Here are some common commands to the game: <br><br>Directions: <br>north, n, move north <br>west, w, move west <br>south, s, move south <br>east, e, move east <br>up, u, move up, climb, climb up <br>down, d, move down <br>northwest, nw, move northwest <br>northeast, ne, move northeast <br>southwest, sw, move southwest <br>southeast, se, move southeast <br><br>Actions: <br>inventory, i, check inventory <br>drop, place	 <br>pick up, take <br>tokens, tk <br>points, pt <br>look at <br>again <br>wait <br>commands <br><br>To talk to a character in the game: <br>Talk to (character name) <br>If you need a hint you can “talk to N1-g3l” and he will help out if her can! <br><br>ENJOY THE GAME!!!</h1>');
}



function readPamphlet() {
    if(inventory["pamphlet"]["locationID"] == "9999"){
        $(".textBox").append('<h1 class="inBoxText" style="font-size: 0.65vw;">Welcome to <br>EAST SIDE HIGH SCHOOL THE TEXT ADVENTURE GAME! <br><br>Here are some common commands to the game: <br><br>Directions: <br>north, n, move north <br>west, w, move west <br>south, s, move south <br>east, e, move east <br>up, u, move up, climb, climb up <br>down, d, move down <br>northwest, nw, move northwest <br>northeast, ne, move northeast <br>southwest, sw, move southwest <br>southeast, se, move southeast <br><br>Actions: <br>inventory, i, check inventory <br>drop, place	 <br>pick up, take <br>tokens, tk <br>points, pt <br>look at <br>again <br>wait <br>commands <br><br>To talk to a character in the game: <br>Talk to (character name) <br>If you need a hint you can “talk to N1-g3l” and he will help out if her can! <br><br>ENJOY THE GAME!!!</h1>');
    } else {
        $(".textBox").append('<h1 class="inBoxText">You do not have a pamphlet.</h1>');
    };
}



/*--------------------------*/
/*t&&p commands.............*/



function tokensCheck(){
    if(tokens == 0){
        $(".textBox").append('<h1 class="inBoxText">You do not have any tokens.</h1>');
    } else if(tokens == 1){
        $(".textBox").append('<h1 class="inBoxText">You have 1 token.</h1>');
    } else {
        $(".textBox").append('<h1 class="inBoxText">You have ' + tokens + ' tokens.</h1>');
    }
}

function pointsCheck(){
    if(points == 0){
        $(".textBox").append('<h1 class="inBoxText">You do not have any points.</h1>');
    } else if(points == 1){
        $(".textBox").append('<h1 class="inBoxText">You have 1 point.</h1>');
    } else {
        $(".textBox").append('<h1 class="inBoxText">You have ' + points + ' points.</h1>');
    }
}



/*--------------------------*/
/*tree commands.............*/



function fall(){
    $(".textBox").append('<h1 class="inBoxText">As you step off the branch you realize you are in mid air. A moment passes as you contemplate how sore you will be after the ground breaks your fall.<br><br> You pick yourself up and dust yourself off. It seems that the only thing bruised is your ego.</h1>');
    currentLocation = "000";
    lookAround();
    $(".lci").attr("src", locations['TheCircle']['img']);
}



/*--------------------------*/
/*food commands.............*/

var pointToGive = 1;

function feedFish(){
    if(inventory["shaker of fish food"]["locationID"] == "9999"){
        alert("yeh")
    } else {
        alert("no")
    }
}

function eatDog(){
    if(inventory["hotdog"]["locationID"] == "9999"){
        $(".textBox").append('<h1 class="inBoxText">Yum! That was one tasty hotdog. (Burp…)</h1>');
        inventory["hotdog"]["locationID"] = "stomach";
        points += 1;
    } else {
        $(".textBox").append('<h1 class="inBoxText">You do not have a hotdog.</h1>');
    }
}



/*--------------------------*/
/*Command Main Controller DT*/



function commandListSearch(textInput){
    
    var string = textInput;
    var stringSplitted = string.split(" ");
    
    
    previousPoints = points;
    previousTokens = tokens;
    previousSecurity = security
    
    
    if(string !== "again" && string !== "a"){
        $(".textBox").append('<h1 class="inBoxText">>' + $("input").val().toLowerCase() + '</h1>');
    }
    
    
    
    if(string !== "again" && string !== "a"){
        previousCommand = string;
    };
    
    if(string == "again" || string == "a"){
        commandListSearch(previousCommand);
    }
    
    switch(textInput){
        case "take token":
                takeToken();
                stringSplitted = "nothin";
                break;
                return; 
    };
    
    switch(textInput){
        case "look at token":
        case "l at token":
                if(tokens > 0){
                    $(".textBox").append('<h1 class="inBoxText">This bottle cap sized token is made from a shiny red metal with certain parts that are translucent. On one side there is a raised image of a torch that flickers in the light, and on the other side a large brick school with the inscription "East Side High School, Newark, NJ 1911"</h1>');
                };
                takeToken();
                stringSplitted = "nothin";
                break;
                return; 
    };
    
    switch(stringSplitted[0]){
        case "put":
                putIn();
                break;
                return;
        case "look":
        case "l":
        case "examine":
                lookAt();
                tokenSee();
                break;
                return;
        case "drop":
                drop();
                break;
                return;
        case "take":
                pickUP();
                tokenSee();
                break;
                return;
        case "watch":
                lookAt();
                break;
                return;
        
    };
    
    switch(textInput){
        case "drink":
        case "drink water":
        case "drink from fountain":
        case "take a drink":
                if(currentLocation == "009.1"){
                    $(".textBox").append('<h1 class="inBoxText">Ah, Refreshing!</h1>');
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is nothing to drink here.</h1>');
                }
                break;
                return;
        case "sign in":
        case "sign book":
                if(currentLocation == "007"){
                    $("input").val("talk to ramos");
                    $(".textBox").append('<h1 class="inBoxText">Mr. Ramos stops you from signing into the book.</h1>');
                    talkStart();
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is nothing to sign here.</h1>');
                }
                break;
                return;
        case "dig in sand":
        case "search sand":
        case "search bottom of middle tank":
                if(currentLocation == "008"){
                    tokenSee();
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no sand to dig here.</h1>');
                }
                break;
                return;
        case "enter bakery":
        case "enter lindas bakery":
                if(currentLocation == "005.3"){
                    $(".textBox").append('<h1 class="inBoxText">As you walk through the threshold of Linda’s Bakery the aroma of fresh bread wafts through your nostrils. You close your eyes and inhale to relish the smell. When you reopen them you see the long line ahead of you and decide to return later.</h1>');
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no bakery here.</h1>');
                }
                break;
                return;
        case "enter house":
        case "enter greenhouse":
                if(currentLocation == "005.3"){
                    $(".textBox").append('<h1 class="inBoxText">Even if the front door of this spooky house wasn’t boarded up you probably wouldn’t have the courage to go inside.</h1>');
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no greenhouse here.</h1>');
                }
                break;
                return;
        case "enter church":
                if(currentLocation == "005.3"){
                    $(".textBox").append('<h1 class="inBoxText">The door to the church is locked.</h1>');
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no church here.</h1>');
                }
                break;
                return;
        case "pick flower":
        case "pick flowers":
                if(currentLocation == "005.3"){
                    $(".textBox").append('<h1 class="inBoxText">That would be sacrilege.</h1>');
                }else{
                    $(".textBox").append('<h1 class="inBoxText">I dont see that here...</h1>');
                }
                break;
                return;
        case "knock on garage door":
        case "knock on garage doors":
                if(currentLocation == "005.2"){
                    $(".textBox").append('<h1 class="inBoxText">You hear someone yell from the other side of the door, "That’s not the knock!"</h1>')
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no garage door here.</h1>');
                }
                break;
                return;
        case "a shave and a haircut":
        case "knock a shave and a haircut":
                if(currentLocation == "005.2"){
                    $(".textBox").append('<h1 class="inBoxText">One of the garage doors rises about two feet. A voice from within says, “Quick, get in.” You quickly crawl under the garage door.</h1>')
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no garage door here.</h1>');
                }
                break;
                return;
        case "open gate":
                if(currentLocation == "005.1"){
                    gateOpenClose();
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no gate here.</h1>');
                }
                break;
                return;
        case "open latch":
                if(currentLocation == "005.1"){
                    latchOpenClose();
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no latch here.</h1>');
                }
                break;
                return;
        case "go to truck":
                if(currentLocation == "004"){
                    northWest();
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no truck here.</h1>');
                }
                break;
                return;
        case "climb tree":
                if(currentLocation == "000"){
                    up();
                }else{
                    $(".textBox").append('<h1 class="inBoxText">There is no tree here.</h1>');
                }
                break;
                return;
        case "wait":
        case "z":
                wait();
                if(currentLocation == "001.2" && roomObjects["team/game"]["locationID"] == "001.2"){
                    var numOfDesc = Math.floor(Math.random() * roomObjects["team/game"]["numDesc"]) + 1;
                    $(".textBox").append('<h1 class="inBoxText">' + roomObjects["team/game"]['desc' + numOfDesc + ""] + '</h1>');
                }
                break;
                return;
        case "u":
        case "up":
        case "go up":
                    if(upMove == true){
                        up();
                    };
                    $(".choicesHolder").css({visibility: "hidden"});
                    talkingTo = "noOne";
                    $(".cr").css({visibility: "hidden"});
                    break;
                    return;
        case "sw":
        case "south west":
        case "go south west":
                if(seMove == true && currentLocation !== "000.1"){
                    southWest();
                }else if(seMove == true && currentLocation == "000.1"){
                    fall();
                }
                $(".choicesHolder").css({visibility: "hidden"});
                talkingTo = "noOne";
                $(".cr").css({visibility: "hidden"});
                break;
                return;
        case "ne":
        case "north east":
        case "go north east":
                if(nwMove == true && currentLocation !== "000.1"){
                    northEast();
                }else if(nwMove == true && currentLocation == "000.1"){
                    fall();
                };
                $(".choicesHolder").css({visibility: "hidden"});
                talkingTo = "noOne";
                $(".cr").css({visibility: "hidden"});
                break;
                return;
        case "se":
        case "south east":
        case "go south east":
                if(seMove == true && currentLocation !== "000.1"){
                southEast();
                }else if(seMove == true && currentLocation == "000.1"){
                    fall();
                };
                $(".choicesHolder").css({visibility: "hidden"});
                talkingTo = "noOne";
                $(".cr").css({visibility: "hidden"});
                break;
                return;
        case "nw":
        case "north west":
        case "go north west":
                if(nwMove == true && currentLocation !== "000.1"){
                    northWest();
                }else if(nwMove == true && currentLocation == "000.1"){
                    fall();
                };
                $(".choicesHolder").css({visibility: "hidden"});
                talkingTo = "noOne";
                $(".cr").css({visibility: "hidden"});
                break;
                return;
        case "d":
        case "down":
        case "go down":
                if(downMove == true){
                    down();
                };
                $(".choicesHolder").css({visibility: "hidden"});
                talkingTo = "noOne";
                $(".cr").css({visibility: "hidden"});
                break;
                return;
        case "n":
        case "north":
        case "go north":
                if(northMove == true && currentLocation !== "000.1"){
                    north();
                }else if(northMove == true && currentLocation == "000.1"){
                    fall();
                }
            
                if(northMove == true && currentLocation == "004.1"){
                    currentLocation = "004";
                    $(".lci").attr("src", locations['VanBurenStN']['img']);
                };
                
                $(".choicesHolder").css({visibility: "hidden"});
                talkingTo = "noOne";
                $(".cr").css({visibility: "hidden"});
                break;
                return;
        case "s":
        case "south":
        case "go south":
                if(southMove == true && currentLocation !== "000.1"){
                    south();
                }else if(southMove == true && currentLocation == "000.1"){
                    fall();
                };
                $(".choicesHolder").css({visibility: "hidden"});
                talkingTo = "noOne";
                $(".cr").css({visibility: "hidden"});
                break;
                return;
        case "e":
        case "east":
        case "go east":
                if(eastMove == true && currentLocation !== "000.1"){
                    east();
                }else if(eastMove == true && currentLocation == "000.1"){
                    fall();
                };
                $(".choicesHolder").css({visibility: "hidden"});
                talkingTo = "noOne";
                $(".cr").css({visibility: "hidden"});
                break;
                return;
        case "w":
        case "west":
        case "go west":
                if(westMove == true && currentLocation !== "000.1"){
                    west();
                }else if(westMove == true && currentLocation !== "000.1"){
                    fall();
                };
                $(".choicesHolder").css({visibility: "hidden"});
                talkingTo = "noOne";
                $(".cr").css({visibility: "hidden"});
                break;
                return;
        case "i":
        case "inventory":
        case "check inventory":
                checkInventory();
                break;
                return;
        case "tk":
        case "tokens":
                tokensCheck();
                break;
                return;
        case "pt":
        case "points":
                pointsCheck();
                break;
                return;
        case "leave game":
                $(".textBox").append('<h1 class="inBoxText">User has left the game.... he couldnt stop playing however so he quickly re-entered the game.</h1>')
                break;
                return;
        case "l":
        case "look":
        case "look around":
                lookAround();
                break;
                return;
        case "commands":
                helperList();
                break;
                return;    
        case "read pamphlet":
                readPamphlet();
                break;
                return;  
        case "eat hotdog":
                eatDog();
                break;
                return;
        case "play basketball":
        case "play horse":
        case "play ball":
        case "play":
                if(currentLocation == "002"){
                    $(".textBox").append('<h1 class="inBoxText">You ask the elementary school students if you can join in the game, they reluctantly agree. After a few short minutes you get trounced by these little kids… you should be ashamed of yourself.</h1>')
                }
                break;
                return;
    };
    
    switch(stringSplitted[0] + " " + stringSplitted[1]){
        case "pick up":
                pickUP();
                break;
                return;
        case "climb in":
                climbIn();
                break;
                return;
        case "talk to":
                talkStart();
                break;
                return;
        
    };
    
    
    //EVENT THINGS
    
    if(inventory["softBall"]["locationID"] == "9999" && currentLocation == "001.2" && stringSplitted[0] == "throw" && (stringSplitted[1] == "softball" || stringSplitted[1] == "ball" || stringSplitted[1] == "softball" && stringSplitted[2] == "to" && stringSplitted[3] == "team" ||  stringSplitted[1] == "softball" && stringSplitted[2] == "on" && stringSplitted[3] == "field" ||  stringSplitted[1] == "softball" && stringSplitted[2] == "over" && stringSplitted[3] == "fence" || stringSplitted[1] == "ball" && stringSplitted[2] == "to" && stringSplitted[3] == "team" ||  stringSplitted[1] == "ball" && stringSplitted[2] == "on" && stringSplitted[3] == "field" ||  stringSplitted[1] == "ball" && stringSplitted[2] == "over" && stringSplitted[3] == "fence")){
        softballThrow();
    }else if(inventory["softBall"]["locationID"] !== "9999" && currentLocation == "001.2" && stringSplitted[0] == "throw" && (stringSplitted[1] == "softball" || stringSplitted[1] == "ball" || stringSplitted[1] == "softball" && stringSplitted[2] == "to" && stringSplitted[3] == "team" ||  stringSplitted[1] == "softball" && stringSplitted[2] == "on" && stringSplitted[3] == "field" ||  stringSplitted[1] == "softball" && stringSplitted[2] == "over" && stringSplitted[3] == "fence" || stringSplitted[1] == "ball" && stringSplitted[2] == "to" && stringSplitted[3] == "team" ||  stringSplitted[1] == "ball" && stringSplitted[2] == "on" && stringSplitted[3] == "field" ||  stringSplitted[1] == "ball" && stringSplitted[2] == "over" && stringSplitted[3] == "fence")){
        $(".textBox").append('<h1 class="inBoxText">You dont have a softball.</h1>');
    }
    
    //close
    
    $("input").val('');
    
    $.each( events, function( key, value ) {
        if(currentLocation == events[key]["locationID"] && events[key]["chanceFunction"] == "true" && events[key]["playable"] == "true" && events[key]["active"] == "true" && (string != "again" && string != "a")){
            if(events[key]["functionIPlay"] == "softBallEvent"){
                softBallEvent();
            };
        };
    });
    
    
    if(previousPoints !== points){
        $(".textBox").append('<h1 class="inBoxText" style="color: red;">You gained ' + (points - previousPoints) + ' points!</h1>');
    }
    
    if(previousTokens !== tokens){
        $(".textBox").append('<h1 class="inBoxText" style="color: red;">You gained ' + (tokens - previousTokens) + ' tokens!</h1>');
    }
    
    if(previousSecurity !== security){
        $(".textBox").append('<h1 class="inBoxText" style="color: red;">' + (security - previousSecurity) + ' Security Points. You have ' + (security + 3) + ' chances left.</h1>');
    }
    
    
    $(".pt").html("Points: " + points + "")
    $(".tk").html("Tokens: " + tokens + "")
    
    
    eventPlayer();
    
    if(inventory["idCard"]["locationID"] == "9999"){
        locations["westLobby"]["desc"] = "You are at the western end of East Side High School’s main lobby. Sitting attentively at the front desk is a security guard. There is a large painted plywood sculpture prominently standing next to the desk.";
        roomObjects["mrRamos"]["img"] = "http://i.imgur.com/6yiBSzI.jpg"
        roomObjects["mrRamoss"]["img"] = "http://i.imgur.com/6yiBSzI.jpg"
        roomObjects["mrRamos"]["desc1"] = "The security guard’s name tag identifies him as Mr. Ramos."
        roomObjects["mrRamoss"]["desc1"] = "The security guard’s name tag identifies him as Mr. Ramos."
    }
    
    if(inventory["idCard"]["locationID"] !== "9999"){
        locations["westLobby"]["desc"] = "You are at the western end of East Side High School’s main lobby. Sitting attentively at the front desk is a security guard. There is a large painted plywood sculpture prominently standing next to the desk. The security guard eyes you carefully.";
        roomObjects["mrRamos"]["img"] = "http://i.imgur.com/TXrOUTk.jpg"
        roomObjects["mrRamoss"]["img"] = "http://i.imgur.com/TXrOUTk.jpg"
        roomObjects["mrRamos"]["desc1"] = "The security guard’s name tag identifies him as Mr. Ramos. He is examining you as carefully as you are examining him."
        roomObjects["mrRamoss"]["desc1"] = "The security guard’s name tag identifies him as Mr. Ramos. He is examining you as carefully as you are examining him."
    }
    
    $(".textBox").html(function () {
        return $(this).html().replace("undefined", "Security guard, Carlos Ortiz, steps in front of you, blocks your path, crosses his arms and says “Can’t go this way, you’re gonna have to wait for the expansion.”"); 
    });
    
    scroller();
};



/*--------------------------*/
/*CheckEventFunctions.......*/



function eventPlayer(){
    $.each( events, function( key, value ) {
        if(currentLocation == events[key]["locationID"] && events[key]["chanceFunction"] == "true" && events[key]["playable"] == "true" && events[key]["chance"] !== "notChance"){
            chanceNum = Math.floor((((Math.random() * 10) + 1) * events[key]["chance"]) * 10) / 10;
            if(events[key]["functionIPlay"] == "softBallEvent" && chanceNum >= 1 && events[key]["active"] == "false"){
                events[key]["active"] = "true";
                inventory["softBall"]["locationID"] = "001.2"
                roomObjects["team/practice"]["locationID"] = "VOID";
                roomObjects["team/game"]["locationID"] = "VOID";
                $(".textBox").append('<h1 class="inBoxText">The shortstop hit a pop-up that starts to curve foul, flies over the fence and lands at your feet.</h1>');
            };
        };
    });
};



/*--------------------------*/
/*Scroller for the webpage..*/



function scroller(){
    var trueDivHeight = $('.textBox')[0].scrollHeight;
    var divHeight = $('.textBox').height();
    var scrollHeight = trueDivHeight - divHeight;
    $('.textBox').scrollTop( scrollHeight );
};



/*--------------------------*/
/*THE EVENT FUNCTIONS!!!!!!!*/

////SOFTBALL EVENT

// softball open Event
function softBallEvent(){
    randomNum13 = Math.floor(Math.random() * 3) + 1;
    
    if(randomNum13 == 1){
        $(".textBox").append('<h1 class="inBoxText">The softball team is looking at you as if they are expecting something.</h1>');
    }else if(randomNum13 == 2){
        $(".textBox").append('<h1 class="inBoxText">As the softball team impatiently waits, the coach calls to you, "A little help here?"</h1>');
    }else{
        $(".textBox").append('<h1 class="inBoxText">The catcher gives a big sigh and points at the softball.</h1>');
    }
    
};
//softBall close Event
function softballThrow(){
    inventory["softBall"]["locationID"] = "void"
    events["softBallT"]["active"] = "false";
    points += events["softBallT"]["points"];
    events["softBallT"]["points"] = 0;
    events["softBallT"]["chance"] = 0;
    roomObjects["team/practice"]["locationID"] = "001.2";
    roomObjects["team/game"]["locationID"] = "001.2";
    $(".textBox").append('<h1 class="inBoxText">You throw the ball back over the fence. Coach Capitani catches it in mid-air, tosses the ball to the pitcher, turns back to you and tips his hat.</h1>');
}

//// Finished



////// GATE OPEN CLOSE EVENT

////Open Gate Event

// Variable For Event Holder

var openGateTimes = 0;
var latch = "shut";
var gate = "closed";

// Variable folder close

function gateOpenClose(){
    var string = $("input").val().toLowerCase();
    var stringSplitted = string.split(" ");
    
    if(gate == "closed" && openGateTimes == 0 && string == "open gate"){
        if(latch == "shut"){
            $(".textBox").append('<h1 class="inBoxText">The gate is secured with a latch.</h1>');
            return false;
        }
        
        if(latch == "open"){
            $(".textBox").append('<h1 class="inBoxText">You push the heavy gate and you are able to budge it a bit but not wide enough for you to get through. Almost…</h1>');
            openGateTimes += 1;
            return false;
        }
        
    }else if(gate == "opened" && string == "open gate"){
        $(".textBox").append('<h1 class="inBoxText">The gate is already open.</h1>');
        return false;
        
    }else if(gate == "closed" && openGateTimes == 1 && string == "open gate"){
        if(latch == "shut"){
            $(".textBox").append('<h1 class="inBoxText">The gate is secured with a latch.</h1>');
            return false;
        }
        
        if(latch == "open"){
            $(".textBox").append('<h1 class="inBoxText">This time you use all your strength and the gate swings widely open.</h1>');
            locations["NicholsSt"]["desc"] = "You are standing in the middle of Nichols Street between Van Buren and Pulaski Street. To the north is a high chainlink fence that blocks the way into an alley that lies between East Side’s A-Building and C-Building. There is a large open gate in the middle of the fence that allows entry into the alley. To the Northeast there is a brown metal door. To the south lies St. Casmir’s Church.";
            locations["NicholsSt"]["N"] = "005.2";
            roomObjects["gateFence"]["desc1"] = "There is a gate in the chain link fence and it is open.";
            gate = "opened"
            openGateTimes += 1;
            return false;
        }
    }
}

function latchOpenClose(){
    var string = $("input").val().toLowerCase();
    var stringSplitted = string.split(" ");
    
    if(latch == "shut" && string == "open latch"){
        if(gate == "opened"){
            $(".textBox").append('<h1 class="inBoxText">The gate is already open.. so is thde latch.</h1>');
            openGateTimes += 1;
            return false;
        }
        
        if(gate == "closed"){
            $(".textBox").append('<h1 class="inBoxText">The latch slides open.</h1>');
            latch = "open"
            roomObjects["gateFence"]["desc1"] = "There is a gate in the chain link fence and it is closed.";
            return false;
        }
    }
    
    if(latch == "open" && string == "open latch"){
         $(".textBox").append('<h1 class="inBoxText">The latch is already open.</h1>');
        return false;
    }
}

////CLOSE































