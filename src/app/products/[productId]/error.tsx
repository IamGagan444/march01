"use client"

export default function ErrorBoundary({error,reset}:{error:Error,reset:()=>void} ){
    return (
        <div>
            {error.message} <button onClick={reset}>try again</button>
        </div>
    )

}
