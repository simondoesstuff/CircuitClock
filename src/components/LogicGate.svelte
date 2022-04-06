<script>
    import logicGateMesh from "$scripts/LogicGateMesh.ts";
    import {Object3DInstance} from "threlte";
    import {AndGate, NandGate, NotGate, OrGate, XorGate, NorGate, XnorGate} from "$svgs/LogicGateSvg.ts";


    export let charge = 1;
    export let type = "AND";
    export let position;

    $: object = (() => {switch (type) {
        case "AND": return logicGateMesh(AndGate, charge);
        case "NAND": return logicGateMesh(NandGate, charge);
        case "NOT": return logicGateMesh(NotGate, charge);
        case "OR": return logicGateMesh(OrGate, charge);
        case "XOR": return logicGateMesh(XorGate, charge);
        case "NOR": return logicGateMesh(NorGate, charge);
        case "XNOR": return logicGateMesh(XnorGate, charge);
    }})();
</script>

<Object3DInstance {object} {position}/>