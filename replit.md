# Project

A simple static HTML "Hello World" website, originally configured for Azure Static Web Apps deployment.

## Architecture

- **Type**: Static HTML site
- **Entry point**: `index.html`
- **Server**: Python's built-in HTTP server (`python3 -m http.server 5000`)
- **Port**: 5000

## Running

The workflow "Start application" serves the static files on port 5000 using Python's built-in HTTP server.

## Deployment

Configured as a static site deployment with `publicDir: "."`.
