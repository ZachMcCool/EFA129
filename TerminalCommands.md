# Terminal Commands Cheat Sheet

## Getting Into the Terminal

- Mac: cmd + [space]
- Windows: Start|Run|CMD or Powershell

## Display directory contents
- Mac/linux: `ls`
- Windows: `dir`

__REMEMBER:__ a `.` (period) references the current directory.

__REMEMBER:__ `..` (two periods) references the part directory.

## To Change Directories
>`cd \<pathtodestination\>`

>`cd ..` 

change to the parent directory.

### example: 
>`cd \ElevenFiftyAcademy129` 

would change to folder ElevenFiftyAcademy129 off of the root directory

## Creating a Directory
>`mkdir \<directoryname\>` 

will create a folder/directory in the current directory with the name specified
(in windows you can also use md in-place of mkdir)

## Removing a Directory
>`rmdir \<Directoryname\`>

will try to remove the specified directory from the current folder/directory
(in Windows you can also use rd in place of rmdir)

_NOTES_ for `rmdir`, this will try to remove from the current directory
_ALSO_ the directory you are trying to remove need to be empty.