<template>
  <div class="login">
    <div class="bg"></div>
    <h1 class="h1">Bing.Wen.Music</h1>
    <img src="./icon.png" alt="" class="logo">
     <div class="main" span="16">
           <van-row type="flex" justify="center">
            <van-col span="16">
              <van-cell-group @click="showone" >
                <van-field v-model.trim="username" placeholder="手机号~~" left-icon="friends"/>
                <p :class="userwarning===true?errText:elseNone">{{usererrText}}</p>
              </van-cell-group>
            </van-col>
          </van-row>
          <van-row type="flex" justify="center">
            <van-col span="16">
              <van-cell-group @click="showTow">
                <van-field v-model.trim="password" type="password" placeholder="密码~~" left-icon="browsing-history" />
                <p :class="wordwarning===true?errText1:elseNone">{{wordErrText}}</p>
              </van-cell-group>
            </van-col>
          </van-row>
          <div class="btn">
            <van-checkbox v-model="checked">Remember Me</van-checkbox>
            <span class="loginBtn" @click="loginBtn">登陆</span>
          </div>
     </div>
     <!-- 键盘 username -->
    <van-number-keyboard
      v-model="username"
      :show="show"
      @blur="show = false"
    />
    <!-- 键盘 password -->
    <van-number-keyboard
      v-model="password"
      :show="showkeyboardTow"
      @blur="showkeyboardTow = false"
    />
  </div>
</template>
<style lang="less">
.elseNone{
  display: none;
}
input{
  font-family: Avenir, Helvetica;
}
.login{
   width: 100vw;
   height: 100vh;
   .van-cell{
     color: #88798f;
   }
   .logo{
     width: 33.33%;
     position: absolute;
     left: 50%;
     top: 10%;
     transform: translateX(-50%);
   }
   .bg{
     position: fixed;
     top: 0;
     left: 0;
     background-image: url('../bgi3.jpg');
     width: 100vw;
     height: 100vh;
     background-size: 100%;
     filter: blur(8px);
     z-index: -1;
   }
    .h1{
      color: crimson;
      font-size: 2rem;
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: block;
    }
    .main{
      position: absolute;
      top: 16rem;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 0.5rem;
      overflow: hidden;
      width: 100%;
      .errText1{
        color: red;
        line-height: 1rem;
        font-size: 0.7rem;
        padding-left: 2rem;
        // display: none;
      }
      .errText{
        color: red;
        line-height: 1rem;
        font-size: 0.7rem;
        // display: none;
        padding-left: 2rem;
      }
      .btn{
        text-align: center;
        .van-checkbox{
          margin-left: 20%;
          margin-top: 0.8rem;
          .van-checkbox__label{
            color: #fff;
            font-size: 1rem;
          }
        }
        .van-button{
          margin: 0.8rem 1.8rem;
        }
        .loginBtn{
          display: block;
          width: 50%;
          border-radius: 0.5rem;
          height: 2rem;
          margin: 1.2rem auto;
          color: #333;
          font-size: 1rem;
          line-height: 2rem;
          background-color: #feefff;
          text-align-last:justify;
          padding: 0 4.5rem;
        }
        .loginBtn:active{
            background-color: #e7c2e9;
          }
      }
    }
    .van-row--justify-center{
      margin-bottom: 0.45rem;
    }
}
.van-col{
  color: #fff;
}
</style>
<script>
import Vue from 'vue'
import { Button, NumberKeyboard, Toast, Checkbox, CheckboxGroup, Notify } from 'vant'
import 'vant/lib/button/style'
Vue.use(Button, NumberKeyboard, Toast, Checkbox, CheckboxGroup, Notify)
export default {
  created () {
    this.createUser()
  },
  data () {
    return {
      show: false,
      showkeyboardTow: false,
      username: '',
      password: '',
      checked: false,
      usererrText: '',
      wordErrText: '',
      userwarning: false, // 是否显示文字提示框 user
      wordwarning: false, // 是否显示 word 文字提示框
      errText: 'errText', // username 的wenm
      errText1: 'errText1', // password 的文字提示
      elseNone: 'elseNone', // 样式，是否隐藏输入框下的问题提示
      user: { // 用户的 id 头像图片 以及token 和 用户设置的名称
        userID: '',
        userImg: '',
        token: '',
        userName: ''
      }
    }
  },
  methods: {
    showone () { // 显示uesranme输入键盘
      this.show = !this.show
    },
    showTow () { // 显示password键盘
      this.showkeyboardTow = !this.showkeyboardTow
    },
    loginBtn () { // 点击登陆按钮
      if (this.username === '') {
        this.userwarning = true
        this.usererrText = '您请输入手机号~'
      } else if (this.username.length !== 11) {
        this.userwarning = true
        this.usererrText = '您请输入正确的手机号~'
      } else {
        this.userwarning = false
      }
      if (this.password === '') {
        this.wordwarning = true
        this.wordErrText = '您请输入密码~'
      } else {
        this.wordwarning = false
      }
      this.$http.post(`/login/cellphone?phone=${this.username}&password=${this.password}`)
        .then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            // this.$router.push({ name: 'home/homepager', params: { user: this.user } })
            this.user.userID = res.data.account.id
            this.user.token = res.data.token
            this.user.userImg = res.data.profile.avatarUrl
            this.user.userName = res.data.profile.nickname
            if (this.checked) {
              localStorage.setItem('userINFo', JSON.stringify({ usercode: this.username, password: this.password }))
            }
            // document.cookie = `bing=${this.user.token}`
          } else {
            Notify({
              message: '手机号或密码错误',
              color: '#f5f5f5',
              background: '#f338ff73',
              duration: 1500
            })
          }
        })
    },
    createUser () { // 上次用户的登陆是否设置记住密码
      if (localStorage.getItem('userINFo') !== '') {
        this.username = JSON.parse(localStorage.getItem('userINFo')).usercode
        this.password = JSON.parse(localStorage.getItem('userINFo')).password
        this.checked = true
      }
    }
  }
}
</script>
