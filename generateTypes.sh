#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
JOPLIN_DIR="$SCRIPT_DIR/../joplin"

cd "$JOPLIN_DIR"
npm run generatePluginTypes

cd "$SCRIPT_DIR"
rsync -a --delete "$JOPLIN_DIR/plugin_types/ReactNativeClient/lib/services/plugins/api/" "$SCRIPT_DIR/generators/app/templates/types/"