import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import '../style/ResidentCard.css';
function ResidentCard({url}) {
    const [resident, setResident] = useFetch()
    

    useEffect(() => {
      setResident(url)
    }, [url])
    const status = resident?.status.toLowerCase()
    const statusIcon = status === 'alive' ? '🟢' : status === 'dead'? '🔴':'⚫'
  return (
<div className='card'>
    <div className='card_image'>
            <img className='card_image-img' src={resident?.image} alt={resident?.name} />
            <span className='card_status'>{statusIcon} {resident?.status}</span>
        </div>
        <div className="card_body">
        <h3 className='card_name'>{resident?.name}</h3>
        <div className='card_info'>
            <span className='card_info-item'>
                <span className='card_info-label'>Species</span>
                {resident?.species}
            </span>
            <span className='card_info-item'>
                <span className='card_info-label'>Origin</span>
                {resident?.origin?.name}
            </span>
            <span className='card_info-item'>
                <span className='card_info-label'>Eppoisodes where appear</span>
                {resident?.episode?.length}
            </span>
        </div>
    </div>
</div>
  )
}

export default ResidentCard