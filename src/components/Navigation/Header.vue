<template>
    <nav class="navbar navbar-expand-md navbar-dark">
		<div class="container-fluid">
			<router-link to="/home" class="navbar-brand pl-4"><img  class="images" src="../../assets/pictures/idlink1.png" alt="..."></router-link>
			<button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
				<span class="menu-icon-bar"></span>
				<span class="menu-icon-bar"></span>
				<span class="menu-icon-bar"></span>
				<span class="menu-icon-bar"></span>
			</button>	
			<div id="main-nav" class="collapse navbar-collapse">
				
				<ul class="navbar-nav ml-auto">				
					<li><router-link to="/" class="nav-item nav-link active"><i class="fas fa-home"></i> HOME</router-link></li>
					<li><router-link to="/solution" class="nav-item nav-link">SOLUTIONS</router-link></li>
					<li><router-link to="/services" class="nav-item nav-link">SERVICES</router-link></li>
					<li><router-link to="/about" class="nav-item nav-link">ABOUT</router-link></li>
					<li><router-link to="/contact" class="nav-item nav-link">CONTACT US</router-link></li>
					<li><router-link to="/login" class="nav-item nav-link"><span id="login" ><i class="far fa-user-circle"></i> LOG-IN</span></router-link></li>
				
				</ul>
				
			</div>
		</div>
	</nav>
</template>
<script>
export default {
    name:'Navbar',
}
</script>

<script>
jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');
		
		if (winWidth >= 768) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});
			
			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}
	
	$(window).on('resize', adjustNav);
	
	adjustNav();
});
</script>
<style src="./Header.css" lang="css"/>