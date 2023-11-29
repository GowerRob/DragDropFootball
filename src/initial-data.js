const initialData={
    players:{
    'player-1':{id:'player-1', playerName:'Robbie', attack:96, def:34},
    'player-2':{id:'player-2', playerName:'Sylvie', attack:96, def:34},
    'player-3':{id:'player-3', playerName:'Frank', attack:96, def:34},
    'player-4':{id:'player-4', playerName:'Kelly', attack:96, def:34},
    'player-5':{id:'player-5', playerName:'Darby', attack:96, def:34}, 
    },
    pools:{
        'main-pool':{
            id:'main-pool',
            title:'Player Pool',
            playerIds:['player-1','player-2','player-3','player-4','player-5']
        },
        'pos-1':{
            id:'pos-1',
            title:'Position 1',
            playerIds:[]
        },
        'pos-2':{
            id:'pos-2',
            title:'Position 2',
            playerIds:[]
        },

        'pos-3':{
            id:'pos-3',
            title:'Position 3',
            playerIds:[]
        },

    },
    poolOrder:['main-pool','pos-1','pos-2','pos-3',]
    


}

export default initialData