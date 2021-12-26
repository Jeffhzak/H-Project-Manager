import React from 'react'
import { useEffect } from 'react'
import {CrossIcon} from "./CustomIcons//CrossIcon"

export const Modal = ({children, open}) => {

    useEffect(() => {
        const close = (event) => {
            if(event.key === "Escape") {
                open(false);
            }
        }
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    },[])
    return (
        <div className="w-screen h-screen bg-gray-900 bg-opacity-75 fixed top-0 left-0 flex justify-center items-center">
            <div className="modal_container relative max-h-screen max-w-2xl p-5 inverted rounded min-w-decent shadow-md shadow-primary">
                <button className="absolute top-0 left-full m-2 text-gray-300" onClick={() => open(false)}>
                    <CrossIcon/>
                </button>
                {children}
            </div>
        </div>
    )
}
