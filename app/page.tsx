
import Image from 'next/image'
import Map from '@components/Map'
import ConfirmButton from '@components/ConfirmButton'
import LocationSelector from '@components/LocationSelector'

const style = {
  main: `md:h-full h-2/3 w-screen flex-1 z-10`,
  rideRequestContainer: `md:h-[90%] h-1/3 md:w-96 md:ml-4 py-2 absolute md:top-16 md:left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
}

export default function Home() {

  
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    // </main>
    <div className='flex flex-col'>
          
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector />
          <ConfirmButton/>
        </div>
      </div>
        </div>
       
  )
}
