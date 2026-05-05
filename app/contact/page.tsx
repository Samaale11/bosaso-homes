export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="font-manrope text-4xl font-bold text-primary-container mb-6">Contact Us</h1>
      <p className="text-on-surface-variant font-inter mb-8">We are here to help you find your perfect home.</p>
      
      <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-6 items-center">
        
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary-container text-2xl">mail</span>
          <a href="mailto:osmanhudi@gmail.com" className="font-inter text-lg hover:text-secondary-fixed-dim transition-colors">osmanhudi@gmail.com</a>
        </div>

        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary-container text-2xl">call</span>
          <span className="font-inter text-lg">
            <a href="tel:+25290652222" className="hover:text-secondary-fixed-dim transition-colors">+252904652222</a> / 
            <a href="tel:+252905602222" className="hover:text-secondary-fixed-dim transition-colors ml-1">+252905602222</a>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary-container text-2xl">chat</span>
          <span className="font-inter text-lg">
            WhatsApp: 
            <a href="https://wa.me/25290652222" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-fixed-dim transition-colors ml-2">+252904652222</a> / 
            <a href="https://wa.me/252905602222" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-fixed-dim transition-colors ml-1">+252905602222</a>
          </span>
        </div>

      </div>
    </div>
  );
}