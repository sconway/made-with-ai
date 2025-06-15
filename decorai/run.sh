#!/bin/bash

echo "Starting DecorAI application server..."

# Try to find the best available server option
if command -v npx &> /dev/null; then
    echo "Using Node.js http-server..."
    cd "$(dirname "$0")" # Navigate to script directory
    npx http-server -p 8080 -o -c-1
elif command -v python3 &> /dev/null; then
    echo "Using Python simple HTTP server..."
    cd "$(dirname "$0")" # Navigate to script directory
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    echo "Using Python simple HTTP server..."
    cd "$(dirname "$0")" # Navigate to script directory
    # Check Python version
    if python -c "import sys; sys.exit(0 if sys.version_info >= (3, 0) else 1)"; then
        python -m http.server 8080
    else
        python -m SimpleHTTPServer 8080
    fi
else
    echo "Error: Could not find a suitable HTTP server."
    echo "Please install Node.js or Python, or manually open the index.html file in your browser."
    exit 1
fi 