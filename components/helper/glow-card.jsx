"use client";

import { useEffect, useRef } from "react";
import React from "react";

const GlowCard = ({ children, identifier }) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timer = setTimeout(() => {
      const CONTAINER = document.querySelector(
        `.glow-container-${identifier}`
      );
      const CARDS = document.querySelectorAll(
        `.glow-card-${identifier}`
      );

      if (!CONTAINER || CARDS.length === 0) return;

      const CONFIG = {
        proximity: 40,
        spread: 80,
        blur: 12,
        gap: 32,
        vertical: false,
        opacity: 0,
      };

      const UPDATE = (event) => {
        const mouseX = event instanceof MouseEvent ? event.clientX : event.x;
        const mouseY = event instanceof MouseEvent ? event.clientY : event.y;

        CARDS.forEach((CARD) => {
          const CARD_BOUNDS = CARD.getBoundingClientRect();

          if (
            mouseX > CARD_BOUNDS.left - CONFIG.proximity &&
            mouseX < CARD_BOUNDS.right + CONFIG.proximity &&
            mouseY > CARD_BOUNDS.top - CONFIG.proximity &&
            mouseY < CARD_BOUNDS.bottom + CONFIG.proximity
          ) {
            CARD.style.setProperty("--active", "1");
          } else {
            CARD.style.setProperty("--active", CONFIG.opacity.toString());
          }

          const CARD_CENTER_X = CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5;
          const CARD_CENTER_Y = CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5;

          let ANGLE =
            (Math.atan2(mouseY - CARD_CENTER_Y, mouseX - CARD_CENTER_X) *
              180) /
            Math.PI;

          ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
          CARD.style.setProperty("--start", (ANGLE + 90).toString());
        });
      };

      if (!initialized.current) {
        document.body.addEventListener("pointermove", UPDATE);
        initialized.current = true;
      }

      const RESTYLE = () => {
        if (CONTAINER) {
          CONTAINER.style.setProperty("--gap", `${CONFIG.gap}px`);
          CONTAINER.style.setProperty("--blur", `${CONFIG.blur}px`);
          CONTAINER.style.setProperty("--spread", `${CONFIG.spread}px`);
          CONTAINER.style.setProperty(
            "--direction",
            CONFIG.vertical ? "column" : "row"
          );
        }
      };

      RESTYLE();
      UPDATE({ x: 0, y: 0 });
    }, 0);

    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined" && initialized.current) {
        document.body.removeEventListener("pointermove", UPDATE);
        initialized.current = false;
      }
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