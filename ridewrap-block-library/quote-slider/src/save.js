import { __ } from '@wordpress/i18n';
import {  RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div className='container container-wide container-flex-wrap'>
				<div className='col'>
					<h2 className='h2-style'>
						<span>
							{ attributes.title }
						</span>
					</h2>
					<div class="col-internal">
						<ul id="thumbnails" class="splide-desktop-thumbnails-wrapper">
							<li class="splide-desktop-thumbnail">
								<img height="150" width="200" src={attributes.quote_1_media_url} alt="Brand logo to control the quotes carousel"/>
							</li>
							<li class="splide-desktop-thumbnail">
								<img height="150" width="200" src={attributes.quote_2_media_url} alt="Brand logo to control the quotes carousel"/>
							</li>
							<li class="splide-desktop-thumbnail">
								<img height="150" width="200" src={attributes.quote_3_media_url} alt="Brand logo to control the quotes carousel"/>
							</li>
							<li class="splide-desktop-thumbnail">
								<img height="150" width="200" src={attributes.quote_4_media_url} alt="Brand logo to control the quotes carousel"/>
							</li>
							<li class="splide-desktop-thumbnail">
								<img height="150" width="200" src={attributes.quote_5_media_url} alt="Brand logo to control the quotes carousel"/>
							</li>
							<li class="splide-desktop-thumbnail">
								<img height="150" width="200" src={attributes.quote_6_media_url} alt="Brand logo to control the quotes carousel"/>
							</li>
						</ul>
						<a class="btn" href={attributes.link}> { __( 'All media', 'ridewrap' ) }</a>
					</div>
				</div>
				<div className='col'></div>
			</div>
			<section id="main-carousel" class="splide" aria-label="RideWrap quotes carousel">
				<div class="splide__track">
					<ul class="splide__list">
						<li class="splide__slide" style={'background-image:url(' + attributes.quote_1_cover_url + ');"'}>
							<img src={attributes.quote_1_media_url} alt="Brand logo"/>
							<div class="splide-quote">
								{ attributes.quote_1_text }
								<RichText.Content tagName="a" className="btn" value={ __('See media', 'ridewrap') } href={ attributes.quote_1_link } target="_blank" />
							</div>
						</li>
						<li class="splide__slide" style={'background-image:url(' + attributes.quote_2_cover_url + ');"'}>
							<img src={attributes.quote_2_media_url} alt="Brand logo"/>
							<div class="splide-quote">
								{ attributes.quote_2_text }
								<RichText.Content tagName="a" className="btn" value={ __('See media', 'ridewrap') } href={ attributes.quote_2_link } target="_blank" />
							</div>
						</li>
						<li class="splide__slide" style={'background-image:url(' + attributes.quote_3_cover_url + ');"'}>
							<img src={attributes.quote_3_media_url} alt="Brand logo"/>
							<div class="splide-quote">
								{ attributes.quote_3_text }
								<RichText.Content tagName="a" className="btn" value={ __('See media', 'ridewrap') } href={ attributes.quote_3_link } target="_blank" />
							</div>
						</li>
						<li class="splide__slide" style={'background-image:url(' + attributes.quote_4_cover_url + ');"'}>
							<img src={attributes.quote_4_media_url} alt="Brand logo"/>
							<div class="splide-quote">
								{ attributes.quote_4_text }
								<RichText.Content tagName="a" className="btn" value={ __('See media', 'ridewrap') } href={ attributes.quote_4_link } target="_blank" />					
							</div>
						</li>
						<li class="splide__slide" style={'background-image:url(' + attributes.quote_5_cover_url + ');"'}>
							<img src={attributes.quote_5_media_url} alt="Brand logo"/>
							<div class="splide-quote">
								{ attributes.quote_5_text }
								<RichText.Content tagName="a" className="btn" value={ __('See media', 'ridewrap') } href={ attributes.quote_5_link } target="_blank" />					
							</div>
						</li>
						<li class="splide__slide" style={'background-image:url(' + attributes.quote_6_cover_url + ');"'}>
							<img src={attributes.quote_6_media_url} alt="Brand logo"/>
							<div class="splide-quote">
								{ attributes.quote_6_text }
								<RichText.Content tagName="a" className="btn" value={ __('See media', 'ridewrap') } href={ attributes.quote_6_link } target="_blank" />					
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
