<?php
/**
 * Plugin Name:       Ridewrap Block Library Plugin
 * Description:       Updated gutenberg blocks starter plugin
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Sam Medhurst
 * License:           test-license
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ridewrap-block-library
 *
 * @package           ridewrap-block-library
 */

$version = '1.0.0';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ridewrap_block_library_init() {
	register_block_type( __DIR__ . '/panel-slider-small/build' );
	register_block_type( __DIR__ . '/panel-small/build' );
	register_block_type( __DIR__ . '/feature-slider/build' );
	register_block_type( __DIR__ . '/feature-item/build' );
	register_block_type( __DIR__ . '/panel-slider/build' );
	// register_block_type( __DIR__ . '/panel/build' );
	register_block_type( __DIR__ . '/frame-protection/build' );
	register_block_type( __DIR__ . '/quote-slider/build' );
	register_block_type( __DIR__ . '/subheader/build' );
	register_block_type( __DIR__ . '/header-breaker/build' );
	register_block_type( __DIR__ . '/panel-wrapper-small/build' );
	// register_block_type( __DIR__ . '/panel-horizontal/build' );
	register_block_type( __DIR__ . '/post-cta-sticky/build' );
	// register_block_type( __DIR__ . '/panel-full-width/build' );
	register_block_type( __DIR__ . '/banner-image-medium/build' );
	register_block_type( __DIR__ . '/sub-menu/build' );
	register_block_type( __DIR__ . '/text-block-texture/build' );
	register_block_type( __DIR__ . '/partner-quicklink/build' );
	register_block_type( __DIR__ . '/tab-quicklink/build' );

	// Register dynamic blocks.
	register_block_type(
		__DIR__ . '/latest-posts/build',
		array(
			'attributes'      => array(
				'title' => array(
					'default' => 'Stories & News',
					'type'    => 'string',
				),
			),
			'render_callback' => 'render_block_latest_posts',
		)
	);

	// Register dynamic blocks.
	register_block_type(
		__DIR__ . '/panel-dynamic/build',
		array(
			'attributes'      => array(
				'title' => array(
					'default' => 'tailored protection™',
					'type'    => 'string',
				),
				'paragraph' => array(
					'type'    => 'string',
				),
				'link' => array(
					'type'    => 'string',
				),
				'cta_text' => array(
					'type'    => 'string',
					'default' => 'Buy now',
				),
				'progress_circle_show' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'progress_circle_position' => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'progress_circle_percentage' => array(
					'type'    => 'string',
					'default' => 'percentage-95',
				),
				'add_to_cart_link' => array(
					'type'    => 'string',
					'default' => '',
				),
				'add_to_cart_show' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'product_price_show' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'id' => array(
					'type'    => 'string',
					'default' => '',
				),
				'panel_size' => array(
					'type'    => 'string',
					'default' => 'one-third',
				),
			),
			'render_callback' => 'render_block_dynamic_panel',
		)
	);

	// Register dynamic blocks.
	register_block_type(
		__DIR__ . '/localization-wrapper/build',
		array(
			'attributes'      => array(
				'title' => array(
					'default' => 'tailored protection™',
					'type'    => 'string',
				),
				'is_default_block' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale' => array(
					'type'    => 'string',
					'default' => '/ca/',
				),
				'block_locale_us_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ca_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ca_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_au_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_gb_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_nz_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_de_de' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_fr_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_fr_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ph_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_mx_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_mx_es' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_es_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_es_es' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_sg_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_it_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ch_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ch_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ch_de' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_nl_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_nl_nl' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_se_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_be_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_be_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_id_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_cl_es' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_cl_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_za_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_ie_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_no_es' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_hk_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_fi_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_at_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_jp_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_gr_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_pt_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_dk_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_cz_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_il_en' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_fr_fr' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_at_de' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_be_de' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'block_locale_be_nl' => array(
					'type'    => 'boolean',
					'default' => false,
				),
			),
			'render_callback' => 'render_block_localization_wrapper',
		)
	);
}
add_action( 'init', 'ridewrap_block_library_init' );

/**
 * Enqueue plugin js and css.
 */
