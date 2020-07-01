<template>
    <section>
        <div style="display: flex; flex-direction: column;">
            <div>
                <h1>AS</h1>
                <p>A portfolio by Andreas Stanggren</p>
            </div>
            <span></span>
            <div class="svg_wrapper" id="enter">
                <router-link style="text-decoration:none; color: #5a5c61;" v-bind:to="'/about'">
                    <p>Click here to enter</p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    
  }
}

</script>

<style scoped>

* {
    margin-block-start: 0px;
    margin-block-end: 0px;
}
section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height:100vh;
}

h1 {
    font-size: 8em;
    letter-spacing: 2px;
    height: 158px;
}

p {
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: DejaVu;
}

span {
    border-style: solid;
    border-width: 1px;
    width: 6em;
    margin-top:1.6em;
    align-self:center;
}

#enter{
    justify-self:baseline;
    align-self: center;
    bottom: 2%;
    width: 175px;
    position: absolute;
}

.svg_wrapper p {
    text-decoration: none;
    font-size: 0.8em;
    
}

.svg_wrapper {
    width: 29px;
    height: 29px;
}

svg {
    width: 29px;
    height: 29px;

}
</style>