<template>
    <div class="header-bar">
        <div class="header-title">Danh sách sản phẩm</div>
        <div class="action">
            <img src="../../assets/Notification.png" >
            <img src="../../assets/Avatar.png" @click="goToLogin">
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goToLogin(){
            this.$router.push('./login')
        }
    }
}
</script>

<style scoped>
.header-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    width: Fill (1,126px)px;
    height: Fixed (62px)px;
    padding: 12px 0px 12px 0px;
    gap: 10px;
    border-radius: 6px 0px 0px 0px;
    opacity: 0px;

}
.header-title{
    font-family: Public Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 22px;
    text-align: left;

}

.action{
    display: flex;
    gap:24px
}
</style>