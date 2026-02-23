#!/usr/bin/osascript

tell application "Google Chrome"
    activate
    open location "http://localhost:5173"
    delay 3
end tell

-- Take a screenshot of the main page
do shell script "screencapture -x -t png /Users/scottconway/Documents/github/made-with-ai/decorai/screenshot-main.png"

tell application "Google Chrome"
    tell front window
        tell active tab
            execute javascript "document.getElementById('layout-editor-btn').click();"
        end tell
    end tell
end tell

delay 2

-- Take a screenshot of the layout editor
do shell script "screencapture -x -t png /Users/scottconway/Documents/github/made-with-ai/decorai/screenshot-layout-editor.png"

tell application "Google Chrome"
    tell front window
        tell active tab
            -- Click the rectangle tool
            execute javascript "document.querySelector('[data-shape=\"rect\"]').click();"
        end tell
    end tell
end tell

delay 1

tell application "Google Chrome"
    tell front window
        tell active tab
            -- Simulate drawing a rectangle
            execute javascript "
                const svg = document.getElementById('layout-svg');
                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.setAttribute('x', '200');
                rect.setAttribute('y', '200');
                rect.setAttribute('width', '150');
                rect.setAttribute('height', '100');
                rect.setAttribute('fill', '#e0e0e0');
                rect.setAttribute('stroke', '#333333');
                rect.setAttribute('stroke-width', '2');
                rect.classList.add('svg-shape');
                document.getElementById('layout-shapes').appendChild(rect);
            "
        end tell
    end tell
end tell

delay 1

-- Take final screenshot with drawn shape
do shell script "screencapture -x -t png /Users/scottconway/Documents/github/made-with-ai/decorai/screenshot-with-shape.png"

return "Screenshots saved successfully"
