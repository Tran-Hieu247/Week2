<template>
  <div class="pagination">
    <div class="items-per-page">
        <label >Showing</label>
        <div class="select-count">
            <select v-model="itemsPerPage" @change="onItemsPerPageChange">
                <option v-for="option in perPageOptions" :key="option" :value="option">{{ option }}</option>
            </select>
            <img src="../../assets/Path.png">
        </div>
        <label>of {{totalItems}}</label>

    </div>
    <div class="list-page">
        <button @click="prevPage" :disabled="currentPage === 1" class="list-element"><img src="../../assets/chevron-left.png" ></button>
        <button v-for="thisPage in totalPages" :key="thisPage" @click="changePage" :data-page="thisPage" class="list-element">
            {{thisPage}}
        </button>
        <!-- <span>{{ currentPage }} / {{ totalPages }}</span> -->
        <button @click="nextPage" :disabled="currentPage === totalPages" class="list-element"><img src="../../assets/chevron-right.png"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      perPageOptions: [5,10, 20, 50, 100]
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    }
  },
  methods: {
    changePage(thisPage) {
        const page = parseInt(event.target.dataset.page);        
        console.log(page);
        this.currentPage = page;
        
        this.$emit('pageChange', this.currentPage);
    } ,
    prevPage() {
        this.currentPage = Math.max(this.currentPage - 1, 1)
        this.$emit('pageChange', this.currentPage)
    },
    nextPage() {
        this.currentPage = Math.min(this.currentPage + 1, this.totalPages)
        this.$emit('pageChange', this.currentPage)
    },
    onItemsPerPageChange() {
        this.currentPage = 1
        this.$emit('pageChange', this.currentPage)
        this.$emit('itemsPerPageChange', this.itemsPerPage)
    }
  }
}
</script>

<style scoped>
.select-count select{
    margin-right: -5px;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.items-per-page {
  margin-right: 1rem;
  display: flex;
  gap: 5px;
}

.pagination{
    display: flex;
    justify-content: space-between;
    margin:20px 20px 40px 20px;
}
label, .select-count{
    font-family: Public Sans;
    font-size: 15px;
    font-weight: 500;
    line-height: 17.63px;
    letter-spacing: 0.4300000071525574px;
    text-align: left;

}

.select-count{
    box-shadow: 0 4px 16px #00000014;
    gap: 4px;
    border-radius: 4px;
}

.list-page{
    display: flex;
    gap: 4px;
}

.list-element{
    width: 28px;
    height: 28px;
    padding: 4px 8px 4px 8px;
    gap: 0px;
    border-radius: 4px 0px 0px 0px;
    opacity: 0px;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    cursor: pointer;

}

.list-element :active {
  background-color: #007bff;
  color: white;
}s

button img{
  width: 16px;
  height: 16px;
}
</style>