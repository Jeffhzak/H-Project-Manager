import React from 'react'
import { AddNewCard } from './AddNewCard';
import { Card } from './Card';

export const List = ({list, cards, setOpenCreateModal, setcurrList, setOpenViewModal, setCurrCardDetails}) => {
    // console.log(list);
    // console.log(cards);

    
    const renderCards = () => {
        const thisListsCards = cards.filter((card) => {
            if(card.idList === list.id) return true;
            else return false;
        })

        // console.log("thisListsCards", thisListsCards);
        
        const cardsRender = thisListsCards.map((card, index) => {
            return(
                <Card key={`${card.id}+${index}`} 
                card={card} 
                setOpenViewModal={setOpenViewModal}
                list={list}
                setcurrList={setcurrList} 
                setCurrCardDetails={setCurrCardDetails}/>
            )
        }) 

        return cardsRender;
    }

    return (
        <div className="bg-bgl rounded p-2 w-96 flex flex-col gap-1">
            <span className="text-primary text-xl font-bold uppercase">{list.name}</span>
            {renderCards()}
            <AddNewCard setOpenCreateModal={setOpenCreateModal} list={list} setcurrList={setcurrList}/>
        </div>
    )
}
