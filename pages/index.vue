<script setup lang="ts">
import { Loading } from "#components";
import MovieCard from "~/components/MovieCard.vue";
import { useNowMovies } from "~/composable/useNowMovies";
import { useSearchMovie } from "~/composable/useSearchMovie";
const { data,  error } = await useNowMovies(); // Şu an oynayan filmler pending,
const searchInput = ref(""); //kullanıcı arama metni
const { data: searchResults } = await useSearchMovie(searchInput); // Arama sonuçları , refresh
useHead({
      title: 'Movie App - Latest Streaming Movie Info',
      meta: [
       // hid: 'description',
       {hid: 'description' ,name: 'description', content: 'My amazing site.' }
      ]
});
// useSeoMeta({
//   title: "Movie App - Latest Streaming Movie Info",
// });
</script>


<template>
    <div class="home">
        <Navbar/>
        <!--<Hero/>  mt-[60px] -->

        <!-- Search -->
        <div class="container search ">
            <!-- v-model ->>> we wanna hook up a data value to this input to capture the user's search term  -->
            <!-- v-model.lazy->instead of updating on each keystroke its gonna update when te user enters and leaves the actual input itself-->
            <input
            @key.enter=""   
            v-model="searchInput" 
            type="text"
            placeholder="Search" /> 
            <button v-show="searchInput !== ''"  @click="searchInput = ''" class="button">Clear Search</button> <!-- v-show -> we wanna show this button if something was in the input -->
        </div>

        <Loading v-if="searchResults?.status === 'pending'"/>

        <!-- Movies -->
        <div v-else class="container movies">
              <!-- Search Movie -->
            <div v-if="searchInput !== ''" id="movie-grid" class="movies-grid">
                <MovieCard 
                  v-for="movie in searchResults?.results" 
                  :movie="movie"/>
            </div>
            <!-- Now Streaming -->
            <div v-else id="movie-grid" class="movies-grid">            
              <MovieCard 
                v-for="movie in data?.results" 
                :movie="movie"/>                
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.home {
  .loading {
    padding-top: 120px;
    align-items: flex-start;
  }
  .search {
    display: flex;
    padding: 32px 16px;

    input {
      max-width: 350px; 
      width: 100%; //max with 350px will take up 100% of the space if it is perhaps lower 
      padding: 12px 6px;
      font-size: 14px;
      border: none;

      //outline dan kurtulmak için 
      &:focus {
        outline: none;
      }
    }

    //input ile yan yana old ve bütün gözükmesini istediğimiz için default olarak butonda olan radious dan kurtuluyoruz
    .button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .movies {
    padding: 32px 16px; //around everything
    .movies-grid {
      display: grid;
      column-gap: 32px; //coulmn gap var 
      row-gap: 64px;
      grid-template-columns: 1fr; //default olarak mobile de one column var 
      //500 a çıktığında 2 column var
      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
      }

    }
  }
}
</style>