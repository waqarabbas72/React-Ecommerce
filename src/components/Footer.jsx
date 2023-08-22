import React from 'react'
import logo from '../images/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaMailBulk, FaLocationArrow } from 'react-icons/fa'
import Logo from './Navbar/Logo';


const btns = [
  { icon: FaFacebookF },
  { icon: FaInstagram },
  { icon: FaTwitter },
  { icon: FaLinkedin },

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
    <div className='bg-gray-200'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 mx-auto max-w-2xl p-4 pt-10 sm:px-6  lg:max-w-7xl lg:px-8 mt-20 border-b-2 mb-5'>
        <div className='flex flex-col gap-4'>
          <div>
           <Logo />
          </div>
          <div>
            <p className='text-lg'>We are a team of designers and developers that create high quality WordPress</p>
          </div>
          <div>
            {
              btns.map((item, i) => (
                <button key={i} className='border p-3 m-1 hover:bg-rose-800 text-gray-500 hover:text-white'><item.icon /></button>
              ))
            }
          </div>
        </div>

        <div>
          <p className='text-2xl mb-5'>My Account</p>
          <ul className='list'>
            {
              list1.map((list, i) => (
                <li key={i} className='m-1'><a href="#" className='text-gray-500 hover:text-rose-800'>{list.name}</a></li>
              ))
            }
          </ul>
        </div>

        <div>
          <p className='text-2xl mb-5'>Information</p>
          <ul className='list'>
            {
              list2.map((list, i) => (
                <li key={i} className='m-1'><a href="#" className='text-gray-500 hover:text-rose-800'>{list.name}</a></li>
              ))
            }
          </ul>
        </div>

        <div>
          <p className='text-2xl mb-5'>Talk To Us</p>
          <p className='text-gray-500 m-2'>Got Questions? Call us <br />
            <span className='text-xl font-bold text-black'>+670 413 90 762</span>
          </p>
          <div className='flex items-center'>
            <FaMailBulk className='h-6 w-auto text-gray-500' />
            <p className='text-gray-500 m-2'>shofy@support.com</p>
          </div>
          <div className='flex items-center'>
            <FaLocationArrow className='h-6 w-auto text-gray-500' />
            <p className='text-gray-500 m-2'>79 Sleepy Hollow St.
              Jamaica, New York 1432</p>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-2xl p-4  sm:px-6  lg:max-w-7xl lg:px-8 flex flex-col lg:flex-row gap-4 items-center justify-between'>
        <p className='text-gray-500'>© 2023 All Rights Reserved | React js Template by <a href="" className='text-rose-800'>WAQAR ABBAS</a></p>
        <div>
          {
            btns.map((item, i) => (
              <button key={i} className='border p-3 m-1 hover:bg-rose-800 text-gray-500 hover:text-white'><item.icon /></button>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Footer;
