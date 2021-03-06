---
slug: /infosec-study-terminal-bash-command-line
date: 2020-01-28
author: Tim Combs
title: InfoSec Study Notes - Learning the Command Line - Terminal and Bash
tags: ["command line", "terminal", "bash"]
published: false
---

# InfoSec Study Notes - Learning the Command Line - Terminal and Bash

## macos Terminal

- unix based with a darwin kernel
- can enter commands directly into the unix environment
- linux and unix are very close - but not all linux commands work on macos
- can do bulk operations
- can do fast calculations

- macos Terminal needs to run a Shell
- Shell is a program that allows the user to interface with the operating system at a terminal

  - Bash is default macos shell and very popular
  - lots of other shells: Fish, Z Shell, etc.

- as always to get more info about any command use
```bash
man [command] OR info [command] OR help [command]
```

### Basics

- mkdir - make directories
- cd - navigate to a new directory
- touch - creates a file
- ls - lists files in a directory
- . represents the current level
- .. represents a level above
- rm - deletes files & directories - no recovery
- pwd - print working directory to screen - current directory location

### Next Level

- top
  - gives a list of every program running on your computer
  - each entry shows how much of the system resources it uses
    - PID is the programs Process ID
    - %CPU is how much CPU resource program is using
    - %MEM is how much memory resource program is using
  - ctrl-C to return to command line prompt
- kill - use to end programs - need PID number
- ifconfig - utility gets info or change network interface configuration
  - similar to ipconfig on windows machines
  - must be at root directory or use sudo to use this
  - gives information about devices on your network:
  - IP address of computer
  - MAC address of Ethernet & WiFi cards
  - and lots more
- chmod & chown
  - chmod allows file permission changes
  - chown allows file ownership changes
- ssh - allows you to get remote access to another computer

### Cool Tricks for terminal

- Copy files and directories from one directory to another

  - can do this using 'cp' command:
```bash
cp some_directory/some-file.txt another_directory
```
  - can do this using 'ditto' command:
```bash
ditto some_directory/some-file.txt another_directory
```
  - the difference is ditto copies exactly
    - like cp preserves ownership attributes and permissisons
    - but also preserves file resource forks and folder metadata

- List the all the contents of a directory

  - this shows the files and names of sub-directories
```bash
ls [path-of-directory]
```
  - adding the -R flag shows all the files & directories in sub-directories
  - doing this in your root directory is not a smart thing
```bash
ls -R [path-of-directory]
```

- View the contents of any file

  - will even open corrupt files, though it might help you discern anything
```bash
cat [file-path]
```

- Download files from the command line

  - don't need a browser - use the curl command
```bash
curl -O [url://of-the.file]
```
  - will put this in the pwd (current directory)

- Keep your mac from sleeping

  - overrides sleep settings in Energy preferences
```bash
caffeinate
```

* type ctrl-c to end the command
* or to set a time limit:
```bash
caffeinate -u -t [#-of-seconds]
```

* Change file and directory permissions

  - a couple of ways to do this - chmod and chown
  - to change permissions so anyone can access, read & modify
```bash
sudo chmod 777 [path-to-file]
```
  - to change so only access and readability only
```bash
sudo chmod 644 [path-to-file]
```
  - to change ownership of a file to your account
```bash
sudo chown [your-short-user-name] [path-to-file]
```

* Automatically restart after a crash

  - not sure if this is a good thing, but...
```bash
sudo systemsetup -setstartfreeze on
```

* Restore disk image to a volume

  - disk image is a .dmg file basically a cloning operation
  - can create additional bootable startup drives this way
```bash
sudo asr -restore -noverify -source /[path-to-diskimage] -target /[volume to restore to]
```

* Hide files or folders from view in the finder
```bash
chflags hidden [path/of/folder/to/hide]
```

* create ASCII art banners
```bash
banner -w [banner-width-in-pixels] [your-message]
```

* make your mac talk
```bash
say "[what-you-want-to-say]"
```

### Change user defaults at the command line

- the defaults command allows access to the user's defaults
- the write command is used to write new default values
```bash
man defaults
```
  for more information
```bash
defaults read
```
  will display a massive list of key-value pairs
```bash
killall
```
  is used to stop the process
```bash
killall Finder
```
- the read command allows you see what the current values are

