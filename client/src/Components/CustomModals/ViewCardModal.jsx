import React from 'react'
import { useState } from 'react'
import { Modal } from '../Modal'

export const ViewCardModal = ({setOpenViewModal, currList, currCardDetails, editCard, lists, deleteCard}) => {
    // console.log("lists in viewCardModal",lists)
    const [cardDetails, setCardDetails] = useState(currCardDetails);

    const [editMode, setEditMode] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false);

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
    
    const selectChange = (event) => {
        const newListID = (event.target.value);
        console.log(newListID)
        if (newListID !== "placeholder") {
            setCardDetails({...cardDetails, idList:newListID});
            console.log(cardDetails);
        }
    }
    const selectListOptions = () => {
        const listOptions = lists.map((list, index) => {
            if (list.id === currList.id) {
                return (
                    <option 
                    key={`${list.id}+${index}`}
                    value={list.id}
                    disabled>
                        {list.name}
                    </option>
                )
            } else {
                return (
                    <option 
                    key={`${list.id}+${index}`}
                    value={list.id}>
                        {list.name}
                    </option>
                )
            }
        })
        return listOptions;
    }
    
    const handleSubmit = () => {
        
        editCard(cardDetails);
        setEditMode(false);
    }

    const handleDelete = () => {

        deleteCard(cardDetails);
        setDeleteConfirm(false);
        setOpenViewModal(false);
        
    }

    return (
        <Modal open={setOpenViewModal}>
            <div className="title flex flex-col">
                <div className="flex flex-row justify-between align-middle">
                    <span className="text-primary text-xl font-bold uppercase">{editMode ? "Edit Card" : "View Card"}</span>
                    {deleteConfirm
                    ?
                    <div className="flex gap-2 items-center">
                        <span>You sure? There's no undoing this.</span>
                        <button className="w-16 btn_neutral bg-bgl" onClick={() => setDeleteConfirm(false)} >No</button>
                        <button className="w-16 btn_neutral bg-primary" onClick={handleDelete}>Do it.</button>
                    </div>
                    :
                    <button className="btn_neutral bg-sky-800" onClick={() => setDeleteConfirm(true)}>Delete</button>
                    }
                </div>
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
            <div className="footer flex flex-row align-middle pt-2 justify-between">
                <select 
                className="text_input bg-bgl text-secondary" 
                defaultValue={"placeholder"} 
                onChange={selectChange}>

                    <option 
                    disabled 
                    value="placeholder">
                        Move Card to a different List
                    </option>
                    {selectListOptions()}

                </select>

                <div className="flex flex-row-reverse gap-2">

                    <button className="bg-primary btn_neutral" onClick={handleSubmit}>Confirm</button>
                    <button className="bg-bgl btn_neutral" onClick={handleEdit}>Cancel</button>

                </div>
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
