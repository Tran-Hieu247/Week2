<template>
<div class="product">
    <side-bar></side-bar>
    <div v-if="showTitleLogin" class="not-logged-in">
        <h3> Bạn chưa đăng nhập</h3>
        <button @click="goToLogin"> Về trang đăng nhập </button>
      </div>
    <div class="product-main" v-if="isLogin">
        <div class="product-item">
            <header-bar></header-bar>
            <search-bar 
              @show-form-create="showFormCreate"
              @search-input-changed="searchInput"
            ></search-bar>
            <product-list :data="filteredData"
              @delete-product="deleteProduct"
              @update-product="updateProduct"
            ></product-list>
        </div>
        <product-add-form class="overlay"
            
            v-if="showForm"
            @cancel-form="cancelFormAction"
            @create-form="addNewProduct"
        > 
        </product-add-form>
        <product-update-form class="overlay"
            
            v-if="showUpdateForm"
            @cancel-form="cancelFormAction"
            @update-form="updateFormAction"

        > 
        </product-update-form>

    </div>

</div>
    
</template>
<script>
import HeaderBar from '../components/SideBar/HeaderBar.vue'
import SideBar from '../components/SideBar/SideBar.vue'
import SearchBar from '../components/SideBar/SearchBar.vue'
import ProductList from '../components/List/ProductList.vue'
import ProductAddForm from '../components/Form/ProductAddForm.vue'
export default {
  components:{
    SideBar,
    HeaderBar,
    SearchBar,
    ProductList,
    ProductAddForm
  },
  data() {
    return {
      showForm: false,
      cancelForm: false,
      data: [],
      filteredData: [], // Initialize filtered data with all products
      showUpdateForm: false,
      itemSelect:{},
      indexes : 0,
      showTitleLogin: false,
      isLogin: false,
      inCorectPassword:false

    }   
  },
  mounted(){
    this.fetchDataProduct(),
    this.fetchData()
    
  },
  methods:{

    // async fetchData(){
    //   try {
    //     const response = await fetch('http://localhost:3001/api/user',{
    //       headers:{'Content-Type': 'application/json'},
    //       credentials: 'include'
    //     });
    //     const data = await response.json();
        
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // },
     async fetchData() {
    try {
      const response = await fetch('http://localhost:3001/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json(); 
        console.log(data);
        this.showTitleLogin = false; // Ẩn thông báo "Chưa đăng nhập"
        this.isLogin = true;
      } else if (response.status === 401) {
        // Trường hợp chưa đăng nhập
        console.log('Chưa đăng nhập');
        this.showTitleLogin = true; // Hiển thị thông báo "Chưa đăng nhập"
        this.isLogin = false;
      }
      else {
        // Trường hợp lỗi khác
        console.error('Error fetching data:', await response.json());
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      }
    },
    async fetchDataProduct() {
      try {
        const response = await fetch('http://localhost:3001/product');
        const data = await response.json();
        this.data = [ ...data ];
        this.filteredData =  this.data

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    
    showFormCreate(){
        this.showForm = true;
        console.log(this.showForm)
    },
    cancelFormAction(){
        this.showForm = false;
        this.showUpdateForm = false
        console.log(this.showForm)

    },
    addNewProduct(newProduct) {
      console.log(newProduct)
      fetch('http://localhost:3001/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
      .then(response => {
        if (response.ok) {
          location.reload()
          this.showForm = false;
      } else {
        console.error('Không thể thêm sản phẩm mới.');
      }
      })
    },
    

    deleteProduct(item) {

      
        const id = item.id;
        console.log(id)

        fetch(`http://localhost:3001/product/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })
        .then(response => {
          if (response.ok) {
            // Xóa sản phẩm khỏi `filteredData`
            this.filteredData = this.filteredData.filter(product => product.id !== id);
            console.log(this.filteredData)

            console.log('Đã xóa sản phẩm thành công!');
          } else {
            console.error('Lỗi khi xóa sản phẩm:', response.status);
          }
        })
        .catch(error => {
          console.error('Lỗi khi xóa sản phẩm:', error);
        });
    },
      

    searchInput(searchText){      
      const originData = this.data
      this.filteredData = originData.filter(product => {
        const searchTerms = searchText.toLowerCase().split(' ');
        return searchTerms.every(term => {
          // Check if any product field (name, description, etc.) includes the term
          return product.name.toLowerCase().includes(term) ||
                 // Add more conditions to search other fields if needed
                 product.description && product.description.toLowerCase().includes(term);
        });
      });
        console.log(originData)
        console.log(this.filteredData)

    },
    updateProduct(item){
      this.showUpdateForm = true
      this.itemSelect = item
      const index = item.id
      this.indexes = index
      console.log(this.itemSelect)
      console.log(index)
    },

    
    updateFormAction(updatedProduct) {
      console.log(updatedProduct)
      fetch(`http://localhost:3001/product/${this.indexes}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
      })
      .then(response => {
        if (response.ok) {
          const index = this.filteredData.findIndex(p => p.id === this.indexes);
          if (index !== -1) {
            this.filteredData[index] = updatedProduct;
          }
          this.itemSelect = updatedProduct;
          this.showUpdateForm = false;
        } else {
          console.error('Không thể cập nhật sản phẩm.');
        }
      })
      .catch(error => {
        console.error('Lỗi khi cập nhật sản phẩm:', error);
      });
    },
    goToLogin(){
            this.$router.push('./login')
        }

  }

  }

</script>

<style scoped>
.product-main{
    margin-left: 260px;
}

.product-item{
    margin: 10px 20px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-add-form {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.not-logged-in{
    margin-left: 700px;
    margin-top: 300px;
}
</style>