<template>
  <div>
    <Header />

    <div class="container">
      <h2 class="m-5">API Peliculas de estreno </h2>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 p-3" v-for="(movie, key) in movies" :key="key">
          <div class="movie">
            <img :src="movie.poster_path" alt="Imagen" class="img-fluid">
            <h5 class="mt-2"><strong>{{movie.title}}</strong></h5>
            <p>{{movie.release_date}}</p>
            <a :href="movie.url" class="btn btn-info">Ver más</a>
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
const BASEURL = 'https://api.themoviedb.org/3';
export default {
  name: "DashboardView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      apikey: APIKEY,
      movies: [],
      url_movie:"",

    }
  },
  methods: {
    getPopularMovies() {
      const URL = `${BASEURL}/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`
      fetch(URL)
        .then(response => response.json())
        .then(({ results }) => {
          this.movies = results.map(m=>{
            m.poster_path = `https://image.tmdb.org/t/p/w220_and_h330_face${m.poster_path}`,
            m.url = `#/movie/${m.id}`
            return m;
          })
          console.log(results);
        })

    }
  },
  mounted() {
    this.getPopularMovies();
  }
}

</script>

<style scoped>
  .movie{
    border: 1px solid gray;
    border-radius: 5px;
    padding: 15px;
    height: 510px;
    position: relative;
  }
  .btn{
    font-weight: 900;
  }
  .btn:hover{
    color: white;
  }

</style>