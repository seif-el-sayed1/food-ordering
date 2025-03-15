import React from 'react'

export const Loading = () => {
    return (
        <div className="flex justify-center my-20 flex-row gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-950 animate-bounce" />
            <div className="w-5 h-5 rounded-full bg-blue-950 animate-bounce [animation-delay:-.3s]" />
            <div className="w-5 h-5 rounded-full bg-blue-950 animate-bounce [animation-delay:-.5s]" />
        </div>
    )
}
