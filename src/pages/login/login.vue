<template>

  	<div class="column is-one-third is-offset-one-third">
          <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
  	</div>
      
</template>

<script>
// import { login, getAdminInfo } from "@/api/getData";
// import { mapActions, mapState } from "vuex";
import md5 from "js-md5";
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted() {},
  computed: {},
  methods: {
    submitForm(formName) {
      var tt = this;
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.$http
            .post("/hxmback/api/Admin/Login", {
              Name: this.loginForm.username,
              Password: md5(this.loginForm.password)
            })
            .then(
              function(response) {
                var status = response.data.Status;
                if (status === 1) {
                  setCookie("token", response.data.Result);
                  setCookie("username", tt.loginForm.username);
                  this.$message({
                    showClose: true,
                    type: "success",
                    message: "登陆成功"
                  });
                  setTimeout(() => {
                    this.$router.push({ path: "/" });
                  }, 1000);
                } else {
                  this.$message({
                    showClose: true,
                    type: "warning",
                    message: response.data.Result
                  });
                }
              }.bind(this)
            )
            .catch(
              function(error) {
                this.$notify.error({
                  title: "错误",
                  message: "错误：请检查网络"
                });
              }.bind(this)
            );
        } else {
          this.$notify.error({
            title: "错误",
            message: "请输入用户名和密码",
            offset: 100
          });
          return false;
        }
      });
    }
  },
  watch: {
    adminInfo: function(newValue) {}
  }
};
</script>

<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
