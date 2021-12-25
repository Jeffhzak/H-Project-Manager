import React from 'react'
import { useState } from 'react'
import { Modal } from '../Modal'

export const ViewCardModal = ({setOpenViewModal, currList, currCardDetails, editCard}) => {
    const [cardDetails, setCardDetails] = useState(currCardDetails);

    const [editMode, setEditMode] = useState(false);

    const handleChange = (event) => {
        const key = event.target.id;
        const val = event.target.value;
        setCardDetails({...cardDetails, [key]:val})
    }

    const handleEdit = () => {
        if (editMode === false) return setEditMode(true);
        if (editMode === true) {
            setCardDetails(currCardDetails);
            setEditMode(false);
        }
    }

    const handleSubmit = () => {
        
        editCard(cardDetails);
    }
    
    return (
        <Modal open={setOpenViewModal}>
            <div className="title flex flex-col">

                <span className="text-primary text-xl font-bold uppercase">{editMode ? "Edit Card" : "View Card"}</span>
                <span className="text-xs">in List: {currList.name}</span>

            </div>

            {editMode
            ?
            <div className="body flex flex-col gap-2 pt-2">
                <input 
                id="name" 
                type="text" 
                value={cardDetails.name} 
                onChange={handleChange}
                placeholder="Name (required)"
                className="text_input"></input>

                <textarea 
                id="desc" 
                value={cardDetails.desc} 
                onChange={handleChange}
                placeholder="Description (optional)"
                className="text_input h-40"></textarea>
            </div>
            :
            <div className="body flex flex-col gap-2 pt-2">
                <span className="text-gray-700 uppercase font-bold text-lg">{cardDetails.name}</span>
                <span className="text-gray-700">{cardDetails.desc}</span>
            </div>
            }

            {editMode
            ?
            <div className="footer flex flex-row-reverse gap-2 pt-2">

                <button className="bg-primary btn_neutral" onClick={handleSubmit}>Confirm</button>
                <button className="bg-bgl btn_neutral" onClick={handleEdit}>Cancel</button>

            </div>
            :
            <div className="footer flex flex-row-reverse gap-2 pt-2">

                <button className="bg-primary btn_neutral" onClick={handleEdit}>Edit</button>
                <button className="bg-bgl btn_neutral" onClick={() => setOpenViewModal(false)}>Close</button>

            </div>
            }
        </Modal> 
    )
}
