import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components'
import Player from './Player'
import initialData from './initial-data';

const Container = styled.div`
margin:8px;
border: 1px solid lightgrey;
border-radius:6px;`;
const Title = styled.div`
padding:8px`;
const PlayerList = styled.div`
padding:8px;
`

function MainPool({pool}) {
const players=pool.playerIds.map(playerId=>initialData.players[playerId])

  return (
    <Container>
        <Title>{pool.title}</Title>
        <Droppable droppableId={pool.id}>
            {(provided)=>(<>
                <PlayerList
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {players.map((player,index)=><Player key={player.id} player={player} index={index}/>)}
                    {provided.placeholder}
                </PlayerList>
            </>

            )}


        </Droppable>
    </Container>
   

  )
}

export default MainPool