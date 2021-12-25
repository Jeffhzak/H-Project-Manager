import React from 'react'
import { useState } from 'react'
import { Modal } from '../Modal'

export const NewCardModal = ({currList, setOpenCreateModal, createNewCard}) => {
    const [cardDetails, setCardDetails] = useState({
        name: "",
        desc: "",
    })

    const handleChange = (event) => {
        const key = event.target.id;
        const val = event.target.value;
        setCardDetails({...cardDetails, [key]:val})
    }

    const handleSubmit = () => {
        createNewCard(cardDetails);
    }

    return (
        <Modal open={setOpenCreateModal}>
            <div className="title flex flex-col">

                <span className="text-primary text-xl font-bold uppercase">New Card</span>
                <span className="text-xs">in List: {currList.name}</span>

            </div>
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
            <div className="footer flex flex-row-reverse gap-2 pt-2">

                <button className="bg-primary btn_neutral" onClick={handleSubmit}>Confirm</button>
                <button className="bg-bgl btn_neutral" onClick={() => setOpenCreateModal(false)}>Cancel</button>
                {/* <button onClick={() => createNewCard({name:"testname", desc:"testdesc"})}>TEST CREATE NEW CARD</button> */}

            </div>
        </Modal> 
    )
}
