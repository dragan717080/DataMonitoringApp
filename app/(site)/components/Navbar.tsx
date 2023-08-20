'use client';
import { FC, useEffect } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import NavbarMenuItem from './NavbarMenuItem';
import { ProductsToolbar, SolutionsToolbar, ResourcesToolbar } from './navbar-toolbars';

const Navbar: FC = () => {

  const toolbarComponents = [ProductsToolbar, SolutionsToolbar, ResourcesToolbar];

  return (
    <nav className="text-white h-30 px-14 flex">
      {toolbarComponents.map((toolbarComponent, index: number) => (
        <NavbarMenuItem ComponentToRender={toolbarComponent} index={index} key={index} />
      ))}
    </nav >
  );
};

export default Navbar;
