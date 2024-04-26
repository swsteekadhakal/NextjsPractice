import Image from 'next/image'

export default function index() {
  return(
    <div>
      <div className="">
        <Image
          src='/assets/main-image.png'
          width={1000}
          height={1000}
          style={{width: '100%'}}
        />
      </div>
      <div className='img-citation px-48 py-3 text-center'>
        We pledge to infuse every interaction with genuine love, creating a standard of excellence in caregiving that comes from the heart. We elevate home carewith personalized support, treatingach client as a cherished individual and enhancing their quality of life.
      </div>
    </div>
  )
}