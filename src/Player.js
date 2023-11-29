import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
border:1px solid lightgrey;
padding:8px;
margin-bottom:8px;
border-radius:4px;
`

function Player({player,index}) {
  return (
      <Draggable draggableId={player.id} index={index}>
        {(provided)=>(
            <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
              {player.playerName}
            </Container>

        )}
        
      </Draggable>



  )
}

export default Player