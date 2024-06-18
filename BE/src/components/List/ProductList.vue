<template>
    <div class="product-list">
        <table>
            <thead class="table-header">
                <tr>
                    <th>TÊN SẢN PHẨM</th>
                    <th>GIÁ</th>
                    <th>SỐ LƯỢNG</th>
                    <th>MÔ TẢ</th>
                    <th>ẢNH </th>
                    <th>HÀNH ĐỘNG</th>
                </tr>
                

            </thead>
            <tbody>
                <tr v-for="item in paginatedData" :key="item.id">                    
                    <td class="name"><strong>{{ item.name }}</strong></td>
                    <td class="price">${{ item.price }}</td>
                    <td class="quantity">{{ item.quantity }}</td>
                    <td class="des">{{ item.description }}</td>
                    <td class="img"><img :src="item.image" class="img-element"></td>
                    <td class="action">
                        <button @click="updateProduct(item)">
                            <img src="../../assets/edit.png">
                        </button>
                        <button @click="deleteProduct(item)">
                            <img src="../../assets/trash.png">

                        </button>
                    </td>
                </tr>

            </tbody>
        </table>
        <page-pagination
            :total-items="data.length"
            @pageChange="onPageChange"
            @itemsPerPageChange="onItemsPerPageChange"
        />  
    </div>
</template>

<script>
import ProductAddForm from '../Form/ProductAddForm.vue'
import PagePagination from '../pagination/PagePagination.vue'
export default {
  components: { PagePagination, ProductAddForm },
    data(){
        return {
            currentPage: 1,
            itemsPerPage: 10
        }
    },
    computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.data.slice(startIndex, endIndex)
    }
    },
    methods: {
    onPageChange(page) {
      this.currentPage = page
    },
    onItemsPerPageChange(itemsPerPage) {
      this.itemsPerPage = itemsPerPage
      this.currentPage = 1
    },
    updateProduct(item){
        console.log(item)
        this.$emit('update-product', item)
        
        
    },
    deleteProduct(item){
        this.$emit('delete-product', item)
    }
    
    },
    props:{
        data: Object
    }

}
</script>

<style scoped>

.product-list .img-element{
    width: 50px;
    height: 50px;
    gap: 0px;
    border-radius: 2px 0px 0px 0px;
    opacity: 0px;

}
table{
    width: 100%;
    border-collapse: collapse;
}

.product-list{
    background: #fff;
    box-shadow: 0 4px 16px #00000014;
    padding: 8px 16px;
    gap: 4px;
    border-radius: 5px;
    padding-top: 15px;
    } 
tbody tr td ,
thead tr th{
  padding: 10px 20px 10px 20px ;
}
strong { 
  font-weight: bold;
}

.action button{
    width: 24px;
    height: 24px;
}

td.name,
td.price,
td.quantity,
td.des,
td.action , 
td.img,
.table-header{
  border-bottom: 1px solid #ddd;
  height: 100%;
}

.table-header tr th{
    gap: 4px;
    opacity: 0px;
    width: 99px;
    height: 15px;



}

.name{
    width: Fixed (200px)px;
    height: Hug (36px)px;
    padding: 7px 20px 7px 20px;
    gap: 10px;
    opacity: 0px;

}
.table-header{
    font-family: Public Sans;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.28px;
    text-align: left;
    color: #8b909a;
}


.table-header tr td{
    width: Fill (1,128px)px;
    height: Hug (58px)px;
    gap: 30px;
    border: 0px 0px 1px 0px;
    opacity: 0px;
    



}


</style>