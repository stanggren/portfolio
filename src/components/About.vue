<template>
  <section id="about-section">
    <div class="menu-container">
      <div class="about-text">
        <div>
          <router-link class="logo-container" v-bind:to="'/'">
            <h1 id="A">A</h1>
            <h1 id="slash">/</h1>
            <h1 id="S">S</h1>
          </router-link>
          <p class="header">I'm Andreas Stanggren -</p>
          <p
            class="sub-header"
          >A Gothenburg based web developer with main passion in design and neat user interfaces.</p>
        </div>
        <div class="link-container">
          <p class="menu-header">Projects</p>
          <ul style="padding-inline-start: 0px;" v-click-outside="hideProjectInfo">
            <li
              style="list-style:none;"
              v-bind:key="li.id"
              @click="showProjectInfo(li.id)"
              v-for="li in projectList"
            >
              <p class="title" :class="{ activeTitle : active_el == li.id }">{{li.title}}</p>
              <div style="display:flex; flex-direction:column;">
                <p class="project-info" :class="{ activeInfo : active_el == li.id }">{{li.text}}</p>
                <div
                  v-if="li.isRouter"
                  class="project-link"
                  :class="{ activeLink : active_el == li.id }"
                >
                  <router-link class="activeLinkText" v-bind:to="li.link">{{li.linkText}}</router-link>
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
            <p style="margin-bottom:8px;">HTML5</p>
            <p style="margin-bottom:8px;">CSS3</p>
            <p style="margin-bottom:8px;">C#</p>
            <p style="margin-bottom:8px;">ASP .NET</p>
            <p style="margin-bottom:8px;">REST</p>
            <p style="margin-bottom:8px;">GIT</p>
            <p>Agile workflow</p>
          </div>
        </div>
        <div class="link-container">
          <p class="menu-header">Contact</p>
          <div class="skills">
            <a style="margin-bottom:8px;" href="https://github.com/stanggren">GitHub</a>
            <a
              style="margin-bottom:8px;"
              href="https://www.linkedin.com/in/andreas-stanggren-6a27a8176/"
            >LinkedIn</a>
            <a style="margin-bottom:8px;cursor:pointer" @click="showModal = true">CV</a>
            <p>astanggren@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="svg-container">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 600 600"
          style="enable-background:new 0 0 600 600;"
          xml:space="preserve"
        >
          <path style="fill:none;stroke:none;stroke-miterlimit:10;" d="M5.5,624.5" />
          <g>
            <path class="path"
              style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
              d="M132.573,587.123
		c74.659-162.667,139.986-179.662,222.811-281.633S481.372,42.066,481.372,42.066"
            />
          </g>
          <path class="path leaf4-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M435.436,275.735
	c-11.103,12.398,2.77,40.463,27.391,61.042s59.797,3.085,59.797,3.085"
          />
          <path class="path leaf4-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M435.436,275.735
	c7.081-8.177,37.82-9.483,63.365,9.937c25.466,19.36,21.629,53.758,21.463,56.915"
          />
          <path class="path line4-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M405.144,230.775
	c17.28,50.611,30.46,44.499,30.46,44.499"
          />
          <path class="path leaf2-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M267.951,471.842
	c-12.335,11.174-1.461,40.531,20.881,63.564c22.342,23.033,59.15,9.3,59.15,9.3"
          />
          <path class="path leaf2-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M267.951,471.842
	c7.894-7.395,38.603-5.49,61.984,16.486c23.31,21.908,15.91,55.719,15.415,58.842"
          />
          <path class="path line2-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M242.509,423.97
	c11.912,52.137,25.657,47.43,25.657,47.43"
          />
          <path class="path leaf5-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M415.44,99.332
	c11.408-12.118-1.762-40.519-25.862-61.705s-59.702-4.573-59.702-4.573"
          />
          <path class="path leaf5-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M415.44,99.332
	c-7.282,7.998-38.045,8.538-63.098-11.512c-24.976-19.988-20.284-54.279-20.039-57.432"
          />
          <path class="path line5-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M444.604,145.032
	c-16.015-51.026-29.342-45.243-29.342-45.243"
          />
          <path class="path leaf3-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M300.39,293.887
	c12.902-10.514,3.578-40.399-17.529-64.568c-21.107-24.169-58.583-12.379-58.583-12.379"
          />
          <path class="path leaf3-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M300.39,293.887
	c-8.27,6.972-38.837,3.465-61.038-19.704c-22.133-23.097-12.975-56.474-12.318-59.567"
          />
          <path class="path line3-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M323.294,343.023
	c-9.17-52.688-23.142-48.707-23.142-48.707"
          />
          <path class="path leaf1-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M134.519,481.989
	c12.131-11.395,0.729-40.551-22.025-63.176s-59.309-8.23-59.309-8.23"
          />
          <path class="path leaf1-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M134.519,481.989
	c-7.759,7.536-38.497,6.186-62.272-15.364c-23.702-21.484-16.913-55.422-16.475-58.554"
          />
          <path class="path line1-delay"
            style="fill:none;stroke:#313335;stroke-width:8;stroke-miterlimit:10;"
            d="M160.822,529.393
	c-12.852-51.913-26.509-46.959-26.509-46.959"
          />
        </svg>
      </div>
    </div>
    <transition name="modalFade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>
    <transition name="modalFade" appear>
      <div class="modal" v-if="showModal">
        <div>
          <img src="../assets/ASCV.png" alt="Dashboard 1" />
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      projectList: [
        {
          id: "1",
          title: "Analyze Dashboard",
          text:
            "A dashboard displaying sales data. Built with Vue.JS and C# ASP.NET.",
          link: "/projects/analyzedashboard",
          linkText: "More info",
          isRouter: true
        },
        {
          id: "2",
          title: "Recipe search",
          text:
            "React application where the user can search recipes from an API.",
          link: "/projects/recipesearch",
          linkText: "More info",
          isRouter: true
        },
        {
          id: "3",
          title: "Weather forecast",
          text:
            "Weather forecast built with WPF and XAML. The user can choose between location and span of days.",
          link: "https://github.com/stanggren/WeatherForecast",
          linkText: "GitHub repo",
          isRouter: false
        },
        {
          id: "4",
          title: "Dice game",
          text: "Simple DOM game built with Javascript.",
          link: "https://github.com/stanggren/Dice-Game",
          linkText: "GitHub repo",
          isRouter: false
        }
      ],
      active_el: 0,
      showModal: false
    };
  },
  methods: {
    showProjectInfo: function(el) {
      if (this.active_el == el) {
        this.active_el = 0;
      } else {
        this.active_el = el;
      }
    },
    hideProjectInfo: function() {
      this.active_el = 0;
    }
  }
};
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
  height: 100vh;
}

