<template>
<div>
<Header></Header>
<div class="mt-5" >
  <div class="container mt-3 p-5">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu1"><b>Cloud Data Hosting</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu2"><b>Well Data Real-Time</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu3"><b>Well Management Platform</b></a>
      </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <div id="menu1" class="container tab-pane active"><br>
        <div class="row">
          <h3>Cloud Data Hosting</h3>
          <div class="col-10">
            <ul>
              <li><p>Keep your data closer and safer wherever you are and whenever you need it.</p></li>
            </ul>
          </div>
          <div class="col-2">
            <img class="rounded " src="@/assets/pictures/Cloud.png" style=" filter: invert(0.4);width: 200px" alt="">
          </div>
        </div>



      </div>
      <div id="menu2" class="container tab-pane fade"><br>
        <h3>Well Data Real-Time</h3>
        <ul>
          <li><p>Have access to one or multiple projects instantly in any device.</p></li>
          <li><p>Virtual RTOC concept.</p></li>
        </ul>
        <img src="@/assets/pictures/Cloud.png" style=" filter: invert(0.4);" alt="">
      </div>
      <div id="menu3" class="container tab-pane fade"><br>
        <h3>Well Management Platform</h3>
        <ul>
          <li><p>Have total control of your projects.</p></li>
          <li><p>Give access to your collaborators, partners, clients or key personnel you trust.</p></li>
          <li><p>Manage all your all your projects and  your data in one place.</p></li>
        </ul>
        <span class="float-right">
          <img src="@/assets/pictures/Cloud.png" style=" filter: invert(0.4);" alt="">
        </span>

      </div>
    </div>
  </div>


</div>
  <Footer/>
</div>

</template>

<script>
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Footer/Footer'


export default {
  name: "Solution",
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>

</style>