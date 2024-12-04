'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Notification from './utils/notify';
import { loader } from './utils/loader';
import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer';

export default function Home() {
  const [loomUrl, setLoomUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState<{ message: string; type: 'error' | 'success' | 'info' } | null>(null);  // notification message

    const downloadVideo = async () => {
        if (!loomUrl) return;

        setLoading(true);
        setNotification({ message: 'Downloading video...', type: 'info' });

        try {
        const response = await fetch('/api/loom-dl', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: loomUrl }),
        });

        const data = await response.json();

        if (response.ok) {
            setNotification({ message: 'Video downloaded successfully.', type: 'success' });
            // Create a temporary link to download the video
            const link = document.createElement('a');
            link.href = data.videoUrl;
            link.download = `${loomUrl.split('/').pop()}.mp4`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            setNotification({ message: data.error || 'An unexpected error occurred.', type: 'error' });
        }
        } catch (error) {
            console.error('Error downloading video:', error);
            alert('An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-[var(--bg-a)] items-center justify-items-center min-h-screen pb-8 gap-8 p-4 font-[family-name:var(--font-geist-sans)]">
      <Analytics />
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
          
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}
          
          <div className="mb-6 mt-16 sm:mt-24 text-center text-xl sm:text-2xl md:text-3xl leading-9">
            <h1 className="text-[var(--text-a)] font-semibold">paste 
              <span className='text-[var(--violet)] font-black'>
                {' '} loom {' '}
              </span> 
              video link below...</h1>
          </div>
          
          <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-center p-4 mb-8 shadow-lg gap-4 bg-[var(--bg-a)] rounded-full">
            <input
              type="text"
              value={loomUrl}
              onChange={(e) => setLoomUrl(e.target.value)}
              placeholder="enter loom video link here..."
              className="placeholder:text-[var(--text-c)] placeholder:text-sm text-sm bg-transparent focus:outline-none text-[var(--text-a)] w-full px-4 py-2 rounded-full shadow transition-colors border border-[var(--text-c)] focus:border-[var(--text-a)]"
              disabled={loading}
            />
            <button
              disabled={loomUrl === '' || loading}
              onClick={downloadVideo}
              className={`flex items-center justify-center py-2 px-4 sm:px-8 text-sm md:text-sm rounded-full shadow transition-colors 
                ${loomUrl === '' || loading 
                  ? 'cursor-not-allowed bg-[var(--text-c)] text-[var(--bg-a)]' 
                  : 'cursor-pointer bg-[var(--text-a)] hover:bg-[var(--text-b)] text-[var(--bg-a)]'
                }`}
            > <span className="mr-2">download</span>
              {!loading 
                ? (
                  <Image
                    aria-hidden
                    src="/download.svg"
                    alt="Download Icon"
                    width={20}
                    height={20}
                  />
                )
                : loader()
              }
            </button>
          </div>
          
      </main>
      <Footer />
    </div>
  );
}
