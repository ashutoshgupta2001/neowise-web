<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="inner-container">
        <a @click="navigateToAllTransaction()">View All Transactions</a>
      </div>
      <div class="inner-container">
        <a @click="getGtn()">Get Transaction By Id</a>
        <div class="gtn" v-if="isGtnVisible">
          <input v-model="trnID" type="text" placeholder="Enter Transaction ID">
          <button @click="navigateToTransaction()" type="submit">Search</button>
        </div>
      </div>
      <div class="inner-container">
        <a @click="createPayment()">Make a Transaction</a>

      </div>
      <div class="inner-container">
        <a @click="getCnacelTrn()">Cancel Transaction</a>
        <div class="gtn" v-if="isCanceltrn">
          <input v-model="trnID" type="text" placeholder="Enter Transaction ID">
          <button @click="cancelTransaction()" type="submit">Delete</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

const axios = require('axios')

export default {

  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      isGtnVisible: false,
      trnID: '',
      isCanceltrn: false,
      responseMessage: ''

    }
  },

  mounted() {
    console.log('DOM mounted');
  },



  methods: {
    navigateToAllTransaction() {
      this.$router.push('/all-transactions')
    },
    getGtn() {
      this.isGtnVisible = !this.isGtnVisible
    },
    navigateToTransaction() {
      if (this.trnID == '' || this.trnID == null) {
        return
      }
      this.$router.push(`/transaction/${this.trnID}`)

    },
    createPayment() {
      this.$router.push('/create-transaction')
    },

    getCnacelTrn() {
      this.isCanceltrn = !this.isCanceltrn
    },
    cancelTransaction() {
      if (this.trnID == '' || this.trnID == null) {
        return
      }
      this.deleteTransaction()
    },

    deleteTransaction() {
      axios.delete(`http://127.0.0.1:5000/api/transactions/${this.trnID}`).then(
        response => {
          console.log(response.data)
          this.responseMessage = response.data
          this.$toast.success(this.responseMessage.message, {
            position: 'top-right',
            timeout: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButton: true,
            hideProgressBar: false,
            closeButton: 'button',

          })}
          ).catch(err => {
            console.log("error", err.response.data.message)
            this.$toast.error(err.response.data.message, {

              position: 'top-right'
            })
          })

        },
  }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  /* height: 500px; */
  width: 60%;
  margin: 40px;
  padding: 20px;
  background-color: rgb(247, 245, 243);
  display: inline-block;
  justify-content: center;
  box-shadow: 10px 7px 5px rgb(193, 191, 191);
  border-radius: 10px;
}

.inner-container {
  background-color: blue;
  margin: 55px;
  padding: 20px;
  font-size: 26px;
  color: aliceblue;
}

h1 {
  margin: 60px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #f7fbf9;
}

input {
  margin: 10px;
  padding: 12px;
  border: 2px solid rgb(212, 102, 102);
  width: 90%;
  border-radius: 5px;

}

button {
  background: rgb(70, 177, 145);
  padding: 10px;
  width: 40%;
  border: 2px solid rgb(27, 143, 108);
  color: white;
  font-size: 20px;
}

@media (max-width:570px) {
  .container {
    width: 90%;
    margin: 10px;
    padding: 10px;
    background-color: rgb(247, 245, 243);
    display: inline-block;
    justify-content: center;
    box-shadow: 10px 7px 5px rgb(193, 191, 191);
    border-radius: 10px;
  }

  .inner-container {
    background-color: blue;
    margin: 30px;
    padding: 20px;

  }

  input {
    margin: 5px;
    padding: 10px;

  }

  button {
    padding: 10px;
    font-size: 15px;
  }

}
</style>
