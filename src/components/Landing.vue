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
      <div class="enter_wrapper" id="enter">
        <router-link style="text-decoration:none;color: #5a5c61;" v-bind:to="'/about'">
          <p id="click" class="hide-color link">Enter here</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style lang="scss" scoped>
$colors: (
  bg: #f4f3f2,
  link: rgb(248, 102, 56)
);

@function color($color-name) {
  @return map-get($colors, $color-name);
}

@function borderRight($color) {
  @return 0.15em solid $color;
}

@mixin opacityKeyFrames {
  @keyframes anim-hide {
    to {
      visibility: visible;
    }
  }

  @keyframes anim-opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

@mixin textKeyFrames {
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: color(link);
    }
  }
}

* {
  margin-block-start: 0px;
  margin-block-end: 0px;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

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
}

.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: -20px;

  h1 {
    font-size: 8em;
    height: 158px;
    font-family: ballinger-mono, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  #A {
    animation: anim-opacity 2s 3.8s, anim-hide 0s 3.8s forwards;
    visibility: hidden;
  }

  #slash {
    font-size: 5.8em;
    font-weight: 500;
    margin-top: 32px;
    margin-right: 4px;
    margin-left: 16px;
    animation: anim-opacity 2s 3.9s, anim-hide 0s 3.9s forwards;
    visibility: hidden;
  }

  #S {
    animation: anim-opacity 2s 4s, anim-hide 0s 4s forwards;
    visibility: hidden;
  }

  @include opacityKeyFrames;
}

#sub-header {
  border-right: 0.15em solid transparent;
  animation: typing 3.6s steps(40, end), blink-caret 0.75s step-end 7.5;
}

@include textKeyFrames;

span {
  border-style: solid;
  border-width: 1px;
  width: 170px;
  margin-top: 1.6em;
  align-self: center;
  margin-right: 2px;
  opacity: 1;
  animation: anim-opacity 3s 4.5s, anim-hide 0s 4.5s forwards;
  visibility: hidden;

  @include opacityKeyFrames;
}

.enter_wrapper {
  width: 29px;
  height: 29px;
  justify-self: baseline;
  align-self: center;
  bottom: 2%;
  width: fit-content;
  position: absolute;

  p {
    text-decoration: none;
    font-size: 0.8em;
  }

  .link {
    text-decoration: none;
    color: color(link);
    font-weight: 600;
    width: fit-content;
    background-image: linear-gradient(180deg, transparent 90%, color(link) 0);
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size 0.4s ease;
    &:hover {
      background-size: 100% 100%;
      cursor: pointer;
    }
  }

  #click {
    border-right: borderRight(color(link));
    animation: typing 1.2s steps(13, end), blink-caret 0.75s step-end infinite,
      colorHide 0s 3.8s forwards;
    animation-delay: 5.5s;
    visibility: hidden;
    &:hover {
      border-right: borderRight(color(bg)) !important;
    }
  }

  @keyframes colorHide {
    to {
      visibility: visible;
    }
  }
  @include textKeyFrames;
}
</style>