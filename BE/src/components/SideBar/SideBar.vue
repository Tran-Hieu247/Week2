<template>
    <div class="side-bar">
        <div class="logo">
            <img src="../../assets/ttlab-ngang.png">
            <img src="../../assets/indent-decrease.png">

        </div>
        <div class="product-manage">QUẢN LÝ SẢN PHẨM </div>
        <div class="title">
            <button class="title-list" @click="goToProduct">
                <img src="../../assets/box.svg"> 
                Sản phẩm 
            </button>
            
            <button class="title-list" @click="goToUsers">
                <img src="../../assets/users.png">
                Users
            </button>
            

        </div>
    </div>
</template>
<script>
export default {
    methods: {
    goToUsers() {
      this.$router.push('/users')
    },
    goToProduct(){
        this.$router.push('./products')
    }
  }
}
</script>

<style scoped>

.side-bar{
    box-shadow: 0 4px 16px #00000014;
    border-radius: 4px;
    width: 260px;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    border: 1px;
}

.logo{
    width: 260px;
    height: 68px;
    padding: 20px 14px 20px 18px;
    gap: 10px;
    display: flex;
    justify-content: space-between;
}

.product-manage{
    width: 260px;
    height: 44px;
    padding: 15px 30px;
    gap: 8px;
    border-radius: 6px;
    font-family: Public Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    color: #8b909a; 
    
}

.product-manage span{
    width: 108px;
    height: 14px;
    gap: 0px;
    opacity: 0px;

}

.title{
    width: 260px;
    padding: 0 14px;
}
.title-list{
    

    width: 232px;
    height: 40px;
    padding: 9px 16px;
    gap: 8px;
    border-radius: 6px;
    font-family: Public Sans;
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    text-align: left;
    color: #8b909a;
    display: flex;
    align-items: center;
}
.title-list img {
  max-width: 100%;
  height: auto;
}

.title-list span{
    width: 170px;
    height: 22px;
    gap: 0px;
    opacity: 0px;

}

button :hover{
    background: #8b909a;
}
</style>