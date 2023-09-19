
import Image from 'next/image'
import Map from '@components/Map'
import Rides from '@components/Rides'


export default function Home() {

  
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    // </main>
        <div className='flex'>
          
          <div className='w-1/4 h-screen'>
            <Rides />
          </div>
          <div className="w-3/4">
            <Map />
          </div>
        </div>
       
  )
}
