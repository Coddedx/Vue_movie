<script setup lang="ts">
import { type Movie } from '~/types/types';

defineProps<({
    movie: Movie,
})>();

</script>

<template>
    <div class="movie">
                <div class="movie-img">
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
                <p class="review">{{ movie.vote_average }}</p> <!--movie divinin içinde çünkü overview ü absolute olarak imagenin üstünde göstermek istiyoruz -->
                <p class="overview">{{ movie.overview }}</p>
            </div>
            <div class="info">
                <p class="title">
                    {{ movie.title.slice(0, 25) }} 
                    <span v-if="movie.title.length > 25">...</span> <!-- direk p içerisine yazsaydı 25 karakterden az ise ... gözükmüş olcaktı o yüzden spna ile 25den fazlaysa gösteriyoruz-->
                </p>
                <p class="release">
                    Realesed:
                    {{ 
                        new Date(movie.release_date).toLocaleString('en-us', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        }) 
                    }}
                </p>
                <NuxtLink 
                    class="button button-light" 
                    :to="{name: 'movies-id', params: { id: movie.id}}"
                    >
                    Get More Info
                </NuxtLink>
            </div>
        </div>

</template>


<style lang="scss" scoped>

      .movie {
        position: relative;
        display: flex;
        flex-direction: column;

        .movie-img {
          position: relative;
          overflow: hidden;

          //aşağıda overview için düzenleme yapmıştık hover ile de üstüne geldiğinde translate y 0 ile goes back to original position 
          &:hover {
            .overview {
              transform: translateY(0);
            }
          }

          img {
            display: block;
            width: 100%;
            height: 100%;
          }

          //en soldaki puanlama için absolute yapıp 0,0 ile en sola alıyoruz
          .review {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #c92502;
            color: #fff;
            border-radius: 0 0 16px 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .overview {
            line-height: 1.5;
            position: absolute;
            bottom: 0;
            background-color: rgba(201, 38, 2, 0.9);
            padding: 12px;
            color: #fff;
            transform: translateY(100%); //translate Y 100 which will take this off by 100 percents meaning NOTHİNG WİLL BE SHOWİNG
            transition: 0.3s ease-in-out all; //3 mili seconds sonra ease in out all yukarı doğu çıkıyo!!!
          }
        }

        .info {
          margin-top: auto;
          .title {
            margin-top: 8px;
            color: #fff;
            font-size: 20px;
          }

          .release {
            margin-top: 8px;
            color: #c9c9c9;
          }

          .button {
            margin-top: 8px;
          }
        }
      }

</style>