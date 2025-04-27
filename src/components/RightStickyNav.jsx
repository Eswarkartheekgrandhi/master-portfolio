import {
  Home,
  Folder,
  Person,
  MailOutline,
  Twitter,
  GitHub,
  LinkedIn,
  Instagram,
} from '@mui/icons-material';

const navLinkStyle =
  'group flex items-center px-2 py-2 border border-stone-600/40 rounded-md hover:border-white transition-all relative';

const tooltipStyle =
  'opacity-0 group-hover:opacity-100 group-hover:translate-x-0 absolute left-full ml-2 bg-stone-800 text-white text-base px-2 py-1 rounded whitespace-nowrap transition-all translate-x-2';


export default function RightStickyNav() {
  return (
    <div className="fixed right-0 top-0 bottom-0 z-50 hidden lg:flex w-[13%] min-w-[160px] max-w-[240px]">
      <div className="h-full w-full flex items-center border-l-[2px] border-stone-600/40 relative">
        <div className="flex flex-col items-start space-y-8 pl-8 w-full">
          <a href="https://www.instagram.com/kartheekgrandhi" target="_blank" rel="noopener noreferrer" className={navLinkStyle}>
            <Instagram className="text-stone-300 group-hover:text-white" />
            <span className={tooltipStyle}>Instagram</span>
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition-colors text-sm uppercase tracking-widest">
            Twitter
          </a> */}
          <a href="https://github.com/Eswarkartheekgrandhi/" target="_blank" rel="noopener noreferrer" className={navLinkStyle}>
            <GitHub className="text-stone-300 group-hover:text-white" />
            <span className={tooltipStyle}>Github</span>
          </a>
          <a href="https://www.linkedin.com/in/eswar-kartheek-grandhi-bb1566214" target="_blank" rel="noopener noreferrer" className={navLinkStyle}>
            <LinkedIn className="text-stone-300 group-hover:text-white" />
            <span className={tooltipStyle}>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}