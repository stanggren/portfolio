<template>
    <section id="about-section">
        <div class="menu-container">
            <div class="about-text">
                <div>
                    <p class="menu-header">Analyze Dashboard</p>
                    <p style="font-weight:500;">During my internship at <a style="text-decoration:none;color:#60a1ac;" href="https://www.visitgroup.com/">Visit Group</a> I got the opportunity to build a dashboard. I focused on developing the frontend which consumes data from a document database and displays it through charts and tables. Each chart and table is built as separate modules for the reason of reusing them as widgets on the Visit Group platform.</p>
                    <p style="font-weight:500; margin-top:10px;">The dashboard also includes a datepicker where the user can set a desired timespan for the data to be displayed in. Re-rendering the data after given timespan does not require a pageload due to the separation of logic. Instead data is fetched asynchronous and thus rendered individually for each module.</p>
                    <p style="font-weight:500; margin-top:10px;">The analyze dashboard went in to production in December 2019 and is being used both by employees and customers of Visit Group.</p>
                    <p style="font-weight:500; margin-top:10px;">My time at Visit Group and working on this project has given me good insight in customer based development within an agile workflow.</p>
                    <p style="font-weight:500; margin-top:10px; font-style:oblique;">Reference is available.</p>
                    <p @click="showModal = true" class="modal-click show-image" id="show-image" >Show image</p>
                </div>
                <div class="link-container">
                    <p class="menu-header">Tools</p>
                    <ul class="tools">
                        <li>C# (ASP.NET)</li>
                        <li>Vue.JS (Vuex)</li>
                        <li>GIT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Elasticsearch</li>
                        <li>Highcharts</li>
                    </ul>
                </div>
                <div class="return-container">
                    <router-link style="text-decoration:none; display:flex; flex-direction:row;" v-bind:to="'/about'">
                        <img class="return-img" src="../assets/return.png">
                        <p class="return-text">return</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="content-container">
            <div><img src="../assets/dashboard-1.jpg" alt="Dashboard 1"></div>
            <p @click="showModal = true" class="modal-click enlarge-image" >Enlarge image</p>
            <!-- <div id="bottom"><img src="../assets/dashboard-dp.jpg" alt="Dashboard datepicker"></div>
            <div id="top"><img src="../assets/dashboard-2.jpg" alt="Dashboard 2"></div> -->
        </div>
        <transition name="modalFade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="modalFade" appear>
            <div class="modal" v-if="showModal">
                <div><img src="../assets/dashboard-1.jpg" alt="Dashboard 1"></div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
  name: 'AnalyzeDashboard',
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
        padding-left: 20px;
        max-width: 300px;
        width:300px;
    }
    section {
        justify-content: start;
        padding-top:20px;
        min-height: 115vh;
        height: 115vh;
    }

    .modal div img {
        height: 10em !important;
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
    }

    .modal div img {
        height: 30em;
    }

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
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Nunito Sans', sans-serif;

    text-transform: initial;
    font-weight:500;
    height: 100px;
    opacity:0;
    height:0;
    overflow:hidden;
}

.project-link {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
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
    opacity:1;
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

.activeTitle {
    font-weight: 600;
}

.title:hover{
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.1s ease-in;
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
    opacity: 0.9;
    font-size: 0.9em;
    text-transform: initial;
}

.show-image {
    display: none;
}

.modal-click {
    color:#60a1ac;
    text-transform: uppercase;
    font-family: DejaVu;
    letter-spacing:1px;
    font-weight: 900;
    font-size: 0.6em;
    text-align:left;
    cursor:pointer;
    margin-left:4px;
}

.modal-click:hover {
    opacity: 0.6;
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
    color:#60a1ac;
    margin-left:4px;
    margin-top:3px;
    text-transform: uppercase;
    font-family: DejaVu;
    letter-spacing:1px;
    font-weight: 900;
    font-size: 0.8em;
}

a:hover {
    opacity: 0.6;
}

router-link:hover {
    opacity: 0.6;
}


</style>