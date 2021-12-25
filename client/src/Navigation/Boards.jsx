import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAuth } from "../Authentication/AuthProvider";
import axios from "axios";
import { List } from '../Components/List';
import { LoadingBar } from '../Components/LoadingBar';
import { Modal } from '../Components/Modal';


const URL = "https://api.trello.com/1";

export const Boards = () => {

    const {userData} = useAuth();
    const navigate = useNavigate();

    const {boardName, boardID} = useParams();

    const [lists, setLists] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
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
    
    const createNewCard = (listID) => {
        setOpenCreateModal(true);
        console.log(listID)
    }
    
    //?
    //! MODAL RELATED FUNCTIONS
    //*

    const renderLists = () => {

        const listRender = lists.map((list, index) => {
            
            return (
                <List key={`${list.id}+${index}`} list={list} cards={cards} createNewCard={createNewCard}/>
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
            {openCreateModal ? <Modal setOpenCreateModal={setOpenCreateModal} /> : null}
        </>
    )
}
