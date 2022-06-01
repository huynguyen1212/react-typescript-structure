/** @format */

import { useEffect } from "react";
/**
 * useDetectClickOutSide : detect when user click outside component point
 * @param {*} handler Function hande run if click outside (ref, refParent)
 * @param {*} handlerParent Function hande run if click outside (ref, refParent)
 * @param {*} ref the ref of component, tag want set
 * @param {*} refParent the ref of component, tag is dependent of (ref)
 */
function useDetectClickOutSide(
  handler: Function,
  handlerParent: Function,
  ref: React.MutableRefObject<any>,
  refParent?: React.MutableRefObject<any>
) {
  useEffect(
    () => {
      const listener = (event: Event) => {
        // Do handlerParent if clicking ref's of Parent
        // console.log(event.target, refParent?.current);

        if (refParent?.current.contains(event.target)) {
          handlerParent();
          return;
        }
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) return;
        // run handler if click outside
        handler();
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        // console.log('un addEventListener');

        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, refParent, handler, handlerParent]
  );
}

export default useDetectClickOutSide;
