<template>
<div class="product">
    <side-bar></side-bar>
    <div class="product-main">
        <div class="product-item">
            <header-bar></header-bar>
            <search-bar 
              @search-input-changed="searchInput"
            ></search-bar>
            <user-list :data="filteredData"
              @delete-user="deleteUser"
              @update-user="updateUser"
            ></user-list>
        </div>
        
        <user-update-form class="overlay"
            
            v-if="showUpdateForm"
            @cancel-form="cancelFormAction"
            @update-form="updateFormAction"

        > 
        </user-update-form>

    </div>

</div>
    
</template>
<script>
import HeaderBar from '../components/SideBar/HeaderBar.vue'
import SideBar from '../components/SideBar/SideBar.vue'
import SearchBar from '../components/SideBar/SearchBar.vue'
import UserList from '../components/List/ProductList.vue'
import ProductUpdateForm from '../components/Form/ProductUpdateForm.vue'
export default {
  components:{
    SideBar,
    HeaderBar,
    SearchBar,
    UserList,
    ProductUpdateForm
  },
  data() {
    return {
      cancelForm: false,
      data: [],
      filteredData: [], // Initialize filtered data with all products
      showUpdateForm: false,
      
      itemSelect:{},
      indexes : 0

    }   
  },
  mounted(){
    this.fetchDataProduct()
  },
  methods:{
     async fetchDataProduct() {
      try {
        const response = await fetch('http://localhost:3001/user');
        const data = await response.json();
        this.data = [ ...data ];
        this.filteredData =  this.data

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    cancelFormAction(){
        this.showUpdateForm = false
        console.log(this.showUpdateForm)

    },
    
    deleteUser(item) {
        const id = item.id;
      console.log(id)
      console.log(item)
      fetch(`http://localhost:3001/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      .then(response => {
        if (response.ok) {
          // Xóa sản phẩm khỏi `filteredData`
          this.filteredData = this.filteredData.filter(user => user.id !== id);
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
      // Filter data based on search text
      this.filteredData = this.data.filter(user => {
        const searchTerms = searchText.toLowerCase().split(' ');
        return searchTerms.every(term => {
          // Check if any product field (name, description, etc.) includes the term
          return user.name.toLowerCase().includes(term) ||
                 // Add more conditions to search other fields if needed
                 user.description && user.description.toLowerCase().includes(term);
        });
      });
    },
    updateUser(item){
      this.showUpdateForm = true
      this.itemSelect = item
      const index = item.id
      this.indexes = index
      console.log(this.itemSelect)
      console.log(index)

    },

    
    updateFormAction(updatedUser) {
      console.log(updatedUser)

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
</style>