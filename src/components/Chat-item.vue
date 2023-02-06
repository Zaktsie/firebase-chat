<template>
  <b-row>
    <b-col cols="12">
      <h2>
        {{roomname}}
        <b-link @click="exitChat()">(Exit Chat)</b-link>
      </h2>
      <div class="chat-box" v-chat-scroll>
        <b-list-group>
          <b-list-group-item class="chat-item" v-for="chat in chats" :key="chat.key">
            <div class="chat-status text-center" v-if="chat.type==='join'||chat.type==='exit'">
              <span class="chat-date">{{chat.sendDate}}</span>
              <span class="chat-content-center">{{chat.message}}</span>
            </div>
            <div v-else>
              <div class="chat-message text-right" v-if="chat.user === nickname">
                <div class="right-bubble">
                  <span class="msg-name">Me</span>
                  <span class="msg-date">{{chat.sendDate}}</span>
                  <p text-wrap>{{chat.message}}</p>
                </div>
              </div>
              <div class="chat-message text-left" text-left v-if="chat.user !== nickname">
                <div class="left-bubble">
                  <span class="msg-name">{{chat.user}}</span>
                  <span class="msg-date">{{chat.sendDate}}</span>
                  <p text-wrap>{{chat.message}}</p>
                </div>
              </div>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
      <footer class="sticky-footer">
        <b-form @submit="onSubmit">
          <b-input-group>
              <b-form-input id="message" v-model.trim="data.message" placeholder="Enter your message"></b-form-input>
              <b-button type="submit" variant="primary" :disabled="!data.message">Send</b-button>
          </b-input-group>
        </b-form>
      </footer>
    </b-col>
  </b-row>
</template>


<script>


import firebase from '@/Firebase';
import router from '@/router';


export default {
  name: 'Chat',
  data () {
    return {
      roomid:  this.$route.params.roomid,
      roomname:  this.$route.params.roomname,
      nickname:  this.$route.params.nickname,
      data:  { type: '', nickname: '', message: ''},
      chats: [],
      errors: [],offStatus: false    ]
  }
},created () {
    let joinData = firebase.database().ref('chatrooms/'+this.roomid+'/chats').push();
    joinData.set({
      type: 'join',
      user: this.nickname,
      message: this.nickname+' has joined this room.',
      sendDate: Date()
    });
    this.data.message = '';
    firebase.database().ref('chatrooms/'+this.roomid+'/chats').on('value', (snapshot) => {
      this.chats = [];
      snapshot.forEach((doc) => {
        let item = doc.val()
        item.key = doc.key
        this.chats.push(item)
      });
    });
  },
  methods:  {
    onSubmit(evt) {
      evt.preventDefault()


      let newData =  firebase.database().ref('chatroom/'+this.roomid+'/chats').push();
      newData.set({
        type: 'newmsg',
        user: this.nickname,
        message: this.data.message,
        sendDate: Date()
      });
      this.data.message = '';
    },
    exitChat () {
      let exitData =  firebase.database().ref('chatrooms/'+this.roomid+'/chats').push();
      exitData.set({
        type:  'exit',
        user:  this.nickname,
        message:  this.nickname+' has left this room!',
        sendDate: Date()
      })
      this.offStatus =  true
      router.go(-1)
    }
  }
}
</script>