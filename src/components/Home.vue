<template>
    <div>
        <Landing/>
        <About/>
    </div>
</template>

<script>
import Landing from './Landing.vue'
import About from './About.vue'


export default {
  name: 'Home',
  components: {
    Landing,
    About
  }
}

</script>

