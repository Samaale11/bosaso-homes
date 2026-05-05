import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-container py-12 px-6 mt-auto border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        
        {/* Navigation Links */}
        <div className="flex gap-8 justify-center">
          <Link href="/" className="font-inter font-semibold text-white/90 hover:text-secondary-fixed-dim transition-colors">
            Home
          </Link>
          <Link href="/faq" className="font-inter font-semibold text-white/90 hover:text-secondary-fixed-dim transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="font-inter font-semibold text-white/90 hover:text-secondary-fixed-dim transition-colors">
            Contact
          </Link>
        </div>

        {/* Contact Info (Clean Stacked Layout for ALL screens) */}
        <div className="flex flex-col gap-6 w-full max-w-sm">

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-sm">
              <span className="material-symbols-outlined text-white/80 text-[20px]">mail</span>
            </div>
            <a href="mailto:osmanhudi@gmail.com" className="text-white/90 hover:text-secondary-fixed-dim transition-colors tracking-wide font-medium">
              osmanhudi@gmail.com
            </a>
          </div>

          {/* Call */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-sm">
              <span className="material-symbols-outlined text-white/80 text-[20px]">call</span>
            </div>
            <div className="flex flex-col gap-1 w-full text-white/90 font-medium">
              <a href="tel:+252904652222" className="hover:text-secondary-fixed-dim transition-colors tracking-wide">+252 90 4652222</a>
              <a href="tel:+252905602222" className="hover:text-secondary-fixed-dim transition-colors tracking-wide">+252 90 5602222</a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366]/10 border border-[#25D366]/20 shadow-sm">
              <svg className="w-[20px] h-[20px] text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            <div className="flex flex-col gap-1 w-full text-white/90 font-medium">
              <a href="https://wa.me/252904652222" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors tracking-wide">+252 90 4652222</a>
              <a href="https://wa.me/252905602222" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors tracking-wide">+252 90 5602222</a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/10"></div>

        {/* Copyright */}
        <div className="text-center flex flex-col items-center">
          <p className="font-inter text-sm text-white/60 leading-relaxed">
            &copy; {new Date().getFullYear()} Bosaso Home Solutions. All rights reserved. <br className="md:hidden" />
            <span className="text-secondary-fixed-dim/90 font-medium ml-1">Matchmaking exclusively.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}