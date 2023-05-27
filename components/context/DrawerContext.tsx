import React, {createContext, useEffect, useState} from 'react';

// @ts-ignore
export const DrawerContext = createContext();

function DrawerContextProvider(props: any) {
  const [color, setColor] = useState('white');
  const [show, setShow] = useState(true);

  // Global Drawer color handler
  async function changeColor(color: any) {
    await setColor(color);
  }
  // show Drawer or not
  async function showDrawer(change: boolean) {
    await setShow(change);
  }

  return (
    <DrawerContext.Provider value={{changeColor, showDrawer, color, show}}>
      {props.children}
    </DrawerContext.Provider>
  );
}

export {DrawerContextProvider};
