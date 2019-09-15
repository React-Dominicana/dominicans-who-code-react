import { React, memo } from 'react'

export const PageInfo = memo(() => {
    return (
        <>
            <h1>{process.env.REACT_APP_PROJECT_NAME}</h1>
            <p>Dominican Developers
                <span role="img" aria-label="">
                    &nbsp;🇩🇴
                </span>
                who likes to code and contribute to Open Source
                <span role="img" aria-label="">
                    &nbsp;❤️
                </span>
            </p>
        </>
    )
})