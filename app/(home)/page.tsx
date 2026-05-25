import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
<section className='bg-white'>
          <div className='container mx-auto flex items-center justify-between'>
            <div>
          <h1 className='text-7xl font-black font-sans'>Savor Delicious Pizza in  <br />
            <span className='text-primary'>Only 15 Minutes</span>
          </h1>
          <p className='text-2xl mt-8 max-w-lg leading-snug'>Order now and enjoy your favorite pizza in just 15 minutes.</p>
          <Button className='mt-8 text-lg rounded-full py-7 px-6 font-bold'>Get your pizza now</Button>
            </div>
            <div>
              <Image src={'/pizza-main.png'} alt='pizza' width={400} height={400} />
            </div>
        </div>
          
    </section>
  );
}
