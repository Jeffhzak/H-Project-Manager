import React from 'react'
import { Modal } from '../Modal'

export const NewCardModal = ({setOpenCreateModal, createNewCard}) => {
    return (
        <Modal open={setOpenCreateModal}>
            <div className="title">
                <span >New Card</span>
            </div>
            <div className="body">
                
            </div>
            <div className="footer">
                <button onClick={() => createNewCard({name:"testname", desc:"testdesc"})}>TEST CREATE NEW CARD</button>
            </div>
        </Modal> 
    )
}
