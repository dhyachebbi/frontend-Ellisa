import React from 'react';

/*
  Composant unique contenant plusieurs sous-composants pour la page "Centre d'aide".
  Colle ce fichier dans: src/components/centre_aide/CentreAide.jsx
  Tu peux ensuite l'importer depuis ta page :
    import CentreAide from '@/components/centre_aide/CentreAide';
*/

/* ---------- Header ---------- */
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="px-4 lg:px-40 flex flex-1 justify-center py-3">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex items-center justify-between whitespace-nowrap px-4 lg:px-10">
            <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
              <div className="size-6 text-primary" aria-hidden>
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                  <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Guide.ai</h2>
            </div>

            <div className="hidden lg:flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a className="text-sm font-medium leading-normal hover:text-primary" href="#">Home</a>
                <a className="text-sm font-medium leading-normal hover:text-primary" href="#">Discover</a>
                <a className="text-sm font-medium leading-normal hover:text-primary" href="#">Tours</a>
                <a className="text-sm font-medium leading-normal text-primary" href="#">About Us</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-0">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-center justify-center p-4 text-center"
          data-alt="The beautiful blue and white village of Sidi Bou Said in Tunisia, overlooking the Mediterranean Sea."
          style={{
            backgroundImage:
              `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmEJtBGucW-e9wVM6tu9xiQGYPzYW-RMENtTFt0XGkTsrhitxwaMmcf0qI0k4pSE_YZSErIZGc6Lw3YdjjqaLRlfqrOpaNElVGTnK2mwvnmitydoBubcPtufrE9fBrCfvS8tpl1S_Nd2Eb9gnnzPJCuDhPdKJ-osbqnjykaGNV6eLFYl3AJaEoTMUzc-uQkOdvT0GQxNb7oQb5crxTlbTcypXhlS2JQ5C8xwApX6SvVy7l_-7uocQ6qX4L4YCg5DOxu2q34xy9NIvB")`,
          }}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight @[480px]:text-6xl">Here to Help You Explore</h1>
            <h2 className="text-white/90 text-lg font-normal leading-normal @[480px]:text-xl max-w-2xl mx-auto">
              Your journey through Tunisia's rich history starts here. Find answers, meet our team, and get in touch.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Navigation Pills ---------- */
export function PillsNav() {
  return (
    <div className="flex gap-3 p-3 flex-wrap items-center justify-center bg-sand/50 dark:bg-background-dark rounded-full sticky top-24 z-40">
      <a className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-6 text-sm font-medium leading-normal transition-colors hover:bg-primary/90" href="#faq">FAQ</a>
      <a className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent text-text-light dark:text-text-dark px-6 text-sm font-medium leading-normal transition-colors hover:bg-sand dark:hover:bg-sand/20" href="#our-story">Our Story</a>
      <a className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent text-text-light dark:text-text-dark px-6 text-sm font-medium leading-normal transition-colors hover:bg-sand dark:hover:bg-sand/20" href="#contact-us">Contact Us</a>
    </div>
  );
}

