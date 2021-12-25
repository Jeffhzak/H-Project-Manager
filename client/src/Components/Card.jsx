import React from 'react'

export const Card = ({card, setOpenViewModal}) => {

    const borderDraw = card.desc.length > 0 ? "text-sm border-t-2 border-primary border-opacity-20" : "text-sm";

    const handleClick = () => {
        
        setOpenViewModal(true);
    }
    return (
        <div className="rounded inverted p-2 flex flex-col max-h-28 overflow-clip text-ellipsis cursor-pointer" onClick={handleClick}>
            <span className="text-base">{card.name}</span>
            <span className={borderDraw}>{card.desc}</span>
        </div>
    )
}
