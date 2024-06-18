<template>
    <div class="add-form">
        <form action="" class="form" @submit.prevent="CreateForm">
            <div class="input-title"> 
                <p>
                    Chỉnh sửa sản phẩm
                </p> 
            </div>
            <div class="input">
                Tên sản phẩm *
                <input type="text"  placeholder="Nhâp tên sản phẩm" v-model="newProduct.name" @input="validateInputStr">
            </div>

            <div class="input">
                Giá *
                <input  placeholder="Nhập giá sản phẩm" v-model.number="newProduct.price" @input="validateInputNum">
            </div>
            <div class="input">
                Số lượng *
                <input  placeholder="Nhập số lượng sản phẩm" v-model.number="newProduct.quantity" @input="validateInputNum">
            </div>
            <div class="input">
                Mô tả *
                <input type="text"  placeholder="Nhập mô tả" id="descrip" v-model="newProduct.description" @input="validateInputStr">
            </div>
            <div class="input" id="product-img">
                Ảnh sản phẩm *
                <input type="text"  placeholder="Nhập link ảnh sản phẩm" v-model="newProduct.image" @input="validateInputLink">
            </div>
            <div class="submit">
                <button class="cancel" @click="cancelForm"> Hủy</button>
                <button class="create" type="submit" @click="updateForm"> Chỉnh sửa</button>


            </div>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newProduct: {
                name: '',
                price: 0,
                quantity: 0,
                description: '',
                image: ''
            }
        }
    },
    methods:{
        cancelForm(){
            this.$emit('cancel-form')
        },
        updateForm(){
            if(this.newProduct.name == ''){
                location.reload()
            }else{
                this.$emit('update-form', this.newProduct)
            }
            
        }
        ,
        validateInput() {
            if (isNaN(this.myValue)) {
                console.log('Giá trị nhập vào không phải số');
            } else {
        console.log('Giá trị nhập vào là số');
            }
        }
    }
}
</script>

<style scoped>
.form{
    width: 440px;
    height: 576px;
    top: 140px;
    left: 1732px;
    gap: 0px;
    border-radius: 12px;
    opacity: 0px;
    background: #F7F8FA;

}
#descrip{
    width: 400px;
    height: 128px;
    top: 28px;
    padding: 6px 12px 102px 12px;
    gap: 0px;
    border-radius: 6px;
    opacity: 0px;

}

#product-img{
    margin-top: 100px;
}
.input{
    font-family: Public Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: .02em;
    text-align: left;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 10px 10px 20px;
}
.input input{
    width: 400px;
    height: 32px;
    padding: 6px 12px;
    border-radius: 6px;
    background: #fff;
    border: 1px solid #868FA029;
    box-shadow: 0 1px 2px #0000000f;
    outline: none;
}

.input label{
    display: flex;
    font-weight: 500;
    color: #464f60;

}
.input-title{
    height: 54px;
    background: #FFFFFF;
    padding: 17px 20px;
    border-radius: 12px 12px 0 0;
    font-family: Public Sans;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.15px;
    text-align: left;
    color: #1a2240;

}
.submit{
    height: 54px;
    background: #FFFFFF;
    padding: 17px 20px;
    border-radius: 0px 0px 12px 12px;
    font-family: Public Sans;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.15px;
    text-align: left;
    color: #1a2240;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    gap: 10px;	
    margin-top: 15px; ;
    width: 440px;
    height: 64px;

}

.cancel{
    width: Fixed (70px)px;
    height: Hug (32px)px;
    padding: 6px 12px 6px 12px;
    gap: 8px;
    border-radius: 6px;
    opacity: 0px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: Public Sans;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.02em;
text-align: left;

}

.create{
    width: Fixed (70px)px;
    height: Hug (32px)px;
    padding: 6px 12px 6px 12px;
    gap: 8px;
    border-radius: 6px;
    opacity: 0px;
    background: #0F60FF;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-family: Public Sans;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.02em;
text-align: left;

}
</style>