import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

export function useScrollRange(startId: string, endId: string) {
  const { scrollY } = useScroll();
  const [inRange, setInRange] = useState(false);
  const [startTop, setStartTop] = useState(0);
  const [endTop, setEndTop] = useState(0);

  useEffect(() => {
    const startEl = document.getElementById(startId);
    const endEl = document.getElementById(endId);

    if (startEl) setStartTop(startEl.offsetTop);
    if (endEl) setEndTop(endEl.offsetTop);
  }, [startId, endId]);

  useEffect(() => {
    return scrollY.onChange((y) => {
      if (y >= startTop && y < endTop) {
        setInRange(true);
      } else {
        setInRange(false);
      }
    });
  }, [scrollY, startTop, endTop]);

  return inRange;
}
