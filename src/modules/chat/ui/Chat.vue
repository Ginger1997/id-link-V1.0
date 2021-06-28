<template>
<div class="chat-popup" id="myForm">
 <div class="card-header">
   <h5>Chat</h5>
    <button class="close" v-on:click="closeForm">x</button>
   </div>
  <form action="/action_page.php" class="form-container">
  
   <div class="wrapper">
    <div class="main">
        <div class="px-2 scroll">
            <div class="d-flex align-items-center">
                <div class="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" class="img1" /></div>
                <div class="pr-2 pl-1"> <span class="name">Sarah Anderson</span>
                    <p class="msg">Hi Dr. Hendrikson, I haven't been falling well for past few days.</p>
                </div>
            </div>
            <div class="d-flex align-items-center text-right justify-content-end ">
                <div class="pr-2"> <span class="name">Dr. Hendrikson</span>
                    <p class="msg">Let's jump on a video call</p>
                </div>
                <div><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" class="img1" /></div>
            </div>
            <div class="text-center"><span class="between">Call started at 10:47am</span></div>
            <div class="text-center"><span class="between">Call ended at 11:03am</span></div>
            <div class="d-flex align-items-center">
                <div class="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" class="img1" /></div>
                <div class="pr-2 pl-1"> <span class="name">Sarah Anderson</span>
                    <p class="msg">How often should i take this?</p>
                </div>
            </div>
            <div class="d-flex align-items-center text-right justify-content-end ">
                <div class="pr-2"> <span class="name">Dr. Hendrikson</span>
                    <p class="msg">Twice a day, at breakfast and before bed</p>
                </div>
                <div><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" class="img1" /></div>
            </div>
            <div class="d-flex align-items-center">
                <div class="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" class="img1" /></div>
                <div class="pr-2 pl-1"> <span class="name">Sarah Anderson</span>
                    <p class="msg">How often should i take this?</p>
                </div>
            </div>
        </div>
       
    </div>
</div>
<div class="p-3" style="display: inherit;">
    <input type="text number" name="text" class="form-control" placeholder="Type a message...">
    <i class="fa fa-arrow-circle-right icon2"></i>
</div>
  </form>
</div>
</template>
<script>
export default{
    name:'chat',
    methods:{
        closeForm() {
        document.getElementById("myForm").style.display = "none";
      },
    }

}
</script>
<style src="./Chat.scss" lang="scss"/>
