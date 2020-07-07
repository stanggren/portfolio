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
                    <p class="link">Click here to enter</p>
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

.link {
    text-decoration: none;
    color: rgb(248,102,56);
    font-weight: 600;
    width: fit-content;
    background-image: linear-gradient(180deg, transparent 90%, rgb(248,102,56) 0);
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size .4s ease;
}

.link:hover {
    background-size: 100% 100%;
    cursor:pointer;
}
</style>