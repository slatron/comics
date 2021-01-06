import { useEffect } from 'react'

export const useEnterEffect = (name) => {
  useEffect(() => {
    const path = document.querySelector(`.${name}`);
    if (path) {
      const length = path.getTotalLength();
      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition = 'none';
      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
      path.style.strokeOpacity = 0.0;
      path.style.fillOpacity = 0.0;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3s ease-out, fill-opacity 3s ease-in';
      path.style.strokeDashoffset = '0';
      path.style.strokeOpacity = 1.0;
      path.style.fillOpacity = 1.0;
    }
  }, [name])
}