.menu-container {
  width: 100%;
  max-width: 40em;
  max-height: 820px;
  height: 820px;
  display: flex;
  padding: 0px;
}

.about-text {
  position: relative;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 5px;
}

.logo-container {
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  font-family: ballinger-mono, sans-serif;
  color: rgb(248, 102, 56);
  width: fit-content;
  text-decoration: none;
  width: fit-content;

  background-image: linear-gradient(
    180deg,
    transparent 95%,
    rgb(248, 102, 56) 0
  );
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size 0.4s ease;
}

.logo-container:hover {
  background-size: 100% 100%;
}

#A,
#S {
  font-weight: 300;
}

#slash {
  font-weight: 500;
  font-size: 1.1em;
  margin-right: 2px;
  margin-left: 4px;
  margin-top: 4px;
}

.header-container {
  animation-iteration-count: 1;
  background-image: linear-gradient(180deg, transparent 10%, #3f4042 0);
  background-repeat: no-repeat;
  background-size: 100% 90%;
  animation: header-color-change 2s;
}

.header {
  font-weight: 500;
  font-size: 2.45em;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to right,
    rgb(248, 102, 56),
    rgb(248, 102, 56) 50%,
    transparent 50%
  );
  background-size: 200% 100%;
  background-position: 0%;
  animation: header-text-color-change 2s 4.5s, header-hide 0s 4.5s forwards;
  visibility: hidden;
}

@keyframes header-hide {
  to {
    visibility: visible;
  }
}

@keyframes header-text-color-change {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}

@keyframes header-color-change {
  0% {
    background-size: 0 90%;
  }
  100% {
    background-size: 100% 90%;
  }
}

.sub-header {
  font-weight: 500;
  font-size: 1.4em;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to right,
    #313335,
    #313335 50%,
    transparent 50%
  );
  background-size: 200% 100%;
  background-position: 0%;
  animation: header-text-color-change 1.5s 5.5s, header-hide 0s 5.5s forwards;
  visibility: hidden;

}

@media (max-width: 1400px) {
}

