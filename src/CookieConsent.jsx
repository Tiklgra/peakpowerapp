import { useState, useEffect } from 'react'

const CLARITY_ID = 'vc7a87vjsf'
const CONSENT_KEY = 'peakpower_cookie_consent'

// Load Microsoft Clarity
function loadClarity() {
  if (window.clarity) return // Already loaded
  
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", CLARITY_ID);
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  
  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    
    if (consent === 'accepted') {
      // User already accepted - load Clarity
      loadClarity()
    } else if (consent === 'declined') {
      // User declined - don't show banner again
      setShowBanner(false)
    } else {
      // No decision yet - show banner
      setShowBanner(true)
    }
  }, [])
  
  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setShowBanner(false)
    loadClarity()
  }
  
  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setShowBanner(false)
  }
  
  if (!showBanner) return null
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-zinc-900 border-t border-zinc-700 p-4 md:p-6 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-white text-sm md:text-base mb-1">
            🍪 Usamos cookies para mejorar tu experiencia
          </p>
          <p className="text-gray-400 text-xs md:text-sm">
            Utilizamos Microsoft Clarity para analizar cómo usas nuestro sitio y mejorar tu experiencia. 
            Consulta nuestra{' '}
            <a href="politica-de-cookies.html" className="text-emerald-400 hover:underline">
              Política de Cookies
            </a>
            {' '}y{' '}
            <a href="politica-de-privacidad.html" className="text-emerald-400 hover:underline">
              Política de Privacidad
            </a>.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none px-4 py-2 text-sm text-gray-300 hover:text-white border border-zinc-600 rounded-lg hover:border-zinc-500 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2 text-sm font-semibold text-black bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
