<template>
  <div class="orders-group">
    <!-- control -->
    <div class="handler">
      <button>
        <p>All</p>
        <ul>
          <li>All</li>
          <li>Done</li>
          <li>Yet</li>
        </ul>
      </button>
      <div class="input-group">
        <input type="search" name placeholder="Search" />
        <i class="fas fa-search"></i>
      </div>
    </div>
    <!-- table -->
    <div class="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Content</th>
            <th class="date">Date</th>
            <th class="total">Total</th>
            <th>Status</th>
            <th>Set Up</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="email">
                <input type="checkbox" id="user" />
                <label>varok1992417@gmail.com</label>
              </div>
            </td>
            <td>
              <div class="content">
                <p>香煎肋排*5</p>
                <p>普羅旺斯炸鮭魚*5</p>
                <p>香煎肋排*5</p>
                <p>香煎肋排*5</p>
              </div>
            </td>
            <td>09-05-2020</td>
            <td>
              <p>$ 2,750</p>
            </td>
            <td>
              <p v-if="text">已完成</p>
              <p v-else>未完成</p>
              <label class="switch">
                <input type="checkbox" v-model="text" />
                <span></span>
              </label>
            </td>
            <td>
              <a href="#" class="remove">
                <i class="far fa-trash-alt"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="email">
                <input type="checkbox" id="user" />
                <label>varok1992417@gmail.com</label>
              </div>
            </td>
            <td>
              <div class="content">
                <p>香煎肋排*5</p>
                <p>普羅旺斯炸鮭魚*5</p>
                <p>香煎肋排*5</p>
                <p>香煎肋排*5</p>
              </div>
            </td>
            <td width="20%">09-05-2020</td>
            <td width="10%">
              <p>$ 2,750</p>
            </td>
            <td>
              <p v-if="text">已完成</p>
              <p v-else>未完成</p>
              <label class="switch">
                <input type="checkbox" v-model="text" />
                <span></span>
              </label>
            </td>
            <td>
              <a href="#" class="remove">
                <i class="far fa-trash-alt"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="email">
                <input type="checkbox" id="user" />
                <label>varok1992417@gmail.com</label>
              </div>
            </td>
            <td>
              <div class="content">
                <p>香煎肋排*5</p>
                <p>普羅旺斯炸鮭魚*5</p>
                <p>香煎肋排*5</p>
                <p>香煎肋排*5</p>
              </div>
            </td>
            <td width="20%">09-05-2020</td>
            <td width="10%">
              <p>$ 2,750</p>
            </td>
            <td>
              <p v-if="text">已完成</p>
              <p v-else>未完成</p>
              <label class="switch">
                <input type="checkbox" v-model="text" />
                <span></span>
              </label>
            </td>
            <td>
              <a href="#" class="remove">
                <i class="far fa-trash-alt"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="email">
                <input type="checkbox" id="user" />
                <label>varok1992417@gmail.com</label>
              </div>
            </td>
            <td>
              <div class="content">
                <p>香煎肋排*5</p>
                <p>普羅旺斯炸鮭魚*5</p>
                <p>香煎肋排*5</p>
                <p>香煎肋排*5</p>
              </div>
            </td>
            <td width="20%">09-05-2020</td>
            <td width="10%">
              <p>$ 2,750</p>
            </td>
            <td>
              <p v-if="text">已完成</p>
              <p v-else>未完成</p>
              <label class="switch">
                <input type="checkbox" v-model="text" />
                <span></span>
              </label>
            </td>
            <td>
              <a href="#" class="remove">
                <i class="far fa-trash-alt"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination />
  </div>
</template>
<script>
import Pagination from "@/components/common/Pagination.vue";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      status: null,
      text: true,
      title: "香煎肋排",
      num: 5,
    };
  },
  mounted() {
    const list = document.getElementsByTagName("th");
    list.forEach((item) => {
      item.addEventListener("click", (e) => {
        item.classList.toggle("active");
      });
    });
  },
};
</script>