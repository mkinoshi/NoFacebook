# NoFacebook
Google Chrome extension example that redirects you to other websites whenever you access facebook

It is vrey easy to build a Chrome extension if you know about Javascript. The first thing you have to understand is that a Chrome extension 
needs manifest.json. This is simlar to package.json for any node projects, and it determines the outline of this Chrome extension. 
As you can see, we have to fill out all of the information such what kind of information this extension accesses or icon information.

There are several kinds of extension programs such as a program which runs on a certain page, a program which run all the time on the 
background of the browser. This time, I had to access the bookmark information which is only accessible through background program, so this 
extension is a background program.
