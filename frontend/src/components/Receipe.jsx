import React from 'react'

function Receipe({save, isSaved, id, heading, instruction, image, CookingTime='0' }) {
    const instructions = instruction.split("\n");
    console.log(instructions);
    
    return (
        <div>
            <li key={id}>
                <h2 className='text-3xl font-semibold underline my-2 uppercase'>{heading}</h2>
                <img className='m-auto w-[70%] rounded-xl border-black border-4' src={image} alt={heading} />
                <div className='text-left m-2'>
                    <h1 className='text-xl font-semibold ml-2'>Receipe:</h1>
                    <ol className='list-disc ml-6'>
                        {instructions.map((instruc) =>(
                            <li className=''>{instruc}</li>
                        ))}
                    </ol>
                </div>
                <button className='bg-blue-500 py-1 rounded-lg my-2 w-[80%] hover:cursor-pointer' onClick={() => save(id)} disabled={isSaved(id)}>
                    {isSaved(id) ? "Remove" : "Save"}
                </button>
                <p className='pb-2 text-xl'>Cooking Time: {CookingTime} minutes</p>
            </li>
        </div>
    )
}

export default Receipe
