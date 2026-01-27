import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fingerprint, Cpu } from "lucide-react";

import logo from "../../../assets/whatWeDo/logo.webp";
import services from "../../../data/services";

gsap.registerPlugin(ScrollTrigger);

export default function OurServices({ horizontalRef }) {
  const panelsRef = useRef([]);

  useLayoutEffect(() => {
    if (!horizontalRef.current) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      /* ===============================
         HORIZONTAL SCROLL (DESKTOP)
      =============================== */
      mm.add("(min-width: 1024px)", () => {
        gsap.to(panelsRef.current, {
          xPercent: -100 * (panelsRef.current.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panelsRef.current.length - 1),
            end: () => "+=" + horizontalRef.current.scrollWidth,
          },
        });
      });

      /* ===============================
         FLIP / FLAP LOGO ANIMATION
      =============================== */
      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray(
          horizontalRef.current.querySelectorAll(".logo-card")
        );

        cards.forEach((card) => {
          const mech = card.querySelector(".logo-mech");
          const orig = card.querySelector(".logo-orig");

          gsap.set(mech, { rotateY: 0 });
          gsap.set(orig, { rotateY: -180, opacity: 0 });

          const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 2,
          });

          tl.to(mech, {
            rotateY: 180,
            duration: 0.8,
            ease: "power2.inOut",
          })
            .to(
              orig,
              {
                rotateY: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.inOut",
              },
              "<"
            )
            .to({}, { duration: 2 })
            .to(orig, {
              rotateY: -180,
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
            })
            .to(
              mech,
              {
                rotateY: 0,
                duration: 0.8,
                ease: "power2.inOut",
              },
              "<"
            );
        });
      });
    }, horizontalRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={horizontalRef} className="bg-black">
      <div className="flex flex-col lg:flex-row lg:w-[300vw]">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (panelsRef.current[i] = el)}
            className="
              w-full lg:w-screen
              min-h-[40vh] md:min-h-screen
              flex flex-col lg:flex-row
              items-start lg:items-center
              justify-center lg:justify-between
              px-4 sm:px-8 md:px-16 lg:px-24
              py-16 lg:py-0
              relative border-b lg:border-b-0 lg:border-r border-white/5
            "
          >
            {/* BG NUMBER */}
            <div className="absolute -bottom-10 -right-10 text-[15rem] lg:text-[30rem] font-black text-mainColor/[0.05] italic">
              0{i + 1}
            </div>

            {/* CONTENT */}
            <div className="max-w-xl lg:max-w-3xl z-10">
              <div className="mb-6">{service.icon}</div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase italic mb-6">
                {service.title.split(" ")[0]} <br />
                <span className="text-mainColor">
                  {service.title.split(" ")[1]}
                </span>
              </h2>

              <p className="text-gray-400 mb-8 text-sm md:text-base">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs border border-mainColor/30 text-mainGold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* LOGO FLIP (DESKTOP ONLY) */}
            <div className="hidden lg:flex flex-col items-center justify-center w-1/3">
              <div
                className="logo-card relative w-40 h-40 xl:w-52 xl:h-52"
                style={{ perspective: 1000 }}
              >
                <img
                  src={service.mechImg}
                  className="logo-mech absolute w-full h-full object-contain backface-hidden"
                />
                <img
                  src={logo}
                  alt="Mosaic Engineering Logo"
                  className="logo-orig absolute w-full h-full object-contain backface-hidden"
                />
              </div>

              <div className="mt-6 text-[10px] text-mainGold tracking-[0.5em] uppercase animate-pulse">
                System Sync Active
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="absolute right-0 top-0 h-full w-16 hidden md:flex flex-col items-center justify-center gap-12">
              <Fingerprint size={18} className="text-mainGold opacity-50" />
              <div className="h-24 w-px bg-mainColor/30" />
              <div className="h-24 w-px bg-mainColor/30" />
              <Cpu size={18} className="text-mainGold opacity-50" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
