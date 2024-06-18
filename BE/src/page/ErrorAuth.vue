<template>
    <div>
        <div class="loggin-incorect">
        <h3> Sai tài khoản hoặc mật khẩu</h3>
            <button @click="goToLogin"> Đăng nhập </button>
            <button >Đăng kí</button>
      </div>
    </div>
</template>

<script>
export default {
    methods:{
        goToLogin(){
            this.$emit('login-again')
        }
    }
}
</script>

<style scoped>
.loggin-incorect{
    margin-left: 100px;
    margin-top: 300px;
    gap: 10px;
}
button {
    display: flex;
    justify-content: center;
    background-color: #94c2e6; 
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px; 
}
</style>