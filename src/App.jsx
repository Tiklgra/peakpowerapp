import { useState, useEffect } from 'react'
import CookieConsent from './CookieConsent'

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
      {/* Navigation - Simplified */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img src={LOGO} alt="Peak Power" className="h-8 md:h-10" />
          <a href="https://buy.stripe.com/fZe8Al4RW9ERbdK7su" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm py-2 px-4 rounded-lg transition-colors">
            $30/mes →
          </a>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-20 md:pt-0 pb-8 md:pb-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-4 md:pt-20">
          {/* Social Proof - TOP */}
          <div className="inline-block bg-emerald-500/20 border border-emerald-500/50 rounded-full px-4 py-2 mb-4">
            <span className="text-emerald-400 text-sm font-medium">🔥 +500 transformaciones en 90 días</span>
          </div>
          
          {/* Headline - Compact */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Pierde Peso <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Sin Gym</span>
            <br />Desde Tu Casa
          </h1>
          
          {/* 3 Icons - Quick Value Props */}
          <div className="flex items-center justify-center gap-6 md:gap-8 mb-6 text-sm">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl">⏱️</span>
              <span className="text-gray-300">8-45 min/día</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl">🏠</span>
              <span className="text-gray-300">Sin equipo</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl">✅</span>
              <span className="text-gray-300">en 90 días</span>
            </div>
          </div>

          {/* Main CTA - Full Width on Mobile */}
          <a href="https://buy.stripe.com/fZe8Al4RW9ERbdK7su" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg md:text-xl px-8 py-5 w-full md:w-auto md:px-12 block md:inline-block font-bold">
            EMPEZAR AHORA · Solo $30/mes
          </a>
          <p className="text-xs text-gray-500 mt-2 mb-6">
            <span className="line-through">$69</span> — Sin permanencia, cancela cuando quieras
          </p>
          
          {/* Mini Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-4">
            <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800/50 text-left">
              <p className="text-gray-300 text-sm mb-2">"De 87 kilos bajé a 70 y marqué todo mi cuerpo como jamás lo había hecho."</p>
              <p className="text-xs font-medium"><span className="text-emerald-400">— José, 40 años</span> <span className="text-yellow-400">★★★★★</span></p>
            </div>
            <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800/50 text-left">
              <p className="text-gray-300 text-sm mb-2">"Dejé el programa hace un año y hoy estoy de vuelta. No encontré nada mejor."</p>
              <p className="text-xs font-medium"><span className="text-emerald-400">— Tania P.</span> <span className="text-yellow-400">★★★★★</span></p>
            </div>
            <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800/50 text-left hidden md:block">
              <p className="text-gray-300 text-sm mb-2">"Los cambios se ven rápidamente. Si lo estás pensando, no lo pienses más — hazlo."</p>
              <p className="text-xs font-medium"><span className="text-emerald-400">— Janneth H.</span> <span className="text-yellow-400">★★★★★</span></p>
            </div>
          </div>
          <p className="text-gray-500 text-xs">★ 4.9 de +100 reseñas · +13 años de experiencia</p>
        </div>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== SECTION 1: PAIN — Mirror their inner dialogue ===== */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-5xl font-bold mb-6 leading-tight">
            Sabes que necesitas hacer algo.<br />
            <span className="text-gray-500">Pero siempre hay una excusa.</span>
          </h2>
          <div className="max-w-2xl mx-auto grid gap-4 mt-10">
            {[
              { excuse: "Mañana empiezo", reality: "y mañana nunca llega." },
              { excuse: "No tengo tiempo", reality: "entre el trabajo, la casa y los hijos." },
              { excuse: "El gym me intimida", reality: "la gente mirando, sin saber qué hacer." },
              { excuse: "Ya intenté todo", reality: "dietas, apps gratis, videos de YouTube... nada funciona." },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900/50 rounded-xl p-5 border border-zinc-800/50 text-left">
                <p className="text-white font-semibold text-lg md:text-xl mb-1">"{item.excuse}"</p>
                <p className="text-gray-500 text-base">— {item.reality}</p>
              </div>
            ))}
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


      {/* ===== SECTION 3: SOLUTION — What they get ===== */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4">
                El programa
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                10 semanas que cambian todo
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Lo creé porque <span className="text-white font-semibold">yo viví lo mismo que tú</span> — quería bajar de peso 
                pero siempre rebotaba o me aburría haciendo lo mismo. Cuando encontré qué funcionaba, lo convertí en este programa.
              </p>
              <p className="text-gray-400 mb-6">
                Es <span className="text-white">progresivo</span>: empiezas con 8 minutos y vas subiendo hasta 45. 
                Mezcla HIIT, pliométricos, ejercicios por zonas problema. Si no puedes completar una sesión, 
                la repites hasta que te salga — sin presión, a tu ritmo.
              </p>
              <p className="text-gray-400 mb-8 italic border-l-2 border-emerald-500 pl-4">
                "En cada video explico los ejercicios como si estuviera tomando la clase contigo. 
                No eres un número — te acompaño en cada sesión."
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🏠', text: 'Desde tu sala — solo necesitas un tapete' },
                  { icon: '📈', text: 'Progresivo: cada semana te retas a más' },
                  { icon: '🎯', text: 'Ejercicios específicos para zonas problema' },
                  { icon: '🥗', text: 'Recetas fáciles incluidas' },
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
                src={`${BASE}photos/app-devices-clean.jpg`} 
                alt="PeakPower App en todos tus dispositivos" 
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: TRANSFORMATIONS — Visual Proof ===== */}
      <section className="section-padding bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4">
            La prueba está en los resultados
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            +500 personas ya cambiaron su cuerpo
          </h2>
          <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
            Transformaciones reales de alumnos que siguieron el programa
          </p>
          <p className="text-emerald-400 font-semibold mb-10">
            ✓ Resultados garantizados en 90 días
          </p>
          
          {/* Transformation grid - clean, uniform */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <img src={`${BASE}photos/transform-woman-blue-4panel.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-man-dramatic-suit.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-woman-green-4panel.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-woman-waterfall.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-man-blue-4panel.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-green-abs.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-woman-black-4panel.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
            <img src={`${BASE}photos/transform-elena-4panel.jpg`} alt="Transformación" className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2B: TESTIMONIALS — Social Proof ===== */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-emerald-400 font-semibold uppercase tracking-widest mb-4 text-center">
            Mensajes reales de alumnos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Lo que dicen quienes ya empezaron
          </h2>
          
          {/* Featured testimonials - uniform cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { 
                text: "Tengo 52 años y estuve a punto de morir. Después de 3 intervenciones médicas, con lo que aprendí de Elena hoy me siento lleno de energía y ganas.", 
                name: "Alumno, 52 años",
                highlight: "Transformación de vida"
              },
              { 
                text: "Me encanta tu app, hace mucho no tenía tanta constancia para entrenar. Acabo de terminar tu abs-challenge y me encantó. ¡Vamos por el six pack!", 
                name: "Alumna de la app",
                highlight: "Sobre la app"
              },
              { 
                text: "Elena es muy buena como entrenadora, siempre está al pendiente que hagas las cosas bien. Conseguí muy buenos resultados en poco tiempo.", 
                name: "Azucena",
                highlight: "10 años entrenando"
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 flex flex-col">
                <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                  {item.highlight}
                </span>
                <p className="text-gray-300 mb-4 flex-1 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-2 pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    {'★★★★★'.split('').map((s, j) => <span key={`star-${i}-${j}`}>{s}</span>)}
                  </div>
                  <span className="text-gray-500 text-sm">— {item.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* More testimonials - compact */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { text: "De pesar 87 kilos bajé a 70 kilos y marqué todo mi cuerpo como jamás lo había hecho, ni de joven!", name: "José, 40 años" },
              { text: "Dejé el programa hace un año y hoy estoy de vuelta. No encontré ningún lugar que me diera estos resultados.", name: "Tania P." },
              { text: "Los cambios se ven rápidamente. Si lo estás pensando, no lo pienses más — hazlo.", name: "Janneth H." },
              { text: "Balance, superación, fuerza, mentalidad y voluntad. 100% recomendado.", name: "@chazca17" },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900/50 rounded-xl p-5 border border-zinc-800/50">
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">"{item.text}"</p>
                <p className="text-xs font-medium"><span className="text-emerald-400">— {item.name}</span> <span className="text-yellow-400">★★★★★</span></p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★ 4.9</span>
              <span>de +100 reseñas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span>Alumnos activos cada semana</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>+13 años de experiencia</span>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SECTION 4: WHY THIS IS DIFFERENT ===== */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            ¿Por qué funciona?
          </h2>
          <p className="text-gray-400 mb-10 text-center max-w-xl mx-auto">
            No te pide que cambies tu vida. Se adapta a ella.
          </p>
          
          <div className="space-y-4">
            {[
              { icon: '🏠', before: 'Gym: 1-2 horas con traslado', after: '8-45 min desde tu casa' },
              { icon: '📋', before: 'YouTube: videos sin estructura', after: '10 semanas progresivas' },
              { icon: '💰', before: 'Trainer: $150-300/mes', after: '$30/mes todo incluido' },
              { icon: '🎯', before: 'Apps gratis: sin guía real', after: 'Coach profesional que te acompaña' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-zinc-900/50 rounded-2xl p-4 md:p-5">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1 grid md:grid-cols-2 gap-2 md:gap-8">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-lg">✗</span>
                    <span className="text-gray-500 text-sm md:text-base">{item.before}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 text-lg">✓</span>
                    <span className="text-white text-sm md:text-base font-medium">{item.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COACH — Authority & Trust ===== */}
      <section className="section-padding bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <img src={`${BASE}photos/elena-transformation.jpg`} alt="Elena - Transformación" className="rounded-2xl w-full" />
              <p className="text-center text-gray-500 text-sm">Mi propia transformación — yo también empecé desde cero</p>
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
                <span className="text-white font-semibold">Yo también pasé por esto.</span> Sé lo que es empezar sin saber nada, 
                sentir que nada funciona, y no ver resultados. Por eso creé este programa.
              </p>
              <p className="text-gray-300 mb-4">
                He transformado a <span className="text-white font-semibold">cientos de personas</span> que pensaban que no podían. 
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

      {/* ===== SECTION: HOW IT WORKS ===== */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Empezar es más fácil de lo que crees. En 3 pasos estás entrenando.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                step: '1', 
                title: 'Crea tu perfil', 
                desc: 'Regístrate y elige tu plan. Tienes acceso inmediato a todo el contenido.',
                icon: '📱'
              },
              { 
                step: '2', 
                title: 'Empieza en Semana 0', 
                desc: 'Rutinas de solo 8 minutos para que tu cuerpo se adapte. Sin presión.',
                icon: '🎯'
              },
              { 
                step: '3', 
                title: 'Sigue el programa', 
                desc: 'Cada semana sube la intensidad. Si no puedes completar una sesión, la repites.',
                icon: '📈'
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-emerald-500 text-black font-bold rounded-full mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">¿Dudas? En cada video te explico los ejercicios paso a paso.</p>
            <p className="text-emerald-400 font-semibold">Es como tener una clase privada conmigo.</p>
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
              {/* FOMO Price */}
              <div className="inline-block bg-red-500/20 border border-red-500/50 rounded-full px-4 py-1 mb-4">
                <span className="text-red-400 text-sm font-semibold">🔥 OFERTA ESPECIAL — Precio normal: $69/mes</span>
              </div>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-gray-500 text-2xl line-through">$69</span>
                <span className="text-5xl md:text-6xl font-bold text-white">$30</span>
                <span className="text-gray-400">EUR / mes</span>
              </div>
              <p className="text-emerald-400 font-semibold mb-2">Menos de $1 al día — Ahorras $108/año</p>
              <p className="text-gray-500 text-sm mb-8">Menos que un café. Más que cualquier gym.</p>
            
              <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
                {[
                  'Programa Quema Grasa completo (10 semanas)',
                  'Rutinas progresivas — de 8 a 45 minutos',
                  'Recetas saludables fáciles y rápidas',
                  'App disponible en iOS, Android y Web',
                  'Sin contrato — cancela cuando quieras por email',
                  'Acceso inmediato al crear tu cuenta',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://buy.stripe.com/fZe8Al4RW9ERbdK7su" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-12 py-5 inline-block"
              >
                CREA PERFIL Y QUEMA GRASA DESDE CASA →
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
              { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, sin permanencia y sin penalización. Solo envía un correo a peakpower@te-tp.com solicitando la cancelación y listo.' },
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
            <p className="text-gray-400 mb-6">¿Empezamos?</p>
            <a 
              href="https://buy.stripe.com/fZe8Al4RW9ERbdK7su" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 inline-block"
            >
              CREA PERFIL Y QUEMA GRASA DESDE CASA →
            </a>
            <p className="text-sm mt-3">
              <span className="line-through text-gray-500">$69</span> <span className="text-emerald-400 font-bold">Solo $30/mes</span>
            </p>
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
          href="https://buy.stripe.com/fZe8Al4RW9ERbdK7su" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center py-5 block text-base"
        >
          QUEMA GRASA · <span className="line-through opacity-70">$69</span> Solo $30/mes
        </a>
      </div>

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  )
}

export default App
// force rebuild Thu Feb  5 14:01:03 UTC 2026
