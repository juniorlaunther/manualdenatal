import { ShoppingCart, Star, ShieldCheck, ArrowRight, X, ChevronLeft, ChevronRight, MessageCircle, ChevronDown, Sparkles, Gift } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const faqs = [
  {
    icon: "🎄",
    question: "Para quem é indicado o Manual Para Desenhar - Edição de Natal?",
    answer: "O Manual é para todas as idades e níveis de experiência! Desde quem está dando os primeiros passos no desenho e quer se divertir criando personagens fofos e mágicos de Natal, até quem já desenha e quer destravar seu repertório com gorrinhos, presentes, pinheiros, enfeites e criaturinhas encantadas."
  },
  {
    icon: "⭐",
    question: "Quem comprar agora receberá as próximas atualizações?",
    answer: "Sim! Ao adquirir o Manual, você recebe gratuitamente todas as próximas atualizações, melhorias e novos elementos temáticos que forem acrescentados, sem precisar pagar nada a mais."
  },
  {
    icon: "📖",
    question: "O que vou encontrar dentro desta edição especial?",
    answer: "Você encontrará referências para criar rostos expressivos e calorosos, olhinhos brilhantes, sorrisos alegres, toucas e gorrinhos de Papai Noel, roupas quentinhas de inverno, presentes com laços, biscoitos de gengibre, renas fofas, enfeites natalinos, cenários mágicos e muito mais para combinar do seu próprio jeito!"
  },
  {
    icon: "🖨️",
    question: "Posso imprimir as páginas para desenhar?",
    answer: "Com certeza! As páginas foram diagramadas no formato A4 em alta resolução, perfeitas para imprimir, colorir, calcar, consultar na mesa com a família ou montar seu próprio caderno criativo de desenhos natalinos."
  },
  {
    icon: "📱",
    question: "Como funciona o acesso após a compra?",
    answer: "Após a confirmação do pagamento, seu acesso é liberado instantaneamente. Você receberá um e-mail com todas as instruções e poderá consultar o material sempre que quiser no celular, tablet ou computador."
  }
];

const productImages = [
  "/images/natal/anuncio-01.webp",
  "/images/natal/anuncio-02.webp",
  "/images/natal/anuncio-03.webp",
  "/images/natal/anuncio-04.webp",
  "/images/natal/anuncio-05.webp",
  "/images/natal/anuncio-06.webp"
];

const testimonialImages = [
  "/images/testimonials/depo-01.webp",
  "/images/testimonials/depo-02.webp",
  "/images/testimonials/depo-03.webp",
  "/images/testimonials/depo-04.webp",
  "/images/testimonials/depo-05.webp",
  "/images/testimonials/depo-06.webp",
  "/images/testimonials/depo-07.webp"
];

