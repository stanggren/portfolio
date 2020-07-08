<template>
    <section id="about-section">
        <div class="menu-container">
            <div class="about-text">
                <div>
                    <div class="header-container">
                        <p class="header">I'm Andreas Stanggren - </p>
                    </div>
                    <p class="sub-header">A Gothenburg based web developer with main passion in design and neat user interfaces.</p>
                </div>
                <div class="link-container">
                    <p class="menu-header">Projects</p>
                    <ul style="padding-inline-start: 0px;" v-click-outside="hideProjectInfo">
                        <li style="list-style:none;" v-bind:key="li.id" @click="showProjectInfo(li.id)"  v-for="li in projectList">
                            <p class="title" :class="{ activeTitle : active_el == li.id }">{{li.title}}</p>
                            <div style="display:flex; flex-direction:column;">
                                <p class="project-info" :class="{ activeInfo : active_el == li.id }">{{li.text}}</p>
                                <div v-if="li.isRouter" class="project-link" :class="{ activeLink : active_el == li.id }">
                                    <router-link class="activeLinkText"  v-bind:to="li.link">{{li.linkText}}</router-link>
                                </div>
                                <div v-else class="project-link" :class="{ activeLink : active_el == li.id }">
                                    <a class="activeLinkText" :href="li.link">{{li.linkText}}</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="link-container" style="margin-top:12px!important;">
                    <p class="menu-header">Skills</p>
                    <div class="skills">
                        <p style="margin-bottom:8px;">JavaScript</p>
                        <p style="margin-bottom:8px;">Vue.JS</p>
                        <p style="margin-bottom:8px;">React.JS</p>
                        <p style="margin-bottom:8px;">HTML</p>
                        <p style="margin-bottom:8px;">CSS</p>
                        <p style="margin-bottom:8px;">C#</p>
                        <p style="margin-bottom:8px;">ASP .NET</p>
                        <p style="margin-bottom:8px;">GIT</p>
                        <p>Agile workflow</p>
                    </div>
                </div>
                <div class="link-container">
                    <p class="menu-header">Contact</p>
                    <div class="skills">
                        <a style="margin-bottom:8px;" href="https://github.com/stanggren">GitHub</a>
                        <a style="margin-bottom:8px;" href="https://www.linkedin.com/in/andreas-stanggren-6a27a8176/">LinkedIn</a>
                        <a style="margin-bottom:8px;" @click="showModal = true">CV</a>
                        <p>astanggren@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-container">
            <div ><img rel="preload" id="phoneImage" class="aboutImage" src="../assets/leaf2.png" alt="leaf"></div>
        </div>
        <transition name="modalFade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="modalFade" appear>
            <div class="modal" v-if="showModal">
                <div><img src="../assets/ASCV.png" alt="Dashboard 1"></div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
  name: 'About',
  data() {
      return {
          projectList:[
              {"id":"1", "title":"Analyze Dashboard", "text":"A dashboard displaying sales data. Built with Vue.JS and C# ASP.NET.", "link":"/projects/analyzedashboard", "linkText":"More info", "isRouter":true},
              {"id":"2", "title":"Recipe search", "text":"React application where the user can search recipes from an API.", "link":"/projects/recipesearch", "linkText": "More info", "isRouter":true},
              {"id":"3", "title":"Weather forecast", "text":"Weather forecast built with WPF and XAML. The user can choose between location and span of days.", "link":"https://github.com/stanggren/WeatherForecast", "linkText":"GitHub repo", "isRouter":false},
              {"id":"4", "title":"Dice game", "text":"Simple DOM game built with Javascript.", "link":"https://github.com/stanggren/Dice-Game", "linkText":"GitHub repo", "isRouter":false}],
          active_el:0,
          showModal: false
      }
  },
  methods: {
      showProjectInfo: function (el) {
          if(this.active_el == el){
              this.active_el = 0;
          } else {
              this.active_el = el
          }
      },
      hideProjectInfo: function () {
          this.active_el = 0;
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
    max-height: 700px;
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

.header-container {
    width: fit-content;
    padding: 5px 5px 5px 5px;
    letter-spacing: 1px;
    margin-bottom:10px;
    animation-iteration-count: 1;
    background-image: linear-gradient(180deg, transparent 10%, #3f4042 0);
    background-repeat: no-repeat;
    background-size: 100% 90%;
    animation: header-color-change 2s;
}

.header {
    font-weight:500; 
    font-size:2.45em;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
    to right,
    rgb(248,102,56),
    rgb(248,102,56) 50%,
    transparent 50%);
	background-size: 200% 100%;
    background-position: 0%;
    animation: header-text-color-change 2s;
}

@keyframes header-text-color-change {
    0% {background-position: 100%}
    100% {background-position: 0%}
}

@keyframes header-color-change {
  0% {background-size: 0 90%;}
  100% {background-size: 100% 90%;}
}

.sub-header{
    font-weight:500; 
    font-size:1.4em;
}

@media (max-width: 1400px){

}

@media (max-width: 600px){

    .header {
        font-size: 1.75em!important;
        letter-spacing: 0px;
    }

    .sub-header {
    font-weight:500; 
    font-size:1.2em;
    }

    #about-section {
        height:148vh!important;
        justify-content:flex-end;
    }

    .menu-container{
        height: 100%;
    }

    .about-text{
        padding-left: 20px;
        max-width: 330px;
    }
    .modal div img {
        height: 20em !important;
    }

    .aboutImage {
        padding-top:40px;
    }

}

@media (max-width: 1024px){
    .about-text{
        width: 500px;
    }
}

@media (max-width: 1271px){
        .modal div img {
        height: 30em;
    }

    section {
        flex-direction: column-reverse;
        height:130.5vh;
    }

    .aboutImage {
       padding-bottom: 40px;
        width: 300px!important;
    }
}

ul li {
    font-weight: 600;
    opacity: 0.9;
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
    font-weight:500;
    height: 100px;
    opacity:0;
    height:0;
    overflow:hidden;
}

.project-link {
    font-family: 'Nunito Sans', sans-serif;
    text-transform: initial;
    font-weight:500;
    height: 100px;
    opacity:0;
    height:0;
    overflow:hidden;
    text-decoration: none;
}

.activeInfo {
    opacity:1 !important;
    height: auto;
    transform: translate(2%, 0);
    transition: transform 0.2s linear, opacity 0.4s linear;
}



.activeLink {
    opacity:1;
    height: auto;
    margin-bottom: 15px;
    margin-top:4px;
    transform: translate(2%, 0);
    transition: transform 0.4s linear, opacity 0.4s linear;
}

.activeLinkText {
    text-decoration: none;
    color: rgb(248,102,56);
    font-weight: 600;
    width: fit-content;
    background-image: linear-gradient(180deg, transparent 90%, rgb(248,102,56) 0);
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size .4s ease;
    font-family: DejaVu;
    text-transform: uppercase;
    font-size: 0.8em;
}

.activeLinkText:hover {
    background-size: 100% 100%;
    cursor: pointer;
}

.activeTitle {
    color: rgb(248,102,56);
    background-image: linear-gradient(180deg, transparent 90%, rgb(248,102,56) 0)!important;
    background-repeat: no-repeat!important;
    background-size: 100% 100%!important;
    transition: color 1s linear;
}

.title {
    margin-bottom: 8px;
    background-image: linear-gradient(180deg, transparent 90%, #5e6064 0);
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size .4s ease;
    width: fit-content;
}

.title:hover{
    cursor: pointer;
    background-size: 100% 100%;
}

.link-container {
    margin-top:20px;
    padding-top:20px;
    border-style:dashed;
    border-width: 1px 0px 0px 0px;
    font-family: DejaVu;
    text-transform: uppercase;
}

.skills{
    display: flex;
    flex-direction: column;
}

.skills p {
    font-weight: 600;
    font-size: 0.9em;
    text-transform: initial;
    opacity: 0.9;
}

.skills a {
    text-decoration: none;
    font-size: 0.9em;
    text-transform: initial;
    color: rgb(248,102,56);
    font-weight: 600;
    width: fit-content;
    background-image: linear-gradient(180deg, transparent 90%, rgb(248,102,56) 0);
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size .4s ease;
}

.skills a:hover{
    background-size: 100% 100%;
    
}










.content-container {
    width: 100%;
    max-width: 40em;
    padding: 0px;
}

.aboutImage {
    width: 600px;
}









.modal-overlay{
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

</style>