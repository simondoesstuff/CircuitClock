export type GateType = "AND" | "OR" | "NOT" | "NAND" | "NOR" | "XOR" | "XNOR" | "INPUT";

export class LogicGate {
    public gateType: GateType;
    public position: { x: number, y: number };
    public output: boolean;
    public inputs: [LogicGate];

    public refresh() {
        this.output = this.formula(this.inputs.map(inputGate => {
            inputGate.refresh();
            return inputGate.output;
        }));
    }

    protected formula(inputs: boolean[]): boolean {
        // default logic gate lets no data flow through
        return false;
    }
}

export class InputGate extends LogicGate {
    value: boolean;

    constructor() {
        super();
        this.gateType = "INPUT";
    }

    formula = inputs => this.value;
}

export class AndGate extends LogicGate {
    constructor() {
        super();
        this.gateType = "AND";
    }

    formula = inputs => inputs.reduce((a, b) => a && b);
}