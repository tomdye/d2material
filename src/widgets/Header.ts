import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/widget-core/interfaces';
import { v } from '@dojo/widget-core/d';

export interface LinkDetails {
	label: string;
	href: string;
}

export interface HeaderProperties extends WidgetProperties {
	title: string;
	links: LinkDetails[];
	showHeaderLinks?: boolean;
}

export default class Header extends WidgetBase<HeaderProperties> {
	render() {
		const {
			title,
			links,
			showHeaderLinks = false
		} = this.properties;

		const linkVNodes = links.map(({ href, label }) => v('a', { classes: { 'mdl-navigation__link': true }, href }, [ label ]));

		return v('div', { classes: { 'mdl-layout': true, 'mdl-js-layout': true, 'mdl-layout--fixed-header': true } }, [
			v('header', { classes: { 'mdl-layout__header': true } }, [
				v('div', { classes: { 'mdl-layout__header-row': true } }, [
					// Title
					v('span', { classes: { 'mdl-layout-title': true } }, [ title ]),
					// Add spacer, to align navigation to the right
					v('div', { classes: { 'mdl-layout-spacer': true } }),
					// Navigation. We hide it in small screens.
					links.length && showHeaderLinks ?
						v('nav', { classes: { 'mdl-navigation': true, 'mdl-layout--large-screen-only': true } }, linkVNodes) : null
				]),
			]),
			v('div', { classes: { 'mdl-layout__drawer': true } }, [
				v('span', { classes: { 'mdl-layout-title': true } }, [ title ]),
				links.length ? v('nav', { classes: { 'mdl-navigation': true } }, linkVNodes) : null
			]),
			v('main', { classes: { 'mdl-layout__content': true } }, [
				v('div', { classes: { 'page-content': true } }, this.children )
			]),
		]);
	}
}
