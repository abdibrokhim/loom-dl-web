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
    <div className="grid grid-rows bg-[var(--bg-a)] items-center justify-items-center min-h-screen gap-8 p-4 font-[family-name:var(--font-geist-sans)]">
      <Analytics />
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
          
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}
          
          <div className="mb-6 mt-16 sm:mt-24 w-full max-w-2xl text-center text-xl sm:text-2xl md:text-3xl leading-9">
            <h1 className="text-[var(--text-a)] font-semibold flex flex-row gap-2">
              <p>Paste</p>
                <svg viewBox="0 0 100 30" fill="none" className="lns-logoSvg"><path d="M30.01 13.43h-9.142l7.917-4.57-1.57-2.72-7.918 4.57 4.57-7.915-2.72-1.57-4.571 7.913V0h-3.142v9.139L8.863 1.225l-2.721 1.57 4.57 7.913L2.796 6.14 1.225 8.86l7.917 4.57H0v3.141h9.141l-7.916 4.57 1.57 2.72 7.918-4.57-4.571 7.915 2.72 1.57 4.572-7.914V30h3.142v-9.334l4.655 8.06 2.551-1.472-4.656-8.062 8.087 4.668 1.571-2.72-7.916-4.57h9.141v-3.14h.001zm-15.005 5.84a4.271 4.271 0 11-.001-8.542 4.271 4.271 0 01.001 8.542z" fill="#625df5"></path><path d="M38.109 25.973V4.027h4.028v21.946h-4.028zM76.742 11.059h3.846v1.82c.818-1.455 2.727-2.244 4.362-2.244 2.03 0 3.665.88 4.422 2.485 1.18-1.82 2.756-2.485 4.725-2.485 2.756 0 5.39 1.667 5.39 5.668v9.67h-3.906v-8.851c0-1.607-.788-2.82-2.636-2.82-1.727 0-2.757 1.335-2.757 2.942v8.73h-3.996v-8.852c0-1.607-.818-2.82-2.636-2.82-1.757 0-2.787 1.305-2.787 2.942v8.73h-4.027V11.059zM51.24 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.288 7.889-7.824 7.889zm0-12.135a4.25 4.25 0 00-4.244 4.247 4.25 4.25 0 004.244 4.247 4.25 4.25 0 004.243-4.247 4.25 4.25 0 00-4.243-4.247zM67.667 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.29 7.889-7.824 7.889zm0-12.186a4.3 4.3 0 00-4.293 4.296 4.3 4.3 0 004.293 4.296 4.3 4.3 0 004.293-4.296 4.3 4.3 0 00-4.293-4.296z" fill="#625df5"></path></svg>
              <p>video link below!</p>
            </h1>
          </div>
          
          <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-center p-4 mb-8 shadow-lg gap-4 bg-[var(--bg-a)] rounded-full">
            <input
              type="text"
              value={loomUrl}
              onChange={(e) => setLoomUrl(e.target.value)}
              placeholder="Enter loom video link here..."
              className="placeholder:text-[var(--text-c)] placeholder:text-sm text-sm bg-transparent focus:outline-none text-[var(--text-a)] w-full px-4 py-2 rounded-full shadow transition-colors border border-[var(--ring)] focus:border-[var(--violet)]"
              disabled={loading}
            />
            <button
              disabled={loomUrl === '' || loading}
              onClick={downloadVideo}
              className={`flex items-center justify-center py-2 px-4 sm:px-8 text-sm md:text-sm rounded-full shadow transition-colors 
                ${loomUrl === '' || loading 
                  ? 'cursor-not-allowed bg-[var(--ring)] text-[var(--text-a)]' 
                  : 'cursor-pointer bg-[var(--violet)] hover:bg-[var(--ring)] text-[var(--text-a)]'
                }`}
            > <span className="mr-2">Download</span>
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
