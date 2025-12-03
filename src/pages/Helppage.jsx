import { useEffect } from 'react'
import customercare from '../assets/customercare.jpg'
import SubpageFooter from '../component/SubpageFooter'
export default function helppage() {
    useEffect(() => {
        document.title = 'red:Care';
    })
    return (
        <>
        <div className='bg-red-400'>
            <div>
                <img src={customercare} alt="" />
            </div>
        </div>
        <div>
            <SubpageFooter />
        </div>
        </>
    )
}