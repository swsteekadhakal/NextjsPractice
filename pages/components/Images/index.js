import Image from 'next/image'

export default function Images() {
  const images=[{image_path:'/assets/elderly.png', image_title:'RESPITE/COMPANION CARE'},{image_path:'/assets/elderly.png', image_title:'ATTENDANT CARE'}, {image_path:'/assets/elderly.png', image_title:'PERSONAL CARE'}]
  return(
    <div className='px-20 py-8 grid grid-cols-3 gap-4'>
      {
        images.map((image) => {
          return (
            <div className="relative">
              <div>
                <Image
                  src={image.image_path}
                  width={500}
                  height={500}
                  className='rounded-t'
                />
              </div>
              <div className='absolute bottom-0 left-0 bg-dark-green text-white opacity-75   h-10 w-50 py-2 px-2'>
                {image.image_title}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}