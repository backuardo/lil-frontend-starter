import { useEffect, useState } from 'react';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function setMousePositionFromEvent(event) {
      setMousePosition({ mouseXPosition: event.clientX, mouseYPosition: event.clientY });
    }

    window.addEventListener('mousemove', setMousePositionFromEvent);

    return function removeMouseMoveEventListener() {
      window.removeEventListener('mousemove', setMousePositionFromEvent);
    };
  }, []);

  return mousePosition;
}

export default useMousePosition;
