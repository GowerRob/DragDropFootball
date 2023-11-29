import {useState} from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import './App.css';
import initialData from './initial-data';
import MainPool from './MainPool'

function App() {
  
    const [pools, setPools]=useState(initialData.pools)

  const handleDragEnd=(result)=>{
    console.log(pools)
    const {destination, source, draggableId}=result;

    //null dropped outside a list
    if(!destination){return}

    //if dropped in same position
    if(
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ){return}


    const newSourcePlayers=[...pools[source.droppableId].playerIds]
    const newDestinationPlayers=[...pools[destination.droppableId].playerIds]

    //remove the dragged player from source
    newSourcePlayers.splice(source.index, 1)
    console.log("Removed from position ", source.index)
    //insert that player in destination
    newDestinationPlayers.splice(destination.index,0,draggableId)
    console.log("Inserted into position ", destination.index)

    if(destination.droppableId!=='main-pool'){
      console.log("Dropping into a pos")
      if(newDestinationPlayers.length>1){
        const indexOfOverflow=1-destination.index
        //put the overflowing player back in the main pool
        newSourcePlayers.splice(source.index,0,newDestinationPlayers[indexOfOverflow])
        
        //remove the overflowing player from the destination pool
        newDestinationPlayers.splice(indexOfOverflow,1)
      }

    }

    const newSourceObj={...pools[source.droppableId], playerIds:newSourcePlayers}
    const newDestinationObj={...pools[destination.droppableId], playerIds:newDestinationPlayers}

      setPools({...pools,
        [source.droppableId]:newSourceObj,
        [destination.droppableId]:newDestinationObj
      })


  }



  return (
    <DragDropContext
    onDragEnd={handleDragEnd}
    >       

    <MainPool key={"main-pool"} pool={pools['main-pool']} />

    <div className="position-holder">
      {initialData.poolOrder.filter(pool=>pool!=='main-pool').map((pool)=>{
        return <MainPool key={pool} pool={pools[pool]}  />
      })}


    </div>
 


    </DragDropContext>
  );
}

export default App;
