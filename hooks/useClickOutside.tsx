import { RefObject, useEffect, useRef } from "react";

/**
 * useClickOutside Hook
 * @param callback Fonction à appeler lors d'un clic à l'extérieur
 * @returns Ref à ajouter au composant pour détecter les clics à l'extérieur
 */
export default function useClickOutside(
  containerRef: RefObject<HTMLDivElement>,
  callback: () => void
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (!rootElement) return;

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    rootElement.addEventListener("click", handleClick);

    return () => {
      rootElement.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
}
