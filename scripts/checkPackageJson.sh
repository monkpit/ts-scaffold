#!/usr/bin/env sh
npx jq -Mr '.scripts[]' "$1" -- | npx shellcheck -s sh -
