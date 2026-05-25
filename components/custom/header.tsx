import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Phone, ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'

const Header = () => {
    return (
      <header className='bg-white border-b'>
        <nav className='container mx-auto px-4 py-5 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Logo />  {/* Left */}
            
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Resturant" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="cheesy-delight">Cheesy Delight</SelectItem>
                    <SelectItem value="the-big-cheese">The Big Cheese</SelectItem>
                    <SelectItem value="the-cheesy-king">The Cheesy King</SelectItem>
                    <SelectItem value="the-cheesy-queen">The Cheesy Queen</SelectItem>
                    <SelectItem value="the-cheesy-prince">The Cheesy Prince</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
                </div>
                <div className='flex items-center gap-4'>
                   <ul className='flex items-center gap-4 font-medium text-sm'>
                    <li>
                        <Link className='hover:text-primary' href='/login'>Menu</Link>
                    </li>
                    <li>
                        <Link className='hover:text-primary' href='/register'>Orders</Link>
                    </li>
            </ul>
            <div className='relative'>
              <Link href='/cart' className='hover:text-primary'><ShoppingCart /></Link>
              <span className='absolute -top-1 -right-4 h-4 w-4 flex items-center text-xs justify-center rounded-full bg-primary font-bold text-white'>0</span>
            </div>
            <div className='flex items-center gap-x-2 ml-12'>
              <Phone />
              <span className='text-sm font-medium'>+92 9876543210</span>
            </div>
            <Button size={ 'sm'} className='ml-12 '>
              Logout
            </Button>
          </div>
        </nav>
      </header>
    )
  }

export default Header