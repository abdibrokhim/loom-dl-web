'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LucideStars, Menu, ExternalLinkIcon, MailIcon, GitForkIcon } from 'lucide-react';
import { Button } from './components/ui/button';
import { defaults } from './utils/constants';
import hackathon from '@/public/assets/hackathon.png';

export default function Header() {
  const closeAllDropdowns = () => {
    console.log('closeAllDropdowns');
  };

  const toggleDropdown = (dropdownId: string) => {
    if (document.getElementById(dropdownId)?.classList.contains('hidden')) {
      closeAllDropdowns();
      document.getElementById(dropdownId)?.classList.remove('hidden');
    } else {
      document.getElementById(dropdownId)?.classList.add('hidden');
    }
  };

  // Toggle the mobile menu dropdown
  const toggleMobileMenu = () => {
    toggleDropdown('menuDropdown');
  };

  // Data structure for links
  const links: any = {
    fork: [
      { label: 'Loom Video Downloader', url: 'https://github.com/abdibrokhim/loom-dl-web/fork' },
    ],
    star: [
      { label: 'Loom Video Downloader', url: 'https://github.com/abdibrokhim/loom-dl-web/' },
    ]
  };

  return (
    <header className="border-b border-[var(--ring-50)] relative p-4 sticky top-0 w-full">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="https://yaps.gg" className="flex items-center space-x-1" target="_blank" rel="noreferrer">
            <Image src="/assets/yapsdotgg.svg" alt="yapsdotgg" width={34} height={34} className="rounded-full" />
          </Link>
          <Image src="/assets/slash.svg" alt="slash" width={22} height={22} className="w-[12px] h-[22px] opacity-30" />
          <Link href="/" className="flex items-center space-x-1">
            <Image src="/assets/yapsdotlol.svg" alt="yapsdotlol" width={34} height={34} className="rounded-full" />
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="">
            <Button 
              onClick={toggleMobileMenu} 
              variant="destructive" 
              className="shrink-0 rounded-md">
              <Menu className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
      <div 
        id="menuDropdown"
        className="hidden absolute right-4 sm:right-[24px] mt-2 w-46 rounded-md shadow-lg bg-[var(--bg-a)] ring-1 ring-[var(--ring)] ring-opacity-100 z-10"
      >
        <div className="p-2 space-y-2">
          <div className="flex flex-row space-x-2 items-center justify-between w-full">
            <Button 
              onClick={() => {
                window.open('https://github.com/abdibrokhim/loom-dl-web/fork', '_blank')
              }} 
              variant="destructive" 
              className="rounded-md w-1/2">
              <GitForkIcon className="w-3 h-3" />
              <span className="ml-2 text-xs">Fork</span>
            </Button>
            <Button 
              onClick={() => {
                window.open('https://github.com/abdibrokhim/loom-dl-web', '_blank')
              }} 
              variant="destructive" 
              className="rounded-md w-1/2">
              <LucideStars className="w-3 h-3" />
              <span className="ml-2 text-xs">Star</span>
            </Button>
          </div>
          <div className='h-[.5px] bg-[var(--ring)]'></div>
          <Button 
              onClick={() => {
                const text = `try lovido.lol - free open source loom video downloader`;
                window.open(`https://x.com/intent/post?text=${encodeURIComponent(text)}`, '_blank');
              }} 
              variant="destructive" 
              className="shrink-0 rounded-md w-full">
              <span className="text-xs">Share on X (twitter)</span>
              <ExternalLinkIcon className="ml-2 w-3 h-3" />
            </Button>
          <div className='h-[.5px] bg-[var(--ring)]'></div>
          <div className='flex items-center justify-between w-full'>
            <div className='text-xs text-white/70 w-1/2'>Enterprise?</div>
            <Button
              onClick={() => {
                window.open('mailto:abdibrokhim@gmail.com?subject=Enterprise%20Inquiry', '_blank')
              }}
              variant="destructive" 
              size="sm"
              className="w-full justify-center rounded-md w-1/2"
            >
              <MailIcon className="w-3 h-3" />
              <span className="ml-2 text-xs">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
