<template>
  <div id="app">
    <section class="page-section" id="services">
      <Header></Header>
      <Carousel> </Carousel>
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Services</h2>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-cloud fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Cloud</h4>
            <p class="text-muted">
              completely cloud hosted, we don’t send engineers or server
              hardware of any kind to the rig
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-chart-pie fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Drilling Performance</h4>
            <p class="text-muted">
              Rig activity and timeline analysis of PT/NPT, display drilling
              optimisation flags and drilling parameters
            </p>
          </div>

          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-hammer fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Geologyc</h4>
            <p class="text-muted">
              can send up-to-date geological interpretations
            </p>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-6">
            <span class="fa-stack fa-4x">
              <i class="fas fa-paste fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Report</h4>
            <p class="text-muted">
              organises and manages the effective sharing of reports, logs, data
              and documents.
            </p>
          </div>
          <div class="col-md-6">
            <span class="fa-stack fa-4x">
              <i class="fas fa-chart-line fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Analyce</h4>
            <p class="text-muted">
              Combine critical depth based data feeds from mudlogging and M/LWD,
              and perform real-time calculations such as Gas Ratios and SW.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
import Carousel from "@/components/Carousel/Carousel";

export default {
  name: "About",
  components: {
    Header,
    Carousel,
  },
};
</script>
<style src="./css/about.css" lang="css"/>



