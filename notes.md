Electron is, in short, a multi-process application system. It should be able to be defined by a TLA+ spec.

So, in theory, here's the basic modules for Mergd:
- Github interaction
- maybe a small database for keeping track of the images in each commit locally (maybe a file in .git for each image to compare)?
- the API for sketch
- an image diff system?
- 


"Electron developers often use hidden BrowserWindows, IPC, and the powerful Javascript `Proxy` to compose multiprocess applications."

So each process, as noted, needs its own BrowserWindow instance.