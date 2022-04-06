<script>
    import {BoxBufferGeometry, MeshStandardMaterial} from "three";
    import {Canvas, DirectionalLight, HemisphereLight, Mesh, OrbitControls, OrthographicCamera} from "threlte";
    import Circuit from "../components/Circuit.svelte";
    import {bottomSegment} from "../scripts/circuitLogic/DigitSegments.ts";
    import {circuitAsState} from "../scripts/circuitLogic/CircuitUtilities.ts";
    import DigitCircuit from "../scripts/circuitLogic/DigitCircuit.ts";

    let digit = new DigitCircuit();
    digit.updateInputsFromNumber(0);
    $: state = digit.topRight;

    setTimeout(() => {
        digit.updateInputsFromNumber(1);
        digit = digit;
    }, 1000);

    setTimeout(() => {
        digit.updateInputsFromNumber(2);
        digit = digit;
    }, 2000);

    setTimeout(() => {
        digit.updateInputsFromNumber(3);
        digit = digit;
    }, 3000);

    setTimeout(() => {
        digit.updateInputsFromNumber(4);
        digit = digit;
    }, 4000);

    setTimeout(() => {
        digit.updateInputsFromNumber(5);
        digit = digit;
    }, 5000);

    setTimeout(() => {
        digit.updateInputsFromNumber(6);
        digit = digit;
    }, 6000);

    setTimeout(() => {
        digit.updateInputsFromNumber(7);
        digit = digit;
    }, 7000);

    setTimeout(() => {
        digit.updateInputsFromNumber(8);
        digit = digit;
    }, 8000);

    setTimeout(() => {
        digit.updateInputsFromNumber(9);
        digit = digit;
    }, 9000);
</script>

<div class="fixed top-0 left-0 w-full h-full">
    <Canvas>
        <OrthographicCamera
                position={{ x: 0, y: 0, z: 500 }}
                near={1}
                far={1000}
                zoom={1}
                lookAt={{ x: 0, y: 0, z: 0 }}
        >
            <OrbitControls/>
        </OrthographicCamera>

        <DirectionalLight shadow color={'white'} position={{ x: -15, y: 45, z: 20 }}/>
        <HemisphereLight skyColor={'white'} groundColor={'#ac844c'} intensity={0.4}/>

        <Mesh
                castShadow
                geometry={new BoxBufferGeometry(50, 50, 50)}
                position={{ x: 25, y: 25, z: -25 }}
                material={new MeshStandardMaterial({ color: '#ff3e00' })}
        />

        <Circuit {state}/>
    </Canvas>
</div>