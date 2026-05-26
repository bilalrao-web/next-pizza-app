'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react'

export type Topping = {
  id: string;
  name: string;
  price: number;
  image: string;
  isAvailable: boolean;
}

type PropTypes = {
    topping: Topping;
    selectedToppings: Topping[];
    handleCheckBoxCheck: (topping: Topping) => void;
}

const ToppingCard = ({ topping, selectedToppings, handleCheckBoxCheck }: PropTypes) => {
    const [selected, setSelected] = useState('1');
    const isCurrentSelected = selected === topping.id;
  return (
    <Button onClick={() => setSelected(topping.id)} variant="outline" className={cn('flex flex-col items-center justify-center h-42',isCurrentSelected ? 'border-primary' : 'border-transparent')}>
        <Image src={topping.image} alt={topping.name} width={100} height={100} />
        <h3>{topping.name}</h3>
        <p className='text-sm'>&#8377;{topping.price}</p>
    </Button>
  )
}

export default ToppingCard