import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/widget-core/interfaces';
import { v } from '@dojo/widget-core/d';

export interface ButtonProperties extends WidgetProperties {
	label: string;
	icon?: string;
	ripple?: boolean;
}

export default class Button extends WidgetBase<ButtonProperties> {
	render() {
		const {
			label,
			icon,
			ripple = false
		} = this.properties;

		return v('button', { classes: {
					'mdl-button': true,
					'mdl-js-button': true,
					'mdl-button--raised': true,
					'mdl-js-ripple-effect': ripple
				}}, [
					label,
					icon ? v('i.material-icons', [ icon ]): null
				])
	}
}


