import { ExportModule, ImportModule } from '.';
export default class JoplinInterop {
    registerExportModule(module: ExportModule): Promise<void>;
    registerImportModule(module: ImportModule): Promise<void>;
}