function ridewrap_block_library_assets() {
	global $version;

	// Splide.js Base - https://splidejs.com.
	wp_enqueue_script( 'splide-js', plugin_dir_url( __FILE__ ) . '/vendor/splide/splide.min.js', array(), $version, false );
	wp_enqueue_style( 'splide-style', plugin_dir_url( __FILE__ ) . '/vendor/splide/splide-core.min.css', array(), $version, false );

	// Splide.js Custom Scripts.
	wp_enqueue_script( 'splide-custom-js', plugin_dir_url( __FILE__ ) . '/assets/js/splide-custom.js', array(), $version, false );

	// Plugin shared scripts and styles.
	wp_enqueue_script( 'shared-js', plugin_dir_url( __FILE__ ) . '/assets/js/shared.js', array(), $version, false );
	wp_enqueue_style( 'block-library-shared', plugin_dir_url( __FILE__ ) . '/assets/css/shared-css-compiled.css', array(), $version, false );

	// Dynamic block styles.
	wp_enqueue_style(
		'latest-posts-block-style',
		plugin_dir_url( __FILE__ ) . '/latest-posts/build/style-index.css',
		array(),
		$version,
		false
	);
}
add_action( 'wp_enqueue_scripts', 'ridewrap_block_library_assets' );

/**
 * Enqueue styles to page editor as well.
 */
function ridewrap_custom_editor_styles() {
	wp_enqueue_style(
		'ridewrap-custom-editor-styles',
		plugin_dir_url( __FILE__ ) . '/assets/css/shared-css-compiled.css',
		array(),
		$version,
		false
	);
}
add_action( 'enqueue_block_editor_assets', 'ridewrap_custom_editor_styles' );

/**
 * Allow SVG MIME Type in Media Upload
 *
 * @param array $mimes Mime types keyed by the file extension regex corresponding to those types.
 */
function ridewrap_block_library_allow_svg( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'ridewrap_block_library_allow_svg' );

/**
 * Create new Gutenberg Block Category.
 */
