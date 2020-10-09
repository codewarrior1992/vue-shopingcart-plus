<template>
  <div class="selectbox-group">
    <!-- 1 -->
    <div class="search">
      <ul>
        <li class="item">
          <input type="search" placeholder="Search ..." />
          <a href="#">
            <i class="fas fa-search"></i>
          </a>
          <a href="#" class="reset">
            <i class="fas fa-redo-alt"></i>
          </a>
        </li>
      </ul>
    </div>

    <!-- 2 -->
    <div class="dropdown-list">
      <div class="dropdown">
        <h2 class="default">Categories</h2>
        <ul>
          <li class="item">
            <input type="checkbox" id="hamburger" />
            <label for="hamburger">Hamburger</label>
          </li>
          <li class="item">
            <input type="checkbox" name="rief" id="rief" />
            <label for="rief">Rief</label>
          </li>
          <li class="item">
            <input type="checkbox" name="package" id="package" />
            <label for="package">Package</label>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <h2 class="default">Ranges</h2>
        <ul>
          <li class="item">
            <input type="radio" id="low" name="ranges" />
            <label for="low">$ 299</label>
          </li>
          <li class="item">
            <input type="radio" id="middle" name="ranges" />
            <label for="middle">$ 499</label>
          </li>
          <li class="item">
            <input type="radio" id="high" name="ranges" />
            <label for="high">$ 699</label>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <h2 class="default">Status</h2>
        <ul>
          <li class="item">
            <input type="radio" name="status" id="able" />
            <label for="able">Able</label>
          </li>
          <li class="item">
            <input type="radio" name="status" id="enable" />
            <label for="enable">Enable</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setText() {},
    };
  },
};
</script>
