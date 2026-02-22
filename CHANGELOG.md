# Change Log

All notable changes to the "xojo-syntax" extension will be documented in this file.

## [0.1.1]
- Formatter is now scoped to specific Xojo file extensions only: `.xojo_code`, `.xojo_window`, `.xojo_toolbar`, `.xojo_project`, `.xojo_menu`, `.xojo_database_connection`.
- Added `.xojo_database_connection` as a recognized Xojo language file extension for both syntax highlighting and formatting.

## [0.1.0]
- Added **Format Document** support (`⇧⌥F`) for Xojo files.
- Formatter applies consistent indentation inside `#tag`, `Begin...End`, `If...End If`, `For...Next`, `Try...Catch`, and other block structures.
- Normalizes keyword casing to Title Case (`If`, `Then`, `Var`, `Sub`, `Function`, etc.).
- Normalizes `Key=Value` spacing to `Key = Value` in property and tag lines.
- Trims trailing whitespace on all lines.
- Inserts blank lines between `#tag Method` / `#tag EndMethod` blocks.

## [0.0.2]
- Improved `#tag` line highlighting: `#tag` keyword now has its own distinct color
- `Key = Value` pairs in `#tag` lines now color values by type (string, boolean, numeric, identifier)
- `Begin ClassName InstanceName` — class name is now bold (`entity.name.class`)
- Boolean values (`True`/`False`) in property assignments are now bold
- Numeric values in property assignments have a distinct color from strings

## [0.0.1]
- Initial release
- Syntax highlighting for Xojo 2025 Desktop Development
- Desktop API v2 support
