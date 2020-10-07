import Plugin from '../Plugin';
import { ViewHandle } from './JoplinViews';
export interface ButtonSpec {
    id: string;
    title?: string;
    onClick?(): void;
}
export default class JoplinViewsDialogs {
    private store;
    private plugin;
    constructor(plugin: Plugin, store: any);
    private controller;
    create(): Promise<string>;
    setHtml(handle: ViewHandle, html: string): Promise<string>;
    setButtons(handle: ViewHandle, buttons: ButtonSpec[]): Promise<ButtonSpec[]>;
    open(handle: ViewHandle): Promise<unknown>;
}
