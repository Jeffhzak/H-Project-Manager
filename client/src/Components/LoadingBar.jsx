import React from 'react'

export const LoadingBar = () => {
    return (
        <div className="relative w-full sm:w-1/2 bg-gray-200 rounded">
            <div style={{width:"100%"}} className="absolute top-0 h-4 rounded shimmer"></div>
        </div>
    )
}
