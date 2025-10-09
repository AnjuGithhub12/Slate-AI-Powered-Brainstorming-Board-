'use client'

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { userBoardStore } from '@/store/userBoardStore';
import React, { useEffect } from 'react'
function Board() {
    const getBoard = userBoardStore((state) => state.getBoard);
    useEffect(() => {
        getBoard();
    }, []);
}



function Board() {
    return (
    <h1>Hello</h1>
        // <DragDropContext>
        //     <Droppable droppableId="board" direction="horizontal" type="column">

        //         {provided => (
        //             <div>
        //                 {/* rendereing all the columns */}
        //             </div>
        //         )}
        //     </Droppable>
        // </DragDropContext>
    
    );
}

export default Board; 