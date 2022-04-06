<script>
    import LogicGate from "./LogicGate.svelte";


    export let state;
    $: maxHeight = state.gates[0].y;
</script>

{#each state.gates as gate}
    <LogicGate
        charge={gate.powered}
        type={gate.type}
        position={{
            x: gate.x * 50,
            y: (gate.y - maxHeight) * 85
        }}/>
{/each}