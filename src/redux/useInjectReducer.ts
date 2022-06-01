import React from 'react';
import { useStore } from 'react-redux';
import { Reducer } from 'redux';

const useInjectReducer = (key: string, reducer: Reducer<any, any>) => {
  const store = useStore();

  const isInjected = React.useRef(false);

  if (!isInjected.current) {
    (store as any).injectReducer(key, reducer);
    isInjected.current = true;
  }
};

export default useInjectReducer;
