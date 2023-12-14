import React from 'react'

const GetDetailById = ({ params }) => {
    return (
        <>
            <h1 className='h-screen w-full flex justify-center items-center'>Hello I am ID {params.contact_id}</h1>
        </>
    )
}

export default GetDetailById