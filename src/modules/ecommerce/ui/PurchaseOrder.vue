<template>
	<div>
		<b-container
			style="background:rgba(0, 0, 0, 0.24);  padding: 15px 15px 15px 15px;"		>
			<br />
			<h2 style="text-align:center;">SHIP TO</h2>
			<form class="mt" @submit.prevent="register_company" autocomplete="off">
				<div></div>
				<div class="row">
					<div class="col-md-12 col-lg-12">
						<b-form-group label="Company Name:">
							<input
								id="company"
								ref="name"
								class="form-control"
								type="text"
								required
								placeholder="Company Name"
								style="background:rgba(0, 0, 0, 0.24)"
							/>
						</b-form-group>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-lg-12">
						<b-form-group label="Department:">
							<input
								id="field"
								ref="field"
								class="form-control"
								type="Department"
								required
								placeholder="Department"
								style="background:rgba(0, 0, 0, 0.24)"
							/>
						</b-form-group>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-lg-12">
						<b-form-group label="Street Address:">
							<input
								id="location"
								ref="location"
								class="form-control"
								type="location"
								required
								placeholder="Street Address"
								style="background:rgba(0, 0, 0, 0.24)"
							/>
						</b-form-group>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-lg-12">
						<b-form-group label="City:">
							<input
								id="country"
								ref="country"
								class="form-control"
								type="country"
								required
								placeholder="City"
								style="background:rgba(0, 0, 0, 0.24)"
							/>
						</b-form-group>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-lg-12">
						<b-form-group label="Phone:">
							<input
								id="state"
								ref="state"
								class="form-control"
								type="number"
								required
								placeholder="state"
								style="background:rgba(0, 0, 0, 0.24)"
							/>
						</b-form-group>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-lg-12">
						<b-form-group label="P.O. Number:">
							<input
								id="country"
								ref="country"
								class="form-control"
								type="country"
								required
								placeholder="P.O. Number"
								style="background:rgba(0, 0, 0, 0.24)"
							/>
						</b-form-group>
					</div>
				</div>
			</form>
		</b-container>
	</div>
</template>

<script>
export default {
	name: "PurchaseOrder"
};
</script>
