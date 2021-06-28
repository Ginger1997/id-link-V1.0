<template>
<div class="services">
<Header></Header>
<div class="demo">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                    <div class="pricingTable-header">
                        <h3 class="title">FREELANCE</h3>
                    </div>
                    <div class="pricing-icon">
                        <i class="fas fa-paper-plane"></i>
                    </div>
                    <ul class="pricing-content">
                        <li>50GB Disk Space</li>
                        <li>50 Email Accounts</li>
                        <li>50GB Bandwidth</li>
                        <li>Maintenance</li>
                        <li>15 Subdomains</li>
                    </ul>
                    <div class="price-value">
                        <span class="amount">$9</span>
                        <span class="duration">/mo</span>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">BUY</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="pricingTable green">
                    <div class="pricingTable-header">
                        <h3 class="title">MEDIUM</h3>
                    </div>
                    <div class="pricing-icon">
                        <i class="fas fa-paper-plane"></i>
                    </div>
                    <ul class="pricing-content">
                        <li>50GB Disk Space</li>
                        <li>50 Email Accounts</li>
                        <li>50GB Bandwidth</li>
                        <li>Maintenance</li>
                        <li>15 Subdomains</li>
                    </ul>
                    <div class="price-value">
                        <span class="amount">$19</span>
                        <span class="duration">/mo</span>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">BUY</a>
                    </div>
                </div>
            </div>
             <div class="col-md-4 col-sm-6">
                <div class="pricingTable pink">
                    <div class="pricingTable-header">
                        <h3 class="title">MEDIUM</h3>
                    </div>
                    <div class="pricing-icon">
                        <i class="fas fa-paper-plane"></i>
                    </div>
                    <ul class="pricing-content">
                        <li>50GB Disk Space</li>
                        <li>50 Email Accounts</li>
                        <li>50GB Bandwidth</li>
                        <li>Maintenance</li>
                        <li>15 Subdomains</li>
                    </ul>
                    <div class="price-value">
                        <span class="amount">$19</span>
                        <span class="duration">/mo</span>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">BUY</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import Header from '@/components/Navigation/Header';
/* import modal from '@/pages/service/components/modal'; */
export default {
  name: 'Services',
  components:{ 
    Header,
    /* modal, */
  },
  data(){
    return{
        bolModal: 0
      }
    },
    methods:{
      modal(){
        this.bolModal = 1
      }
    }
}
</script>

<style scoped>
.pricingTable {
    color: #fff;
    background: #21232b;
    font-family: 'Ubuntu', sans-serif;
    text-align: center;
    padding: 0 25px 30px;
    margin: 0 10px;
    border-radius: 20px;
    position: relative;
    z-index: 1;
}

.pricingTable:before {
    content: "";
    background: #070707;
    width: 93%;
    height: 220px;
    border-radius: 20px 0 100% 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.pricingTable .pricingTable-header {
    padding: 45px 10px 25px;
    margin: 0 0 15px;
}

.pricingTable .title {
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
}

.pricingTable .pricing-icon {
    color: #ff5b5a;
    background: #fff;
    font-size: 45px;
    line-height: 110px;
    width: 110px;
    height: 110px;
    margin: 0 auto 20px;
    border-radius: 100px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 0 0 10px rgba(255, 255, 255, 0.3);
}

.pricingTable .pricing-content {
    padding: 0;
    margin: 0 0 20px;
    list-style: none;
}

.pricingTable .pricing-content li {
    color: #999;
    font-size: 17px;
    font-weight: 500;
    line-height: 27px;
    text-transform: uppercase;
    margin: 0 0 5px;
}

.pricingTable .price-value {
    color: #ff3838;
    font-weight: 600;
    margin: 0 0 20px;
}

.pricingTable .price-value .amount {
    font-size: 50px;
    line-height: 50px;
    display: inline-block;
}

.pricingTable .price-value .duration {
    font-size: 35px;
    line-height: 35px;
    opacity: 0.7;
}

.pricingTable .pricingTable-signup a {
    color: #fff;
    background: #ff5b5a;
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 12px 0;
    margin: 0 auto;
    border-radius: 50px;
    display: block;
    transition: all 0.3s ease 0s;
}

.pricingTable .pricingTable-signup a:hover {
    letter-spacing: 3px;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.3) inset;
}

.pricingTable.green:before,
.pricingTable.green .pricingTable-signup a {
    background: #77b852;
}

.pricingTable.green .pricing-icon,
.pricingTable.green .price-value {
    color: #77b852;
}

.pricingTable.blue:before,
.pricingTable.blue .pricingTable-signup a {
    background: #7f9bff;
}

.pricingTable.blue .pricing-icon,
.pricingTable.blue .price-value {
    color: #7f9bff;
}

@media only screen and (max-width: 990px) {
    .pricingTable {
        margin-bottom: 40px;
    }
}

.services {
    margin-top: 100px;
}
</style>