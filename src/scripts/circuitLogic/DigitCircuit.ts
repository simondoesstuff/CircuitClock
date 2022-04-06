import {
    bottomLeftSegment,
    bottomRightSegment,
    bottomSegment,
    centerSegment,
    topLeftSegment,
    topRightSegment,
    topSegment
} from "./DigitSegments";

import {circuitAsState} from "./CircuitUtilities";


export default class DigitCircuit {
    private inputs: boolean[] = [false, false, false, false];

    public fetchInputs(): boolean[] {
        // Return a copy of the inputs
        return this.inputs.slice();
    }

    private readonly topCircuit;
    private readonly topLeftCircuit;
    private readonly topRightCircuit;
    private readonly centerCircuit;
    private readonly bottomLeftCircuit;
    private readonly bottomRightCircuit;
    private readonly bottomCircuit;

    public top;
    public topLeft;
    public topRight;
    public center;
    public bottomLeft;
    public bottomRight;
    public bottom;

    constructor() {
        let top = topSegment();
        let topLeft = topLeftSegment();
        let topRight = topRightSegment();
        let center = centerSegment();
        let bottomLeft = bottomLeftSegment();
        let bottomRight = bottomRightSegment();
        let bottom = bottomSegment();

        let inputsFunc = () => this.fetchInputs();

        top.inputs = inputsFunc;
        topLeft.inputs = inputsFunc;
        topRight.inputs = inputsFunc;
        center.inputs = inputsFunc;
        bottomLeft.inputs = inputsFunc;
        bottomRight.inputs = inputsFunc;
        bottom.inputs = inputsFunc;

        this.topCircuit = top.circuit;
        this.topLeftCircuit = topLeft.circuit;
        this.topRightCircuit = topRight.circuit;
        this.centerCircuit = center.circuit;
        this.bottomLeftCircuit = bottomLeft.circuit;
        this.bottomRightCircuit = bottomRight.circuit;
        this.bottomCircuit = bottom.circuit;

        this.refresh();
    }

    private refresh() {
        this.top = circuitAsState(this.topCircuit);
        this.topLeft = circuitAsState(this.topLeftCircuit);
        this.topRight = circuitAsState(this.topRightCircuit);
        this.center = circuitAsState(this.centerCircuit);
        this.bottom = circuitAsState(this.bottomCircuit);
        this.bottomLeft = circuitAsState(this.bottomLeftCircuit);
        this.bottomRight = circuitAsState(this.bottomRightCircuit);
        this.bottom = circuitAsState(this.bottomCircuit);
    }

    public updateInputs(inputs: number[] | boolean[]) {
        this.inputs = inputs.map(i => !!i);
        this.refresh();
    }

    public updateInputsFromNumber(fromNumber: number) {
        // convert to binary
        const binary = fromNumber.toString(2).split('').map(Number).reverse();

        // fill with zeros
        while (binary.length < 4) {
            binary.push(0);
        }

        this.updateInputs(binary);
    }
}