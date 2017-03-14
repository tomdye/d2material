import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/widget-core/interfaces';
import { v } from '@dojo/widget-core/d';

// export type ShadowDepth = 2 | 3 | 4 | 6 | 8 | 16;

export interface CardProperties extends WidgetProperties {
	depth?: number;
	title: string;
}

function getShadowDepthClass(depth: number): string {
	return `mdl-shadow--${depth}dp`;
}

export default class Card extends WidgetBase<CardProperties> {
	render() {
		const {
			depth = 2,
			title
		} = this.properties;

		return v('div', { classes: { 'mdl-card': true, [ getShadowDepthClass(depth) ]: true } }, [
			v('div', { classes: { 'mdl-card__title': true } }, [
				v('h2', { classes: { 'mdl-card__title-text': true } }, [
					title
				])
			]),
			v('div', { classes: { 'mdl-card__supporting-text': true } }, this.children)
		])
	}
}

// <div class="demo-card-wide mdl-card mdl-shadow--2dp">

//   <div class="mdl-card__supporting-text">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     Mauris sagittis pellentesque lacus eleifend lacinia...
//   </div>
//   <div class="mdl-card__actions mdl-card--border">
//     <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
//       Get Started
//     </a>
//   </div>
//   <div class="mdl-card__menu">
//     <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
//       <i class="material-icons">share</i>
//     </button>
//   </div>
// </div>
