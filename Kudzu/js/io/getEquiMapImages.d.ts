import type { CanvasTypes } from "../html/canvas";
import type { InterpolationType } from "./InterpolationType";
import type { progressCallback } from "./progressCallback";
export declare function getEquiMapCanvases(path: string, interpolation: InterpolationType, maxWidth: number, onProgress?: progressCallback): Promise<CanvasTypes[]>;
export declare function getEquiMapImageBitmaps(path: string, interpolation: InterpolationType, maxWidth: number, onProgress?: progressCallback): Promise<ImageBitmap[]>;
export declare const getEquipMaps: typeof getEquiMapImageBitmaps | typeof getEquiMapCanvases;