@media (max-width: 600px) {
  .header {
    font-size: 1.75em !important;
    letter-spacing: 0px;
  }

  .sub-header {
    font-weight: 500;
    font-size: 1.2em;
  }

  #about-section {
    height: 145vh !important;
    justify-content: flex-end;
  }

  .menu-container {
    height: 100%;
  }

  .about-text {
    padding-left: 20px;
    max-width: 330px;
  }
  .modal div img {
    height: 20em !important;
  }

  .aboutImage {
    padding-top: 40px;
  }

  .logo-container {
    margin-bottom: 5px !important;
  }

  #A {
    font-size: 1em;
  }

  #S {
    font-size: 1em;
  }

  #slash {
    font-weight: 500;
    font-size: 0.73em;
    margin-right: 2px;
    margin-left: 4px;
    margin-top: 2px;
  }
}

@media (max-width: 1024px) {
  .about-text {
    width: 500px;
  }
}

@media (max-width: 1271px) {
  .modal div img {
    height: 30em;
  }

  section {
    flex-direction: column-reverse;
    height: 135vh;
  }

  .aboutImage {
    padding-bottom: 40px;
    width: 300px !important;
  }

  .svg-container {
  width: 320px!important;
  height: 320px!important;
}
}

ul li {
  font-weight: 600;
  opacity: 0.9;
}

.menu-header {
  list-style: none;
  font-family: DejaVu;
  font-size: 0.6em;
  font-weight: 600;
  padding-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.project-info {
  font-family: "Nunito Sans", sans-serif;
  text-transform: initial;
  font-weight: 500;
  height: 100px;
  opacity: 0;
  height: 0;
  overflow: hidden;
}

.project-link {
  font-family: "Nunito Sans", sans-serif;
  text-transform: initial;
  font-weight: 500;
  height: 100px;
  opacity: 0;
  height: 0;
  overflow: hidden;
  text-decoration: none;
}

.activeInfo {
  opacity: 1 !important;
  height: auto;
  transform: translate(2%, 0);
  transition: transform 0.2s linear, opacity 0.4s linear;
}

.activeLink {
  opacity: 1;
  height: auto;
  margin-bottom: 15px;
  margin-top: 4px;
  transform: translate(2%, 0);
  transition: transform 0.4s linear, opacity 0.4s linear;
}

.activeLinkText {
  text-decoration: none;
  color: rgb(248, 102, 56);
  font-weight: 600;
  width: fit-content;
  background-image: linear-gradient(
    180deg,
    transparent 90%,
    rgb(248, 102, 56) 0
  );
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size 0.4s ease;
  font-family: DejaVu;
  text-transform: uppercase;
  font-size: 0.8em;
}

.activeLinkText:hover {
  background-size: 100% 100%;
  cursor: pointer;
}

.activeTitle {
  color: rgb(248, 102, 56);
  background-image: linear-gradient(
    180deg,
    transparent 90%,
    rgb(248, 102, 56) 0
  ) !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  transition: color 1s linear;
}

.title {
  margin-bottom: 8px;
  background-image: linear-gradient(180deg, transparent 90%, #5e6064 0);
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size 0.4s ease;
  width: fit-content;
}

.title:hover {
  cursor: pointer;
  background-size: 100% 100%;
}

.link-container {
  margin-top: 20px;
  padding-top: 20px;
  border-style: dashed;
  border-width: 1px 0px 0px 0px;
  font-family: DejaVu;
  text-transform: uppercase;
}

.skills {
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
  color: rgb(248, 102, 56);
  font-weight: 600;
  width: fit-content;
  background-image: linear-gradient(
    180deg,
    transparent 90%,
    rgb(248, 102, 56) 0
  );
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size 0.4s ease;
}

.skills a:hover {
  background-size: 100% 100%;
}

.content-container {
  /* width: 100%;
  max-width: 40em;
  padding: 0px; */
}

.aboutImage {
  width: 600px;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 98;
  opacity: 1;
  width: 100vw;
  height: 100vh;
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
  height: 40em;
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

.svg-container {
  width: 640px;
  height: 640px;
}


.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

.line1-delay {
  animation-delay: 0.6s;
}
.line2-delay {
  animation-delay: 1.1s;
}
.line3-delay {
  animation-delay: 1.6s;
}
.line4-delay {
  animation-delay: 2.3s;
}
.line5-delay {
  animation-delay: 2.7s;
}

.leaf1-delay {
  animation-delay: 0.9s;
}
.leaf2-delay {
  animation-delay: 1.4s;
}
.leaf3-delay {
  animation-delay: 1.9s;
}
.leaf4-delay {
  animation-delay: 2.6s;
}
.leaf5-delay {
  animation-delay: 3s;
}
</style>