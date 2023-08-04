import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

import { FormTokenField, SelectControl, ToggleControl, RichText } from '@wordpress/components';

import { useState } from '@wordpress/element';

export default function Edit( { clientId, attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();

	const otherLocaleOptions = function() {
		if ( attributes.other_locales_show == true ) {
			return (
				<div class="locale-picker">
					<ToggleControl
						label="ph en"
						checked={ attributes.block_locale_ph_en }
						onChange={() => setAttributes({ block_locale_ph_en: !attributes.block_locale_ph_en })}
					/>
					<ToggleControl
						label="mx en"
						checked={ attributes.block_locale_mx_en }
						onChange={() => setAttributes({ block_locale_mx_en: !attributes.block_locale_mx_en })}
					/>
					<ToggleControl
						label="mx es"
						checked={ attributes.block_locale_mx_es }
						onChange={() => setAttributes({ block_locale_mx_es: !attributes.block_locale_mx_es })}
					/>
					<ToggleControl
						label="es en"
						checked={ attributes.block_locale_es_en }
						onChange={() => setAttributes({ block_locale_es_en: !attributes.block_locale_es_en })}
					/>
					<ToggleControl
						label="es es"
						checked={ attributes.block_locale_es_es }
						onChange={() => setAttributes({ block_locale_es_es: !attributes.block_locale_es_es })}
					/>
					<ToggleControl
						label="sg en"
						checked={ attributes.block_locale_sg_en }
						onChange={() => setAttributes({ block_locale_sg_en: !attributes.block_locale_sg_en })}
					/>
					<ToggleControl
						label="it en"
						checked={ attributes.block_locale_it_en }
						onChange={() => setAttributes({ block_locale_it_en: !attributes.block_locale_it_en })}
					/>
					<ToggleControl
						label="ch en"
						checked={ attributes.block_locale_ch_en }
						onChange={() => setAttributes({ block_locale_ch_en: !attributes.block_locale_ch_en })}
					/>
					<ToggleControl
						label="ch fr"
						checked={ attributes.block_locale_ch_fr }
						onChange={() => setAttributes({ block_locale_ch_fr: !attributes.block_locale_ch_fr })}
					/>
					<ToggleControl
						label="ch de"
						checked={ attributes.block_locale_ch_de }
						onChange={() => setAttributes({ block_locale_ch_de: !attributes.block_locale_ch_de })}
					/>
					<ToggleControl
						label="nl en"
						checked={ attributes.block_locale_nl_en }
						onChange={() => setAttributes({ block_locale_nl_en: !attributes.block_locale_nl_en })}
					/>
					<ToggleControl
						label="nl nl"
						checked={ attributes.block_locale_nl_nl }
						onChange={() => setAttributes({ block_locale_nl_nl: !attributes.block_locale_nl_nl })}
					/>
					<ToggleControl
						label="se en"
						checked={ attributes.block_locale_se_en }
						onChange={() => setAttributes({ block_locale_se_en: !attributes.block_locale_se_en })}
					/>
					<ToggleControl
						label="be en"
						checked={ attributes.block_locale_be_en }
						onChange={() => setAttributes({ block_locale_be_en: !attributes.block_locale_be_en })}
					/>
					<ToggleControl
						label="be fr"
						checked={ attributes.block_locale_be_fr }
						onChange={() => setAttributes({ block_locale_be_fr: !attributes.block_locale_be_fr })}
					/>
					<ToggleControl
						label="id en"
						checked={ attributes.block_locale_id_en }
						onChange={() => setAttributes({ block_locale_id_en: !attributes.block_locale_id_en })}
					/>
					<ToggleControl
						label="cl es"
						checked={ attributes.block_locale_cl_es }
						onChange={() => setAttributes({ block_locale_cl_es: !attributes.block_locale_cl_es })}
					/>
					<ToggleControl
						label="cl en"
						checked={ attributes.block_locale_cl_en }
						onChange={() => setAttributes({ block_locale_cl_en: !attributes.block_locale_cl_en })}
					/>
					<ToggleControl
						label="za en"
						checked={ attributes.block_locale_za_en }
						onChange={() => setAttributes({ block_locale_za_en: !attributes.block_locale_za_en })}
					/>
					<ToggleControl
						label="ie en"
						checked={ attributes.block_locale_ie_en }
						onChange={() => setAttributes({ block_locale_ie_en: !attributes.block_locale_ie_en })}
					/>
					<ToggleControl
						label="no es"
						checked={ attributes.block_locale_no_es }
						onChange={() => setAttributes({ block_locale_no_es: !attributes.block_locale_no_es })}
					/>
					<ToggleControl
						label="hk en"
						checked={ attributes.block_locale_hk_en }
						onChange={() => setAttributes({ block_locale_hk_en: !attributes.block_locale_hk_en })}
					/>
					<ToggleControl
						label="fi en"
						checked={ attributes.block_locale_fi_en }
						onChange={() => setAttributes({ block_locale_fi_en: !attributes.block_locale_fi_en })}
					/>
					<ToggleControl
						label="at en"
						checked={ attributes.block_locale_at_en }
						onChange={() => setAttributes({ block_locale_at_en: !attributes.block_locale_at_en })}
					/>
					<ToggleControl
						label="jp en"
						checked={ attributes.block_locale_jp_en }
						onChange={() => setAttributes({ block_locale_jp_en: !attributes.block_locale_jp_en })}
					/>
					<ToggleControl
						label="gr en"
						checked={ attributes.block_locale_gr_en }
						onChange={() => setAttributes({ block_locale_gr_en: !attributes.block_locale_gr_en })}
					/>
					<ToggleControl
						label="pt en"
						checked={ attributes.block_locale_pt_en }
						onChange={() => setAttributes({ block_locale_pt_en: !attributes.block_locale_pt_en })}
					/>
					<ToggleControl
						label="dk en"
						checked={ attributes.block_locale_dk_en }
						onChange={() => setAttributes({ block_locale_dk_en: !attributes.block_locale_dk_en })}
					/>
					<ToggleControl
						label="cz en"
						checked={ attributes.block_locale_cz_en }
						onChange={() => setAttributes({ block_locale_cz_en: !attributes.block_locale_cz_en })}
					/>
					<ToggleControl
						label="il en"
						checked={ attributes.block_locale_il_en }
						onChange={() => setAttributes({ block_locale_il_en: !attributes.block_locale_il_en })}
					/>
					<ToggleControl
						label="fr fr"
						checked={ attributes.block_locale_fr_fr }
						onChange={() => setAttributes({ block_locale_fr_fr: !attributes.block_locale_fr_fr })}
					/>
					<ToggleControl
						label="at de"
						checked={ attributes.block_locale_at_de }
						onChange={() => setAttributes({ block_locale_at_de: !attributes.block_locale_at_de })}
					/>
					<ToggleControl
						label="be de"
						checked={ attributes.block_locale_be_de }
						onChange={() => setAttributes({ block_locale_be_de: !attributes.block_locale_be_de })}
					/>
					<ToggleControl
						label="be nl"
						checked={ attributes.block_locale_be_nl }
						onChange={() => setAttributes({ block_locale_be_nl: !attributes.block_locale_be_nl })}
					/>
				</div>
			)
		}
	}

	const activeLocales = function() {
		let localeList = [];
		let localesState = '';
		if ( attributes.is_default_block ) {
			localesState = 'Locales excluded:';
		} else {
			localesState = 'Locales included:';
		}
		if ( attributes.block_locale_us_en ) {
			localeList.push(" us/en, ");
		}
		if ( attributes.block_locale_ca_en ) {
			localeList.push(" ca/en, ");
		}
		if ( attributes.block_locale_ca_fr ) {
			localeList.push(" ca/fr, ");
		}
		if ( attributes.block_locale_au_en ) {
			localeList.push(" au/en, ");
		}
		if ( attributes.block_locale_gb_en ) {
			localeList.push(" gb/en, ");
		}
		if ( attributes.block_locale_nz_en ) {
			localeList.push(" nz/en, ");
		}
		if ( attributes.block_locale_de_de ) {
			localeList.push(" de/de, ");
		}
		if ( attributes.block_locale_fr_fr ) {
			localeList.push(" fr/fr, ");
		}
		if ( attributes.block_locale_fr_en ) {
			localeList.push(" fr/en, ");
		}
		if ( attributes.block_locale_ph_en ) {
			localeList.push(" ph/en, ");
		}
		if ( attributes.block_locale_mx_en ) {
			localeList.push(" mx/en, ");
		}
		if ( attributes.block_locale_mx_es ) {
			localeList.push(" mx/es, ");
		}
		if ( attributes.block_locale_es_en ) {
			localeList.push(" es/en, ");
		}
		if ( attributes.block_locale_es_es ) {
			localeList.push(" es/es, ");
		}
		if ( attributes.block_locale_sg_en ) {
			localeList.push(" sg/en, ");
		}
		if ( attributes.block_locale_it_en ) {
			localeList.push(" it/en, ");
		}
		if ( attributes.block_locale_ch_en ) {
			localeList.push(" ch/en, ");
		}
		if ( attributes.block_locale_ch_fr ) {
			localeList.push(" ch/fr, ");
		}
		if ( attributes.block_locale_ch_de ) {
			localeList.push(" ch/de, ");
		}
		if ( attributes.block_locale_nl_en ) {
			localeList.push(" nl/en, ");
		}
		if ( attributes.block_locale_nl_nl ) {
			localeList.push(" nl/nl, ");
		}
		if ( attributes.block_locale_se_en ) {
			localeList.push(" se/en, ");
		}
		if ( attributes.block_locale_be_en ) {
			localeList.push(" be/en, ");
		}
		if ( attributes.block_locale_be_fr ) {
			localeList.push(" be/fr, ");
		}
		if ( attributes.block_locale_id_en ) {
			localeList.push(" id/en, ");
		}
		if ( attributes.block_locale_cl_es ) {
			localeList.push(" cl/es, ");
		}
		if ( attributes.block_locale_cl_en ) {
			localeList.push(" cl/en, ");
		}
		if ( attributes.block_locale_za_en ) {
			localeList.push(" za/en, ");
		}
		if ( attributes.block_locale_ie_en ) {
			localeList.push(" ie/en, ");
		}
		if ( attributes.block_locale_no_es ) {
			localeList.push(" no/es, ");
		}
		if ( attributes.block_locale_hk_en ) {
			localeList.push(" hk/en, ");
		}
		if ( attributes.block_locale_fi_en ) {
			localeList.push(" fi/en, ");
		}
		if ( attributes.block_locale_at_en ) {
			localeList.push(" at/en, ");
		}
		if ( attributes.block_locale_jp_en ) {
			localeList.push(" jp/en, ");
		}
		if ( attributes.block_locale_gr_en ) {
			localeList.push(" gr/en, ");
		}
		if ( attributes.block_locale_pt_en ) {
			localeList.push(" pt/en, ");
		}
		if ( attributes.block_locale_dk_en ) {
			localeList.push(" dk/en, ");
		}
		if ( attributes.block_locale_cz_en ) {
			localeList.push(" cz/en, ");
		}
		if ( attributes.block_locale_il_en ) {
			localeList.push(" il/en, ");
		}
		if ( attributes.block_locale_at_de ) {
			localeList.push(" at/de, ");
		}
		if ( attributes.block_locale_be_de ) {
			localeList.push(" be/de, ");
		}
		if ( attributes.block_locale_be_nl ) {
			localeList.push(" be/nl, ");
		}
		return <p className='locales-state'> {localesState} <strong>{localeList}</strong> </p>;
	}

	const blockState = function() {
		let uiState = '';
		if ( attributes.ui_state ) {
			uiState = 'ui-minify';
		} else {
			uiState = '';
		}
		return uiState;
	}

	// Block contents constructor.
	let blockContents = [];

	setTimeout(function(){

		let blockId = 'block-' + clientId;

		var blockList = document.getElementById( blockId ).querySelectorAll( ".block-editor-block-list__layout > div" );

		Array.from( blockList ).forEach( ( element, index ) => {
			var blockDataTitle = element.getAttribute( 'data-title' );
			blockContents.push( blockDataTitle );
			document.querySelector( '.list-' + clientId ).innerHTML = blockContents.toString().replaceAll(",", ", ");
		});

	}, 2000);

	return (
		<div { ...blockProps }>
			<div className='header-row'>
				<h3 className='h3-style'>Localization Wrapper
				<ToggleControl
					label="Minify / Expand block"
					checked={ attributes.ui_state }
					onChange={() => setAttributes({ ui_state: !attributes.ui_state })}
				/>
				</h3>
				<div>
					{ activeLocales() }
					<div className={ 'inner-list list-' + clientId }></div>
				</div>
				<ToggleControl
					label="Is this a 'default' block?"
					checked={ attributes.is_default_block }
					onChange={() => setAttributes({ is_default_block: !attributes.is_default_block })}
				/>
			</div>
			<div className={ "col " + blockState() }>
				<h4 className='h5-style'>Top locales</h4>
				<div class="locale-picker border-bottom">
					<ToggleControl
						label="us en"
						checked={ attributes.block_locale_us_en }
						onChange={() => setAttributes({ block_locale_us_en: !attributes.block_locale_us_en })}
					/>
					<ToggleControl
						label="ca en"
						checked={ attributes.block_locale_ca_en }
						onChange={() => setAttributes({ block_locale_ca_en: !attributes.block_locale_ca_en })}
					/>
					<ToggleControl
						label="ca fr"
						checked={ attributes.block_locale_ca_fr }
						onChange={() => setAttributes({ block_locale_ca_fr: !attributes.block_locale_ca_fr })}
					/>
					<ToggleControl
						label="gb en"
						checked={ attributes.block_locale_gb_en }
						onChange={() => setAttributes({ block_locale_gb_en: !attributes.block_locale_gb_en })}
					/>
					<ToggleControl
						label="au en"
						checked={ attributes.block_locale_au_en }
						onChange={() => setAttributes({ block_locale_au_en: !attributes.block_locale_au_en })}
					/>
					<ToggleControl
						label="nz en"
						checked={ attributes.block_locale_nz_en }
						onChange={() => setAttributes({ block_locale_nz_en: !attributes.block_locale_nz_en })}
					/>
					<ToggleControl
						label="de de"
						checked={ attributes.block_locale_de_de }
						onChange={() => setAttributes({ block_locale_de_de: !attributes.block_locale_de_de })}
					/>
					<ToggleControl
						label="fr fr"
						checked={ attributes.block_locale_fr_fr }
						onChange={() => setAttributes({ block_locale_fr_fr: !attributes.block_locale_fr_fr })}
					/>
					<ToggleControl
						label="fr en"
						checked={ attributes.block_locale_fr_en }
						onChange={() => setAttributes({ block_locale_fr_en: !attributes.block_locale_fr_en })}
					/>
				</div>
				<h4 className='h5-style'>Other locales</h4>
				<ToggleControl
					label="Show other locale options"
					checked={ attributes.other_locales_show }
					onChange={() => setAttributes({ other_locales_show: !attributes.other_locales_show })}
				/>
				{ otherLocaleOptions() }
			</div>
			<div className={ "col " + blockState() }>
				<InnerBlocks
					// templateLock="all"
				/>
			</div>
		</div>
	);
}
