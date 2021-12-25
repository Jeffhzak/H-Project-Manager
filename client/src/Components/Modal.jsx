import React from 'react'
import { useEffect } from 'react'

export const Modal = ({children, setOpenCreateModal}) => {

    useEffect(() => {
        const close = (event) => {
            if(event.key === "Escape") {
                setOpenCreateModal(false);
            }
        }
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    },[])
    return (
        <div className="w-screen h-screen bg-gray-900 bg-opacity-75 fixed top-0 left-0 flex justify-center items-center">
            <div className="modal_container relative max-h-full max-w-2xl">
                <button className="absolute top-0 left-full m-2" onClick={() => setOpenCreateModal(false)}>X</button>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quam illo aliquid magnam voluptas ullam voluptate molestias, commodi beatae facilis autem nihil? Eligendi id aperiam quidem error sequi. Eaque, corporis.
                </p>
                {children}
            </div>
        </div>
    )
}