- Show hidden files and folders

  - these are files that are prefixed with a "." like .DS_Store
```bash
  defaults write com.apple.finder AppleShowAllFiles -bool TRUE
```
  then
```bash
killall Finder
```
  change "TRUE" to "FALSE" to rehide the hidden files

- Disable drop shadows on screenshots of a desktop window

  - quite specific
  - type command-shift-4 & hit the space bar when cursor is over the window
  - the screenshot will have a drop shadow
  - to remove it
```bash
defaults write com.apple.screencapture disable-shadow -bool TRUE
```
  then
```bash
killall SystemUIServer
```
  change "TRUE" to "FALSE" to put the drop shadow back

- Hide non-active apps in your Dock
```bash
defaults write com.apple.dock static-only -bool TRUE
```
  then
```bash
killall Dock
```

  change "TRUE" to "FALSE" to show all apps that you've kept in the dock

- Dim hidden apps in the Dock

  - supposed to dim apps that aren't visible on-screen
  - can't really tell any difference
  - strangely running this opens all windows that are hidden in the dock
```bash
defaults write com.apple.Dock showhidden -bool TRUE
```
  then
```bash
killall Dock
```
  change "TRUE" to "FALSE" to remove the dimming

- Make holding down a key repeat that character
  - hold a key and type many of that same character
```bash
defaults write -g ApplePressAndHoldEnabled -bool FALSE
```
  change "TRUE" to "FALSE" to stop this behavior

- Make mac chime like an iPhone when connected to power
```bash
defaults write com.apple.PowerChime ChimeOnAllHardware -bool TRUE
```
  then
```bash
open /System/Library/CoreServices/PowerChime.app
```
\
\
  to STOP the chiming
```bash
defaults write com.apple.PowerChime ChimeOnAllHardware -bool FALSE
```
  then
```bash
killall PowerChime
```

- Change the default screenshot save location
```bash
defaults write com.apple.screencapture location [place-to-save-screenshots]
```

- Change the default screenshot type and name
  - screenshots can be JPG, PNG, TIFF, PDF
```bash
defaults write com.apple.screencapture type [type-of-file]
```
  - any name you want followed by date and time
```bash
defaults write com.apple.screencapture name "[name-you-want]"
```
    then
```bash
killall SystemUIServer
```

- Stop apps from saving to iCloud by default
  - not sure what version of macos this is default, not in Yosemite
```bash
defaults write NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool FALSE
```
  change "FALSE" to "TRUE" to default save to iCloud again

- Set frequency to check for macos updates
  - this sets it to once a day
```bash
sudo defaults /Library/Preferences/write com.apple.SoftwareUpdate ScheduleFrequency -int 1
```
  to reset to what it was before
```bash
sudo defaults delete /Library/Preferences/com.apple.SoftwareUpdate ScheduleFrequency
```
  which deletes this key-value pair

- Enable text selection in Quick Look
  - to use Quick Look select a file and hit the spacebar
  - to make it so you can copy text from quick look
```bash
defaults write com.apple.finder QLEnableTextSelection -bool TRUE
```
  then
```bash
killall Finder
```
  change "TRUE" to "FALSE" to stop this behavior

- Change the response speed of the Dock
  - change delay time
```bash
defaults write com.apple.dock autohide-delay -float O
```
  then
```bash
killall Dock
```
\
\
  to revert back to default
```bash
defaults delete com.apple.dock autohide-delay
```
  then
```bash
killall Dock
```

  - change speed it slides into view
```bash
defaults write com.apple.dock autohide-time-modifier -float 0
```
    then
```bash
killall Dock
```
  1 is default speed, 0.5 will double the speed, 0 is instant

- Add message to login window
```bash
sudo defaults write /Library/Preferences/com.apple.loginwindow LoginWindowText "Welcome to the Knowledge Box"
```
  to remove it
```bash
sudo defaults delete /Library/Preferences/com.apple.loginwindow
```

### odd commands, not sorted
- flush the DNS cache on macos Yosemite specifically 10.10.5
```bash
sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder;say cache flushed
```
  which will flush the cache then speak "cache flushed" once done

- use Homebrew without updating it first
```bash
HOMEBREW_NO_AUTO_UPDATE=1 brew install <application>
```