<template>
    <HeaderPage/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h3>
      <HelloWorld msg="Welcome to Neowise" />
    </h3>
    <FooterPage />
  </template>
  
  <script>
  import HeaderPage from './common/HeaderPage.vue';
  import HelloWorld from './HelloWorld.vue'
  import FooterPage from './common/FooterPage.vue'
  
  export default {
    name: 'HomePage',
    components: {
      HeaderPage,
      HelloWorld,
      FooterPage

    }
  }
  </script>
  
  <style>
  * {
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
  
  
  </style>
  