#!/usr/bin/osascript

tell application "Safari"
    activate
    open location "http://localhost:5173"
    delay 2
    
    -- Take a screenshot
    do shell script "screencapture -x -t png /Users/scottconway/Documents/github/made-with-ai/decorai/screenshot1.png"
    
    -- Try to click the Layout Editor button (this is tricky in AppleScript)
    -- We'll use JavaScript instead
    tell window 1
        set current tab to tab 1
        do JavaScript "document.getElementById('layout-editor-btn').click();" in current tab
        delay 2
    end tell
    
    -- Take another screenshot
    do shell script "screencapture -x -t png /Users/scottconway/Documents/github/made-with-ai/decorai/screenshot2.png"
    
end tell
