# Xojo Syntax Highlighting for VS Code

This extension provides syntax highlighting for the [Xojo](https://www.xojo.com/) programming language in Visual Studio Code. It is built to support modern Xojo development, particularly focusing on Xojo 2025 Desktop Development.

## Features

- **Syntax Highlighting**: Comprehensive coloring for Xojo keywords, data types, built-in functions, and classes.
- **Desktop API v2 Support**: Native highlighting for `DesktopWindow`, `DesktopButton`, `DesktopLabel`, and other modern desktop controls.
- **Project File Support**: Recognizes and correctly highlights Xojo text format files including `.xojo_code`, `.xojo_window`, `.xojo_menu`, `.xojo_toolbar`, and more.
- **Tag Block Recognition**: Special highlighting for Xojo's `#tag` block structures used in text project formats.
- **Smart Formatting**: Basic language configuration for commenting (both `//` and `'`) and bracket/indentation matching.

## Usage

Simply open any Xojo text format file (like `.xojo_code` or `.xojo_window`) in VS Code, and the extension will automatically apply syntax highlighting.

## Requirements

- Visual Studio Code version 1.80.0 or higher.

## Known Issues

- This is an initial release focusing primarily on syntax highlighting. Snippets and code completion are not yet fully implemented.

## Release Notes

### 0.1.0
- Added **Format Document** support (`⇧⌥F`) for Xojo files.
- Formatter applies consistent indentation, normalizes keyword casing, spacing around `=`, and blank lines between method blocks.

### 0.0.2
- `#tag` keyword now renders with its own distinct color, separate from the tag type that follows it.
- `Key = Value` pairs inside `#tag` lines now color values by type: strings, booleans, numbers, and identifiers each get a different color.
- `Begin ClassName InstanceName` — the class name (e.g. `DesktopButton`) is now rendered in bold.
- Boolean values (`True`/`False`) in property assignment blocks are now bold.
- Numeric values in property assignment blocks now have a distinct color, separate from strings.

### 0.0.1
- Initial release with comprehensive Xojo syntax highlighting and Desktop API v2 support.
