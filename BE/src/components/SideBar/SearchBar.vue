<template>
    <div class="search-bar">
        <div class="search-item">
            <input type="text" placeholder="Tìm kiếm"  v-model="searchText" @input="onSearchInputChanged">
            <img src="../../assets/search.png">
        </div>

        <button @click="showFormCreate">+ Tạo mới</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchText: ''
        }
    },
    methods:{
        showFormCreate(){
            this.$emit('show-form-create')
        },
        onSearchInputChanged() {
            this.$emit('search-input-changed', this.searchText)
        }

    }
}
</script>

<style scoped>
.search-bar{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 30px;
}

.search-item{
    width: 316px;
    height: 40px;
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    gap: 4px;
    border-radius: 6px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}   
button{
    color: #fff;
    font-family: Public Sans;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    background: #0f60ff;
    width: 122px;
    height: 40px;
    padding: 12px 24px;
    gap: 6px;
    border-radius: 6px;
    display: flex;
    align-items: center;
}

.search-item input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  outline-style: none;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
}
</style>