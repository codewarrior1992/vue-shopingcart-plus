<template>
  <div class="modal">
    <a href="#" class="modal-box" @click.prevent="openModal">
      <i class="fas fa-plus"></i>
    </a>
    <div class="modal-bg" @click.self="closeModal">
      <div class="modal-wraper">
        <div class="header">
          Product
          <i class="fas fa-times" @click.prevent="closeModal"></i>
        </div>
        <div class="content">
          <div class="img-group">
            <div class="upload">
              <input type="file" name id />
            </div>
            <div class="preview"></div>
          </div>

          <div class="input-group">
            <div class="title">
              <input type="text" id="text" size="10" />
              <label for="text">title</label>
            </div>
            <div class="textarea">
              <textarea id="content" cols="30" rows="4"></textarea>
              <label for="content">content</label>
            </div>
            <div class="input-wraper">
              <div class="feature">
                <input type="number" id="cost" />
                <label for="cost">Cost</label>
              </div>
              <div class="feature">
                <input type="number" id="number" />
                <label for="number">Price</label>
              </div>
              <div class="feature">
                <select id="time">
                  <option value>1</option>
                  <option value>2</option>
                  <option value>3</option>
                </select>
                <label for="time">time</label>
              </div>
              <div class="feature">
                <select id="category">
                  <option value>1</option>
                  <option value>2</option>
                  <option value>3</option>
                </select>
                <label for="category">category</label>
              </div>
            </div>
            <div class="status">
              <input type="checkbox" id="status" />
              <label for="status">able?</label>
            </div>
            <a href="#" @click="submit">Submit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    openModal() {
      const target = document.querySelector(".modal-bg");
      target.classList.add("active");
    },
    closeModal() {
      const target = document.querySelector(".modal-bg");
      target.classList.remove("active");
    },
    submit() {
      console.log(1);
    },
  },
};
</script>