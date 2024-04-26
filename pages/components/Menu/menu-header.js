import Image from 'next/image'
import Link from 'next/link';

export default function MenuHeader() {
  return(
    <div className='flex justify-center items-center gap-5 py-5 bg-off-white'>
      <div className='flex justify-center items-center'>
        <Image
          src='/assets/purple-petal.png'
          width={50}
          height={50}
        />
        <div><b>PURPLE PETALS</b></div>
      </div>
      <div className='flex gap-8'>
        <div className='flex justify-center items-center gap-4'>
          <div>compassion</div>
          <div>comfort</div>
          <div>commitment</div>
        </div>
        <div className='flex justify-center items-center gap-4'>
         <Link className='text-violet-700 hover:text-brown-tone hover:underline' href="/">HOME</Link>
         <Link className='text-violet-700 hover:text-brown-tone hover:underline' href="/">SERVICES</Link>
         <Link className='text-violet-700 hover:text-brown-tone hover:underline' href="/">CONTACT US</Link>
         <Link className='text-violet-700 hover:text-brown-tone hover:underline' href="/">ABOUT US</Link>
         <Link className='text-violet-700 hover:text-brown-tone hover:underline' href="/">CAREERS</Link>
         <Link className='text-violet-700 hover:text-brown-tone hover:underline' href="/">INSIGHTS</Link>
        </div>
      </div>
    </div>
  )
}