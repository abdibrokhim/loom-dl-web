// app/page.tsx (or create a new component and import it)
'use client';

import { useEffect, useState } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notification from '../lib/notify';
import Footer from './Footer';
import { Analytics } from "@vercel/analytics/react"

const LoomDownloader = () => {
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

    const loader = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <circle cx={4} cy={12} r={3} fill="currentColor">
            <animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3" />
        </circle>
        <circle cx={12} cy={12} r={3} fill="currentColor">
            <animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3" />
        </circle>
        <circle cx={20} cy={12} r={3} fill="currentColor">
            <animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3" />
        </circle>
        </svg>
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 bg-[#212121e6]">
            <Analytics />
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
            <div className="mb-6 inline-flex justify-center text-2xl font-semibold leading-9">
                <h1>Paste Loom Video URL below</h1>
            </div>
            <div className="lg:w-[60%] w-full mx-auto flex items-center p-2 mb-8 shadow-lg gap-4 bg-[#2e2e2e] rounded-full">
                <input
                    type="text"
                    value={loomUrl}
                    onChange={(e) => setLoomUrl(e.target.value)}
                    placeholder="Enter loom video URL here..."
                    className="placeholder:text-[#aeaeae] bg-transparent focus:outline-none text-white outline-none w-full px-4" 
                    disabled={loading}
                />
                <button
                    disabled={loomUrl === '' || loading}
                    onClick={downloadVideo}
                    className={`flex items-center justify-center w-10 h-10 rounded-full shadow ${
                        loomUrl === '' ? 'cursor-not-allowed bg-[#4e4e4e] text-black'  : 'cursor-pointer bg-[#eeeeee] text-black'}`}
                    >
                    {!loading 
                        ? <FontAwesomeIcon icon={faDownload} />
                        : <span className='flex justify-center items-center text-black text-xl'>{loader()}</span>
                    }
                </button>
            </div>
            <div className='relative bottom-[-200px]'> 
                <Footer />
            </div>
            <script
                src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
                user-profile="https://topmate.io/embed/profile/abdibrokhim?theme=D5534D"
                btn-style='{"backgroundColor":"#fff","color":"#000","border":"1px solid #000"}'
                embed-version="v1"
                button-text="Hey, dear! Let's chat."
                position-right="30px"
                position-bottom="30px"
                custom-padding="0px"
                custom-font-size="16px"
                custom-font-weight="500"
                custom-width="200px"
            ></script>
        </div>
    );
};

export default LoomDownloader;