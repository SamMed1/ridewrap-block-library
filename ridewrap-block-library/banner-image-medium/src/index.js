import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import attributes from './attributes';
import Edit from './edit';
import save from './save';

registerBlockType( 'ridewrap-block/banner-image-medium', {
	attributes,
	edit: Edit,
	save,
} );
