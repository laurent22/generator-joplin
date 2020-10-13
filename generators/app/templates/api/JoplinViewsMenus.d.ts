import { MenuItem, MenuItemLocation } from './types';
import Plugin from '../Plugin';
/**
 * Allows creating menus.
 *
 * [View the demo plugin](https://github.com/laurent22/joplin/tree/dev/CliClient/tests/support/plugins/menu)
 */
export default class JoplinViewsMenuItems {
    private store;
    private plugin;
    constructor(plugin: Plugin, store: any);
    private registerCommandAccelerators;
    /**
     * Creates a new menu from the provided menu items and place it at the given location. As of now, it is only possible to place the
     * menu as a sub-menu of the application build-in menus.
     */
    create(label: string, menuItems: MenuItem[], location?: MenuItemLocation): Promise<void>;
}
