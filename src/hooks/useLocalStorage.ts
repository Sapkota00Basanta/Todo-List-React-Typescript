// Import Third-Party Modules
import React, { useEffect, useState } from 'react';

/**
 * This custom react hook is used to store state data in local storage of browser
 * @param localStorageKey This is local storage key value for storing data
 * @param localStorageDataNewStateValue Initial state value for data if there is
 * none present by default.
 * @returns An array of current state and function to update the current state.
 */
export const useLocalStorage = <TState>(
  localStorageKey: string,
  localStorageDataNewStateValue: TState
) => {
  /**
   * Here, useState hook is used to store the data fetched from local Storage
   * in inmemory of current application. Using useState to avoid constant encoding and
   * decoding data while fetching and storing data in local storage. Callback function in
   * useState hook get's called to set the initial value of useState if doesn't exists already.
   */
  const [localStorageDataState, setLocalStorageDataState] = useState<TState>(
    () => {
      const localStorageDataInStringFormat =
        window.localStorage.getItem(localStorageKey);
      return localStorageDataInStringFormat
        ? (JSON.parse(localStorageDataInStringFormat) as TState)
        : localStorageDataNewStateValue;
    }
  );

  /**
   * Here, useEffect hooks get called everytime this customhook is called
   * and whenever there is change in localStorageDataState Value and localStorageKey Value
   */
  useEffect(() => {
    window.localStorage.setItem(
      localStorageKey,
      JSON.stringify(localStorageDataState)
    );
  }, [localStorageDataState, localStorageKey]);

  //   /**
  //    * This function udpates the current state value fetched from
  //    * local storage and also update it local storage of browser.
  //    * @param updatedLocalStorageDataStateValue
  //    */
  //   const updatelocalStorageDataState = (
  //     updatedLocalStorageDataStateValue: TState
  //   ) => {
  //     setLocalStorageDataState(updatedLocalStorageDataStateValue);
  //   };

  /**
   * Here by default typescript infers the type of array elements based on last element.
   * So, we need to guide typescript to get the type defined from array elements or
   * We can define the return type of this custom React Hook.
   */
  return [localStorageDataState, setLocalStorageDataState] as const;
};
