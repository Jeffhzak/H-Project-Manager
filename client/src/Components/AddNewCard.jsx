import React from 'react'

export const AddNewCard = ({list, setOpenCreateModal, setcurrList}) => {

    const openModal = () => {
        setcurrList(list);
        setOpenCreateModal(true);

    }
    return (
        <div className="rounded inverted p-2 flex flex-col max-h-28 overflow-clip text-ellipsis cursor-pointer" onClick={openModal}>
            <span className="text-base text-gray-400">+ Add a new card</span>
            <button></button>
        </div>
    )
}
