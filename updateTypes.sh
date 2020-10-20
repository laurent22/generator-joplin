#!/bin/bash

git pull

if [[ -n $(git status --porcelain) ]]; then
	echo "There are changes in the repo"
	exit 1
fi

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
JOPLIN_DIR="$SCRIPT_DIR/../joplin"

cd "$JOPLIN_DIR"
npm run generatePluginTypes

cd "$SCRIPT_DIR"
rsync -a --delete "$JOPLIN_DIR/plugin_types/ReactNativeClient/lib/services/plugins/api/" "$SCRIPT_DIR/generators/app/templates/api/"
cp "$JOPLIN_DIR/ReactNativeClient/lib/services/plugins/api/types.ts" "$SCRIPT_DIR/generators/app/templates/api/"
cp "$SCRIPT_DIR/generators/app/templates/api_index.ts" "$SCRIPT_DIR/generators/app/templates/api/index.ts"
rm -f "$SCRIPT_DIR/generators/app/templates/api/types.d.ts"
# rm -f "$SCRIPT_DIR/generators/app/templates/api/index.d.ts"

npm link

"$JOPLIN_DIR/CliClient/tests/support/plugins/updatePlugins.sh"

git add -A
git c -m "Updated types"
