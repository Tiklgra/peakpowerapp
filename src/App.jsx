import { useState, useEffect } from 'react'

// Use BASE_URL for GitHub Pages compatibility
const BASE = import.meta.env.BASE_URL
const HERO_BG = `${BASE}photos/elena-1.jpg`
const LOGO = `${BASE}logos/logo-icon.jpg`

function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src={LOGO} alt="Peak Power" className="h-8 md:h-10" />
          <a href="https://peak-power.passion.io/checkout/125893" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm md:text-base py-2 px-4 md:py-3 md:px-6">
            CREAR PERFIL PARA EMPEZAR
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <div className="inline-block bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-1 mb-6">
            <span className="text-emerald-400 text-sm font-medium">🔥 Únete a quienes ya están transformando su cuerpo</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Pierde Peso <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Sin Gym</span>
            <br />Desde Tu Casa
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Rutinas de 8 a 45 minutos que realmente funcionan. 
            Sin excusas, sin equipo especial, resultados reales.
          </p>
          
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-black font-bold text-sm">1</span>
              <span className="text-gray-300">Crea tu cuenta</span>
            </div>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-black font-bold text-sm">2</span>
              <span className="text-gray-300">Realiza el pago</span>
            </div>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-black font-bold text-sm">3</span>
              <span className="text-gray-300">¡Baja la app y a entrenar!</span>
            </div>
          </div>

          <a href="https://peak-power.passion.io/checkout/125893" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 inline-block">
            CREAR PERFIL PARA EMPEZAR →
          </a>
          <p className="text-sm text-gray-500 mt-4">
            <span className="text-white font-bold">€30 EUR/mes</span> · Cancela cuando quieras
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== SECTION 1: PAIN — Mirror their inner dialogue ===== */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Sabes que necesitas hacer algo.<br />
            <span className="text-gray-500">Pero siempre hay una excusa.</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-gray-400 mt-10">
            <p>"<span className="text-white">Mañana empiezo</span>" — y mañana nunca llega.</p>
            <p>"<span className="text-white">No tengo tiempo</span>" — entre el trabajo, la casa y los hijos.</p>
            <p>"<span className="text-white">El gym me intimida</span>" — la gente mirando, sin saber qué hacer.</p>
            <p>"<span className="text-white">Ya intenté todo</span>" — dietas, apps gratis, videos de YouTube... nada funciona.</p>
          </div>
          <div className="mt-12 bg-zinc-900 rounded-2xl p-8 border border-zinc-800 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-white font-semibold">
              El problema no eres tú.
            </p>
            <p className="text-gray-400 mt-3">
              Es que nadie te ha dado un programa diseñado para <span className="text-emerald-400 font-semibold">tu vida real</span> — 
              con poco tiempo, desde casa, y que realmente funcione.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: TRANSFORMATIONS — Proof first ===== */}
      <section className="section-padding bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4">
            La prueba está en los resultados
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Personas reales. Cambios reales.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <img src={`${BASE}photos/transform-woman-blue.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-man-dramatic.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transformation-face.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-woman-black.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "De pesar 87 kilos bajé a 70 kilos y marqué todo mi cuerpo como jamás lo había hecho, ni de joven!", name: "José, 40 años" },
              { text: "Dejé el programa hace un año y hoy estoy de vuelta. No encontré ningún lugar que me diera estos resultados. Es completísimo.", name: "Tania P." },
              { text: "Tengo más de 1 año llevando el programa. Los cambios se ven rápidamente. Si lo estás pensando, no lo pienses más — hazlo.", name: "Janneth H." },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 text-left flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {'★★★★★'.split('').map((s, j) => <span key={`s1-${i}-${j}`}>{s}</span>)}
                </div>
                <p className="text-gray-300 italic mb-4 flex-1">"{item.text}"</p>
                <p className="text-sm text-gray-500 font-medium">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SOLUTION — What they get ===== */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4">
                Tu nuevo plan
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                10 semanas que cambian todo
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                No es otro video de YouTube. Es un <span className="text-white font-semibold">sistema progresivo</span> diseñado 
                por una coach con +13 años de experiencia — para que tu cuerpo cambie semana a semana.
              </p>
              <p className="text-gray-400 mb-8">
                Empiezas con <span className="text-white">8 minutos</span> en la semana 0. Terminas haciendo sesiones de 
                <span className="text-white"> 45 minutos</span> de máximo rendimiento. HIIT, cardio, fuerza — todo incluido.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🏠', text: 'Desde tu sala, tu cuarto, o donde sea — solo necesitas un tapete' },
                  { icon: '⏱️', text: 'Rutinas de 8 a 45 min — tú decides cuándo y cuánto' },
                  { icon: '🥗', text: 'Recetas fáciles incluidas — no más "¿qué como?"' },
                  { icon: '📱', text: 'En tu celular (iOS + Android) o desde el navegador' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={`${BASE}photos/app-mockup-phones.jpg`} 
                alt="PeakPower App" 
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: WHY THIS IS DIFFERENT ===== */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué PeakPower funciona<br />cuando todo lo demás falla?
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Porque no te pide que cambies tu vida. Se adapta a ella.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { bad: 'El gym te pide 1-2 horas con traslado', good: 'PeakPower: 8-45 min sin salir de casa' },
              { bad: 'YouTube no tiene estructura ni progresión', good: 'PeakPower: 10 semanas progresivas, paso a paso' },
              { bad: 'Un trainer cuesta €150-300/mes', good: 'PeakPower: €30/mes — programa completo + recetas' },
              { bad: 'Las apps gratis no te motivan ni dan seguimiento', good: 'PeakPower: programa guiado por coach profesional' },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
                <p className="text-gray-500 text-sm line-through mb-2">{item.bad}</p>
                <p className="text-white font-medium">{item.good}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: SOCIAL PROOF — More testimonials + Facebook ===== */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quienes lo probaron no vuelven atrás
          </h2>
          <p className="text-gray-400 mb-10">
            Y sus reseñas hablan por sí solas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { text: "Es el lugar donde realmente noté resultados y cambios en mi cuerpo. Te hacen trabajar las partes problemáticas. Recomendación mil veces.", name: "Blanca P." },
              { text: "El mejor en ejercicio en todos los aspectos: bajar de peso, fortalecer, rapidez, fuerza, potencia, explosividad... ¡así es!", name: "Javier I." },
              { text: "100% recomendado. Te dan atención personalizada, te motivan y cambian tus hábitos. El ambiente es excelente.", name: "Luisa G." },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 text-left flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {'★★★★★'.split('').map((s, j) => <span key={`s2-${i}-${j}`}>{s}</span>)}
                </div>
                <p className="text-gray-300 italic mb-4 flex-1">"{item.text}"</p>
                <p className="text-sm text-emerald-400 font-semibold">— {item.name}</p>
              </div>
            ))}
          </div>

          <img 
            src={`${BASE}photos/testimonials-fb.jpg`} 
            alt="Reseñas de Facebook" 
            className="rounded-2xl mx-auto max-w-3xl w-full border border-zinc-800"
          />
          <p className="text-gray-500 text-sm mt-4">+100 reseñas verificadas en Facebook · ★ 4.9 promedio</p>
        </div>
      </section>

      {/* ===== SECTION 6: COACH — Authority & Trust ===== */}
      <section className="section-padding bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={`${BASE}photos/elena-abs.jpg`} alt="Elena - Coach" className="rounded-2xl w-full" />
            </div>
            <div>
              <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4">
                Detrás del programa
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Elena García
              </h2>
              <p className="text-gray-300 mb-4">
                Coach certificada, atleta con <span className="text-white font-semibold">+13 años de experiencia</span>. 
                Fundadora de IgetFIT y creadora de PeakPower App.
              </p>
              <p className="text-gray-300 mb-4">
                Ha transformado a <span className="text-white font-semibold">decenas de personas</span> que pensaban que no podían. 
                Madres ocupadas, profesionistas sin tiempo, personas que odiaban el gym.
              </p>
              <p className="text-gray-400 italic mb-6">
                "No necesitas motivación. Necesitas un sistema que funcione aunque no tengas ganas. 
                Para eso creé PeakPower."
              </p>
              <img src={`${BASE}photos/elena-event.jpg`} alt="Elena en evento" className="rounded-xl w-full" />
              <p className="text-gray-500 text-sm mt-2">Liderando eventos presenciales de fitness</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: PRICE ANCHOR + FOMO ===== */}
      <section id="cta" className="section-padding bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Cada día que esperas es un día que pierdes.
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            En 10 semanas puedes verte y sentirte completamente diferente.<br />
            ¿O prefieres estar igual que hoy dentro de 10 semanas?
          </p>
          
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 border-2 border-emerald-500/50 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-teal-600 py-2 px-4">
              <p className="text-sm font-bold text-white">
                PROGRAMA COMPLETO — Cancela cuando quieras, sin permanencia
              </p>
            </div>
            
            <div className="pt-8">
              {/* Price Anchor */}
              <p className="text-gray-500 text-sm mb-2">Un entrenador personal cobra €150-300/mes. PeakPower te da:</p>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-bold text-white">€30</span>
                <span className="text-gray-400">EUR / mes</span>
              </div>
              <p className="text-emerald-400 font-semibold mb-2">Menos de €1 al día.</p>
              <p className="text-gray-500 text-sm mb-8">Menos que un café. Más que cualquier gym.</p>
            
              <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
                {[
                  'Programa Quema Grasa completo (10 semanas)',
                  'Rutinas progresivas — de 8 a 45 minutos',
                  'Recetas saludables fáciles y rápidas',
                  'App disponible en iOS, Android y Web',
                  'Sin contrato — cancela en cualquier momento',
                  'Acceso inmediato al crear tu cuenta',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://peak-power.passion.io/checkout/125893" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-12 py-5 inline-block"
              >
                CREAR PERFIL PARA EMPEZAR →
              </a>
              
              <p className="text-sm text-gray-500 mt-6">
                Disponible en{' '}
                <a href="https://apps.apple.com/de/app/peakpower/id6458192472" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">App Store</a>
                {' '}y{' '}
                <a href="https://play.google.com/store/apps/details?id=com.p57eazajs9ra.pyfrplkehapp1" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Google Play</a>
              </p>
            </div>
          </div>

          {/* Credible FOMO */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Alumnos activos entrenando cada semana</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★ 4.9</span>
              <span>de +100 reseñas en Facebook</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FAQ — Kill last objections ===== */}
      <section className="section-padding bg-zinc-950 pb-32 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            ¿Todavía tienes dudas?
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Estas son las preguntas más comunes antes de empezar.
          </p>
          <div className="space-y-4">
            {[
              { q: '¿Necesito equipo especial?', a: 'No. Solo un tapete de ejercicio (o incluso una toalla). Las rutinas están diseñadas 100% para hacer en casa sin nada más.' },
              { q: '¿Y si soy principiante total?', a: 'Perfecto. El programa empieza en semana 0 con solo 8 minutos. Está diseñado para que cualquier persona pueda empezar, sin importar su nivel.' },
              { q: '¿Cuánto tiempo tengo que dedicar al día?', a: 'Desde 8 minutos (semana 0) hasta 45 minutos (semana 10). Tú controlas el ritmo. No necesitas horas — necesitas consistencia.' },
              { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, sin permanencia, sin penalización, sin preguntas. Cancelas desde la app en cualquier momento.' },
              { q: '¿Incluye plan de alimentación?', a: 'Sí. Incluye recetas saludables, fáciles y rápidas de preparar. Porque el ejercicio sin alimentación es solo la mitad del camino.' },
              { q: '¿Y si ya intenté otros programas y no funcionaron?', a: 'La mayoría de programas no tienen estructura progresiva. Este sí: empieza donde estás y sube gradualmente. Por eso personas que fracasaron en otros lados tienen éxito aquí.' },
            ].map((item, i) => (
              <details key={i} className="group bg-zinc-900 rounded-xl border border-zinc-800">
                <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold">
                  {item.q}
                  <span className="text-emerald-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400">{item.a}</div>
              </details>
            ))}
          </div>
          
          {/* Final push */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">¿Lista para empezar?</p>
            <a 
              href="https://peak-power.passion.io/checkout/125893" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 inline-block"
            >
              CREAR PERFIL PARA EMPEZAR →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={LOGO} alt="Peak Power" className="h-8" />
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <a href="terminos-y-condiciones.html" className="hover:text-white">Términos</a>
              <a href="politica-de-privacidad.html" className="hover:text-white">Privacidad</a>
              <a href="politica-de-cookies.html" className="hover:text-white">Cookies</a>
              <a href="https://www.instagram.com/elle_peak_" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href="mailto:peakpower@te-tp.com" className="hover:text-white">Contacto</a>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-8">
            © 2024 PeakPower APP — Busy Life, Peak Results.
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-zinc-800 p-4 transition-transform duration-300 md:hidden ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <a 
          href="https://peak-power.passion.io/checkout/125893" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center py-4 block"
        >
          CREAR PERFIL — €30/mes
        </a>
      </div>
    </div>
  )
}

export default App
// force rebuild Thu Feb  5 14:01:03 UTC 2026
