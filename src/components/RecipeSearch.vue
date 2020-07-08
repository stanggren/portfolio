<template>
    <section id="about-section">
        <div class="menu-container">
            <div class="about-text">
                <div>
                    <p class="menu-header">Recipe search</p>
                    <p id="header">One of my first projects working with React.</p>
                    <p style="font-weight:500; margin-top:10px;">Mainly developed this project to learn the basics of the framework and creating a responsive design.</p>
                    <p style="font-weight:500; margin-top:10px;">Using an API from <a class="link" href="https://www.edamam.com/">Edamam</a> the user can search recipes and tick off ingredients from each recipe.</p>
                    <p style="font-weight:500; margin-top:10px;">Either visit the recipe search <a class="link" href="https://stanggren.github.io/recipe-api/">website</a> or check out the GitHub <a class="link" href="https://github.com/stanggren/recipe-api">repo</a>.</p>
                    <p @click="showModal = true" class="modal-click show-image link" id="show-image" >Show image</p>
                </div>
                <div class="link-container">
                    <p class="menu-header">Tools</p>
                    <ul class="tools">
                        <li style="margin-bottom:8px;">React.JS</li>
                        <li style="margin-bottom:8px;">HTML</li>
                        <li style="margin-bottom:8px;">CSS</li>
                    </ul>
                </div>
                <div class="return-container">
                    <router-link style="text-decoration:none; display:flex; flex-direction:row;" v-bind:to="'/about'">
                        <img class="return-img" src="../assets/return.png">
                        <p class="return-text link">return</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="content-container">
            <div><img rel="preload" src="../assets/recipesearch.png" alt="Dashboard 1"></div>
            <p @click="showModal = true" class="modal-click enlarge-image link" >Enlarge image</p>
        </div>
        <transition name="modalFade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="modalFade" appear>
            <div class="modal" v-if="showModal">
                <div><img src="../assets/recipesearch.png" alt="Dashboard 1"></div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
  name: 'RecipeSearch',
  data() {
      return{
          showModal: false
      }
  }
}
</script>

<style scoped>

* {
    margin-block-start: 0px;
    margin-block-end: 0px;
}
section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height:100vh;
}

.menu-container {
    width: 100%;
    max-width: 40em;
    max-height: 500px;
    height:500px;
    display: flex;
    padding: 0px;
}

.about-text {
    position: relative;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left:5px;
}

@media (max-width: 1400px){
    .about-text{
        padding-left: 60px;
    }
}

@media (max-width: 600px){
    .about-text{
        padding-left: 25px;
        max-width: 300px;
        width:300px;
    }
    section {
        justify-content: start;
        padding-top:20px;
        min-height: 110vh;
        height: 110vh;
    }

    .modal div img {
        height: 10em !important;
    }

    #header {
        font-size: 1.2em!important;
    }
}

@media (max-width: 1024px){
    .about-text{
        width: 500px;
    }
}

@media (max-width: 1271px){
    section {
        flex-direction:column;
    }
    .content-container{
        margin-bottom:0px !important;
    }
    .content-container div{
        display: none;
    }
    .enlarge-image{
        display: none;
    }

    .show-image{
        margin-top:20px;
        display: block !important;
        margin-left:0px !important;
    }

    .modal div img {
        height: 30em;
    }

}

#header {
    font-weight:500; 
    font-size: 1.5em;
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

.menu-header {
    list-style:none;
    font-family: DejaVu;
    font-size: 0.6em;
    font-weight: 600;    
    padding-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.project-info {
    font-family: 'Nunito Sans', sans-serif;
    text-transform: initial;
    font-weight:600;
    height: 100px;
    opacity:0;
    height:0;
    overflow:hidden;
}

.project-link {
    font-family: 'Nunito Sans', sans-serif;
    text-transform: initial;
    font-weight:600;
    height: 100px;
    opacity:0;
    height:0;
    overflow:hidden;
    text-decoration: none;
}

.activeInfo {
    opacity:1;
    height: auto;
    margin-top:8px;
    transform: translate(2%, 0);
    transition: transform 0.2s linear, opacity 0.4s linear;
}

.activeLink {
    color: rgb(248,102,56);
    font-weight: 600;
    opacity:1;
    height: auto;
    margin-bottom: 15px;
    margin-top:4px;
    transform: translate(2%, 0);
    transition: transform 0.4s linear, opacity 0.4s linear;
}

.activeTitle {
    font-weight: 600;
}

.link-container {
    margin-top:20px;
    padding-top:20px;
    border-style:dashed;
    border-width: 1px 0px 0px 0px;
    font-family: DejaVu;
    text-transform: uppercase;
}

.content-container {
    width: 100%;
    max-width: 40em;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    margin-bottom: 108px;    
}

.content-container img {
    object-fit: scale-down;
    height:20em;
}

ul {
    padding-left:0;
}

ul li {
    list-style: none;
    font-weight: 600;
    font-size: 0.9em;
    text-transform: initial;
    opacity: 0.9;
}


.show-image {
    display: none;
}

.modal-click {
    text-transform: uppercase;
    font-family: DejaVu;
    letter-spacing:1px;
    font-weight: 900;
    font-size: 0.8em;
    text-align:left;
    margin-left:4px;
    margin-left:32px;
}

.modal-overlay {
    position: absolute;
    top:0;
    left:0;
    right:0;
    z-index: 98;
    opacity: 1;    
    width:100vw;
    height:100vh;
    background-color: #aaaaa9;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;

}

.modal div img {
    height:40em;
}

.modalFade-enter-active,
.modalFade-leave-active {
    transition: opacity 0.3s;
}

.modalFade-enter,
.modalFade-leave-to {
    opacity: 0;
}

.modalSlide-enter-active,
.modalSlide-leave-active {
    transition: transform 0.2s;
}

.modalSlide-enter,
.modalSlide-leave-to {
    transform: translate(-50%) translateX(100vw);
}

.return-container{
    margin-top:40px;
    display:flex;
    flex-direction:column;
}

.return-img{
    opacity:0.4;
    width: 20px;
}

.return-text{
    margin-left:4px;
    margin-top:3px;
    text-transform: uppercase;
    font-family: DejaVu;
    letter-spacing:1px;
    font-weight: 900;
    font-size: 0.8em;
}

</style>