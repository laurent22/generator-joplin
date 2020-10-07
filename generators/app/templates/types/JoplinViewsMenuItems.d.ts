import MenuItemController from '../MenuItemController';
import Plugin from '../Plugin';
interface CreateMenuItemOptions {
    accelerator: string;
}
export declare enum MenuItemLocation {
    File = "file",
    Edit = "edit",
    View = "view",
    Note = "note",
    Tools = "tools",
    Help = "help",
    Context = "context"
}
export default class JoplinViewsMenuItems {
    private store;
    private plugin;
    constructor(plugin: Plugin, store: any);
    create(commandName: string, location?: MenuItemLocation, options?: CreateMenuItemOptions): Promise<MenuItemController>;
}
export {};
