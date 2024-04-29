<template>
    <nav id="navbar">
      <div class="navbar-logo">
        <a class="navbar-brand" href="#">
          <img src="https://www.neowise.money/wp-content/uploads/2023/09/Neowise_Decentro.png" alt="Logo" width="100"
            height="60">
        </a>
      </div>
      <label class="logo">NEOWISE FUND TRANSFER</label>
  
    </nav>
</template>

<script>
export default{
    name: 'HeaderPage'
}
</script>

<style>
nav {
    position: sticky;
    top: 0px;
    background: rgb(159, 24, 118);
    height: 80px;
    width: 100%;
    overflow: hidden;
    align-items: center;
    display: flex;
  }
  
  label.logo {
    color: whitesmoke;
    font-size: 25px;
    line-height: 80px;
    padding: 0px 50px;
    font-weight: bold;
  }
  
  .navbar-brand {
    margin-right: auto;
    align-items: left;
  }
  
  .navbar-logo {
    margin-right: auto;
    /* Push the logo to the left */
    margin-left: 16px;
    /* Add some left margin for spacing */
  }
  @media (max-width:1024px) {
    label.logo {
      font-size: 22px;
      padding: 0px 30px;
    }
  }
  
  @media (max-width:570px){
      label.logo{
          font-size: 17px;
          padding: 0px 20px;
          }
  
  }
  </style>