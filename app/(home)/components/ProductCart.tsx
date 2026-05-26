import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

export type Product = {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

type PropTypes = { product: Product }

const ProductCart = ({ product }: PropTypes) => {
    return (
        <Card className='border-none rounded-xl'>
            <CardHeader className='flex items-center justify-center pt-4'>
                <Image src={product.image} alt={product.name} width={150} height={150} />
            </CardHeader>
            <CardContent>
                <h2 className='text-xl font-bold'>{product.name}</h2>
                <p className='mt-2'>{product.description}</p>
            </CardContent>
            <CardFooter className='flex items-center justify-between'>
                <p>
                    <span>From</span>
                    <span className='font-bold'>Rs. {product.price}</span>
                </p>
                <Button className='bg-primary text-white rounded-full hover:bg-primary/80 hover:shadow-lg outline-none focus:outline-none'>Choose</Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCart