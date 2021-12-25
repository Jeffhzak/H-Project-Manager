import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAuth } from "../Authentication/AuthProvider";
import axios from "axios";
import { List } from '../Components/List';
import { LoadingBar } from '../Components/LoadingBar';
import { NewCardModal } from '../Components/CustomModals/NewCardModal';


const URL = "https://api.trello.com/1";

export const Boards = () => {

    const {userData} = useAuth();
    const navigate = useNavigate();

    const {boardName, boardID} = useParams();

    const [lists, setLists] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currListID, setCurrListID] = useState("");
    const [openCreateModal, setOpenCreateModal] = useState(false);

    useEffect( async () => {

        setLoading(true);

        try {
            const fetchList = await axios.get(`${URL}/boards/${boardID}/lists?key=${userData.TRELLO_KEY}&token=${userData.TRELLO_TOKEN}`);
            const listData = fetchList.data;
            // console.log("listData", listData)
            setLists(listData);

        } catch (error) {
            alert(error.response.data);
            navigate("/404", {replace: true});

        }

        const fetchCards = await axios.get(`http://localhost:3001/api/cards/${boardID}`);
        const cardsData = fetchCards.data;
        // console.log("cardsData", cardsData.data);
        setCards(cardsData.data);

        setLoading(false);

    }, [boardID])
    
    //?
    //! MODAL RELATED FUNCTIONS
    //*
    
    const createNewCard = async (body) => {
        const {name, desc} = body;
        
        // console.log(currListID);
        // console.log(name);
        // console.log(desc);

        try {
            if (name.length === 0) return alert("name field is mandatory!");
            const response = await axios.post(`${URL}/cards?key=${userData.TRELLO_KEY}&token=${userData.TRELLO_TOKEN}&idList=${currListID}&name=${name}&desc=${desc}`);
            const newCard = response.data;

            // console.log(newCard);

            const response2 = await axios.post(`http://localhost:3001/api/cards/new`, newCard)

            // console.log("response2",response2)

            setCards([...cards, newCard]);

            setOpenCreateModal(false);

        } catch (error) {
            const trelloRes = error.response.data.error.message;
            const apiRes = error.response.data.message;
            if (!!trelloRes) alert (trelloRes);
            else alert(apiRes);
            navigate("/404", {replace: true});
        }
    }
    
    //?
    //! MODAL RELATED FUNCTIONS
    //*

    const renderLists = () => {

        const listRender = lists.map((list, index) => {
            
            return (
                <List key={`${list.id}+${index}`} list={list} cards={cards} setOpenCreateModal={setOpenCreateModal} setCurrListID={setCurrListID}/>
            )
        })
        return listRender;
    }

    return (
        <>
            <span>Hello Boards :) {boardID}</span>
            <div className="w-full lg:w-4/5 bg-secondary m-auto rounded p-2 flex gap-2 bg-opacity-50">
            {!loading ? renderLists() : <LoadingBar/>}
            </div>
            {openCreateModal 
            ? 
            <NewCardModal 
            setOpenCreateModal={setOpenCreateModal}
            createNewCard={createNewCard} />
            : null}
        </>
    )
}
