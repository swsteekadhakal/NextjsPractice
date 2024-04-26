import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {image_path: '/assets/profile1.png', name: 'Rhea', description: 'Their caregivers became like family, providing outstanding personal care and companionship.The transportation services ensured by mothers safe travel to appointments. I am deeply grateful for theircompassionate approach.',alt_text: 'Rhea'},
    {image_path: '/assets/profile1.png', name: 'Jacob', description: 'Invaluable service for my fathers mobility needs. Punctual, respectful transportation, joyful companionship, and reliable medication reminders. A true blessing.',alt_text: 'Jacob' },
    {image_path: '/assets/profile1.png', name: 'Amy', description: 'Exceptional care for my grandmother.Dignified personal care, brightening companionship, meticulous medication reminders, and secure transportation. They truely go the extra mile.', alt_text: 'Amy'

    }
  ]
  return(
    <div>
      <div className= 'text-center py-5 text-green-tone font-semibold text-lg'>TESTIMONIALS</div>
      <div className='grid grid-cols-3 gap-4 px-4'>
        {
          testimonials.map((testimonial) => {
            return (
              <div className='w-full flex' >
                <div style={{width:'25%'}}>
                  <div className="w-20 h-20 border border-solid border-black rounded-full z-10 overflow-hidden">
                    <Image
                      src={testimonial.image_path}
                      width={80}
                      height={80}
                      alt={testimonial.alt_text}
                    />
                  </div>
                </div>
                <div style={{width: '75%'}}>
                  <div className='font-bold text-mummy-brown'>{testimonial.name}</div>
                  <span className='text-green-tone text-sm'>{testimonial.description}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}