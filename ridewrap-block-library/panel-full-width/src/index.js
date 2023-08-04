import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import attributes from './attributes';
import Edit from './edit';
import save from './save';

registerBlockType( 'ridewrap-block/panel-full-width', {
	attributes,
	edit: Edit,
	save,
} );
