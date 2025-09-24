import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import BubblyButton from "../components/BubblyButton";

// Initialize Plasmic loader with your public project
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "w7Dopxd8iwkbG5XmRp1Js4", // your Plasmic Project ID
      token: "gEeqKKSaB7kWguO1Kf0gbyjBpZsLMQN2MZz8b9Rjal5EZhAbHwB9exVxJgy25TNliYJwIecjvSSkK7crMJA" // public token
    }
  ],
  preview: true, // fetch latest unpublished changes
});

// Register your custom component for Plasmic
PLASMIC.registerComponent(BubblyButton, {
  name: "BubblyButton",
  props: {
    children: "slot",
    onClick: "event",
    style: "object"
  }
});
