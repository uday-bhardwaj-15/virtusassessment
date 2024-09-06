// types/three.d.ts

declare module "three/examples/jsm/controls/OrbitControls" {
  import { EventDispatcher } from "three";
  import { Camera } from "three";
  import { DOMElement } from "react";

  export class OrbitControls extends EventDispatcher {
    constructor(camera: Camera, domElement: DOMElement);

    // Properties
    enableDamping: boolean;
    dampingFactor: number;
    screenSpacePanning: boolean;
    maxPolarAngle: number;
    minPolarAngle: number;
    maxAzimuthAngle: number;
    minAzimuthAngle: number;

    // Methods
    update(): void;
    dispose(): void;
    saveState(): void;
    reset(): void;
  }
}
