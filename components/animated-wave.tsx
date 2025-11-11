'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function AnimatedWave() {
  const wave1Ref = useRef<SVGPathElement>(null);
  const wave2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const wave1 = wave1Ref.current;
    const wave2 = wave2Ref.current;

    if (!wave1 || !wave2) return;

    // Wave 1 path variations for smooth morphing
    const wave1Paths = [
      'M-286 597.5C-119.333 711.5 242.5 788 472.5 721C702.5 654 815.5 448 972.5 373C1129.5 298 1361.5 358 1500 421L1638 827L-286 800V597.5Z',
      'M-266 607.5C-99.333 721.5 262.5 798 492.5 731C722.5 664 835.5 458 992.5 383C1149.5 308 1381.5 368 1520 431L1658 837L-266 810V607.5Z',
      'M-306 587.5C-139.333 701.5 222.5 778 452.5 711C682.5 644 795.5 438 952.5 363C1109.5 288 1341.5 348 1480 411L1618 817L-306 790V587.5Z',
      'M-276 602.5C-109.333 716.5 252.5 793 482.5 726C712.5 659 825.5 453 982.5 378C1139.5 303 1371.5 363 1510 426L1648 832L-276 805V602.5Z',
    ];

    // Wave 2 path variations
    const wave2Paths = [
      'M-156 507C-12 590.333 211.5 660.5 415.5 628C619.5 595.5 771.5 423.5 956 373C1140.5 322.5 1360.5 397 1493 458.5L1493 800L-156 800L-156 507Z',
      'M-136 517C8 600.333 231.5 670.5 435.5 638C639.5 605.5 791.5 433.5 976 383C1160.5 332.5 1380.5 407 1513 468.5L1513 810L-136 810L-136 517Z',
      'M-176 497C-32 580.333 191.5 650.5 395.5 618C599.5 585.5 751.5 413.5 936 363C1120.5 312.5 1340.5 387 1473 448.5L1473 790L-176 790L-176 497Z',
      'M-146 512C-2 595.333 221.5 665.5 425.5 633C629.5 600.5 781.5 428.5 966 378C1150.5 327.5 1370.5 402 1503 463.5L1503 805L-146 805L-146 512Z',
    ];

    // Create infinite looping animation for wave 1
    const tl1 = gsap.timeline({ repeat: -1 });
    wave1Paths.forEach((path, index) => {
      tl1.to(wave1, {
        attr: { d: path },
        duration: 2,
        ease: 'sine.inOut'
      });
    });

    // Create infinite looping animation for wave 2 (slightly offset timing)
    const tl2 = gsap.timeline({ repeat: -1, delay: 0.5 });
    wave2Paths.forEach((path) => {
      tl2.to(wave2, {
        attr: { d: path },
        duration: 2.5,
        ease: 'sine.inOut'
      });
    });

    // Add subtle horizontal drift for continuous flow
    gsap.to(wave1, {
      x: 30,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to(wave2, {
      x: -25,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => {
      tl1.kill();
      tl2.kill();
      gsap.killTweensOf([wave1, wave2]);
    };
  }, []);

  return (
    <svg className="w-full h-full object-cover" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={wave1Ref}
        d="M-286 597.5C-119.333 711.5 242.5 788 472.5 721C702.5 654 815.5 448 972.5 373C1129.5 298 1361.5 358 1500 421L1638 827L-286 800V597.5Z"
        fill="url(#wave-gradient)"
        fillOpacity="0.1"
      />
      <path
        ref={wave2Ref}
        d="M-156 507C-12 590.333 211.5 660.5 415.5 628C619.5 595.5 771.5 423.5 956 373C1140.5 322.5 1360.5 397 1493 458.5L1493 800L-156 800L-156 507Z"
        fill="url(#wave-gradient-2)"
        fillOpacity="0.2"
      />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="wave-gradient" x1="676" x2="676" y1="298" y2="827">
          <stop stopColor="#0094FF"></stop>
          <stop offset="1" stopColor="#003E8F"></stop>
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="wave-gradient-2" x1="668.5" x2="668.5" y1="373" y2="800">
          <stop stopColor="#0094FF"></stop>
          <stop offset="1" stopColor="#003E8F"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

