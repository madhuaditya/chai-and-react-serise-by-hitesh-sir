// // components/Navbar.js
// import { useState } from 'react';
// import Link from 'next/link';
//
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     return (
//         <nav className="bg-blue-500 p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <Link href="/" className="text-white text-2xl font-bold">
//                     MyBoard
//                 </Link>
//
//                 {/* Desktop Links */}
//                 <ul className="hidden md:flex space-x-6">
//                     <li>
//                         <Link href="/" className="text-white hover:text-gray-200">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/about" className="text-white hover:text-gray-200">
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/contact" className="text-white hover:text-gray-200">
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//
//                 {/* Mobile Menu Button */}
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="md:hidden text-white"
//                 >
//                     {isOpen ? (
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     ) : (
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     )}
//                 </button>
//             </div>
//
//             {/* Mobile Links */}
//             {isOpen && (
//                 <ul className="md:hidden bg-blue-600 mt-2">
//                     <li>
//                         <Link href="/" className="block p-2 text-white hover:bg-blue-700">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/about" className="block p-2 text-white hover:bg-blue-700">
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/contact" className="block p-2 text-white hover:bg-blue-700">
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//             )}
//         </nav>
//     );
// };
//
// export default Navbar;

// components/Navbar.js
// "use client";
//
// import { useState } from 'react';
// import Link from 'next/link';
//
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     return (
//         <nav className="bg-blue-500 p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <Link href="/" className="text-white text-2xl font-bold">
//                     MyBoard
//                 </Link>
//
//                 {/* Desktop Links */}
//                 <ul className="hidden md:flex space-x-6">
//                     <li>
//                         <Link href="/" className="text-white hover:text-gray-200">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/about" className="text-white hover:text-gray-200">
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/contact" className="text-white hover:text-gray-200">
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//
//                 {/* Mobile Menu Button */}
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="md:hidden text-white"
//                 >
//                     {isOpen ? (
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     ) : (
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     )}
//                 </button>
//             </div>
//
//             {/* Mobile Links */}
//             {isOpen && (
//                 <ul className="md:hidden bg-blue-600 mt-2">
//                     <li>
//                         <Link href="/" className="block p-2 text-white hover:bg-blue-700">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/about" className="block p-2 text-white hover:bg-blue-700">
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/contact" className="block p-2 text-white hover:bg-blue-700">
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//             )}
//         </nav>
//     );
// };
//
// export default Navbar

function Navbar(){
    return  (
        <div>
            <h1>nav bar
            </h1>
        </div>
    );
}
export default Navbar;