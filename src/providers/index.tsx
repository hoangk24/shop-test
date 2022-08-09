import React, { PropsWithChildren } from "react";
import StoreProvider from "./StoreProvider";

export default function AppProviders({ children }: PropsWithChildren) {
  const components = [StoreProvider];
  return (
    <>
      {components.reduceRight(
        (
          acc,
          Comp: React.JSXElementConstructor<React.PropsWithChildren<any>>
        ) => (
          <Comp>{acc}</Comp>
        ),
        children
      )}
    </>
  );
}
