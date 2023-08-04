import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

// MTB bike animation components.
import mtbImage2 from "./images/mtb/2.png";
import mtbImage3 from "./images/mtb/3.png";
import mtbImage4 from "./images/mtb/4.png";
import mtbImage5 from "./images/mtb/5.png";
import mtbImage6 from "./images/mtb/6.png";
import mtbImage7 from "./images/mtb/7.png";
import mtbImage8 from "./images/mtb/8.png";

// Road bike animation components.
import roadImage2 from "./images/road/2.png";
import roadImage3 from "./images/road/3.png";
import roadImage4 from "./images/road/4.png";
import roadImage5 from "./images/road/5.png";
import roadImage6 from "./images/road/6.png";
import roadImage7 from "./images/road/7.png";
import roadImage8 from "./images/road/8.png";
import roadImage9 from "./images/road/9.png";
import roadImage10 from "./images/road/10.png";

// City bike animation components.
import cityImage2 from "./images/city/2.png";
import cityImage3 from "./images/city/3.png";
import cityImage4 from "./images/city/4.png";
import cityImage5 from "./images/city/5.png";
import cityImage6 from "./images/city/6.png";
import cityImage7 from "./images/city/7.png";
import cityImage8 from "./images/city/8.png";

// E bike animation components.
import eImage2 from "./images/e/2.png";
import eImage3 from "./images/e/3.png";
import eImage4 from "./images/e/4.png";
import eImage5 from "./images/e/5.png";
import eImage6 from "./images/e/6.png";
import eImage7 from "./images/e/7.png";
import eImage8 from "./images/e/8.png";
import eImage9 from "./images/e/9.png";

// Kids bike animation components.
import kidsImage2 from "./images/kids/2.png";
import kidsImage3 from "./images/kids/3.png";
import kidsImage4 from "./images/kids/4.png";
import kidsImage5 from "./images/kids/5.png";
import kidsImage6 from "./images/kids/6.png";
import kidsImage7 from "./images/kids/7.png";
import kidsImage8 from "./images/kids/8.png";

// Essential bike animation components.
import essentialImage2 from "./images/essential/2.png";
import essentialImage3 from "./images/essential/3.png";
import essentialImage4 from "./images/essential/4.png";
import essentialImage5 from "./images/essential/5.png";
import essentialImage6 from "./images/essential/6.png";

