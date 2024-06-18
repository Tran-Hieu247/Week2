<template>
     <div class="container">
        <error-auth v-if="loginFalse" @login-again="loginAgain"></error-auth>
        <div class="login-card" v-if = "!loginFalse">
            <img src="../assets/ttlab-logo.png"/>
            <div class="title" >Đăng nhập</div>
            <form class="login-form" @submit.prevent="submit">
                <div class="form-group" >
                    <label>Email</label>
                    <input type="email"  v-model="email" name="email" placeholder="Nhập email">
                </div>
                <div class="form-group">
                    <label>Mật khẩu</label>
                    <div class="password">
                        <input type="password"  v-model="password" placeholder="••••••••••••••" >
                        <img class="customIcon" :src="changeIcon" @click="showHideIcon">
                    </div>
                </div>
                <div class="form-support">
                    <div>
                        <input type="checkbox" v-model="keepLogin">
                        Ghi nhớ Đăng nhập
                    </div>
                    <p>Quên mật khẩu?</p>
                </div>
                <button type="submit" >Đăng nhập</button>
            </form>
            <div class="signup">Bạn chưa có tài khoản? <a>Đăng ký</a></div>
        </div>
    </div>
</template>
<script>
import ErrorAuth from './ErrorAuth.vue'
export default {
  components: { ErrorAuth },
    data() {
        return {
            email: "",
            password: "",
            loginFalse: false
        }
    },
    methods:{
        loginAgain(){
            location.reload()
            
        },
        async submit() {
            
            console.log(this.email)
            console.log(this.password)
    
           try {
                const response = await fetch('http://localhost:3001/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                })

            if (response.ok) {
                this.$router.push('./products')
            } else {
                this.loginFalse = true
            }
        } catch (error) {
            console.error('Error during login:', error)
        }
    
    }
}
}
</script>

<style scoped>
.login-card{
    width: 500px;
    height: 500px;
    margin-top: 120px;
    gap: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-family: Public Sans;
}
.form-group.error input {
  border-color: red;
}
.title{
    width: 170px;
    height: 50px;
    font-family: Public Sans;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    text-align: left;
}

.form-group{
    width: 425px;
    height: 60px;
    gap: 0px;
    opacity: 0px;
    margin-top: 15px;
}
label{
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: .02em;
    text-align: left;
}

.form-group input{
    width: 425px;
    height: 32px;
    padding: 6px 12px;
    gap: 0px;
    border-radius: 6px;
    opacity: 0px;
    border: 1px solid #868FA029;
    outline: none;
}

.form-support{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
}
p, .signup a{
    color: #0f60ff;
    font-weight: 600;
}
button{
    margin-top: 20px;
    width: 425px;
    height: 48px;
    padding: 14px 32px;
    gap: 10px;
    border-radius: 6px;
    opacity: 0px;
    background: #0f60ff;
    color: #fff;
}

.signup{
    width: 426px;
    height: 20px;
    gap: 4px;
    opacity: 0px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
}

.error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
</style>