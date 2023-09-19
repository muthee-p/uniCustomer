"use client"

import Image from 'next/image'
import { useEffect, useContext, useState } from 'react'


const style = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
}

const carList= [
{
  service: 'Mini Cab',
  icon: '/assets/images/cab.png',
  priceMultiplier:1.2,
  
},
{
  service: 'Cab X',
  icon: '/assets/images/x.png',
  priceMultiplier:1.5,
  
},
{
  service: 'Black Cab',
  icon: '/assets/images/black.png',
  priceMultiplier:2,
  
},
{
  service: 'Boda',
  icon: '/assets/images/bike.png',
  priceMultiplier:1,
  
}
]

const RideSelector = () => {
  const basePrice = 154;
  const [price, setPrice] = useState()

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
        {carList.map((car, index) => (
          <div
            key={index}
            className={ style.car}
            onClick={() => {
              //setSelectedRide(car)
              setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))
            }}
          >
            <Image
              src={car.icon}
              className={style.carImage}
              height={50}
              width={80}
            />
            <div className={style.carDetails}>
              <div className={style.service}>{car.service}</div>
              <div className={style.time}>5 min away</div>
            </div>
            <div className={style.priceContainer}>
              <div className={style.price}>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RideSelector