'use client';
import React, { useState } from 'react'
import ToppingCard from './topping-card'
import { Topping } from './topping-card';
const toppings = [
  {
    id: '1',
    name: 'Extra cheese',
    price: 10,
    image: '/cheese.png',
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Extra chicken',
    price: 10,
    image: '/chicken.png',
    isAvailable: true,
  },
  {
    id: '3',
    name: 'Extra jalapeno',
    price: 10,
    image: '/jelapeno.png',
    isAvailable: true,
  },
]

const ToppingList = () => {
  const [selectedToppings, setSelectedToppings] = useState([toppings[0]]);


  const handleCheckBocCheck = (topping: Topping) => {

  }
  return (
    <section className='mt-6'>
      <h3 className="">Extra toppings</h3>
      <div className='grid grid-cols-3 gap-4 mt-2'>
        {
          toppings.map((topping) => { 
            return <ToppingCard key={topping.id} selectedToppings={selectedToppings} handleCheckBoxCheck={handleCheckBocCheck} topping={topping} />
          })
        }
      </div>
    </section>
  )
}

export default ToppingList