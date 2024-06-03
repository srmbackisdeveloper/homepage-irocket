'use client'
import {
   Navbar,
   NavbarContent,
   NavbarItem,
   NavbarMenuToggle,
   NavbarMenu,
   NavbarMenuItem,
   Link,
   Button,
} from '@nextui-org/react'
import logo from "../../home/logo.png";
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const menuItems = [
      {title: 'Предложение', toHref: 'offer'},
      {title: 'Отзывы', toHref: 'feedback'},
      {title: 'Как начать', toHref: 'step'},
      {title: 'FAQ', toHref: 'faq'},
      {title: 'Наша команда', toHref: 'team'},
      {title: 'Контакты', toHref: 'contacts'}
   ]

   return (
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
         <NavbarContent>
            <div className="grid lg:ml-[-5em] mt-[1em]">
               <div className="flex items-center pb-4">
                  <Image src={logo} alt="Logo" height={48} className="h-12 mr-2" /> 
                  <div className="flex flex-col"> 
                     <h1 className="font-semibold text-4xl tracking-wider">iRocket</h1>
                     <p className="uppercase text-[10px] text-gray-400 hidden sm:block">
                        система роста продаж
                     </p>
                  </div>
               </div>
            </div>
         </NavbarContent>

         <NavbarContent className="hidden lg:flex gap-4" justify="center">
            {menuItems.slice(0, 5).map((item, index) => (
               <NavbarItem key={`${item}-${index}`}>
                  <Link
                     className="font-semibold hover:text-danger"
                     color="foreground"
                     href={`#${item.toHref}`}
                  >
                     {item.title}
                  </Link>
               </NavbarItem>
            ))}
         </NavbarContent>
         
         <NavbarContent justify="end">
            <NavbarItem className="ml-10">
               <Link
                  className="text-black font-semibold hover:text-danger"
                  href="https://app.sharex.kz/login"
               >
                  Вход
               </Link>
            </NavbarItem>
            <NavbarItem>
               <Button
                  as={Link}
                  color="danger"
                  href="https://app.sharex.kz/register"
                  variant="bordered"
                  className="font-semibold hover:bg-danger hover:text-white hidden md:flex"
               >
                  Попробовать
               </Button>
            </NavbarItem>
         </NavbarContent>
         
         <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden"
         />
         
         <NavbarMenu>
            {menuItems.map((item, index) => (
               <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                     color="foreground"
                     className="w-full"
                     href="#"
                     size="lg"
                  >
                     {item.title}
                  </Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
      </Navbar>
   )
}
