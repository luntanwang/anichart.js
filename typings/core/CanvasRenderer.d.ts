import { Component } from "./component/Component";
import { Rect } from "./component/Rect";
import { Text } from "./component/Text";
import { Image } from "./component/Image";
import { Path } from "./component/Path";
import { Arc } from "./component/Arc";
import { Ani } from "./ani/Ani";
import { Stage } from "./Stage";
export declare class CanvasRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    stage: Stage;
    constructor(canvas?: HTMLCanvasElement);
    clean(): void;
    setCanvas(canvas: HTMLCanvasElement): void;
    render(child: Component | Ani | null, offset?: number): void;
    renderArc(arc: Arc): void;
    renderPath(line: Path): void;
    renderClipRect(component: Rect): void;
    renderImage(image: Image): void;
    renderRect(component: Rect): void;
    renderBase(component: Component): void;
    renderText(component: Text): void;
    prerenderText(component: Text): void;
    private fillRadiusRect;
    private strokeRadiusRect;
    private radiusArea;
}
export declare const canvasRenderer: CanvasRenderer;
