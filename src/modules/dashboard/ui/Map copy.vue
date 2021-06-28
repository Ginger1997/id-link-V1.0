<template>
	<div class="container p-6" style="background:rgba(0, 0, 0, 0.24)">
		<div class="amcharts-map" ref="chartdiv"></div>
	</div>
</template>

<script>
import {apiCcompanyListCompany} from '../../company/uri'
import {apiWellGetAll} from '../../well/uriApi'
import {getHttp} from '@/utils/httpDefault'


import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import places from "./mock";
//import axios from "axios";
export default {
	name: "Map",
	components: {},
	data() {
		return {
			dataplaces: [],
            arrayDataList:[],
            arrayWell:[],
		};
	},
	methods: {
        async getDataListCompany () {
            const objLoader = this.$loading.show();
            const response = await getHttp(apiCcompanyListCompany)
            objLoader.hide()         
            if(response.status==200){
                this.arrayDataList = response.data
                const result = this.arrayDataList.filter(word => word.company_name);
                console.log(result);
            }else{
               console.log(response);
            }
            //console.log(' this.arrayDataList',  this.arrayDataList);
        },
        async getWellAll () {
            const objLoader = this.$loading.show();
            const response = await getHttp(apiWellGetAll)
            objLoader.hide()         
            if(response.status==200){
                this.dataplaces = response.data
                this.mapDash()
            }else{
               console.log(response);
            }
            console.log(' this.arrayWell',  this.dataplaces);
        },
        mapDash(){
            let map = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
                map.geodata = am4geodata_worldLow;
                map.projection = new am4maps.projections.Miller();
            let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
                polygonSeries.useGeodata = true;
                polygonSeries.exclude = ["AQ"];

                map.zoomControl = new am4maps.ZoomControl();
                map.zoomControl.align = "left";
                map.zoomControl.valign = "top";

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
                // //place.propertyFields.tooltipText = "tooltip";
                place.propertyFields.latitude = "latitude";
                place.propertyFields.longitude = "longitude";
            let circle = place.createChild(am4core.Circle);
                circle.radius = 4;
                circle.fill = am4core.color("#C7D0FF");
                circle.stroke = am4core.color("#ffffff");
                circle.strokeWidth = 0;
                dataplaces=[{latitude:1.8,longitude:1.2,Wellname:'OilElephanty',Company:'Stratagraph'}];
                placeSeries.data = this.dataplaces;
                //circle.tooltipText = 'Company:{Company}, Well:{Wellname}';
                //circle.tooltipText = "Company";
                circle.tooltipText = 'Company:{Company}, Well:{Wellname}';

                this.map = map;
        }
	},
    created(){
        this.getDataListCompany()
        this.getWellAll()
    },
	mounted() {
		console.log("places", places);
	/* 	console.log("places", places);
		axios
			.get("http://localhost:8000/api/well/getAll")
			.then(response => {
				this.dataplaces = response.data;
				console.log("places1", this.dataplaces);
				
				//////////////////
			})
			.catch(e => console.log(e));

		//console.log('places', this.dataplaces); */
	},

	beforeDestroy() {
		if (this.map) {
			this.map.dispose();
		}
	}
};
</script>

<style>
.amcharts-map {
	height: 60vh;
	width: 100%;
}
</style>
