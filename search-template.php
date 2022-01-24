<?php
/** 
 * Template Name: Movie Search
 * Template Post Type: page
 * This file works as display search result of movies.
 * 
 * @package bootstrap-basic4
 */
get_header(); ?> 
<main id="main" class="col-md-12 site-main" role="main">
	<div class="container">
		<div class="row">
		  <!-- BEGIN SEARCH RESULT -->
		  <div class="col-md-12">
			<div class="grid search">
			  <div class="grid-body">
				<div class="row">
				  <!-- BEGIN RESULT -->
				  <div class="col-md-12">
					<h2><i class="fa fa-file-o"></i> <?php echo get_the_title($post->ID); ?></h2>
					<hr>
					<!-- BEGIN SEARCH INPUT -->
					<div class="input-group">
					  <input type="text" class="form-control" placeholder="Search keyword like red, green, blue, yellow" id="MovieSearch">
					  <span class="input-group-btn">
						<button class="btn btn-primary" id="search-button" type="button"><i class="fa fa-search"></i></button>
					  </span>
					</div>
					<!-- END SEARCH INPUT -->
					<div class="padding"></div>
					<!-- BEGIN AJAX LOADER -->
					<div class="align-items-center d-none" id="Loader">
						<div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
					</div>
					<!-- END AJAX LOADER -->
					<!-- BEGIN TABLE RESULT -->
					<div class="table-responsive">
						<table class="table table-hover">
							<tbody></tbody>
						</table>
					</div>
					<!-- END TABLE RESULT -->
				  </div>
				  <!-- END RESULT -->
				</div>
			  </div>
			</div>
		  </div>
		  <!-- END SEARCH RESULT -->
		</div>
	</div>
</main>
<?php get_footer();