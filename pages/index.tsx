import * as React from "react";
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../src/plasmic-init";

export default function Home() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <div style={{ padding: 40 }}>
        <h1>My Plasmic Sandbox</h1>
        <p>Below is my custom component:</p>
        <PlasmicComponent component="BubblyButton" />
      </div>
    </PlasmicRootProvider>
  );
}
