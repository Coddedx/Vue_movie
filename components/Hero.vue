<script setup lang="ts">
    import { useAuthStore } from '~/store/auth'
    const authStore = useAuthStore();


</script>


<template>
    <!--<div v-if="authStore.token === null">    </div>-->
    <!-- <NuxtLink to="/user/login">Giriş Yap</NuxtLink> |
    <NuxtLink to="/user/register">Kayıt Ol</NuxtLink> | -->

    <div class="hero">
        <img src="../assets/imgs/movieHero.jpg" alt=""/>
        <div class="text-container">
            <div class="text">
                <span class="mini-heading">Now Streaming</span>
                <h1><span>Now</span> Streaming</h1>
                <a href="#movie-grid" class="button">View Movies</a> <!--when we click on this its gonna takes us to that id that correlates to #movie-grid-->
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .hero {
    height: 400px;
    position: relative;
    @media (min-width: 750px) {
        height: 500px;
    }

    //we are doing a background and we can make this without any additional html by using after and then having content: ''; and setting to an empty string 
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text-container {
        z-index: 99;
        position: absolute;
        top: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .text {
        padding: 0 16px;
        width: 100%;
        max-width: 1400px; //same width our container (default.scss .container/max-height)
        margin: 0 auto;
        }

        .mini-heading {
        font-weight: 600;
        font-size: 18px;
        text-transform: uppercase;
        color: #c92502;
        margin-bottom: 8px;
        @media (min-width: 750px) {
            font-size: 22px;
        }
        }

        h1 {
        color: #fff;
        font-size: 64px;
        font-weight: 200;
        margin-bottom: 8px;

        @media (min-width: 750px) {
            font-size: 84px;
        }

        span {
            font-weight: 500;
        }
        }

        .button {
        font-size: 20px;
        align-self: flex-start;
        }
    }
    }
</style>