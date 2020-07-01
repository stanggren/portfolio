<template>
    <section id="about-section">
        <div class="menu-container">
            <div class="about-text">
                <div>
                    <p class="menu-header">About</p>
                    <p style="font-weight:500;">I'm Andreas Stanggren. A Gothenburg based web developer with main passion in design and neat user interfaces.</p>
                </div>
                <div class="link-container">
                    <p class="menu-header">Projects</p>
                    <ul style="padding-inline-start: 0px;" v-click-outside="hideProjectInfo">
                        <li style="list-style:none;" v-bind:key="li.id" @click="showProjectInfo(li.id)"  v-for="li in projectList">
                            <p class="title" :class="{ activeTitle : active_el == li.id }">{{li.title}}</p>
                            <div style="display:flex; flex-direction:column;">
                                <p class="project-info" :class="{ activeInfo : active_el == li.id }">{{li.text}}</p>
                                    <router-link v-if="li.isRouter" class="project-link" :class="{ activeLink : active_el == li.id }" v-bind:to="li.link">{{li.linkText}}</router-link>
                                    <a v-else class="project-link" :class="{ activeLink : active_el == li.id }" :href="li.link">{{li.linkText}}</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="link-container">
                    <p class="menu-header">Skills</p>
                    <div class="skills">
                        <p>JavaScript</p>
                        <p>Vue.JS</p>
                        <p>React.JS</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>C#</p>
                        <p>ASP .NET</p>
                        <p>GIT</p>
                        <p>Agile workflow</p>
                    </div>
                </div>
                <div class="link-container">
                    <p class="menu-header">Contact</p>
                    <div class="skills">
                        <a href="https://github.com/stanggren">GitHub</a>
                        <a href="https://www.linkedin.com/in/andreas-stanggren-6a27a8176/">LinkedIn</a>
                        <a @click="showModal = true">CV</a>
                        <p>astanggren@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-container">
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

    .menu-container{
        max-height: 600px;
        height: 100%;
    }

    .about-text{
        padding-left: 20px;
        max-width: 300px;
        width:300px;
    }
    .modal div img {
        height: 20em !important;
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
    margin-top:8px;
    transform: translate(2%, 0);
    transition: transform 0.2s linear, opacity 0.4s linear;
}

.activeLink {
    color: #60a1ac;
    font-weight: 600;
    opacity:1;
    height: auto;
    margin-bottom: 15px;
    margin-top:4px;
    transform: translate(2%, 0);
    transition: transform 0.4s linear, opacity 0.4s linear;
}

.activeLink:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0s linear;

}

.activeTitle {
    font-weight: 600;
}

.title:hover{
    cursor: pointer;
    opacity: 0.6;
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
    font-weight: 600;
    font-size: 0.9em;
    text-transform: initial;
    cursor:pointer;
    text-decoration: none;
    color: #60a1ac;
}

.skills a:hover{
    opacity: 0.6;
    
}










.content-container {
    width: 100%;
    max-width: 40em;
    max-height: 500px;
    display: flex;
    padding: 0px;
}

.canvas-container {
    margin-top: -130px;
    animation-name: canvasAnim;

    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
}

.canvas-container h1{
    position: fixed;
    top: 53%;
    left: 71.5%;
    transform: translate(-50%, -50%);
    z-index: 97;
    font-size: 18em;
    color: #F4F3F2;
    
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