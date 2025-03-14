"use client";

import { useEffect, useRef } from 'react';

const GlowCard = ({ children, identifier }) => {
  const initialized = useRef(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;
    
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);
    
    // Skip if elements aren't found
    if (!CONTAINER || !CARDS.length) return;
    
    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };
    
    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();
        
        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', 1);
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity);
        }
        
        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];
        
        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;
        
        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
        CARD.style.setProperty('--start', ANGLE + 90);
      }
    };
    
    // Only add event listeners if not already initialized
    if (!initialized.current) {
      document.body.addEventListener('pointermove', UPDATE);
      initialized.current = true;
    }
    
    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };
    
    RESTYLE();
    UPDATE({ x: 0, y: 0 }); // Provide default values
    
    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
      initialized.current = false;
    };
  }, [identifier]);
  
  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer transition-all duration-300 relative text-gray-200 rounded-lg hover:border-transparent w-full border`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;