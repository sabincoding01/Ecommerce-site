import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <nav className='bg-white shadow-md'>
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold px-2'>
            <Link to="/">E-Shop Nepal</Link>
        </div>

{/* Search Bar */}

<div className='relative flex-1 mx -4'>
    <form>
<input type="text" placeholder='Search Product'  className='w-full border py-2 px-4'
/>
<FaSearch className='absolute top-3 right-3 text-red-500 '></FaSearch>

    </form>
    
</div>

{/* Add Cart */}

<div className='flex items-center space-x-4 px-1 '>
    <Link to="/cart">
    <FaShoppingCart/>
    </Link>

{/* Login/register */}
    <button className='hidden md:block'>
        Login | Register
    </button>
<button className='block md:hidden'>
   <FaUser></FaUser>
</button>

</div>
</div>


{/* Bar(home,....) */}

<div className='flex justify-center items-center space-x-10 py-4 text-sm font-bold '>
<Link to="/"  className='hover:underline'>
Home
</Link>

<Link to="/" className='hover:underline'>
Shop
</Link>

<Link to="/" className='hover:underline'>
Contact
</Link>

<Link to="/" className='hover:underline'>
About
</Link>


</div>

   
   </nav>
  )
}

export default Navbar