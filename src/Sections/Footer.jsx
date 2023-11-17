import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/"><img src={footerLogo} alt="footer logo" width={150} height={46} /></a>
            <p className="mt-6 text-base leading-7 font-montserrat sm:max-w-sm text-white-400">Get shoes ready for the new term at your nearest Fason Nike Store. Find your perfect size in store. Get Rewards.🏆🏆💸</p>

            <div className="flex items-center gap-5 mt-8">
              {
                socialMedia.map((media)=>(
                  <div key={media.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                    <img src={media.src} alt={media.alt} width={24} height={24} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {
              footerLinks.map((footerLink)=>(
                <div key={footerLink.title}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{footerLink.title}</h4>
                  <ul>
                    {
                      footerLink.links.map((link)=>(
                        <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"><a href="#">{link.name}</a></li>
                      ))

                    }
                  </ul>

                </div>
              ))
            }
          </div>
        </div>
        <div className="flex mt-24 justify-between text-white-400 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copyright symbol" width={20} height={20} className="rounded-full m-0"/>
            <p>Copyright <span className="text-coral-red"><a href="#">Jey fason Ltd </a></span> All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer" >Terms & Conditions</p>
        </div>

    </footer>
  )
}

export default Footer