function ridewrap_block_library_add_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'ridewrap-blocks',
				'title' => __( 'Ridewrap Blocks', 'ridewrap-blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'ridewrap_block_library_add_category', 10, 2 );

/**
 * Dynamic block render: Latest Posts.
 *
 * @param array $attributes Block attributes, defined in php, also in js at [block-name]/src/attributes.js.
 * @param array $content    Block content.
 */
function render_block_latest_posts( $attributes, $content ) {
	$block_text   = esc_html( $attributes['title'] );
	$stories_page = home_url() . '/articles';

	$html = "<div class='wp-block-ridewrap-block-latest-posts'>
				<div class='container container-wide container-flex-wrap'>
					<div class='col'>
						<section id='main-carousel-sec' class='splide' aria-label='RideWrap quotes carousel'>
							<div class='splide__track'>
								<ul class='splide__list'>
								"
								.
								latest_posts_block_slide_loop_secondary()
								.
								"
								</ul>
							</div>
						</section>
					</div>
					<div class='col'>
						<h2 class='h2-style'>
							<span>
							"
							. $block_text .
							"
							</span>
						</h2>
						<div class='col-internal'>
							<ul id='thumbnails' class='splide-desktop-thumbnails-wrapper'>
							"
							. latest_posts_block_slide_loop() .
							"
							</ul>
							<a class='btn' href=" . $stories_page . '>More stories</a>
						</div>
					</div>
				</div>
			</div>';
	return $html;
}

/**
 * Latest Posts Block: Posts loop for slides.
 */
function latest_posts_block_slide_loop() {
	$result = '';

	$custom_posts = new WP_Query(
		array(
			'post_status'      => 'publish',
			'posts_per_page'   => 2,
			'cat'              => 'article',
			'category__not_in' => 178,
		)
	);

	while ( $custom_posts->have_posts() ) {
		$custom_posts->the_post();
		$result .= "<li class='splide-desktop-thumbnail-sec'>" . esc_html( get_the_title() ) . '</li>';
	}
	wp_reset_postdata();
	return $result;
}

/**
 * Latest Posts Block: Secondary posts loop for slides.
 */
function latest_posts_block_slide_loop_secondary() {
	$result = '';

	$custom_posts_sec = new WP_Query(
		array(
			'post_status'      => 'publish',
			'posts_per_page'   => 2,
			'cat'              => 'article',
			'category__not_in' => 178,
		)
	);

	while ( $custom_posts_sec->have_posts() ) {
		$custom_posts_sec->the_post();
		$url = wp_get_attachment_url( get_post_thumbnail_id( $post->ID ), 'full' );

		$result .= "<li class='splide__slide lazy-bg-img' style='background-image:url( " . esc_url( $url ) . " );'>
			<div class='splide-quote'>
				<h3 class='h5-style'>"
					. esc_html( get_the_title() ) .
				'</h3>
				<p>'
				. esc_html( get_the_excerpt() ) .
				"</p>
				<a class='btn' href=" . esc_url( get_the_permalink() ) . '>Read article</a>
			</div>
		</li>';
	}

	wp_reset_postdata();
	return $result;
}

/**
 * Dynamic block render: Panel Dynamic.
 *
 * @param array $attributes Block attributes, defined in php, also in js at [block-name]/src/attributes.js.
 * @param array $content    Block content.
 */
function render_block_dynamic_panel( $attributes, $content ) {
	/**
	 * These variables have to match exactly the attributes set in the block attributes.js file.
	 */
	$att_title                      = esc_html( $attributes['title'] );
	$att_link                       = esc_html( $attributes['link'] );
	$att_paragraph                  = esc_html( $attributes['paragraph'] );
	$att_progress_circle_show       = $attributes['progress_circle_show'];
	$att_progress_circle_position   = esc_html( $attributes['progress_circle_position'] );
	$att_progress_circle_percentage = esc_html( $attributes['progress_circle_percentage'] );
	$att_show_price                 = $attributes['product_price_show'];
	$att_add_to_cart_show           = $attributes['add_to_cart_show'];
	$att_cta_text                   = esc_html( $attributes['cta_text'] );
	$att_product_id                 = esc_html( $attributes['id'] );
	$stories_page                   = home_url() . '/articles';
	$home_url                       = home_url();
	$att_panel_size                 = $attributes['panel_size'];

	// Progress circle positioning class.
	$class_string = '';
	if ( 'left' === $att_progress_circle_position ) {
		$class_string = 'progress-circle-left';
	} else {
		$class_string = '';
	}

	// Progress circle exists class.
	$progress_circle_wrapper_class = '';
	if ( true === $att_progress_circle_show ) {
		$progress_circle_wrapper_class = ' progress-circle-panel';
	} else {
		$progress_circle_wrapper_class = '';
	}

	// Product price display class.
	$show_price = '';
	if ( true === $att_show_price ) {
		$show_price = ' show-price';
	}

	// Product Add to cart button display class.
	$add_to_cart_btn = '';
	if ( true === $att_add_to_cart_show ) {
		$add_to_cart_btn = ' show-cart-btn';
	}

	// Block title sanitization.
	$title              = strtolower( $att_title );
	$title_sanitize     = str_replace( ' ', '_', $title );
	$title_sanitize_sec = str_replace( '™', '', $title_sanitize );

	// Progress circle HTML.
	if ( $att_progress_circle_show ) {
		$progress_circle = "<div class='" . $title_sanitize_sec . ' progress-circle-wrap ' . $class_string . ' ' . $att_progress_circle_percentage . "'>
								<div class='progress-circle'>
									<div class='mask full'>
										<div class='fill'></div>
									</div>
									<div class='mask half'>
										<div class='fill'></div>
									</div>
									<div class='progress-circle-inside'></div>
								</div>
							</div>";
	}

	/**
	 * Display WooCommerce product shortcode HTML if conditions are met.
	 * More info on the shortcode used here - https://woocommerce.com/document/woocommerce-shortcodes/
	 */
	$wc_product_shortcode = '';
	if ( true === $att_add_to_cart_show || true === $att_show_price ) {
		$wc_product_shortcode = do_shortcode( "[add_to_cart id='" . $att_product_id . "']" );
	}

	/**
	 * This is the HTML that is returned to the front end.
	 */
	$html = "<li class='splide__slide " . $att_panel_size . $progress_circle_wrapper_class . $show_price . $add_to_cart_btn . "'>
				<div class='wp-block-ridewrap-block-panel-dynamic'>
					<a href='" . $home_url . '/' . $att_link . "'>
						<div class='block-internal'>
							<h3 class='h3-style'> " . $att_title . ' </h3>
							<p> ' . $att_paragraph . ' </p>
							' . $progress_circle . '
						</div>
						' . $content . $wc_product_shortcode . "
						<h4 class='h4-style'> " . $att_cta_text . ' </h3>
					</a>
				</div>
			</li>';
	return $html;
}

/**
 * Dynamic block render: Panel Dynamic.
 *
 * @param array $attributes Block attributes, defined in php, also in js at [block-name]/src/attributes.js.
 * @param array $content    Block content.
 */
function render_block_localization_wrapper( $attributes, $content ) {
	/**
	 * These variables have to match exactly the attributes set in the block attributes.js file.
	 */
	$att_title      = esc_html( $attributes['title'] );
	$att_is_default = esc_html( $attributes['is_default_block'] );
	$att_locale     = esc_html( $attributes['block_locale'] );

	$att_locale_us_en = esc_html( $attributes['block_locale_us_en'] );
	$att_locale_ca_en = esc_html( $attributes['block_locale_ca_en'] );
	$att_locale_ca_fr = esc_html( $attributes['block_locale_ca_fr'] );
	$att_locale_au_en = esc_html( $attributes['block_locale_au_en'] );
	$att_locale_gb_en = esc_html( $attributes['block_locale_gb_en'] );
	$att_locale_nz_en = esc_html( $attributes['block_locale_nz_en'] );
	$att_locale_de_de = esc_html( $attributes['block_locale_de_de'] );
	$att_locale_fr_fr = esc_html( $attributes['block_locale_fr_fr'] );
	$att_locale_fr_en = esc_html( $attributes['block_locale_fr_en'] );
	$att_locale_ph_en = esc_html( $attributes['block_locale_ph_en'] );
	$att_locale_mx_en = esc_html( $attributes['block_locale_mx_en'] );
	$att_locale_mx_es = esc_html( $attributes['block_locale_mx_es'] );
	$att_locale_es_en = esc_html( $attributes['block_locale_es_en'] );
	$att_locale_es_es = esc_html( $attributes['block_locale_es_es'] );
	$att_locale_sg_en = esc_html( $attributes['block_locale_sg_en'] );
	$att_locale_it_en = esc_html( $attributes['block_locale_it_en'] );
	$att_locale_ch_en = esc_html( $attributes['block_locale_ch_en'] );
	$att_locale_ch_fr = esc_html( $attributes['block_locale_ch_fr'] );
	$att_locale_ch_de = esc_html( $attributes['block_locale_ch_de'] );
	$att_locale_nl_en = esc_html( $attributes['block_locale_nl_en'] );
	$att_locale_nl_nl = esc_html( $attributes['block_locale_nl_nl'] );
	$att_locale_se_en = esc_html( $attributes['block_locale_se_en'] );
	$att_locale_be_en = esc_html( $attributes['block_locale_be_en'] );
	$att_locale_be_fr = esc_html( $attributes['block_locale_be_fr'] );
	$att_locale_id_en = esc_html( $attributes['block_locale_id_en'] );
	$att_locale_cl_es = esc_html( $attributes['block_locale_cl_es'] );
	$att_locale_cl_en = esc_html( $attributes['block_locale_cl_en'] );
	$att_locale_za_en = esc_html( $attributes['block_locale_za_en'] );
	$att_locale_ie_en = esc_html( $attributes['block_locale_ie_en'] );
	$att_locale_no_es = esc_html( $attributes['block_locale_no_es'] );
	$att_locale_hk_en = esc_html( $attributes['block_locale_hk_en'] );
	$att_locale_fi_en = esc_html( $attributes['block_locale_fi_en'] );
	$att_locale_at_en = esc_html( $attributes['block_locale_at_en'] );
	$att_locale_jp_en = esc_html( $attributes['block_locale_jp_en'] );
	$att_locale_gr_en = esc_html( $attributes['block_locale_gr_en'] );
	$att_locale_pt_en = esc_html( $attributes['block_locale_pt_en'] );
	$att_locale_dk_en = esc_html( $attributes['block_locale_dk_en'] );
	$att_locale_cz_en = esc_html( $attributes['block_locale_cz_en'] );
	$att_locale_il_en = esc_html( $attributes['block_locale_il_en'] );
	$att_locale_fr_fr = esc_html( $attributes['block_locale_fr_fr'] );
	$att_locale_at_de = esc_html( $attributes['block_locale_at_de'] );
	$att_locale_be_de = esc_html( $attributes['block_locale_be_de'] );
	$att_locale_be_nl = esc_html( $attributes['block_locale_be_nl'] );

	// First set our codes to equal nothing.
	$att_locale_us_en_code = '';
	$att_locale_ca_en_code = '';
	$att_locale_ca_fr_code = '';
	$att_locale_au_en_code = '';
	$att_locale_gb_en_code = '';
	$att_locale_nz_en_code = '';
	$att_locale_de_de_code = '';
	$att_locale_fr_fr_code = '';
	$att_locale_fr_en_code = '';
	$att_locale_ph_en_code = '';
	$att_locale_mx_en_code = '';
	$att_locale_mx_es_code = '';
	$att_locale_es_en_code = '';
	$att_locale_es_es_code = '';
	$att_locale_sg_en_code = '';
	$att_locale_it_en_code = '';
	$att_locale_ch_en_code = '';
	$att_locale_ch_fr_code = '';
	$att_locale_ch_de_code = '';
	$att_locale_nl_en_code = '';
	$att_locale_nl_nl_code = '';
	$att_locale_se_en_code = '';
	$att_locale_be_en_code = '';
	$att_locale_be_fr_code = '';
	$att_locale_id_en_code = '';
	$att_locale_cl_es_code = '';
	$att_locale_cl_en_code = '';
	$att_locale_za_en_code = '';
	$att_locale_ie_en_code = '';
	$att_locale_no_es_code = '';
	$att_locale_hk_en_code = '';
	$att_locale_fi_en_code = '';
	$att_locale_at_en_code = '';
	$att_locale_jp_en_code = '';
	$att_locale_gr_en_code = '';
	$att_locale_pt_en_code = '';
	$att_locale_dk_en_code = '';
	$att_locale_cz_en_code = '';
	$att_locale_il_en_code = '';
	$att_locale_fr_fr_code = '';
	$att_locale_at_de_code = '';
	$att_locale_be_de_code = '';
	$att_locale_be_nl_code = '';

	// Assign a locale value if a country was assigned to the block via the UI.
	if ( 1 == $att_locale_us_en ) {
		$att_locale_us_en_code = '/us/en';
	}
	if ( 1 == $att_locale_ca_en ) {
		$att_locale_ca_en_code = '/ca/en';
	}
	if ( 1 == $att_locale_ca_fr ) {
		$att_locale_ca_fr_code = '/ca/fr';
	}
	if ( 1 == $att_locale_au_en ) {
		$att_locale_au_en_code = '/au/en';
	}
	if ( 1 == $att_locale_gb_en ) {
		$att_locale_gb_en_code = '/gb/en';
	}
	if ( 1 == $att_locale_nz_en ) {
		$att_locale_nz_en_code = '/nz/en';
	}
	if ( 1 == $att_locale_de_de ) {
		$att_locale_de_de_code = '/de/de';
	}
	if ( 1 == $att_locale_fr_fr ) {
		$att_locale_fr_fr_code = '/fr/fr';
	}
	if ( 1 == $att_locale_fr_en ) {
		$att_locale_fr_en_code = '/fr/en';
	}
	if ( 1 == $att_locale_ph_en ) {
		$att_locale_ph_en_code = '/ph/en';
	}
	if ( 1 == $att_locale_mx_en ) {
		$att_locale_mx_en_code = '/mx/en';
	}
	if ( 1 == $att_locale_mx_es ) {
		$att_locale_mx_es_code = '/mx/es';
	}
	if ( 1 == $att_locale_es_en ) {
		$att_locale_es_en_code = '/es/en';
	}
	if ( 1 == $att_locale_es_es ) {
		$att_locale_es_es_code = '/es/es';
	}
	if ( 1 == $att_locale_sg_en ) {
		$att_locale_sg_en_code = '/sg/en';
	}
	if ( 1 == $att_locale_it_en ) {
		$att_locale_it_en_code = '/it/en';
	}
	if ( 1 == $att_locale_ch_en ) {
		$att_locale_ch_en_code = '/ch/en';
	}
	if ( 1 == $att_locale_ch_fr ) {
		$att_locale_ch_fr_code = '/ch/fr';
	}
	if ( 1 == $att_locale_ch_de ) {
		$att_locale_ch_de_code = '/ch/de';
	}
	if ( 1 == $att_locale_nl_en ) {
		$att_locale_nl_en_code = '/nl/en';
	}
	if ( 1 == $att_locale_nl_nl ) {
		$att_locale_nl_nl_code = '/nl/nl';
	}
	if ( 1 == $att_locale_se_en ) {
		$att_locale_se_en_code = '/se/en';
	}
	if ( 1 == $att_locale_be_en ) {
		$att_locale_be_en_code = '/be/en';
	}
	if ( 1 == $att_locale_be_fr ) {
		$att_locale_be_fr_code = '/be/fr';
	}
	if ( 1 == $att_locale_id_en ) {
		$att_locale_id_en_code = '/id/en';
	}
	if ( 1 == $att_locale_cl_es ) {
		$att_locale_cl_es_code = '/cl/es';
	}
	if ( 1 == $att_locale_cl_en ) {
		$att_locale_cl_en_code = '/cl/en';
	}
	if ( 1 == $att_locale_za_en ) {
		$att_locale_za_en_code = '/za/en';
	}
	if ( 1 == $att_locale_ie_en ) {
		$att_locale_ie_en_code = '/ie/en';
	}
	if ( 1 == $att_locale_no_es ) {
		$att_locale_no_es_code = '/no/es';
	}
	if ( 1 == $att_locale_hk_en ) {
		$att_locale_hk_en_code = '/hk/en';
	}
	if ( 1 == $att_locale_fi_en ) {
		$att_locale_fi_en_code = '/fi/en';
	}
	if ( 1 == $att_locale_at_en ) {
		$att_locale_at_en_code = '/at/en';
	}
	if ( 1 == $att_locale_jp_en ) {
		$att_locale_jp_en_code = '/jp/en';
	}
	if ( 1 == $att_locale_gr_en ) {
		$att_locale_gr_en_code = '/gr/en';
	}
	if ( 1 == $att_locale_pt_en ) {
		$att_locale_pt_en_code = '/pt/en';
	}
	if ( 1 == $att_locale_dk_en ) {
		$att_locale_dk_en_code = '/dk/en';
	}
	if ( 1 == $att_locale_cz_en ) {
		$att_locale_cz_en_code = '/cz/en';
	}
	if ( 1 == $att_locale_il_en ) {
		$att_locale_il_en_code = '/il/en';
	}
	if ( 1 == $att_locale_fr_fr ) {
		$att_locale_fr_fr_code = '/fr/fr';
	}
	if ( 1 == $att_locale_at_de ) {
		$att_locale_at_de_code = '/at/de';
	}
	if ( 1 == $att_locale_be_de ) {
		$att_locale_be_de_code = '/be/de';
	}
	if ( 1 == $att_locale_be_nl ) {
		$att_locale_be_nl_code = '/be/nl';
	}

	// Create our array of terms which will be used to search the URL.
	$search = array(
		$att_locale_us_en_code,
		$att_locale_ca_en_code,
		$att_locale_ca_fr_code,
		$att_locale_au_en_code,
		$att_locale_gb_en_code,
		$att_locale_nz_en_code,
		$att_locale_de_de_code,
		$att_locale_fr_fr_code,
		$att_locale_fr_en_code,
		$att_locale_ph_en_code,
		$att_locale_mx_en_code,
		$att_locale_mx_es_code,
		$att_locale_es_en_code,
		$att_locale_es_es_code,
		$att_locale_sg_en_code,
		$att_locale_it_en_code,
		$att_locale_ch_en_code,
		$att_locale_ch_fr_code,
		$att_locale_ch_de_code,
		$att_locale_nl_en_code,
		$att_locale_nl_nl_code,
		$att_locale_se_en_code,
		$att_locale_be_en_code,
		$att_locale_be_fr_code,
		$att_locale_id_en_code,
		$att_locale_cl_es_code,
		$att_locale_cl_en_code,
		$att_locale_za_en_code,
		$att_locale_ie_en_code,
		$att_locale_no_es_code,
		$att_locale_hk_en_code,
		$att_locale_fi_en_code,
		$att_locale_at_en_code,
		$att_locale_jp_en_code,
		$att_locale_gr_en_code,
		$att_locale_pt_en_code,
		$att_locale_dk_en_code,
		$att_locale_cz_en_code,
		$att_locale_il_en_code,
		$att_locale_fr_fr_code,
		$att_locale_at_de_code,
		$att_locale_be_de_code,
		$att_locale_be_nl_code,
	);

	$home_url = home_url();

	// Block title sanitization.
	$title              = strtolower( $att_title );
	$title_sanitize     = str_replace( ' ', '_', $title );
	$title_sanitize_sec = str_replace( '™', '', $title_sanitize );

	/**
	 * This is the HTML that is returned to the front end.
	 */
	$html = $content;

	$current_url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

	$match = ( str_replace( $search, '', $current_url ) != $current_url );

	if ( 1 == $att_is_default ) {
		if ( true == $match ) {
			return;
		} else {
			return $html;
		}
	} else {
		if ( ! array_filter( $search ) ) {
			return $html;
		} else {
			if ( true == $match ) {
				return $html;
			} else {
				return;
			}
		}
	}

}
