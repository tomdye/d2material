import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/widget-core/interfaces';
import Header from './Header';
import Button from './Button';
import Card from './Card';
import { v, w } from '@dojo/widget-core/d';

export default class HelloWorld extends WidgetBase<WidgetProperties> {
	render() {
		const links = [
			{ 'label': 'hello', 'href': '#' }
		];

		return w(Header, { title: 'my header', links, showHeaderLinks: true }, [
			w(Card, { depth: 2, title: 'My Card' }, [
				v('input.mdl-textfield', { type: 'text' }),
				w(Button, { label: 'Click Me', icon: 'share', ripple: true })
			]),
			w(Card, { depth: 4, title: 'My Card2' }, [
				v('input.mdl-textfield', { type: 'text' }),
				w(Button, { label: 'Click Me', icon: 'share', ripple: true })
			])
		]);
	}
}
