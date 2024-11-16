import React, { useRef, useState } from 'react'
import '../style/Search.css'

function Search({setLocationId}) {
    const [error, setError] = useState('') 
    const inputRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        const id = parseInt(inputRef.current.value)
        console.log(typeof id)
        if (isNaN(id)) {
            setError('❌ Introduce un numero valido')
            e.target.reset()
            setTimeout(() => { setError('') }, 3000)
            return
        }
        if (id < 1 || id > 126){
            setError('❌ Hey! you must provide an id from 1 to 126')
            e.target.reset()
            setTimeout(() => { setError('') }, 3000)
            return
        }

        setLocationId(id)
        //inputRef.current.value = ''
        e.target.reset()
    }
    
  return (
    <>
    <form onSubmit={onSubmit} className='search'>
        <input ref={inputRef} type="text" className='search_input'/>
        <button className='search_btn'>Serch</button>
        
    </form>
    <p className='message_error'>{error && error}</p>
    </>
  )
}

export default Search