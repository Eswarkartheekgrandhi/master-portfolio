import {
  Home,
  Folder,
  Person,
  MailOutline,
  Twitter,
  GitHub,
  LinkedIn,
} from '@mui/icons-material';

const navLinkStyle =
  'group flex items-center px-2 py-2 border border-stone-600/40 rounded-md hover:border-white transition-all relative';

const tooltipStyle =
  'opacity-0 group-hover:opacity-100 group-hover:translate-x-0 absolute left-full ml-2 bg-stone-800 text-white text-base px-2 py-1 rounded whitespace-nowrap transition-all translate-x-2';


export default function LeftStickyNav() {
  return (
    <div className="fixed left-0 top-0 bottom-0 z-50 hidden lg:flex w-[13%] min-w-[160px] max-w-[240px]">
      <div className="h-full w-full flex items-center justify-end border-r-[2px] border-stone-600/40 relative">
        <div className="flex flex-col items-end space-y-8 pr-8 text-right w-full">
          <a href="#home" className={navLinkStyle}>
            <Home className="text-stone-300 group-hover:text-white" />
            <span className={tooltipStyle}>Home</span>
          </a>
          <a href="#projects" className={navLinkStyle}>
          <Folder className="text-stone-300 group-hover:text-white"  />
            <span className={tooltipStyle}>Projects</span>
          </a>
          {/* <a href="#home" className="text-stone-300 hover:text-white transition-colors text-sm uppercase tracking-widest">
            About
          </a> */}
          <a href="#contact" className={navLinkStyle}>
            <MailOutline className="text-stone-300 group-hover:text-white"  />
            <span className={tooltipStyle}>Contact</span>
          </a>
        </div>
      </div>
    </div>
  )
}