// Gentle, magical drifting snowflakes across the starry night sky
function SnowfallOverlay() {
  const flakes = [
    { left: '3%', delay: '0s', duration: '9s', size: 'text-sm', opacity: 'opacity-75' },
    { left: '13%', delay: '3.5s', duration: '12s', size: 'text-xs', opacity: 'opacity-45' },
    { left: '23%', delay: '1s', duration: '8.5s', size: 'text-base', opacity: 'opacity-85' },
    { left: '35%', delay: '5.5s', duration: '11s', size: 'text-xs', opacity: 'opacity-40' },
    { left: '47%', delay: '2.5s', duration: '9.5s', size: 'text-sm', opacity: 'opacity-70' },
    { left: '58%', delay: '0.5s', duration: '8s', size: 'text-xs', opacity: 'opacity-50' },
    { left: '68%', delay: '4.5s', duration: '12.5s', size: 'text-base', opacity: 'opacity-80' },
    { left: '79%', delay: '2s', duration: '10s', size: 'text-xs', opacity: 'opacity-50' },
    { left: '89%', delay: '6.5s', duration: '9s', size: 'text-sm', opacity: 'opacity-75' },
    { left: '96%', delay: '3s', duration: '11.5s', size: 'text-xs', opacity: 'opacity-45' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      {flakes.map((f, i) => (
        <span
          key={i}
          className={`absolute top-0 text-white ${f.size} ${f.opacity} animate-snowfall`}
          style={{
            left: f.left,
            animationDelay: f.delay,
            animationDuration: f.duration
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

// Enchanted Twinkling Fairy Lights String across the very top with 360 glow (Zero glow clipping)
function FairyLightsString() {
  const bulbs = [
    { color: "#FB0C17", glow: "rgba(251,12,23,0.95)", delay: "0s" },
    { color: "#fbbf24", glow: "rgba(251,191,36,0.95)", delay: "0.4s" },
    { color: "#10b981", glow: "rgba(16,185,129,0.95)", delay: "0.8s" },
    { color: "#38bdf8", glow: "rgba(56,189,248,0.95)", delay: "1.2s" },
    { color: "#FB0C17", glow: "rgba(251,12,23,0.95)", delay: "1.6s" },
    { color: "#fbbf24", glow: "rgba(251,191,36,0.95)", delay: "0.6s" },
    { color: "#10b981", glow: "rgba(16,185,129,0.95)", delay: "1.0s" },
    { color: "#FB0C17", glow: "rgba(251,12,23,0.95)", delay: "1.4s" },
    { color: "#fbbf24", glow: "rgba(251,191,36,0.95)", delay: "0.2s" },
    { color: "#38bdf8", glow: "rgba(56,189,248,0.95)", delay: "1.8s" },
    { color: "#10b981", glow: "rgba(16,185,129,0.95)", delay: "0.5s" },
    { color: "#FB0C17", glow: "rgba(251,12,23,0.95)", delay: "0.9s" }
  ];

  return (
    <div className="w-full flex justify-around items-start pointer-events-none select-none pt-3 pb-2 relative z-20 overflow-visible">
      {/* Decorative festoon wire connecting the bulbs */}
      <div className="absolute top-3 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#475569]/80 to-transparent pointer-events-none"></div>
      
      {bulbs.map((b, i) => (
        <div key={i} className="flex flex-col items-center relative">
          <div className="w-[1.5px] h-2 bg-[#475569]"></div>
          <div className="w-2.5 h-1.5 bg-[#0f172a] rounded-xs border-[0.5px] border-[#64748b]/80 shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></div>
          <div 
            className="w-3 h-4 rounded-full animate-twinkle" 
            style={{ 
              backgroundColor: b.color, 
              boxShadow: `0 0 10px ${b.glow}, 0 0 22px ${b.glow}`,
              animationDelay: b.delay
            }} 
          />
        </div>
      ))}
    </div>
  );
}

// Handwritten Sketchbook Washi Tape Strips
function WashiTape({ type = 'candy', className = '' }: { type?: 'candy' | 'gold', className?: string }) {
  return (
    <div 
      className={`absolute z-20 pointer-events-none h-4 w-12 rounded-[1px] ${
        type === 'candy' ? 'washi-tape-candy' : 'washi-tape-gold'
      } ${className}`}
      aria-hidden="true"
    />
  );
}

// Masterpiece Christmas Header with Hanging Sign and Red Festive Logo
function ChristmasLogoHeader() {
  return (
    <header className="pt-2 pb-3 px-3 flex flex-col justify-center items-center relative z-10 w-full">
      {/* Hanging cords holding the festive sign */}
      <div className="flex justify-center gap-12 md:gap-16 w-full max-w-[200px] -mb-1 pointer-events-none">
        <div className="w-[2px] h-3 bg-gradient-to-b from-[#475569] to-[#fbbf24] shadow-[0_0_6px_#f59e0b]"></div>
        <div className="w-[2px] h-3 bg-gradient-to-b from-[#475569] to-[#fbbf24] shadow-[0_0_6px_#f59e0b]"></div>
      </div>

      {/* Hanging Wooden / Festive Sign Board (mirrors the Halloween sign aesthetic with Santa & stars) */}
      <div className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#b8040d] via-[#FB0C17] to-[#b8040d] px-3.5 md:px-5 py-1 rounded-2xl border-3 border-[#04091a] shadow-[3px_3px_0px_0px_#f59e0b] -rotate-1 hover:rotate-1 transition-transform cursor-default select-none relative mb-1.5 animate-wiggle">
        <span className="text-[#fef08a] text-xs md:text-sm animate-twinkle">⭐</span>
        <span className="text-white font-black text-xs md:text-sm tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          Edição de Natal
        </span>
        <span className="text-[#fef08a] text-xs md:text-sm animate-twinkle">⭐</span>
      </div>

      {/* Logo container with reduced size (-30%) */}
      <div className="relative inline-block mt-0.5">
        {/* Playful mini Santa hat tucked snug on the logo */}
        <span 
          className="absolute -top-3 -left-2.5 text-2xl md:text-3xl -rotate-15 animate-wiggle inline-block select-none pointer-events-none drop-shadow-[0_4px_10px_rgba(251,12,23,0.7)] z-20"
          aria-hidden="true"
        >
          🎅
        </span>
        <span 
          className="absolute -top-1 -right-2.5 text-xl md:text-2xl rotate-12 animate-float inline-block select-none pointer-events-none drop-shadow-[0_0_8px_#fbbf24] z-20"
          aria-hidden="true"
        >
          ✨
        </span>
        
        <img 
          src="/images/logo.webp" 
          alt="Manual Para Desenhar - Edição de Natal" 
          width={800}
          height={439}
          fetchPriority="high"
          decoding="async"
          className="w-full max-w-[196px] md:max-w-[252px] h-auto object-contain animate-scale-soft"
          style={{
            filter: 'drop-shadow(0 4px 20px rgba(251, 12, 23, 0.45))'
          }}
        />
      </div>
    </header>
  );
}

// Fake Purchase Notification Toast (Christmas Themed) isolated to avoid re-rendering entire app
function PurchaseNotificationToast() {
  const [purchaseNotification, setPurchaseNotification] = useState<string | null>(null);

  useEffect(() => {
    const names = [
      "Ana", "Paulo", "Maria", "João", "Pedro", "Lucas", "Julia", "Marcos", "Fernanda", "Gabriel", 
      "Luana", "Carlos", "Juliana", "Rafael", "Camila", "Rodrigo", "Amanda", "Diego", "Letícia", 
      "Bruno", "Carolina", "Thiago", "Beatriz", "Felipe", "Mariana", "Gustavo", "Renata", 
      "Leonardo", "Larissa", "Ricardo", "Vanessa", "Daniel", "Patricia"
    ];

    let timeoutId: NodeJS.Timeout;
    let isCombo = Math.random() > 0.5;
    let consecutiveCount = 0;

    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const productText = isCombo ? "o COMBO de Manuais" : "o Manual de Natal";
      setPurchaseNotification(`${randomName} comprou ${productText}`);

      if (consecutiveCount >= 1) {
        isCombo = !isCombo;
        consecutiveCount = 0;
      } else {
        const switchProduct = Math.random() < 0.7;
        if (switchProduct) {
          isCombo = !isCombo;
          consecutiveCount = 0;
        } else {
          consecutiveCount++;
        }
      }

      setTimeout(() => {
        setPurchaseNotification(null);
        const nextDelay = Math.floor(Math.random() * 10000) + 5000;
        timeoutId = setTimeout(showRandomNotification, nextDelay);
      }, 3200);
    };

    const initialDelay = Math.floor(Math.random() * 8000) + 4000;
    timeoutId = setTimeout(showRandomNotification, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence>
      {purchaseNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-50 bg-[#0e1c44] text-[#ffffff] px-5 py-3 rounded-2xl border-3 border-[#FB0C17] shadow-[5px_5px_0px_0px_#04091a] flex items-center gap-3 font-bold text-sm md:text-base pointer-events-none"
        >
          <div className={`w-8 h-8 ${purchaseNotification.includes("COMBO") ? "bg-[#b8040d] border-[#fbbf24]" : "bg-[#FB0C17] border-[#f59e0b]"} rounded-full flex items-center justify-center shrink-0 border`}>
            {purchaseNotification.includes("COMBO") ? (
              <Gift className="w-4 h-4 text-[#fef08a]" />
            ) : (
              <span className="text-base">🎄</span>
            )}
          </div>
          <span className="text-[#f8fafc]">{purchaseNotification}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Reusable Dual Purchase Buttons Group (Manual Individual + COMBO em Destaque)
function DualPurchaseButtons({ checkoutUrl, comboCheckoutUrl }: { checkoutUrl: string; comboCheckoutUrl: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-3 max-w-md mx-auto w-full">
      {/* Botão 1: Comprar Agora (Manual Individual) */}
      <div className="relative w-full">
        <a 
          href={checkoutUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full bg-[#0a1432] hover:bg-[#12214d] text-white text-base sm:text-lg font-bold py-3.5 px-4 rounded-2xl border-3 border-[#FB0C17] shadow-[4px_4px_0px_0px_#04091a] hover:translate-y-0.5 hover:translate-x-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <ShoppingCart className="w-5 h-5 shrink-0 text-[#fbbf24]" />
          <span className="text-center leading-tight whitespace-nowrap tracking-wide">COMPRAR AGORA</span>
        </a>
      </div>

      {/* Botão 2: COMPRAR COMBO (COM MAIOR DESTAQUE VISUAL) */}
      <div className="relative w-full">
        <div className="absolute -top-4 -right-2 md:-right-3 z-20 pointer-events-none rotate-12">
          <span className="inline-block bg-[#fbbf24] text-[#04091a] text-xs sm:text-sm font-black px-3 py-1 rounded-full border-2 border-[#04091a] shadow-[2px_2px_0px_0px_#FB0C17] animate-scale-pulse tracking-wide uppercase">
            ⭐ O MAIS ESCOLHIDO
          </span>
        </div>

        <a 
          href={comboCheckoutUrl} 
          target={comboCheckoutUrl.startsWith("http") ? "_blank" : undefined}
          rel={comboCheckoutUrl.startsWith("http") ? "noopener noreferrer" : undefined}
          onClick={comboCheckoutUrl === "#" ? (e) => e.preventDefault() : undefined}
          className="w-full bg-gradient-to-r from-[#FB0C17] via-[#ff2a34] to-[#e60914] hover:from-[#d90913] hover:to-[#FB0C17] text-white text-xl sm:text-2xl font-black py-4 md:py-4.5 px-4 sm:px-6 rounded-2xl border-4 border-[#04091a] shadow-[6px_6px_0px_0px_#fbbf24] hover:translate-y-1 hover:translate-x-1 hover:shadow-[3px_3px_0px_0px_#fbbf24] transition-all flex flex-col items-center justify-center gap-0.5 animate-shine cursor-pointer group"
        >
          <div className="flex items-center justify-center gap-2.5">
            <Gift className="w-6 h-6 shrink-0 text-[#fef08a] animate-wiggle" />
            <span className="text-center leading-tight whitespace-nowrap tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              COMPRAR COMBO
            </span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#fef08a] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
            2 Manuais (Original + Natal)
          </span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [lightboxData, setLightboxData] = useState<{ index: number, type: 'product' | 'testimonial' } | null>(null);
  const [direction, setDirection] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState("https://pay.cakto.com.br/wauej57");
  const [comboCheckoutUrl, setComboCheckoutUrl] = useState("https://pay.cakto.com.br/3eaepnk");

  useEffect(() => {
    const checkoutBaseUrl = "https://pay.cakto.com.br/wauej57";
    const comboBaseUrl = "https://pay.cakto.com.br/3eaepnk";
    const allowedParams = [
      "utm_source",
      "utm_campaign",
      "utm_medium",
      "utm_content",
      "utm_term",
      "utm_id",
      "sck",
      "xcod"
    ];

    try {
      // 1. Get query string from search or hash if search is empty
      let queryString = window.location.search;
      if (!queryString && window.location.hash.includes("?")) {
        queryString = window.location.hash.substring(window.location.hash.indexOf("?"));
      }

      const urlParams = new URLSearchParams(queryString);

      // 2. Retrieve existing stored params from localStorage or sessionStorage
      let storedParams: Record<string, string> = {};
      try {
        const local = localStorage.getItem("manual_utm_params");
        const session = sessionStorage.getItem("manual_utm_params");
        storedParams = local ? JSON.parse(local) : (session ? JSON.parse(session) : {});
      } catch (e) {
        // ignore parse error
      }

      // 3. Check if current URL brings any allowed parameters
      const hasAnyIncomingParam = allowedParams.some(param => urlParams.has(param) && urlParams.get(param));

      if (hasAnyIncomingParam) {
        allowedParams.forEach(param => {
          if (urlParams.has(param)) {
            const val = urlParams.get(param);
            if (val) {
              storedParams[param] = val;
            }
          }
        });
      }

      // Default utm_source to 'FB' if not set
      if (!storedParams.utm_source) {
        storedParams.utm_source = "FB";
      }

      // Persist to both sessionStorage and localStorage
      try {
        sessionStorage.setItem("manual_utm_params", JSON.stringify(storedParams));
        localStorage.setItem("manual_utm_params", JSON.stringify(storedParams));
      } catch (e) {
        // ignore storage errors
      }

      // 4. Build checkout URLs with the exact UTM parameters
      const buildUrlWithParams = (baseUrl: string) => {
        if (!baseUrl || !baseUrl.startsWith("http")) return baseUrl;
        const u = new URL(baseUrl);
        allowedParams.forEach(key => {
          if (storedParams[key]) {
            u.searchParams.set(key, storedParams[key]);
          }
        });
        return u.toString();
      };

      setCheckoutUrl(buildUrlWithParams(checkoutBaseUrl));
      setComboCheckoutUrl(buildUrlWithParams(comboBaseUrl));
    } catch (e) {
      console.error("Error setting UTM params", e);
    }
  }, []);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const scrollRaf = useRef<number | null>(null);
  const handleScroll = () => {
    if (scrollRaf.current !== null) return;
    scrollRaf.current = requestAnimationFrame(() => {
      scrollRaf.current = null;
      if (!carouselRef.current) return;
      const container = carouselRef.current;
      const firstChild = container.firstElementChild as HTMLElement | null;
      if (!firstChild) return;
      const itemWidth = firstChild.offsetWidth + 16;
      const newIndex = Math.round(container.scrollLeft / itemWidth);
      const clampedIndex = Math.max(0, Math.min(newIndex, productImages.length - 1));
      setActiveIndex((prev) => (prev !== clampedIndex ? clampedIndex : prev));
    });
  };

  const scrollToImage = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        const targetScrollLeft = (child.offsetLeft - container.offsetLeft) + child.offsetWidth / 2 - container.offsetWidth / 2;
        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const testimonialScrollRaf = useRef<number | null>(null);
  const handleTestimonialScroll = () => {
    if (testimonialScrollRaf.current !== null) return;
    testimonialScrollRaf.current = requestAnimationFrame(() => {
      testimonialScrollRaf.current = null;
      if (!testimonialRef.current) return;
      const container = testimonialRef.current;
      const firstChild = container.firstElementChild as HTMLElement | null;
      if (!firstChild) return;
      const itemWidth = firstChild.offsetWidth + 16;
      const newIndex = Math.round(container.scrollLeft / itemWidth);
      const clampedIndex = Math.max(0, Math.min(newIndex, testimonialImages.length - 1));
      setActiveTestimonialIndex((prev) => (prev !== clampedIndex ? clampedIndex : prev));
    });
  };

  const scrollToTestimonialImage = (index: number) => {
    if (testimonialRef.current) {
      const container = testimonialRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        const targetScrollLeft = (child.offsetLeft - container.offsetLeft) + child.offsetWidth / 2 - container.offsetWidth / 2;
        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const paginate = (newDirection: number) => {
    if (lightboxData) {
      setDirection(newDirection);
      setLightboxData((prev) => {
        if (!prev) return null;
        const images = prev.type === 'product' ? productImages : testimonialImages;
        let next = prev.index + newDirection;
        if (next < 0) next = images.length - 1;
        if (next >= images.length) next = 0;
        return { ...prev, index: next };
      });
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxData(null);
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    if (lightboxData !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxData]);

  return (
    <div className="min-h-screen pb-20 selection:bg-[#FB0C17] selection:text-white overflow-x-hidden relative text-[#f8fafc]">
      {/* GPU-accelerated fixed starry night sky */}
      <div className="starry-background" aria-hidden="true" />
      
      {/* Background gentle snowfall */}
      <SnowfallOverlay />

      {/* Fairy lights string on very top with 360 glow */}
      <FairyLightsString />

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxData !== null && (() => {
          const currentImages = lightboxData.type === 'product' ? productImages : testimonialImages;
          return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#04091a]/95 backdrop-blur-md"
          >
            <button
              onClick={() => setLightboxData(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2.5 bg-[#0a1432] rounded-full border-2 border-[#FB0C17] shadow-[2px_2px_0px_0px_#f59e0b] hover:bg-[#FB0C17] hover:text-white text-[#f8fafc] transition-all cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-7 h-7" />
            </button>

            <button
              className="absolute left-4 md:left-8 z-50 p-3 bg-[#0a1432] rounded-full border-2 border-[#FB0C17] shadow-[3px_3px_0px_0px_#f59e0b] hover:bg-[#FB0C17] hover:text-white text-[#f8fafc] transition-all hidden md:block cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={lightboxData.index}
                  src={currentImages[lightboxData.index]}
                  custom={direction}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? 1000 : -1000,
                      opacity: 0
                    }),
                    center: {
                      zIndex: 1,
                      x: 0,
                      opacity: 1
                    },
                    exit: (direction: number) => ({
                      zIndex: 0,
                      x: direction < 0 ? 1000 : -1000,
                      opacity: 0
                    })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute max-h-[65vh] md:max-h-[85vh] max-w-[85vw] md:max-w-[75vw] object-contain rounded-2xl border-4 border-[#FB0C17] shadow-[8px_8px_0px_0px_#f59e0b] cursor-grab active:cursor-grabbing pointer-events-auto bg-[#0a1432]"
                />
              </AnimatePresence>
            </div>

            <button
              className="absolute right-4 md:right-8 z-50 p-3 bg-[#0a1432] rounded-full border-2 border-[#FB0C17] shadow-[3px_3px_0px_0px_#f59e0b] hover:bg-[#FB0C17] hover:text-white text-[#f8fafc] transition-all hidden md:block cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
              aria-label="Próximo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Mobile Navigation Arrows */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 md:hidden z-50">
              <button
                className="p-3 bg-[#0a1432] text-[#f8fafc] rounded-full border-2 border-[#FB0C17] shadow-[2px_2px_0px_0px_#f59e0b] active:bg-[#FB0C17] active:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                className="p-3 bg-[#0a1432] text-[#f8fafc] rounded-full border-2 border-[#FB0C17] shadow-[2px_2px_0px_0px_#f59e0b] active:bg-[#FB0C17] active:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        );})()}
      </AnimatePresence>

      {/* Header with Hanging Sign and Red Filtered Brand Logo */}
      <ChristmasLogoHeader />

      <main className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Product Carousel - Full width on Mobile and Tablet (NO badge card before gallery) */}
        <div className="relative mb-12 -mx-4 md:-mx-8 lg:mx-auto lg:max-w-4xl">
           <div 
             ref={carouselRef}
             onScroll={handleScroll}
             className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-4 md:gap-5 lg:gap-6 py-4 md:py-6 no-scrollbar px-4 md:px-8 lg:px-0 scroll-smooth"
           >
              {productImages.map((url, i) => (
               <div key={i} className="w-[85vw] max-w-[280px] md:w-[42vw] md:max-w-[320px] lg:w-full lg:max-w-none shrink-0 snap-center mx-auto flex justify-center relative hover:z-10">
                  <div 
                    className={`bg-[#0a1432] p-2.5 md:p-3 border-4 border-[#FB0C17] shadow-[6px_6px_0px_0px_#f59e0b] rounded-2xl w-full transition-transform duration-300 hover:scale-105 cursor-pointer relative ${i % 2 === 0 ? 'rotate-1 hover:rotate-2' : '-rotate-1 hover:-rotate-2'}`}
                    onClick={() => setLightboxData({ index: i, type: 'product' })}
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={url} 
                        alt={`Página de amostra do manual ${i + 1}`} 
                        width={480}
                        height={640}
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : "auto"}
                        decoding="async"
                        className="w-full aspect-[3/4] object-cover rounded-xl pointer-events-none" 
                      />
                    </div>
                  </div>
               </div>
             ))}
           </div>
           
           <div className="flex lg:hidden items-center justify-center gap-2 mt-1 text-[#fbbf24] text-sm font-bold">
             <span className="animate-pulse">👈</span> Deslize para espiar as páginas <span className="animate-pulse">👉</span>
           </div>
           
           <div className="flex lg:hidden justify-center gap-3 mt-3">
             {productImages.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => scrollToImage(i)}
                 aria-label={`Ver imagem ${i + 1}`}
                 className={`w-3.5 h-3.5 rounded-full border-2 transition-all cursor-pointer ${activeIndex === i ? 'bg-[#FB0C17] border-[#fbbf24] scale-125 shadow-[0_0_8px_#fbbf24]' : 'bg-[#0a1432] border-[#334155]'}`}
               />
             ))}
           </div>
        </div>

        {/* Short Description & Buy Section (High-Impact Magical Hero Card) */}
        <section className="mb-12 bg-gradient-to-b from-[#0e1c44] via-[#0a1432] to-[#070e24] p-6 md:p-9 rounded-3xl border-4 border-[#FB0C17] shadow-[8px_8px_0px_0px_#f59e0b] -rotate-1 relative z-10 max-w-3xl mx-auto overflow-visible">
          
          {/* Subtle Ambient Magical Christmas Glows */}
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#fbbf24]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-[#FB0C17]/25 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Washi tape pinning down the hero card */}
          <WashiTape type="candy" className="-top-3 left-8 -rotate-6 w-16 h-5" />

          {/* Floating Festive Corner Sticker */}
          <div className="absolute -top-4 -right-2 md:-right-4 z-20 pointer-events-none rotate-12">
            <span className="inline-block bg-[#FB0C17] text-white text-xs md:text-sm font-black px-3 py-1 rounded-full border-2 border-[#04091a] shadow-[2px_2px_0px_0px_#f59e0b] animate-scale-pulse tracking-wide uppercase">
              🎁 Edição Especial
            </span>
          </div>

          {/* Top Rating with Golden Glow Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-3 text-[#fbbf24] drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="fill-current w-5 h-5 md:w-6 md:h-6 animate-scale-pulse" style={{ animationDelay: `${i * 120}ms` }} />
            ))}
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight text-center md:text-left text-[#ffffff]">
            Um Manual Para Destravar Sua Criatividade e Criar Desenhos <span className="text-[#ff2a34] underline decoration-wavy decoration-[#fbbf24] drop-shadow-[0_0_16px_rgba(251,12,23,0.7)]">Magicamente Incríveis!</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-6 text-[#e2e8f0] opacity-95 text-center md:text-left leading-relaxed">
            Escolha formatos, carinhas expressivas, gorrinhos fofos, presentinhos, roupas quentinhas, renas, biscoitos decorados e centenas de elementos natalinos para criar ilustrações cheias de encanto, mesmo que você nunca tenha desenhado!
          </p>

          {/* Pricing & CTA Box */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 bg-[#12214d]/95 p-4 sm:p-5 rounded-2xl border-2 border-dashed border-[#FB0C17]/80 shadow-[3px_3px_0px_0px_#04091a] relative">
            <div className="flex flex-col items-center md:items-start shrink-0">
               <span className="line-through text-[#94a3b8] text-[18px] font-bold">De R$ 39,90</span>
               <div className="flex items-baseline gap-1">
                 <span className="text-[34px] sm:text-[38px] font-black text-[#ff2a34] drop-shadow-[0_0_14px_rgba(251,12,23,0.65)]">
                   Por R$ 27,90
                 </span>
               </div>
               <span className="text-xs text-[#fbbf24] font-bold">Acesso vitalício + todas atualizações mágicas</span>
            </div>
            
            {/* CTA Button with 30% OFF badge */}
            <div className="relative w-full md:w-auto shrink-0 mt-2 sm:mt-0">
              <div className="absolute -top-3.5 -right-2 md:-right-3 z-20 pointer-events-none rotate-12">
                <span className="inline-block bg-[#FB0C17] text-white text-xs md:text-sm font-black px-2.5 sm:px-3 py-1 rounded-full border-2 border-[#04091a] shadow-[2px_2px_0px_0px_#f59e0b] animate-scale-pulse tracking-wide">
                  🎁 30% OFF
                </span>
              </div>

              <a 
                href={checkoutUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full md:w-auto bg-gradient-to-r from-[#FB0C17] to-[#ff2a34] hover:from-[#d90913] hover:to-[#FB0C17] text-white text-base sm:text-lg md:text-xl font-black py-3.5 md:py-4 px-4 sm:px-6 md:px-8 rounded-2xl border-4 border-[#04091a] shadow-[5px_5px_0px_0px_#f59e0b] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#f59e0b] transition-all flex items-center justify-center gap-2 animate-shine cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 animate-wiggle text-white" />
                <span className="text-center leading-tight whitespace-nowrap tracking-wide">QUERO O MANUAL</span>
              </a>
            </div>
          </div>
        </section>


        {/* Para quem é este manual? */}
        <section className="mb-12 max-w-3xl mx-auto">
          <div className="bg-[#0a1432] p-6 md:p-9 rounded-3xl border-4 border-[#f59e0b] shadow-[7px_7px_0px_0px_#FB0C17] rotate-1 relative">
            <WashiTape type="gold" className="-top-3 right-8 rotate-3 w-14 h-4" />

            <h2 className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3 text-[#ffffff]">
              <span className="bg-[#FB0C17] text-white p-2 rounded-xl border-3 border-[#04091a] shadow-[2px_2px_0px_0px_#f59e0b] animate-wiggle inline-block text-xl">
                🎅
              </span> 
              Para quem é este manual de Natal?
            </h2>
            <ul className="space-y-4 text-lg md:text-xl text-[#cbd5e1]">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-[#fbbf24] shrink-0 mt-1 animate-slide-x" style={{ animationDelay: '0ms' }} />
                <span>Crianças, adolescentes e adultos que querem soltar a imaginação criando personagens natalinos, divertidos e fofos.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-[#fbbf24] shrink-0 mt-1 animate-slide-x" style={{ animationDelay: '100ms' }} />
                <span>Quem ama o Natal e precisa de um empurrãozinho para começar a desenhar.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-[#fbbf24] shrink-0 mt-1 animate-slide-x" style={{ animationDelay: '200ms' }} />
                <span>Quem busca ideias para desenhar de maneira fácil.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-[#fbbf24] shrink-0 mt-1 animate-slide-x" style={{ animationDelay: '300ms' }} />
                <span>Quem gosta de traços simples, fáceis de reproduzir no papel ou no tablet.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-[#fbbf24] shrink-0 mt-1 animate-slide-x" style={{ animationDelay: '400ms' }} />
                <span>Quem quer referências para relaxar e desenhar em família.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-[#fbbf24] shrink-0 mt-1 animate-slide-x" style={{ animationDelay: '500ms' }} />
                <span>Pais, psicólogos e educadores que buscam ideias para atividades e oficinas de Natal.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Video / Animated GIF Showcase - Veja o Manual em mãos! */}
        <section className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#ffffff] flex items-center justify-center gap-2">
            <span className="animate-wiggle inline-block shrink-0">📖</span>
            <span>
              Veja o Manual <br className="sm:hidden" />em mãos!
            </span>
            <span className="animate-twinkle inline-block shrink-0 text-[#fbbf24]">✨</span>
          </h2>
          
          <div className="relative bg-[#0a1432] border-4 border-[#FB0C17] rounded-3xl p-3.5 shadow-[8px_8px_0px_0px_#f59e0b] rotate-1 max-w-sm mx-auto mb-8">
            <WashiTape type="candy" className="-top-3 left-6 -rotate-6 w-14 h-4" />

            <picture>
              <source type="image/webp" srcSet="/images/manual-animado.webp" />
              <img 
                src="/images/manual-animado.gif" 
                alt="Manual folheado por dentro" 
                loading="lazy"
                decoding="async"
                width={480}
                height={640}
                className="w-full aspect-[3/4] object-cover border-4 border-dashed border-[#f59e0b] rounded-2xl" 
              />
            </picture>
            
            {/* Festive Sketchy decorations */}
            <div className="absolute -top-6 -right-6 text-4xl animate-bounce">🎄</div>
            <div className="absolute -bottom-6 -left-6 text-4xl animate-wiggle inline-block">🎁</div>
          </div>

          {/* Buy button right after the GIF */}
          <div className="flex justify-center px-2">
            <a 
              href={checkoutUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full max-w-sm bg-gradient-to-r from-[#FB0C17] to-[#ff2a34] hover:from-[#d90913] hover:to-[#FB0C17] text-white text-lg sm:text-xl md:text-2xl font-black py-3.5 md:py-4 px-4 sm:px-6 md:px-8 rounded-2xl border-4 border-[#04091a] shadow-[5px_5px_0px_0px_#f59e0b] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#f59e0b] transition-all flex items-center justify-center gap-2 animate-shine cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 animate-wiggle text-white" />
              <span className="text-center leading-tight whitespace-nowrap tracking-wide">COMPRAR O MANUAL</span>
            </a>
          </div>
        </section>

        {/* O que você vai receber no seu Manual? */}
        <section className="mb-14 max-w-3xl mx-auto">
          <div className="bg-[#0a1432] p-6 md:p-9 rounded-3xl border-4 border-[#FB0C17] border-dashed shadow-[7px_7px_0px_0px_#f59e0b] -rotate-1 relative">
            <WashiTape type="gold" className="-top-3 right-10 rotate-6 w-14 h-4" />

            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-[#ffffff]">
              <Sparkles className="w-8 h-8 text-[#fbbf24] animate-wiggle" />
              O que você vai receber no seu Manual?
            </h2>
            <p className="text-lg md:text-xl mb-6 text-[#cbd5e1] leading-relaxed">
              Nada de teorias cansativas ou regras chatas! O Manual funciona como uma biblioteca visual mágica, cheia de referências ilustradas prontas para você misturar, combinar, adaptar e criar seus próprios desenhos com muito encanto e estilo.
            </p>
            <ul className="space-y-4 text-lg md:text-xl mb-4">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#FB0C17] text-white border-2 border-[#04091a] rounded-full font-black text-base shadow-[2px_2px_0px_0px_#f59e0b] animate-float" style={{ animationDelay: '0ms' }}>
                  1
                </span>
                <span className="text-[#f8fafc]">
                  Centenas de olhos expressivos, sorrisos calorosos, gorrinhos, cabelos, roupas de inverno, presentinhos, laços, árvores, comidinhas e muito mais!
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#f59e0b] text-[#04091a] border-2 border-[#04091a] rounded-full font-black text-base shadow-[2px_2px_0px_0px_#FB0C17] animate-float" style={{ animationDelay: '200ms' }}>
                  2
                </span>
                <span className="text-[#f8fafc]">
                  Um desafio temático especial de "Histórinha em Quadrinhos de Natal" para você soltar a imaginação e encantar sua família e amigos!
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#10b981] text-white border-2 border-[#04091a] rounded-full font-black text-base shadow-[2px_2px_0px_0px_#FB0C17] animate-float" style={{ animationDelay: '400ms' }}>
                  3
                </span>
                <span className="text-[#f8fafc]">
                  Um método leve, prático e acolhedor para transformar qualquer folha em branco em uma obra cheia de magia, aconchego e personalidade.
                </span>
              </li>
            </ul>
          </div>
        </section>


        {/* Mini Sessão COMBO: The Showstopper Electric Festive Red & Gold Card */}
        <section className="mb-14 max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#FB0C17] via-[#e60914] to-[#b8040d] p-6 sm:p-8 md:p-10 rounded-3xl border-4 border-[#04091a] shadow-[8px_8px_0px_0px_#fbbf24] text-center relative">
            <WashiTape type="gold" className="-top-3 left-8 -rotate-6 w-16 h-5" />

            {/* 5 Estrelas Douradas */}
            <div className="flex items-center justify-center gap-1.5 mb-2.5 text-[#fef08a] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-current w-5 h-5 md:w-6 md:h-6 animate-scale-pulse" style={{ animationDelay: `${i * 120}ms` }} />
              ))}
            </div>

            {/* Título */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-white whitespace-nowrap tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
              Que tal levar o combo?
            </h2>

            {/* Subtítulo com destaque ondulado */}
            <div className="mb-6">
              <span className="text-lg sm:text-xl md:text-2xl font-black text-[#fef08a] underline decoration-wavy decoration-white tracking-wide inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                MANUAL ORIGINAL + EDIÇÃO DE NATAL
              </span>
            </div>

            {/* Conteúdo: No desktop lado a lado, no mobile um em cima do outro */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-3xl mx-auto">
              <div className="w-full max-w-[230px] sm:max-w-[260px] md:max-w-[300px] shrink-0">
                <img 
                  src="/images/combo-manual.webp" 
                  alt="Combo Manual para Desenhar Original e Natal" 
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-300" 
                />
              </div>

              {/* Box de Oferta */}
              <div className="w-full flex flex-col sm:flex-row md:flex-col items-center justify-between md:justify-center gap-4 bg-[#7a0309] p-4 sm:p-5 md:p-6 rounded-2xl border-2 border-dashed border-[#fef08a] shadow-[3px_3px_0px_0px_#04091a] relative text-left">
                <div className="flex flex-col items-center sm:items-start md:items-center shrink-0 w-full sm:w-auto md:w-full text-center sm:text-left md:text-center">
                  <span className="line-through text-white/70 text-[18px] font-bold">De R$ 52,80</span>
                  <div className="flex items-baseline justify-center gap-1 my-0.5">
                    <span 
                      className="text-[32px] sm:text-[36px] md:text-[38px] font-black text-white"
                      style={{
                        WebkitTextStroke: '1px #f59e0b',
                        paintOrder: 'stroke fill',
                        textShadow: '0 0 14px rgba(245, 158, 11, 0.6), 2px 2px 0px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      Por R$ 47,90
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#fef08a] font-bold">Acesso vitalício aos dois manuais</span>
                </div>

                {/* Botão de Compra com badge de 10% OFF */}
                <div className="relative w-full sm:w-auto md:w-full shrink-0 mt-1 sm:mt-0">
                  <div className="absolute -top-3.5 -right-2 sm:-right-3 md:-right-2 z-20 pointer-events-none rotate-12">
                    <span className="inline-block bg-[#fbbf24] text-[#04091a] text-xs sm:text-sm font-black px-2.5 sm:px-3 py-1 rounded-full border-2 border-[#04091a] shadow-[2px_2px_0px_0px_#04091a] animate-scale-pulse tracking-wide">
                      🎁 10% OFF
                    </span>
                  </div>

                  <a 
                    href={comboCheckoutUrl} 
                    target={comboCheckoutUrl.startsWith("http") ? "_blank" : undefined}
                    rel={comboCheckoutUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={comboCheckoutUrl === "#" ? (e) => e.preventDefault() : undefined}
                    className="w-full bg-[#04091a] hover:bg-[#0e1c44] text-white hover:text-[#fbbf24] text-base sm:text-lg md:text-xl font-black py-3.5 px-3 sm:px-5 md:px-6 rounded-2xl border-4 border-[#04091a] shadow-[4px_4px_0px_0px_#fbbf24] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#fbbf24] transition-all flex items-center justify-center gap-2 animate-shine cursor-pointer"
                  >
                    <ShoppingCart className="w-5 h-5 shrink-0 animate-wiggle text-[#FB0C17]" />
                    <span className="text-center leading-tight whitespace-nowrap tracking-wide">QUERO O COMBO!!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Recentes */}
        <section className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#ffffff] flex justify-center items-center gap-3">
             <span className="animate-wiggle inline-block">💖</span>
             O que diz quem já desenha com o Manual
             <span className="animate-twinkle inline-block text-[#fbbf24]">✨</span>
          </h2>
          
          <div className="relative mb-12 -mx-4 md:-mx-8 lg:mx-auto lg:max-w-4xl">
             <div 
               ref={testimonialRef}
               onScroll={handleTestimonialScroll}
               className="flex lg:flex-wrap lg:justify-center overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-4 md:gap-6 py-4 md:py-6 no-scrollbar px-4 md:px-8 lg:px-0 scroll-smooth"
             >
                {testimonialImages.map((url, i) => (
                 <div key={i} className="w-[85vw] max-w-[280px] md:w-[42vw] md:max-w-[320px] lg:w-[calc((100%-4.5rem)/4)] lg:max-w-none shrink-0 snap-center mx-auto lg:mx-0 flex justify-center relative hover:z-10">
                    <div 
                      className={`bg-[#0a1432] p-2.5 md:p-3 border-4 border-[#FB0C17] shadow-[6px_6px_0px_0px_#f59e0b] rounded-2xl w-full transition-transform duration-300 hover:scale-105 cursor-pointer relative ${i % 2 === 0 ? 'rotate-1 hover:rotate-2' : '-rotate-1 hover:-rotate-2'}`}
                      onClick={() => setLightboxData({ index: i, type: 'testimonial' })}
                    >
                      <img 
                        src={url} 
                        alt={`Depoimento ${i + 1}`} 
                        loading="lazy"
                        decoding="async"
                        width={480}
                        height={640}
                        className="w-full aspect-[3/4] object-cover rounded-xl pointer-events-none" 
                      />
                    </div>
                 </div>
               ))}
             </div>
             
             <div className="flex lg:hidden items-center justify-center gap-2 mt-1 text-[#fbbf24] text-sm font-bold">
               <span className="animate-pulse">👈</span> Deslize para ver os depoimentos <span className="animate-pulse">👉</span>
             </div>
             
             <div className="flex lg:hidden justify-center gap-3 mt-3">
               {testimonialImages.map((_, i) => (
                 <button 
                   key={i} 
                   onClick={() => scrollToTestimonialImage(i)}
                   aria-label={`Ver depoimento ${i + 1}`}
                   className={`w-3.5 h-3.5 rounded-full border-2 transition-all cursor-pointer ${activeTestimonialIndex === i ? 'bg-[#fbbf24] border-[#FB0C17] scale-125 shadow-[0_0_8px_#fbbf24]' : 'bg-[#0a1432] border-[#334155]'}`}
                 />
               ))}
             </div>
          </div>
        </section>

        {/* Guarantee (Magical Golden Warranty Shield Card) */}
        <section className="mb-12 max-w-3xl mx-auto">
           <div className="bg-gradient-to-br from-[#0e1c44] via-[#0b1738] to-[#070e24] text-white p-6 md:p-10 rounded-[2.5rem] border-4 border-[#fbbf24] shadow-[8px_8px_0px_0px_#FB0C17] flex flex-col md:flex-row items-center gap-6 md:gap-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-48 h-48 bg-[#fbbf24]/15 rounded-full -mr-16 -mt-16 blur-2xl"></div>
             
             <div className="p-4 bg-[#FB0C17]/15 rounded-3xl border-2 border-[#fbbf24] shadow-[3px_3px_0px_0px_#FB0C17] shrink-0">
               <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-[#fbbf24] animate-scale-pulse" />
             </div>
             
             <div className="relative z-10 text-center md:text-left">
               <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#ffffff]">
                  Garantia de 7 Dias 🛡️
                </h3>
               <p className="text-lg md:text-xl text-[#cbd5e1] leading-relaxed">
                 Teste o Manual por 7 dias inteiros. Se você achar que ele não ajudou você a se divertir e destravar sua criatividade, basta pedir que devolvemos 100% do seu dinheiro. Sem pegadinhas, sem burocracia.
               </p>
             </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-14 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#ffffff] flex items-center justify-center gap-2">
            <span>Perguntas Frequentes</span>
            <span className="text-[#FB0C17]">❓</span>
          </h3>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-[#0a1432] rounded-2xl border-4 transition-all overflow-hidden ${
                  openFaqIndex === index 
                    ? 'border-[#FB0C17] shadow-[5px_5px_0px_0px_#f59e0b]' 
                    : 'border-[#14234c] hover:border-[#FB0C17] shadow-[3px_3px_0px_0px_#04091a]'
                }`}
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-lg md:text-xl cursor-pointer"
                >
                  <span className="flex items-center gap-3 md:gap-4">
                    <span className="text-2xl md:text-3xl animate-wiggle inline-block shrink-0">{faq.icon}</span>
                    <span className="leading-tight text-[#ffffff]">{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-6 h-6 shrink-0 text-[#FB0C17] transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-5 pt-0 pl-14 md:pl-[4.5rem] text-[#cbd5e1] text-base md:text-lg leading-relaxed border-t border-dashed border-[#FB0C17]/40 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Ready to draw section */}
        <section className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#ffffff]">
            Pronto para desenhar neste Natal? 🎄✨
          </h2>
          <p className="text-lg md:text-xl text-[#fbbf24] mb-6 max-w-md mx-auto font-medium">
            Pegue seu papel, caneta e dê vida à magia que mora na sua imaginação!
          </p>
          <DualPurchaseButtons checkoutUrl={checkoutUrl} comboCheckoutUrl={comboCheckoutUrl} />
        </section>



        {/* Quem criou o Manual? */}
        <section className="mb-14 max-w-3xl mx-auto">
          <div className="bg-[#0a1432] p-6 md:p-10 rounded-3xl border-4 border-[#FB0C17] shadow-[8px_8px_0px_0px_#f59e0b] text-center relative overflow-visible">
            <WashiTape type="candy" className="-top-3 left-10 -rotate-3 w-16 h-4" />

            <div className="absolute top-4 right-4 text-3xl opacity-30 pointer-events-none">🎨</div>
            <div className="absolute bottom-4 left-4 text-3xl opacity-30 pointer-events-none">✨</div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ffffff]">
              Quem criou o Manual?
            </h2>

            <div className="flex justify-center mb-6">
              <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full shadow-[6px_6px_0px_0px_#f59e0b] bg-[#12214d] p-2 flex items-center justify-center">
                {/* Rotating dashed border in Christmas Red */}
                <div 
                  className="absolute inset-0 rounded-full border-4 border-[#FB0C17] border-dashed animate-spin-slow pointer-events-none"
                  aria-hidden="true"
                />
                <img
                  src="/images/ju.webp"
                  alt="Junior Launther - Criador do Manual"
                  className="w-full h-full object-cover rounded-full relative z-10 border-2 border-[#fbbf24]"
                  width={208}
                  height={208}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg md:text-xl text-[#e2e8f0] leading-relaxed max-w-2xl mx-auto">
              <p>
                Oi! Eu sou o Junior Launther, artista e criador do <strong className="font-bold text-[#fbbf24] underline decoration-[#FB0C17]">@ateliedoju</strong>. Compartilho minhas criações e ideias para despertar a criatividade, inclusive de quem acha que não nasceu com o dom do desenho!
              </p>
              <p>
                Estou há mais de 17 anos criando na internet e também produzo conteúdo para A Casa do Ju, somando mais de 350 mil seguidores. Esta <span className="text-[#fbbf24] font-bold">Edição de Natal</span> nasceu para trazer toda a magia, o calor e a alegria festiva aos seus cadernos de desenho!
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Buttons: Comprar Agora + COMPRAR COMBO em Destaque */}
        <section className="mb-14">
          <DualPurchaseButtons checkoutUrl={checkoutUrl} comboCheckoutUrl={comboCheckoutUrl} />
        </section>

        {/* WhatsApp CTA (Moved to end before footer) */}
        <section className="mb-14 text-center max-w-md mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#ffffff]">Ainda tem dúvidas?</h3>
          <p className="text-base md:text-lg text-[#cbd5e1] mb-5">
            Fale direto comigo no WhatsApp e tire qualquer dúvida antes de comprar!
          </p>
          <div className="flex justify-center px-2">
            <a 
              href="https://wa.me/5519988508110?text=Ol%C3%A1!%20Vim%20do%20site%20do%20manual%20de%20Natal.%20Tenho%20uma%20d%C3%BAvida." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full max-w-sm bg-[#25D366] hover:bg-[#1DA851] text-white text-lg sm:text-xl font-bold py-3.5 md:py-4 px-4 sm:px-6 md:px-8 rounded-2xl border-4 border-[#04091a] shadow-[5px_5px_0px_0px_#FB0C17] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#FB0C17] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
               <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 animate-wiggle" />
               <span className="text-center leading-tight whitespace-nowrap tracking-wide">Falar no WhatsApp</span>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-10 text-[#94a3b8] text-sm max-w-4xl mx-auto px-4 relative z-10">
        <div className="absolute top-0 left-1/4 right-1/4 h-1 border-t-2 border-dashed border-[#FB0C17]/40"></div>

        <div className="flex justify-center mb-6 mt-8">
          <img 
            src="/images/logo.webp" 
            alt="Manual Para Desenhar - Edição de Natal" 
            loading="lazy"
            decoding="async"
            width={800}
            height={439}
            className="h-16 md:h-20 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
            style={{
              filter: 'drop-shadow(0 2px 12px rgba(251, 12, 23, 0.4))'
            }}
          />
        </div>

        <p className="mt-4 font-bold text-base text-[#ffffff]">
          Manual Para Desenhar - Edição Especial de Natal
        </p>
        <p className="mt-1">Todos os direitos reservados - Ateliê do Ju</p>
        <p className="text-xs text-[#64748b] mt-1">CNPJ 51.041.767/0001-08</p>
        <div className="mt-3 text-xl">🎄✨</div>
      </footer>

      {/* Fake Purchase Notification Toast (Christmas Themed) */}
      <PurchaseNotificationToast />
    </div>
  );
}
