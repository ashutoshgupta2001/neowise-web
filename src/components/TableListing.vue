<template>
<HeaderPage/>   
<div class="all-transactions">
    <h2>All Transactions</h2>
          <table class="table table-bordered mt-4">
            <thead>
              <tr>
                <th scope="col">Transcation Id</th>
                <th scope="col">Amount</th>
                <th scope="col">Details</th>
                <th scope="col">Sender Id</th>
                <th scope="col">Receiver Id</th>
              </tr>
            </thead>
            <tbody>
              <tr :key = index v-for="(transaction, index) in transactions">
                <td>{{ transaction.transaction_id }}</td>
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.details }}</td>
                <td>{{ transaction.sender_id }}</td>
                <td>{{ transaction.receiver_id }}</td>
                <!-- <td>
                  <a v-if="isAll" href="#" class="edit ml-1" title=""><button @click="deleteTransaction(transaction.transaction_id)"
                      class="btn btn-danger btn-sm">Delete</button></a>


                </td> -->
              </tr>
            </tbody>
          </table>

</div>
<FooterPage />
</template>


<script>
import HeaderPage from './common/HeaderPage.vue';
import FooterPage from '../components/common/FooterPage.vue'
const axios = require('axios')
export default {
    components: {
      HeaderPage,  
      FooterPage

    },
    data() {
      return {
        transactions: {},
        // isAll : false
          };
    },
    methods: {
      async fetchData() {
      axios.get('http://127.0.0.1:5000/api/transactions/').then(
        response => {
          console.log(response.data)
        //   this.isAll = true
          this.transactions = response.data
        }
      )
    }, 
    async fetchTransaction() {
      axios.get(`http://127.0.0.1:5000/api/transactions/${this.$route?.params?.id}`).then(
        response => {
          console.log(response.data)
          this.transactions = response.data
        }
      )
    },
    },
    mounted() {
      if(this.$route?.params?.id){
        this.fetchTransaction()
        return

      }  
      this.fetchData();
    },
  };


</script>
<style>
h2 {
    margin-top: 10px;
}
table {
  margin: 20px;
  width: 100%;
  border-collapse: collapse;
}


th {
  background-color: #f2f2f2;
  border: 1px solid #dddddd;
  padding: 10px;
  text-align: left;
}


tr:nth-child(even) {
  background-color: #f9f9f9;
}

td {
  border: 1px solid #dddddd;
  padding: 10px;
}

tr:hover {
  background-color: #f2f2f2;
}</style>
