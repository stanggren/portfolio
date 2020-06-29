<template>
    <section>
        <div style="display: flex; flex-direction: column;">
            <div>
                <h1>AS</h1>
                <p>A portfolio by Andreas Stanggren</p>
            </div>
            <span></span>
            <div class="svg_wrapper" id="arrow">
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
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

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

#arrow{
    justify-self:baseline;
    align-self: center;
    bottom: 2%;
    width: 100vw;
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

@keyframes arrowAnimation {
    /* 0% {bottom: 30px;}
    10% {bottom: 34px;}
    40% {bottom: 36px;}
    60% {bottom: 30px;}
    70% {bottom: 26px;}
    90% {bottom: 31px;}
    100% {bottom: 30px;} */


    /* 0% {bottom: 20px;}
    4% {bottom: 28px;}
    6% {bottom: 32px;}
    7% {bottom: 20px;}
    8% {bottom: 16px;}
    10% {bottom: 20px;}
    12% {bottom: 18px;}
    12.5% {bottom: 19.5px;}
    12.6% {bottom: 20px;} */


}

</style>