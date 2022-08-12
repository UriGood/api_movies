<template>
  <div>
    <Header />

    <div class="container" style="min-height: 80vh;">
      <h5 class="m-5 text-left"><a href="/dashboard">
          <b-icon icon="arrow-left-circle"></b-icon>
          Atras
        </a></h5>
      <div class="row mb-5">
        <div class="col-12 col-md-3 col-lg-4">
          <div class="image">
            <img :src="urlImage" alt="" class="img-fluid imagemovie">
          </div>
        </div>
        <div class="col-12 col-md-9 col-lg-7">
          <div class="movie">
            <h2>{{ movie.title }}</h2>
            <p>Generos: <strong v-for="(genere, key) in movie.genres" :key="key">{{ genere.name + ' | ' }}</strong></p>
            <p>{{ movie.overview }}</p>
          </div>
        </div>
      </div>
    </div>


    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'

const APIKEY = 'da82f7644c88cb29e9fe69069db75341';
const BASEURL = 'https://api.themoviedb.org/3/';
export default {
  name: "DashboardView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      movie: {},
      apiconfig: `?api_key=${APIKEY}&language=es-MX`,
      apiBaseUrl: BASEURL,
      urlImage: ''
    }
  },
  methods: {
    getMovie() {
      fetch(`${this.apiBaseUrl}movie/${this.$route.params.id}${this.apiconfig}`)
        .then(resp => resp.json())
        .then(data => {
          this.movie = data
          this.urlImage = `https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`
          console.log(this.movie);
        })
    }
  },
  mounted() {
    this.getMovie();
  }
}

</script>

<style scoped>
.image {
  border-radius: 5px;
  padding: 15px;
  position: relative;
}

.container {
  text-align: left;
}

.movie {
  border-radius: 5px;
  padding: 15px;
  text-align: left;
  position: relative;
}

button {
  color: white;
  border-radius: 5px;
  background-color: lightseagreen;
  border: 0px;
  padding: 10px 25px;
}

footer {

  height: 100px;
  bottom: 0;
  width: 100%;
  background-color: black;
  padding: 20px;
  color: white;

}

.imagemovie {
  width: 100%;
}

a {
  text-decoration: none;
  color: rgb(0, 170, 212);
}
</style>