import { Button } from "@/components/ui/button";
import { Tabs, TabsTrigger, TabsContent, TabsList, } from "@/components/ui/tabs";
import Image from "next/image";
import ProductCart, { Product } from "./components/product-cart";


const products: Product[] = [
  {
    id: '1',
    name: 'Pizza 1',
    description: 'Pizza 1 description',
    image: '/pizza-main.png',
    price: 100,
  },
  {
    id: '2',
    name: 'Pizza 2',
    description: 'Pizza 2 description',
    image: '/pizza-main.png',
    price: 200,
  },
  
  {
    id: '3',
    name: 'Pizza 3',
    description: 'Pizza 3 description',
    image: '/pizza-main.png',
    price: 300,
  },
  {
    id: '4',
    name: 'Pizza 4',
    description: 'Pizza 4 description',
    image: '/pizza-main.png',
    price: 400,
  },
  {
    id: '5',
    name: 'Pizza 3',
    description: 'Pizza 3 description',
    image: '/pizza-main.png',
    price: 300,
  },
];


export default function Home() {
  return (
    <>
<section className='bg-white'>
          <div className='container mx-auto flex items-center justify-between py-24'>
            <div>
          <h1 className='text-7xl font-black font-sans'>Savor Delicious Pizza in  <br />
            <span className='text-primary'>Only 15 Minutes</span>
          </h1>
          <p className='text-2xl mt-8 max-w-lg leading-snug'>Order now and enjoy your favorite pizza in just 15 minutes.</p>
          <Button className='mt-8 text-lg rounded-full py-7 px-6 font-bold'>Get your pizza now</Button>
            </div>
            <div>
              <Image src={'/pizza-main.png'} alt='pizza' width={450} height={400} />
            </div>
        </div>
    </section>
    <section className="container mx-auto py-12 ">
        <div>
        <Tabs defaultValue="pizza" >
          <TabsList>
            <TabsTrigger value="pizza" className="text-md ">Pizza</TabsTrigger>
            <TabsTrigger value="burger" className="text-md ">Burger</TabsTrigger>
          </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
              {products.map((product) => (
                  <ProductCart key={product.id} product={ product}
              />
                ))}
             </div>
            </TabsContent>
            <TabsContent value="burger">
            <div className="grid grid-cols-4 gap-6 mt-6">
              {products.map((product) => (
                  <ProductCart key={product.id} product={ product}
              />
                ))}
             </div>
          </TabsContent>
        </Tabs>
        </div>
    </section>
    </>
  );
}
