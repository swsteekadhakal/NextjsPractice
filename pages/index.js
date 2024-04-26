import ContactHeader from './components/ContactHeader/contact-header';
import MenuHeader from './components/Menu/menu-header';
import BodyImage from './components/BodyImage'
import Services from './components/Services'
import ServiceImages from './components/Images'
import Testimonials from './components/Testimonials'
import Footer from'./components/Footer'

export default function Index() {
  return (
    <main>
      <div className='sticky top-0'>
        <ContactHeader/>
        <MenuHeader/>
      </div>
      <div>
        <BodyImage/>
        <Services/>
        <ServiceImages/>
        <Testimonials/>
        <Footer/>
      </div>
    </main>
  )
}
