<template>
  <div id="app">
      <Header></Header>
      <Carousel> </Carousel>
    <div class="container">
    <h1 class="mt-5">SERVICES</h1>
    <div class="row pt-5 justify-content-start" >
      <div class="col-12	col-sm-12	col-md-12 col-lg-3	col-xl-3">
         <div class="serv-home p-2">
          <h2>Cloud Data Hosting </h2>
           <span class="fa-stack fa-4x">
              <i class="fas fa-cloud fa-stack-1x fa-inverse"></i>
            </span>
          <p>Simple or bursty applications such as low traffic web servers, blogs, discussion forums, CMS, small databases, dev/test servers, microservices, and repository hosting</p>
         
         </div>
      </div>
     <div class="col-12	col-sm-12	col-md-12 col-lg-3	col-xl-3">
         <div class="serv-home p-2">
          <h2>Cloud Data Hosting </h2>
           <span class="fa-stack fa-4x">
              <i class="fas fa-chart-pie fa-stack-1x fa-inverse"></i>
            </span>
          <p>Simple or bursty applications such as low traffic web servers, blogs, discussion forums, CMS, small databases, dev/test servers, microservices, and repository hosting</p>
          
         </div>
      </div>
      <div class="col-12	col-sm-12	col-md-12 col-lg-3	col-xl-3">
         <div class="serv-home p-2">
          <h2>Cloud Data Hosting </h2>
           <span class="fa-stack fa-4x">
              <i class="fas fa-hammer fa-stack-1x fa-inverse"></i>
            </span>
          <p>Simple or bursty applications such as low traffic web servers, blogs, discussion forums, CMS, small databases, dev/test servers, microservices, and repository hosting</p>
         </div>
      </div>
      <div class="col-12	col-sm-12	col-md-12 col-lg-3	col-xl-3">
         <div class="serv-home p-2">
          <h2>Cloud Data Hosting </h2>
           <span class="fa-stack fa-4x">
              <i class="fas fa-paste fa-stack-1x fa-inverse"></i>
            </span>
          <p>Simple or bursty applications such as low traffic web servers, blogs, discussion forums, CMS, small databases, dev/test servers, microservices, and repository hosting</p>
         </div>
      </div>
    </div>
    </div>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from "@/components/Navigation/Header"
import Carousel from "@/components/Carousel/Carousel";
import Footer from '@/components/Footer/Footer';

export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    Footer,
  },
};
</script>
<style scoped>
h1{
  text-align: center;
}
.serv-home {
  height: 100%;
  background:rgba(0, 0, 0, 0.24);
  border-top: 3px solid var(--blue);
  text-align: center;
  
}
.img-home{
width: 20%;
height: 20%;
}

</style>