/* ---------- Our Story ---------- */
export function NotreHistoire() {
  return (
    <section className="scroll-mt-32" id="our-story">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-sand dark:bg-sand/10 p-8 lg:p-12 rounded-xl">
        <div className="flex-1">
          <h2 className="text-3xl font-bold leading-tight tracking-tight mb-4 text-text-light dark:text-white">Our Story</h2>
          <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">Guide.ai was born from a shared passion for Tunisia's vibrant culture and deep history. We saw an opportunity to use technology not just to inform, but to create truly immersive experiences. Our mission is to connect travelers with the stories etched into the ancient stones, bustling medinas, and breathtaking landscapes of this incredible country. We believe that by leveraging AI and AR, we can make history accessible, interactive, and unforgettable for everyone.</p>
        </div>
        <div className="flex-shrink-0">
          <img alt="An ancient Roman mosaic in Tunisia" className="rounded-lg w-full lg:w-80 h-60 object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb1c6z4IRXbK-7zGGpUQkE__z9eMxLciiQkSR0sd1MvwrmGAi9uXLdj_-vv4Vs3VDHo4zENzj8rnKroDI4zbYgKYQnqQdXLl7CO236VUVNBqmH70pbs-_LJrzl1FuFW_-e6-B_kDr7hb6jCu09s8kEVWNRg4XKNstFRjKL0Ugz9ADGSFwODdeO53oJ_NzBu7pS-uQ7uB3o5jdqL5Ajut7ThGj2nwxLBhdofP8NOveOTjNEPm709pfKdaRjqN-7oxLkl-KdMPAGH3T8" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Team ---------- */
export function Equipe() {
  const membres = [
    {
      nom: "Dr. Amira Khelifi",
      role: "Founder & AI Specialist",
      bio: "Amira combines her passion for history with her expertise in AI to bring Tunisia's past to life.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQuDROO_LxsRlZrygfLhXavilTc0W4OFlVBQP_Bi7y1iPVveHdEoEGQIq1ZM93EtZl8h85S-eUqlMxz5ZO_oYtm1gNTN72rkOpQv1YLhcxtHufUuELRA_lAGCuyKwnD3BpLfR5PF5k6P9VzDK3_TQAKjf2AP3Mh-MFo8dUrqw2a62FE64wjW64abSY3q2puhOKY3yToKD0mD2S9AxM5r02_nnATqvommTGbpqX4YfOK57BYqLOT9Oy0zi7HiXzmJ1Utyg5yIYxAznH",
    },
    {
      nom: "Youssef Ben Ali",
      role: "Lead Developer",
      bio: "Youssef is the architect behind our seamless user experience and powerful AR features.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKe0vQKfLfBsPAJu3jv6D9UuoG3foyBVFAVxTh4qzXSb06XrBfpe_q81BKJxzf3qMWvuHDEKm_Vbm1PcDyHTacv2DVgSSz3G9FQCuptnKoQkjDx8yULgCziVeIMBlvAx8XZAAc51-sCZjrZPG-gsNcePyrKFn360CyLbSAHgQuuNDItY_eXLGkmmsUk2TEFjlHDW_IpJKqfXRLJdYv7vDcAItCPXU_E10yJiVURiI3XBbMb-OvMoBNpcjt12AAvO29FTGkh5s9kR54",
    },
    {
      nom: "Leila Bouazizi",
      role: "UX/UI Designer",
      bio: "Leila crafts the beautiful, intuitive interfaces that make exploring Tunisia a delight.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj3Mo3_avnIt1qFxEORyOEIRCRFoHjfmvRH5FGbiitm4SvmmjN47iapUp0wY-YZCuEG48k4dlaJ4M6DwFCIJ5MEieVoypFR61zsQRCs6vKdLkMOc8aeEjpAtCG3IHZEgT0G6DEunZNzDH4tyuv4zuCBtSk_9ko-RRO_dcG3TMSI8pjm7Oxfp6as5gx4GG9aMk-yWj_GE7nsSLPIBzwd_ojDrKsrLRHo3E4o5E32gOsL81PyeOwutwyxFSfyMsRz07tWIawRhqpqTBM",
    },
  ];

  return (
    <section className="scroll-mt-32" id="meet-the-team">
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-center mb-10">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {membres.map((m, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <img alt={`Photo de ${m.nom}`} className="size-24 rounded-full mb-4 object-cover" src={m.img} />
            <h3 className="font-bold text-lg text-text-light dark:text-white">{m.nom}</h3>
            <p className="text-sm text-primary font-medium mb-2">{m.role}</p>
            <p className="text-subtext-light dark:text-subtext-dark text-sm">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FAQSection() {
  const faqs = [
    {
      q: "How does the image recognition work?",
      a: "Our image recognition technology uses advanced AI algorithms to identify historical sites, landmarks, and artifacts from your photos. Simply upload a picture, and Guide.ai will provide you with detailed information, history, and stories related to the recognized item.",
    },
    {
      q: "Is the app free?",
      a: "Guide.ai offers a free version with access to many features. A premium subscription is available for unlimited access to all tours, exclusive content, and advanced AR features. We believe in making culture accessible to everyone!",
    },
    {
      q: "How do I use the AR feature?",
      a: "To use the Augmented Reality feature, simply find a supported location within the app. Point your device's camera at the landmark, and watch as historical reconstructions, animations, and informational overlays appear on your screen, bringing the site to life.",
    },
    {
      q: "What regions of Tunisia are covered?",
      a: "We are constantly expanding our coverage. Currently, we have detailed guides for major historical areas including Tunis, Carthage, Sidi Bou Said, El Djem, and more. Check the 'Discover' section in the app for a complete and up-to-date map of covered regions.",
    },
  ];

  return (
    <section className="scroll-mt-32" id="faq">
      <div className="flex flex-col p-4">
        <h2 className="text-3xl font-bold leading-tight tracking-tight px-4 pb-5 pt-5 text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          {faqs.map((f, i) => (
            <details key={i} className="flex flex-col border-b border-gray-200 dark:border-gray-700 py-2 group last:border-b-0">
              <summary className="flex cursor-pointer items-center justify-between gap-6 p-4">
                <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">{f.q}</p>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-relaxed px-4 pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact Form ---------- */
export function ContactForm() {
  return (
    <section className="scroll-mt-32" id="contact-us">
      <div className="bg-sand dark:bg-sand/10 rounded-xl p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight mb-2 text-text-light dark:text-white">Get in Touch</h2>
            <p className="text-subtext-light dark:text-subtext-dark mb-8">Have a question, feedback, or a partnership idea? We'd love to hear from you.</p>

            <div className="space-y-4">
              <a className="flex items-center gap-4 group" href="mailto:support@guide.ai">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded-full">mail</span>
                <span className="font-medium text-text-light dark:text-text-dark group-hover:text-primary transition-colors">support@guide.ai</span>
              </a>

              <a className="flex items-center gap-4 group" href="tel:+21600000000">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded-full">call</span>
                <span className="font-medium text-text-light dark:text-text-dark group-hover:text-primary transition-colors">+216 00 000 000</span>
              </a>

              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded-full">share</span>
                <div className="flex gap-4">
                  <a className="text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors" href="#">Facebook</a>
                  <a className="text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors" href="#">Instagram</a>
                  <a className="text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors" href="#">Twitter</a>
                </div>
              </div>

            </div>
          </div>

          <form className="flex flex-col gap-4">
            <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 transition" placeholder="Your Name" type="text" />
            <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 transition" placeholder="Your Email" type="email" />
            <textarea className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 transition" placeholder="Your Message" rows={5}></textarea>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" type="submit">
              <span className="truncate">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-800">
      <p className="text-sm text-subtext-light dark:text-subtext-dark">© 2024 Guide.ai. All rights reserved. Made with ❤️ in Tunisia.</p>
    </footer>
  );
}

/* ---------- Page container that assemble all components ---------- */
export default function CentreAide() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="layout-content-container flex flex-col max-w-[960px] w-full self-center px-4 lg:px-0">
          <div className="flex flex-col gap-10 lg:gap-16 py-10 lg:py-16">
            <Hero />
            <PillsNav />
            <NotreHistoire />
            <Equipe />
            <FAQSection />
            <ContactForm />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
