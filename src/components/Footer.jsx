import React from 'react'
import { FaFacebookF, FaInstagram,FaGithub, FaLinkedin, FaMailBulk, FaLocationArrow } from 'react-icons/fa'
import Logo from './Navbar/Logo';
import { Link } from 'react-router-dom';
import footer from '../images/footer.jpg'


const btns = [
  { icon: FaFacebookF, url: `https://www.facebook.com/aBBaSOO313` },
  { icon: FaInstagram, url: `https://www.instagram.com/waqarabas_72/` },
  { icon: FaGithub, url: `https://github.com/waqarabbas72` },
  { icon: FaLinkedin, url: `https://www.linkedin.com/in/waqar-abbas-5943b4287/` },

]

const list1 = [
  { head: 'My Account' },
  { name: 'Track Orders' },
  { name: 'Shipping' },
  { name: 'Wishlist' },
  { name: 'My Account' },
  { name: 'Order History' },
  { name: 'Returns' },
];

const list2 = [
  { head: 'Information' },
  { name: 'Our Story' },
  { name: 'Careers' },
  { name: 'Privacy Policy' },
  { name: 'Terms & Conditions' },
  { name: 'Latest News' },
  { name: 'Contact Us' },
];

const Footer = () => {

  return (
    <div className='h-full' style={{ background: `url(${footer})`, backgroundPosition: 'object-center' }}>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 mx-auto max-w-2xl p-4 pt-10 sm:px-6  lg:max-w-7xl lg:px-8 mt-20 border-b-2 mb-5'>
        <div className='flex flex-col gap-4 '>
          <div>
            <Link to={`/`} onClick={() => window.scrollTo(0, 0)} className='text-white'><Logo/></Link>
          </div>
          <div>
            <p className='text-lg text-gray-200'>We are a team of designers and developers that create high quality WordPress</p>
          </div>
          <div>
            {
              btns.map((item, i) => (
                <button key={i} className='border p-3 m-1 hover:bg-rose-800 text-gray-400 hover:text-white'><item.icon /></button>
              ))
            }
          </div>
        </div>

        <div>
          <p className='text-2xl mb-5 text-gray-200'>My Account</p>
          <ul className='list'>
            {
              list1.map((list, i) => (
                <li key={i} className='m-1'><a href="#" className='text-gray-400 hover:text-rose-800'>{list.name}</a></li>
              ))
            }
          </ul>
        </div>

        <div>
          <p className='text-2xl mb-5 text-gray-200'>Information</p>
          <ul className='list'>
            {
              list2.map((list, i) => (
                <li key={i} className='m-1'><a href="#" className='text-gray-400 hover:text-rose-800'>{list.name}</a></li>
              ))
            }
          </ul>
        </div>

        <div>
          <p className='text-2xl mb-5 text-gray-200'>Talk To Us</p>
          <p className='text-gray-400 m-2'>Got Questions? Call us <br />
            <span className='text-xl font-bold text-gray-300'>+670 413 90 762</span>
          </p>
          <div className='flex items-center'>
            <FaMailBulk className='h-6 w-auto text-gray-400' />
            <p className='text-gray-400 m-2'>shofy@support.com</p>
          </div>
          <div className='flex items-center'>
            <FaLocationArrow className='h-6 w-auto text-gray-400' />
            <p className='text-gray-400 m-2'>79 Sleepy Hollow St.
              Jamaica, New York 1432</p>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-2xl p-4  sm:px-6  lg:max-w-7xl lg:px-8 flex flex-col lg:flex-row gap-4 items-center justify-between'>
        <p className='text-gray-400'>© 2023 All Rights Reserved | React js Template by <a href="" className='text-gray-200'>WAQAR ABBAS</a></p>
        <div>
          {
            btns.map((item, i) => (
              <button key={i} className='border p-3 m-1 hover:bg-rose-800 text-gray-400 hover:text-white'><a href={item.url}><item.icon /></a></button>
            ))
          }

        </div>
      </div>
    </div >
  )
};

export default Footer;
