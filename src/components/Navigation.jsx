import headerLogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import { navLinks } from '../constants'

const Navigation = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container '>
            <a href="/"><img src={headerLogo} alt="website logo" width={130} height={29} /></a>
            <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                {
                    navLinks.map((item)=>(
                        <li key={item.linkName}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.linkName}</a>
                        </li>
                    ))
                }
            </ul>
            <div className="hidden max-lg:block">
                <img src={hamburger} alt="menu bar" width={25} height={25}  />
            </div>
        </nav>
    </header>
  )
}

export default Navigation