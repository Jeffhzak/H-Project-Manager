import React from 'react'

export const AddNewCard = ({createNewCard}) => {
    return (
        <div className="rounded inverted p-2 flex flex-col max-h-28 overflow-clip text-ellipsis cursor-pointer" onClick={() => createNewCard()}>
            <span className="text-base text-gray-400">+ Add a new card</span>
        </div>
    )
}
