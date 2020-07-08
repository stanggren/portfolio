<template>
    <section>
        <div style="display: flex; flex-direction: column;">
            <div>
                <div class="header-container">
                    <h1 id="A">A</h1>
                    <h1 id="slash">/</h1>
                    <h1 id="S">S</h1>
                </div>
                <p id="sub-header">A portfolio by Andreas Stanggren</p>
            </div>
            <span></span>
            <div class="svg_wrapper" id="enter">
                <router-link style="text-decoration:none; color: #5a5c61;" v-bind:to="'/about'">
                    <p id="click" class="hide-color link">Click here to enter</p>
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

.header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: -20px;
}

#A {
    animation: A-opacity 2s 3.8s,
               A-hide 0s 3.8s forwards;
    visibility: hidden;
}

@keyframes A-hide {
    to {visibility: visible;}
}

@keyframes A-opacity {
    from {opacity: 0;}
    to {opacity:1;}
}

#slash {
    font-size:5.8em;
    font-weight: 500;
    margin-top:32px;
    margin-right:4px;
    margin-left:16px;
    animation: slash-opacity 2s 3.9s,
               slash-hide 0s 3.9s forwards;
    visibility: hidden;
}

@keyframes slash-hide {
    to {visibility: visible;}
}

@keyframes slash-opacity {
    0% {opacity: 0;}
    100% {opacity:1;}
}

#S {
    animation: S-opacity 2s 4s,
               S-hide 0s 4s forwards;
    visibility: hidden;
}

@keyframes S-hide {
    to {visibility: visible;}
}

@keyframes S-opacity {
    0% {opacity: 0;}
    100% {opacity:1;}
}

h1 {
    font-size: 8em;
    height: 158px;
    font-family: ballinger-mono, sans-serif;
    font-weight: 400;
    font-style: normal;
}

p {
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-family: DejaVu;

    overflow: hidden; 
    white-space: nowrap; 
    margin: 0 auto;
}

#sub-header {
    border-right: .15em solid transparent;
    animation: 
    typing 3.6s steps(40, end),
    blink-caret-header .75s step-end 7.5;
}

#click {
    border-right: .15em solid rgb(248,102,56);
    animation: 
    typing 3.1s steps(40, end),
    blink-caret-click .75s step-end infinite,
    colorHide 0s 3.8s forwards;
    animation-delay: 5.5s;
    visibility: hidden;
}

#click:hover  {
    border-right: .15em solid #F4F3F2!important;
}

@keyframes colorHide {
    to { visibility: visible;}
}

@keyframes typing {
  from { width: 0 }
  to { width: 100%;}
}

@keyframes blink-caret-header {
  from, to { border-color: transparent }
  50% { border-color: rgb(248,102,56); }
}

@keyframes blink-caret-click {
  from, to { border-color: transparent }
  50% { border-color: rgb(248,102,56); }
}

span {
    border-style: solid;
    border-width: 1px;
    width: 170px;
    margin-top:1.6em;
    align-self:center;
    margin-right:2px;
    opacity: 1;
    animation: span-opacity 3s 4.5s,
               span-hide 0s 4.5s forwards;
    visibility: hidden;
}

@keyframes span-opacity {
    from {opacity: 0;}
    to {opacity: 1;}
}

@keyframes span-hide {
    to {visibility: visible;}
}

#enter{
    justify-self:baseline;
    align-self: center;
    bottom: 2%;
    width: fit-content;
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