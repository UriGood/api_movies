<template>
  <div>
    <Header />
    Hola Usuario
    <p>{{apikey}}</p>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
const APIKEY = 'da82f7644c88cb29e9fe69069db75341';

export default {
  name: "DashboardView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      apikey: APIKEY,
    }

  }
}
</script>

<style lang="stylus">

</style>