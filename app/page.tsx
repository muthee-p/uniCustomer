
import Image from 'next/image'
import MapPage from '@components/MapPage'

export default function Home() {

      const mapboxAccessToken = 'pk.eyJ1IjoicDI1NCIsImEiOiJjbG1qb3llNG4wNjRnMmpvYnVrcGQ0cW80In0.B-o9M7YKZSxPb31j7aGtyw'
      
  
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    // </main>
    <div >
      <MapPage/>
    </div>
  )
}