// Covered bike animation components.
import coveredImage2 from "./images/covered/2.png";
import coveredImage3 from "./images/covered/3.png";
import coveredImage4 from "./images/covered/4.png";
import coveredImage5 from "./images/covered/5.png";
import coveredImage6 from "./images/covered/6.png";
import coveredImage7 from "./images/covered/7.png";

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: attributes.block_color
	});

	const bikeAnimationGraphic = function() {
		if ( attributes.bike_type == 'bike-type-mtb' ) {

			let imageAltText = 'mtb frame protection animated component';

			return (
				<div class="frame-protection-anim-inner bike-type-mtb">
					<div class="mtb-frame-protection-anim-img-two">
						<img src={mtbImage2} alt={ imageAltText } width="100" height="200" />
					</div>
					<div class="mtb-frame-protection-anim-img-three">
						<img src={mtbImage3} alt={ imageAltText } width="200" height="325" />
					</div>
					<div class="mtb-frame-protection-anim-img-four">
						<img src={mtbImage4} alt={ imageAltText } width="350" height="55" />
					</div>
					<div class="mtb-frame-protection-anim-img-five">
						<img src={mtbImage5} alt={ imageAltText } width="355" height="190" />
					</div>
					<div class="mtb-frame-protection-anim-img-six">
						<img src={mtbImage6} alt={ imageAltText } width="120" height="290" />
					</div>
					<div class="mtb-frame-protection-anim-img-seven">
						<img src={mtbImage7} alt={ imageAltText } width="315" height="200" />
					</div>
					<div class="mtb-frame-protection-anim-img-eight">
						<img src={mtbImage8} alt={ imageAltText } width="120" height="120" />
					</div>
				</div>
			);
		} else if ( attributes.bike_type == 'bike-type-road' ) {

			let imageAltText = 'road frame protection animated component';

			return (
				<div class="frame-protection-anim-inner bike-type-road">
					<div class="road-frame-protection-anim-img-two">
						<img src={roadImage2} alt={ imageAltText } width="100" height="150" />
					</div>
					<div class="road-frame-protection-anim-img-three">
						<img src={roadImage3} alt={ imageAltText } width="275" height="350" />
					</div>
					<div class="road-frame-protection-anim-img-four">
						<img src={roadImage4} alt={ imageAltText } width="375" height="100" />
					</div>
					<div class="road-frame-protection-anim-img-five">
						<img src={roadImage5} alt={ imageAltText } width="225" height="275" />
					</div>
					<div class="road-frame-protection-anim-img-six">
						<img src={roadImage6} alt={ imageAltText } width="120" height="300" />
					</div>
					<div class="road-frame-protection-anim-img-seven">
						<img src={roadImage7} alt={ imageAltText } width="50" height="100" />
					</div>
					<div class="road-frame-protection-anim-img-eight">
						<img src={roadImage8} alt={ imageAltText } width="300" height="100" />
					</div>
					<div class="road-frame-protection-anim-img-nine">
						<img src={roadImage9} alt={ imageAltText } width="150" height="260" />
					</div>
					<div class="road-frame-protection-anim-img-ten">
						<img src={roadImage10} alt={ imageAltText } width="50" height="25" />
					</div>
				</div>
			);
		} else if ( attributes.bike_type == 'bike-type-gravel' ) { // Use the same components and styling as road animation.

			let imageAltText = 'gravel frame protection animated component';

			return (
				<div class="frame-protection-anim-inner bike-type-road">
					<div class="road-frame-protection-anim-img-two">
						<img src={roadImage2} alt={ imageAltText } width="100" height="150" />
					</div>
					<div class="road-frame-protection-anim-img-three">
						<img src={roadImage3} alt={ imageAltText } width="275" height="350" />
					</div>
					<div class="road-frame-protection-anim-img-four">
						<img src={roadImage4} alt={ imageAltText } width="375" height="100" />
					</div>
					<div class="road-frame-protection-anim-img-five">
						<img src={roadImage5} alt={ imageAltText } width="225" height="275" />
					</div>
					<div class="road-frame-protection-anim-img-six">
						<img src={roadImage6} alt={ imageAltText } width="120" height="300" />
					</div>
					<div class="road-frame-protection-anim-img-seven">
						<img src={roadImage7} alt={ imageAltText } width="50" height="100" />
					</div>
					<div class="road-frame-protection-anim-img-eight">
						<img src={roadImage8} alt={ imageAltText } width="300" height="100" />
					</div>
					<div class="road-frame-protection-anim-img-nine">
						<img src={roadImage9} alt={ imageAltText } width="150" height="260" />
					</div>
					<div class="road-frame-protection-anim-img-ten">
						<img src={roadImage10} alt={ imageAltText } width="50" height="25" />
					</div>
				</div>
			);
		} else if ( attributes.bike_type == 'bike-type-city' ) {

			let imageAltText = 'city frame protection animated component';

			return (
				<div class="frame-protection-anim-inner bike-type-city">
					<div class="city-frame-protection-anim-img-two">
						<img src={cityImage2} alt={ imageAltText } width="60" height="100" />
					</div>
					<div class="city-frame-protection-anim-img-three">
						<img src={cityImage3} alt={ imageAltText } width="275" height="350" />
					</div>
					<div class="city-frame-protection-anim-img-four">
						<img src={cityImage4} alt={ imageAltText } width="350" height="75" />
					</div>
					<div class="city-frame-protection-anim-img-five">
						<img src={cityImage5} alt={ imageAltText } width="250" height="230" />
					</div>
					<div class="city-frame-protection-anim-img-six">
						<img src={cityImage6} alt={ imageAltText } width="100" height="290" />
					</div>
					<div class="city-frame-protection-anim-img-seven">
						<img src={cityImage7} alt={ imageAltText } width="325" height="275" />
					</div>
					<div class="city-frame-protection-anim-img-eight">
						<img src={cityImage8} alt={ imageAltText } width="150" height="275" />
					</div>
				</div>
			);
		} else if ( attributes.bike_type == 'bike-type-e' ) {

			let imageAltText = 'e frame protection animated component';

			return (
				<div class="frame-protection-anim-inner bike-type-e">
					<div class="e-frame-protection-anim-img-two">
						<img src={eImage2} alt={ imageAltText } width="130" height="175" />
					</div>
					<div class="e-frame-protection-anim-img-three">
						<img src={eImage3} alt={ imageAltText } width="150" height="280" />
					</div>
					<div class="e-frame-protection-anim-img-four">
						<img src={eImage4} alt={ imageAltText } width="310" height="60" />
					</div>
					<div class="e-frame-protection-anim-img-five">
						<img src={eImage5} alt={ imageAltText } width="315" height="160" />
					</div>
					<div class="e-frame-protection-anim-img-six">
						<img src={eImage6} alt={ imageAltText } width="45" height="100" />
					</div>
					<div class="e-frame-protection-anim-img-seven">
						<img src={eImage7} alt={ imageAltText } width="90" height="130" />
					</div>
					<div class="e-frame-protection-anim-img-eight">
						<img src={eImage8} alt={ imageAltText } width="125" height="125" />
					</div>
					<div class="e-frame-protection-anim-img-nine">
						<img src={eImage9} alt={ imageAltText } width="280" height="180" />
					</div>
				</div>
			);
		} else if ( attributes.bike_type == 'bike-type-kids' ) {

			let imageAltText = 'kids frame protection animated component';

			return (
				<div class="frame-protection-anim-inner bike-type-kids">
					<div class="kids-frame-protection-anim-img-two">
						<img src={kidsImage2} alt={ imageAltText } width="75" height="110" />
					</div>
					<div class="kids-frame-protection-anim-img-three">
						<img src={kidsImage3} alt={ imageAltText } width="250" height="300" />
					</div>
					<div class="kids-frame-protection-anim-img-four">
						<img src={kidsImage4} alt={ imageAltText } width="260" height="30" />
					</div>
					<div class="kids-frame-protection-anim-img-five">
						<img src={kidsImage5} alt={ imageAltText } width="275" height="190" />
					</div>
					<div class="kids-frame-protection-anim-img-six">
						<img src={kidsImage6} alt={ imageAltText } width="80" height="195" />
					</div>
					<div class="kids-frame-protection-anim-img-seven">
						<img src={kidsImage7} alt={ imageAltText } width="240" height="150" />
					</div>
					<div class="kids-frame-protection-anim-img-eight">
						<img src={kidsImage8} alt={ imageAltText } width="160" height="260" />
					</div>
				</div>
			);
		} else if ( attributes.bike_type == 'bike-type-essential' ) {

			let imageAltText = 'essential frame protection animated component';

			return (
				<div class="frame-protection-anim-inner bike-type-essential">
					<div class="essential-frame-protection-anim-img-two">
						<img src={essentialImage2} alt={ imageAltText } width="75" height="110" />
					</div>
					<div class="essential-frame-protection-anim-img-three">
						<img src={essentialImage3} alt={ imageAltText } width="250" height="300" />
					</div>
					<div class="essential-frame-protection-anim-img-four">
						<img src={essentialImage4} alt={ imageAltText } width="260" height="30" />
					</div>
					<div class="essential-frame-protection-anim-img-five">
						<img src={essentialImage5} alt={ imageAltText } width="275" height="190" />
					</div>
					<div class="essential-frame-protection-anim-img-six">
						<img src={essentialImage6} alt={ imageAltText } width="275" height="190" />
					</div>
				</div>
			);
		} else if ( attributes.bike_type == 'bike-type-covered' ) {

			let imageAltText = 'covered frame protection animated component';

			return (
				<div class="frame-protection-anim-inner bike-type-covered">
					<div class="covered-frame-protection-anim-img-two">
						<img src={coveredImage2} alt={ imageAltText } width="75" height="110" />
					</div>
					<div class="covered-frame-protection-anim-img-three">
						<img src={coveredImage3} alt={ imageAltText } width="250" height="300" />
					</div>
					<div class="covered-frame-protection-anim-img-four">
						<img src={coveredImage4} alt={ imageAltText } width="260" height="30" />
					</div>
					<div class="covered-frame-protection-anim-img-five">
						<img src={coveredImage5} alt={ imageAltText } width="275" height="190" />
					</div>
					<div class="covered-frame-protection-anim-img-six">
						<img src={coveredImage6} alt={ imageAltText } width="275" height="190" />
					</div>
					<div class="covered-frame-protection-anim-img-seven">
						<img src={coveredImage7} alt={ imageAltText } width="275" height="190" />
					</div>
				</div>
			);
		} else {
			return;
		}
	}

	const quicklinks = function() {
		if ( attributes.quicklinks_show == true ) {
			return (
				<div class="frame-protection-quicklinks">
					<div>
						<a href="#protection-benefits">
							Protection benefits
						</a>
					</div>
					<div>
						<a href="#degrees-of-protection">
							Degrees of protection
						</a>
					</div>
					<div>
						<a href="#ridewrap-features">
							Ridewrap features
						</a>
					</div>
				</div>
			);
		} else {
			return;
		}
	}

	const cta = function() {
		if ( attributes.cta_text ) {
			return (
				<RichText.Content tagName="a" className="btn dark" href={ attributes.cta_link } value={ attributes.cta_text } />
			)
		}
	}

	return (
		<div { ...blockProps }>
			<div className='container container-wide container-flex-wrap'>
				<div className='col'>
					<h2 className='h2-style'>
						<RichText.Content tagName="span" value={ attributes.title } />
					</h2>
					<RichText.Content tagName="p" value={ attributes.paragraph } />
					<InnerBlocks.Content />
					{ quicklinks() }
					{ cta() }
				</div>
				<div className='col'>
					<div class="frame-protection-anim">
						{ bikeAnimationGraphic() }
					</div>
				</div>
			</div>
		</div>
	);
}