<template>
    <HeaderPage />
    <div class="container">
        <label for="">Amount : </label>
        <input name="" v-model="amount" type="Number" min="0" placeholder="Enter Amount">
        <label for="">Remark :</label>
        <input v-model="details" type="text" placeholder="Enter Reamark">
        <label for="">Sender Id : </label>
        <input v-model="senderId" type="text" placeholder="Enter Sender Id">
        <label for="">Receiver Id: </label>
        <input v-model="receiverId" type="text" name="" placeholder="Enter Reciver Id">
        <button @click="createPayment()">Make Payment</button>
    </div>

    <FooterPage />
</template>

<script>
const axios = require('axios')
import HeaderPage from './common/HeaderPage.vue'
import FooterPage from './common/FooterPage.vue'
export default {
    name: 'MakePayment',
    components: {
        HeaderPage,
        FooterPage

    },
    data() {
        return {
            amount: 0,
            details: '',
            senderId: '',
            receiverId: ''
        }
    },
    methods: {
        async createPayment() {
            console.log("........>>>>>HEloo00")
            let payload = {
                "amount": this.amount,
                "details": this.details,
                "senderId": this.senderId,
                "receiverId": this.receiverId
            }

            let url = 'http://127.0.0.1:5000/api/transactions/'
            axios.post(url, payload).then(
                response => {
                    console.log(response)
                    if (response.status == 200) {
                        console.log(response)
                        this.$router.push('/')

                        this.$toast.success(this.response.data.message, {
                            position: 'top-right',
                            timeout: 3000,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            draggablePercent: 0.6,
                            showCloseButton: true,
                            hideProgressBar: false,
                            closeButton: 'button',

                        })
                    }}
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

<style>
.container {
    /* height: 500px; */
    width: 50%;
    margin: 40px;
    padding: 20px;
    background-color: rgb(247, 245, 243);
    display: inline-block;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 7px 5px rgb(193, 191, 191);
    border-radius: 10px;
}

input {
    margin: 20px 30px 20px 30px;
    padding: 15px;
    border: 2px solid rgb(212, 102, 102);
    width: 90%;
    border-radius: 5px;
    box-shadow: 5px;

}

button {
    background: rgb(70, 177, 145);
    padding: 12px;
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
}
</style>