function refresh(circuit): boolean {
    if (circuit.type === "INPUT")
        return circuit.fetch();

    const children = circuit.inputs.map(refresh);
    let out;

    switch (circuit.type) {
        case "AND":
            out = children.every(x => x);
            break;
        case "OR":
            out = children.some(x => x);
            break;
        case "NOT":
            out = !children[0];
            break;
        case "XOR":
            out = children.reduce((a, b) => a ^ b);
            break;
        case "NAND":
            out = !children.every(x => x);
            break;
        case "NOR":
            out = !children.some(x => x);
            break;
        case "XNOR":
            out = children.reduce((a, b) => !(a ^ b));
            break;
    }

    circuit.output = out;
    return circuit.output;
}

// called by calculatePositions
function calculateHeights(circuit) {
    let height;

    if (circuit.type === 'INPUT') {
        height = 0;
    } else {
        let highestChild = Math.max(...circuit.inputs.map(c => {
            calculateHeights(c);
            return c.y;
        }));

        height = highestChild + 1;
    }

    circuit.y = height;
    return circuit;
}

function calculatePositions(circuit) {
    calculateHeights(circuit);

    // this is used to keep track of the current y position
    // so that we can calculate the x positions
    let gatesByHeight = {};

    function recursivePosition(circuit) {
        let children = circuit.inputs.filter(c => c.type !== 'INPUT');
        let childrenCount = children.length;

        gatesByHeight[circuit.y] ??= 0;
        gatesByHeight[circuit.y]++;

        // if there are no children, we set the x position based on how
        // many other children there are in the same height
        if (childrenCount === 0) {
            circuit.x = gatesByHeight[circuit.y] - 1;
            return circuit;
        }

        // if there is only one child, we can just set the x
        // position to the child's x position
        if (childrenCount === 1) {
            circuit.x = recursivePosition(children[0]).x;
            return circuit;
        }

        // if there are multiple children, we need to calculate
        // the x position of the gate based on the children's
        // x positions
        let childrenX = children.map(c => recursivePosition(c).x);
        let childrenXMin = Math.min(...childrenX);
        let childrenXMax = Math.max(...childrenX);

        // the x position of the gate is the average of the
        // min and max x positions of the children
        circuit.x = (childrenXMin + childrenXMax) / 2;
        return circuit;
    }

    return recursivePosition(circuit);
}


/**
 * Converts the circuit into two arrays of gates and wires
 * which can be used to draw the circuit. The circuit
 * is refreshed before the arrays are generated.
 * @param circuit
 */
export function circuitAsState(circuit) {
    let gates: any = [];
    let wires: any = [];

    refresh(circuit);
    calculatePositions(circuit);

    function recursivelyAddToState(circuit) {
        // "INPUT" gates are not drawn, so we don't need to add them
        if (circuit.type === 'INPUT') return;

        gates.push({
            type: circuit.type,
            x: circuit.x,
            y: circuit.y,
            powered: circuit.output
        });

        circuit.inputs.forEach((c, i) => {
            let electrode;

            if (circuit.inputs.length === 1)
                electrode = 'center';
            else if (circuit.inputs.length === i)
                electrode = 'right';
            else if (i === 0)
                electrode = 'left';

            wires.push({
                powered: c.output,
                electrode,
                from: {
                    x: c.x,
                    y: c.y
                },
                to: {
                    x: circuit.x,
                    y: circuit.y,
                }
            });

            recursivelyAddToState(c);
        });
    }

    recursivelyAddToState(circuit);
    return {gates, wires};
}