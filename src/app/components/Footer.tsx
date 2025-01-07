import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="row-start-3 w-full flex flex-col gap-8 mt-0 justify-between items-center p-8">
        <div className="flex gap-2 flex-wrap items-center justify-center">
          <a
              aria-label="my gitHub"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#625df5] hover:bg-opacity-10 rounded-full p-3 text-[#787B89] hover:text-[#625df5]"
              href="https://github.com/abdibrokhim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18px" height="18px" strokeWidth="0" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg>
          </a>
          <a
              aria-label="my discord community"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#625df5] hover:bg-opacity-10 rounded-full p-3 text-[#787B89] hover:text-[#625df5]"
              href="https://discord.gg/nUdcd9p8Ae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"></path></svg>
            </a>
            <a
              aria-label="my linkedIn"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#625df5] hover:bg-opacity-10 rounded-full p-3 text-[#787B89] hover:text-[#625df5]"
              href="https://linkedin.com/in/abdibrokhim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
            <a
              aria-label="my x"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#625df5] hover:bg-opacity-10 rounded-full p-3 text-[#787B89] hover:text-[#625df5]"
              href="https://x.com/abdibrokhim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
            </a>
            <a
              aria-label="my insta"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#625df5] hover:bg-opacity-10 rounded-full p-3 text-[#787B89] hover:text-[#625df5]"
              href="https://instagram.com/that21savage_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 30 30" stroke="currentColor" fill="none" strokeWidth="2"><path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path></svg>
            </a>
            <a
              aria-label="my youtube channel"
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#625df5] hover:bg-opacity-10 rounded-full p-3 text-[#787B89] hover:text-[#625df5]"
              href="https://www.youtube.com/@iJustMakeThings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5813 7.19989C21.4733 6.76846 21.2534 6.37318 20.9438 6.05395C20.6341 5.73473 20.2457 5.50287 19.8178 5.3818C18.2542 5 12 5 12 5C12 5 5.74578 5 4.18222 5.41816C3.75429 5.53923 3.36588 5.77109 3.05623 6.09031C2.74659 6.40954 2.52666 6.80482 2.41868 7.23625C2.13253 8.82303 1.99255 10.4327 2.00052 12.0451C1.99032 13.6696 2.1303 15.2916 2.41868 16.8903C2.53773 17.3083 2.76258 17.6886 3.0715 17.9943C3.38043 18.3 3.76299 18.5209 4.18222 18.6357C5.74578 19.0538 12 19.0538 12 19.0538C12 19.0538 18.2542 19.0538 19.8178 18.6357C20.2457 18.5146 20.6341 18.2827 20.9438 17.9635C21.2534 17.6443 21.4733 17.249 21.5813 16.8176C21.8653 15.2427 22.0052 13.6453 21.9995 12.0451C22.0097 10.4206 21.8697 8.79862 21.5813 7.19989Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.75 9.46533C9.75 8.98805 9.75 8.74941 9.84974 8.61618C9.93666 8.50008 10.0697 8.42744 10.2144 8.4171C10.3804 8.40525 10.5811 8.53429 10.9826 8.79239L14.9254 11.3271C15.2738 11.551 15.448 11.663 15.5082 11.8054C15.5607 11.9298 15.5607 12.0702 15.5082 12.1946C15.448 12.337 15.2738 12.449 14.9254 12.6729L10.9826 15.2076C10.5811 15.4657 10.3804 15.5948 10.2144 15.5829C10.0697 15.5726 9.93666 15.4999 9.84974 15.3838C9.75 15.2506 9.75 15.012 9.75 14.5347V9.46533Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
        </div>
        <div className="">
          <p className="text-xs text-center text-[var(--text-c)]">
            © 2024 LOVIDO.LOL. All rights reserved.
          </p>
        </div>
      </footer>

  )
}

export default Footer