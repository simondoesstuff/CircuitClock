<script>
    import {BoxBufferGeometry, MeshStandardMaterial} from "three";
    import {Canvas, DirectionalLight, HemisphereLight, Mesh, OrbitControls, OrthographicCamera} from "threlte";
    import LogicGate from "$components/LogicGate.svelte";
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
                material={new MeshStandardMaterial({ color: '#ff3e00' })}
        />

        <LogicGate position={{y: 0}}/>
        <LogicGate position={{y: 50}} charge={0.5}/>
    </Canvas>
</div>