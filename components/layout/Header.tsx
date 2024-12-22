import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='container mx-auto py-4 flex items-center justify-between'>
        <div className="logo">
            <Image src="/assets/logos/Vector.png" alt="logo" width={50} height={50} />
        </div>
        <div className="search flex-1 mx-4">
            <input 
                type="text" 
                placeholder="Search for destination" 
                className="w-full p-2 rounded-l-md border border-gray-300"
            />
            <button className="p-2 bg-teal-500 text-white rounded-r-md">Search</button>
        </div>
        <div className="auth flex space-x-2">
            <button className="p-2 bg-white text-teal-500 border border-teal-500 rounded-md">Sign in</button>
            <button className="p-2 bg-teal-500 text-white rounded-md">Sign up</button>
        </div>
        <nav className="nav">
            <ul className="flex space-x-4">
                <li><a href="#rooms" className="hover:text-teal-500">Rooms</a></li>
                <li><a href="#mansion" className="hover:text-teal-500">Mansion</a></li>
                <li><a href="#countryside" className="hover:text-teal-500">Countryside</a></li>
                <li><a href="#apartments" className="hover:text-teal-500">Apartments</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
