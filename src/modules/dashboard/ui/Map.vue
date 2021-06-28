<template>
    <div>
        <div class="container p-6" style="background: rgba(0, 0, 0, 0.24);">
            <div class="amcharts-map" ref="chartdiv"></div>
        </div>


     

          <!--    <table>
                <thead>
                    <tr>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in arrayWell" :key="data.id">
                        <td>{{data.well_name}}</td>
                    </tr>
                </tbody>
            </table>
      -->

        <div v-for="data in arrayWell" :key="data.id">
            <div class="row">
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 style="color=white" class="mb-0">{{data.well_name}}</h3>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-success ">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <!--  <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">$17.34</h3>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-success">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">$12.34</h3>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-danger">
                          <span class="mdi mdi-arrow-bottom-left icon-item"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">$31.53</h3>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-success ">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
        </div>

    </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import {apiWellGetAll} from '../../well/uriApi'
import {getHttp} from '@/utils/httpDefault'

export default {
name: 'AmchartsMap',
data() {
    return {
        arrayWell:[],
        pozo1:'',
    };
},
components: {
},
methods:{
    async getWellAll () {
        const objLoader = this.$loading.show();
        const response = await getHttp(apiWellGetAll)
        objLoader.hide()         
        if(response.status==200){
            this.parseIntArray(response.data)
            this.mapDash()
        }else{
            console.log(response);
        }
    },

    parseIntArray(array){
        let tem = []
        for (let i = 0; i < array.length; i++) {
            let obj ={
                latitude: parseFloat(array[i].latitude),
                longitude:parseFloat(array[i].longitude),
                operating_company:array[i].operating_company,
                well_name:array[i].well_name,
            }
            tem.push(obj)              
        }
        this.arrayWell = tem
    },

    mapDash(){
        let map = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
        map.geodata = am4geodata_worldLow;
        map.projection = new am4maps.projections.Miller();
        let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        polygonSeries.exclude = ["AQ"];

        map.zoomControl = new am4maps.ZoomControl();
        map.zoomControl.align = 'left';
        map.zoomControl.valign = 'top';

        map.zoomControl.minusButton.background.fill = am4core.color("#C7D0FF");
        map.zoomControl.minusButton.background.fillOpacity = 0.24;
        map.zoomControl.minusButton.background.stroke = null;
        map.zoomControl.plusButton.background.fill = am4core.color("#C7D0FF");
        map.zoomControl.plusButton.background.fillOpacity = 0.24;
        map.zoomControl.plusButton.background.stroke = null;
        map.zoomControl.plusButton.label.fill = am4core.color("#fff");
        map.zoomControl.plusButton.label.fontWeight = 600;
        map.zoomControl.plusButton.label.fontSize = 16;
        map.zoomControl.minusButton.label.fill = am4core.color("#fff");
        map.zoomControl.minusButton.label.fontWeight = 600;
        map.zoomControl.minusButton.label.fontSize = 16;
        let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover");
        plusButtonHoverState.properties.fillOpacity = 0.24;
        let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover");
        minusButtonHoverState.properties.fillOpacity = 0.24;

        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#474D84");
        polygonTemplate.fillOpacity = 1;
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fillOpacity = 0.5;

        polygonTemplate.stroke = am4core.color("#6979C9");
        polygonTemplate.strokeOpacity = 1;

        let placeSeries = map.series.push(new am4maps.MapImageSeries());
        let place = placeSeries.mapImages.template;
        place.nonScaling = true;
        place.propertyFields.latitude = "latitude";
        place.propertyFields.longitude = "longitude";
        let circle = place.createChild(am4core.Circle);
        circle.radius = 4;
        circle.fill = am4core.color("#C7D0FF");
        circle.stroke = am4core.color("#ffffff");
        circle.strokeWidth = 0;
        placeSeries.data = this.arrayWell    
        circle.tooltipText = 'Company:{operating_company}, Well:{well_name}';
        this.map = map;
    },
},
mounted() {},
created(){
    this.getWellAll()
},
beforeDestroy() {
    if (this.map) {
    this.map.dispose();
    }
}
}
</script>


<style scope>
.amcharts-map {
  height: 60vh;
  width: 100%;
}
</style>
