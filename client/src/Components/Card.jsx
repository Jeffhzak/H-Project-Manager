import React from 'react'

export const Card = ({card, setOpenViewModal, list, setcurrList, setCurrCardDetails}) => {

    const borderDraw = card.desc.length > 0 ? "text-xs text-gray-500 border-t-2 border-primary border-opacity-20" : "text-xs text-gray-500";

    const handleClick = () => {
        setcurrList(list);
        setCurrCardDetails(card);
        setOpenViewModal(true);
    }
    return (
        <div className="rounded inverted p-2 flex flex-col max-h-28 overflow-clip text-ellipsis cursor-pointer" onClick={handleClick}>
            <span className="text-base">{card.name}</span>
            <span className={borderDraw}>{card.desc}</span>
        </div>
    )
}
