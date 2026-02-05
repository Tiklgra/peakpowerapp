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
            EMPEZAR AHORA
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
            <span className="text-emerald-400 text-sm font-medium">🔥 Precio de lanzamiento — ¡Ahorra €19/mes!</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Pierde Peso <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Sin Gym</span>
            <br />Desde Tu Casa
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rutinas de 8 a 45 minutos que realmente funcionan. 
            Sin excusas, sin equipo especial, resultados reales.
          </p>
          <a href="https://peak-power.passion.io/checkout/125893" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 inline-block">
            COMENZAR MI TRANSFORMACIÓN →
          </a>
          <p className="text-sm text-gray-500 mt-4">
            <span className="text-gray-400 line-through">€49</span> <span className="text-white font-bold">€30 EUR/mes</span> · Cancela cuando quieras
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-gray-400">Alumnos activos</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-zinc-700"></div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">★ 4.9</p>
              <p className="text-sm text-gray-400">Rating promedio</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-zinc-700"></div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">13+</p>
              <p className="text-sm text-gray-400">Años de experiencia</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-zinc-700"></div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">10</p>
              <p className="text-sm text-gray-400">Semanas al éxito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section - MOVED UP */}
      <section className="section-padding bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4">
            Prueba de que funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados Reales de Alumnos Reales
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            No son modelos. Son personas como tú que decidieron cambiar.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <img src={`${BASE}photos/transform-woman-blue.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-man-dramatic.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transformation-face.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-woman-black.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
          </div>
          
          {/* Featured Testimonial */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-2xl p-8 border border-emerald-500/30 max-w-2xl mx-auto">
            <p className="text-4xl font-bold text-emerald-400 mb-2">-17 kilos</p>
            <p className="text-xl text-gray-300 italic mb-4">
              "De pesar 87 kilos bajé a 70 kilos y marqué todo mi cuerpo como jamás lo había hecho, ni de joven!"
            </p>
            <p className="text-gray-500">— José, 40 años</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            ¿Te suena familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '😩', text: 'No tienes tiempo para ir al gym' },
              { emoji: '😓', text: 'Las dietas no te funcionan' },
              { emoji: '😔', text: 'Empiezas y dejas a las 2 semanas' },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <p className="text-lg text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mt-12">
            No eres tú. Es que nadie te ha dado un <span className="text-white font-semibold">sistema que funciona.</span>
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4">
                La Solución
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Programa Quema Grasa
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Un programa progresivo de 10 semanas que combina cardio y fuerza. 
                HIIT, pliométricos, bajo y alto impacto — todo desde tu casa.
              </p>
              <ul className="space-y-4">
                {[
                  'Empieza con solo 8 minutos (semana 0)',
                  'Progresa hasta 45 minutos de máximo rendimiento',
                  'Solo necesitas un tapete de ejercicio',
                  'Recetas fáciles y rápidas incluidas',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://peak-power.passion.io/checkout/125893" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-block">
                QUIERO EMPEZAR →
              </a>
            </div>
            <div className="relative">
              <img 
                src={`${BASE}photos/app-mockup-phones.jpg`} 
                alt="PeakPower App en iPhone" 
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Todo lo que incluye tu suscripción
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏋️', title: 'Rutinas cardio + fuerza', desc: 'HIIT, pliométricos, bajo y alto impacto' },
              { icon: '📈', title: '10 semanas progresivas', desc: 'De 8 min a 45 min — a tu ritmo' },
              { icon: '🥗', title: 'Recetas incluidas', desc: 'Comidas fáciles y rápidas de preparar' },
              { icon: '🎯', title: 'Enfoque quema grasa', desc: 'Diseñado para perder peso efectivamente' },
              { icon: '🏠', title: 'Entrena en casa', desc: 'Solo necesitas tapete, nada más' },
              { icon: '📱', title: 'App iOS + Android', desc: 'O desde tu navegador web' },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison - NEW */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compara y decide
          </h2>
          <p className="text-gray-400 mb-12">
            ¿Cuánto cuesta realmente ponerte en forma?
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Gym */}
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Gimnasio</p>
              <p className="text-3xl font-bold text-gray-400 mb-4">€40-80<span className="text-lg">/mes</span></p>
              <ul className="text-left text-sm text-gray-500 space-y-2">
                <li>❌ Tienes que trasladarte</li>
                <li>❌ Horarios limitados</li>
                <li>❌ Sin guía personalizada</li>
                <li>❌ Inscripción + mensualidad</li>
              </ul>
            </div>
            
            {/* Personal Trainer */}
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Entrenador Personal</p>
              <p className="text-3xl font-bold text-gray-400 mb-4">€150-300<span className="text-lg">/mes</span></p>
              <ul className="text-left text-sm text-gray-500 space-y-2">
                <li>❌ Muy caro</li>
                <li>❌ Horarios fijos</li>
                <li>❌ Dependes de otra persona</li>
                <li>❌ Sin recetas incluidas</li>
              </ul>
            </div>
            
            {/* PeakPower - Highlighted */}
            <div className="bg-gradient-to-b from-emerald-900/50 to-zinc-900 rounded-2xl p-6 border-2 border-emerald-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                MEJOR VALOR
              </div>
              <p className="text-emerald-400 text-sm uppercase tracking-wider mb-2">PeakPower App</p>
              <p className="text-3xl font-bold text-white mb-4">€30<span className="text-lg">/mes</span></p>
              <ul className="text-left text-sm text-gray-300 space-y-2">
                <li>✅ Entrena cuando quieras</li>
                <li>✅ Desde tu casa</li>
                <li>✅ Programa guiado completo</li>
                <li>✅ Recetas incluidas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Lo que dicen nuestros alumnos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "El mejor ejercicio en todos los aspectos, bajar de peso, fortalecer, rapidez, reflejos, potencia, explosividad... ¡así es!", name: "Javier I." },
              { text: "100% recomendable, tengo más de 1 año llevando el programa. Los cambios se ven rápidamente.", name: "Janneth H." },
              { text: "Es el único lugar donde en realidad noté resultados y cambios en mi cuerpo. No lo pienses más!", name: "David C." },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 text-left">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {'★★★★★'.split('').map((star, j) => <span key={j}>{star}</span>)}
                </div>
                <p className="text-gray-300 italic mb-4">"{item.text}"</p>
                <p className="text-sm text-emerald-400 font-semibold">— {item.name}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <img 
              src={`${BASE}photos/testimonials-fb.jpg`} 
              alt="Testimonios de Facebook" 
              className="rounded-2xl mx-auto max-w-3xl w-full border border-zinc-800"
            />
            <p className="text-gray-500 text-sm mt-4">+100 reseñas positivas en redes sociales</p>
          </div>
        </div>
      </section>

      {/* About Elena - SHORTENED */}
      <section className="section-padding bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={`${BASE}photos/elena-abs.jpg`} 
                alt="Elena - Coach de PeakPower" 
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4">
                Tu Coach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Elena
              </h2>
              <p className="text-gray-300 mb-4">
                Atleta y coach certificada con +13 años de experiencia. 
                Fundadora de IgetFIT y creadora de PeakPower App.
              </p>
              <p className="text-gray-400 italic mb-6">
                "Creé este programa para personas ocupadas que quieren resultados reales, 
                sin excusas y sin perder tiempo."
              </p>
              <img 
                src={`${BASE}photos/elena-event.jpg`} 
                alt="Elena en evento" 
                className="rounded-xl w-full"
              />
              <p className="text-gray-500 text-sm mt-2">Liderando eventos con miles de participantes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with FOMO */}
      <section id="cta" className="section-padding bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Lista para tu transformación?
          </h2>
          <p className="text-gray-400 mb-8">
            Únete a +500 alumnos que ya están viendo resultados
          </p>
          
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 border-2 border-emerald-500/50 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-teal-600 py-2 px-4">
              <p className="text-sm font-bold text-white">
                🔥 PRECIO DE LANZAMIENTO — Solo por tiempo limitado
              </p>
            </div>
            
            <div className="pt-6">
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-2xl text-gray-500 line-through">€49</span>
                <span className="text-5xl md:text-6xl font-bold text-white">€30</span>
                <span className="text-gray-400">EUR / mes</span>
              </div>
              <p className="text-emerald-400 font-semibold mb-6">
                ¡Ahorras €19 cada mes! 🎉
              </p>
              
              <div className="bg-zinc-800 rounded-lg p-3 mb-6 inline-block">
                <p className="text-yellow-400 text-sm font-medium">
                  ⚡ 47 personas vieron esto en las últimas 24 horas
                </p>
              </div>
            
              <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
                {[
                  'Programa completo Quema Grasa',
                  '10 semanas de rutinas progresivas',
                  'Recetas fáciles incluidas',
                  'App iOS + Android + Web',
                  'Cancela cuando quieras',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
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
                COMENZAR MI TRANSFORMACIÓN →
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Disponible en{' '}
                <a href="https://apps.apple.com/de/app/peakpower/id6458192472" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">App Store</a>
                {' '}y{' '}
                <a href="https://play.google.com/store/apps/details?id=com.p57eazajs9ra.pyfrplkehapp1" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Google Play</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-zinc-950 pb-32 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {[
              { q: '¿Necesito equipo especial?', a: 'No, solo un tapete de ejercicio. Las rutinas están diseñadas para hacer en casa sin equipo.' },
              { q: '¿Qué pasa si soy principiante?', a: 'Perfecto para ti. El programa empieza desde semana 0 con solo 8 minutos para reactivar tu cuerpo.' },
              { q: '¿Cuánto duran las rutinas?', a: 'Desde 8 minutos (semana 0) hasta 45 minutos (semana 10). Tú controlas el ritmo.' },
              { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, no hay permanencia mínima. Cancela tu suscripción en cualquier momento.' },
              { q: '¿Incluye plan de alimentación?', a: 'Sí, incluye recetas saludables fáciles y rápidas de preparar.' },
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
          EMPEZAR AHORA — €30/mes
        </a>
      </div>
    </div>
  )
}

export default App
