const roads = [
    "Дом Алисы - Дом Боба",
    "Дом Алисы-Почта",
    "Дом Дарии-Дом Эрни",
    "Дом Эрни-Дом Греты",
    "Дом Греты-Магазин",
    "Рынок-Почта",
    "Рынок-Ратуша",
    "Дом Алисы-Склад",
    "Дом Боба-Ратуша",
    "Дом Дарии-Ратуша",
    "Дом Греты - Ферма",
    "Рынок - Ферма",
    "Рынок - Магазин",
    "Магазин - Ратуша"
];



function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if(graph[from] == null){
            graph[from] = [to];
        }else{
            graph[from].push(to);
        }
    }
    for(let [from,to] of edges.map(r => r.split("-"))){
        addEdge(from,to);
        addEdge(to,from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);


class VillageState {
    constructor(place,parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }else {
            let parcels = this.parcels.map(p => {
                if(p.place != this.place) return p;
                return {place: destination, adress: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

let  first = new VillageState(
    "Почта",
    [{place:"Почта", address: "Дом Алисы"}]
);
let next = first.move("Дом Алисы");

function runRobot(state,robot,memory){
    for(let turn = 0;; turn++){
        if(state.parcels.length == 0){
            console.log(`Выполнено за ${turn} ходов`);
            break;
        }
        let action = robot(state,memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Переход в направлении ${action.direction}`);
    }
}

function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])};
}


VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for(let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do{
            place = randomPick(Object.keys(roadGraph));
        }while(place == address);
        parcels.push({place,address});
    }
    return new VillageState("Почта",parcels);
};


//runRobot(VillageState.random(), randomRobot);

const mailRoute = [
    "Дом Алисы","Сарай","Дом Алисы","Дом Боба",
    "Ратуша","Дом Дарии","Дом Эрни",
    "Дом Греты","Магазин","Дом Греты","Ферма",
    "Рынок","Почта"
];


function routeRobot(state,memory){
    if(memory.length == 0){
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}


function findRoute(graph,from,to){
    ley work = [{at: from, route:[]}];
    for(let i = 0; i < work.length; i++){
        let { at,route } = work[i];
        for(let place of graph[at]){
            if(place == to) return route.concat(place);
            if(!work.some(w => w.at == place)){
                work.push({at: place,route: route.concat(place)});
            }
        }
    }
}


