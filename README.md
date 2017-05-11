# Nodal

*Not a simple to-do list*

I have never been much of an online to-do list person. For quick notes and lists I use Google Keep, but for serious task-tracking I generally struggle to find a suitable replacement for pen and paper. The downside of pen and paper, of course, is that it isn't always as accessible as tasks stored on a cloud, available from any internet-connected device, anywhere.

It was while thinking about this problem earlier this year that I realised what was happening: internet-connected to-do lists seem either too simple (think Google Keep, Todoist) or too complex (Microsoft Project) in their approach to getting things done.

That's where Nodal comes in. I started work on Nodal for two main reasons: 

1. To craft a sweet-spot to-do list.
1. To gain an understanding of node.js and various javascript frameworks.

Nodal is a work-in-progress. There's heaps to do and I see this as a longer-term project. Here's a screenshot of Nodal as it stands, with a bit of a progress report entered.

![Nodal screenshot][screenshot]

## The Idea of Nodal

When I think real-world tasks, I think hierachy. Nodal will eventually have several layers - the onion of task managers. Here's the top-down list of layers, with potential example titles from a recent computer vision assignment.

1. User: *Albert*
1. Space: *COSC428*
1. Project: *Research report*
1. List: *Summarise prior research*
1. Task: *Compare existing audio-processing methods*

The user will have many independent spaces, and spaces will have many independent projects. However within a project, the lists associated to the project are all linked and appear on a single page. The links are visual, meaning lists can be connected in parallel or series, or any wacky arrangement. Therefore each project is represented by a directed graph of task list nodes. By tracking completion of task lists (which are encouraged to be short), a frontier of to-do items can be tracked. All task list graphs paths converge to a finished state node.

## Technical Details

I hear the names of crazy Javascript frameworks floating around all the time. So I used Nodal as an opportunity to introduce myself to several Javascript frameworks and technologies to increase my understanding of this ever-growing world.

Frameworks and technologies used:
1. [React][react]
1. [redux-observable][redobs]
1. [node.js][node]
1. [bezier.js][bezier] (not yet)

[screenshot]: http://i.imgur.com/5NXk77C.png
[bezier]: https://github.com/Pomax/bezierjs
[node]: https://nodejs.org/en/
[redobs]: https://redux-observable.js.org/
[react]: https://facebook.github.io/react/
