# Meteor Bootstrap
Bootstrap for building Meteor App

https://github.com/atulmy/meteor-bootstrap

## Getting started
1. Install meteor: `https://www.meteor.com/install`

2. Create Meteor App by running following command:
`meteor create myapp`

3. Clone Github repository by running following command:
`git clone https://github.com/atulmy/meteor-bootstrap.git`

4. Goto `myapp/` directory and delete following files: 
	1. `myapp.css` 
	2. `myapp.html` 
	3. `myapp.js`

5. Copy all the files from `meteor-bootstrap/` directory and paste it inside `myapp/`

6. Goto `myapp/` directory and run meteor by running following command:
`meteor`

7. Install packages listed in [Packages Used](https://github.com/atulmy/meteor-bootstrap#packages-used) section below. Eg for installing iron:router: Run: `meteor add iron:router`

8. Open browser `http://localhost:3000`

## Default functionalities included (by building simple Thoughts posting website)

* Sign in / Sign up
* List Thoughts
* View Single Thought
* Edit Thought
* Delete Thought
* Make Thought public or private
* Static Pages like About and Contact

## Packages Used

* iron:router
* zimme:iron-router-active
* sacha:spin
* aldeed:collection2
* twbs:bootstrap
* accounts-facebook
* accounts-twitter
* accounts-google
* ian:accounts-ui-bootstrap-3

## Folder Structure

	meteor-bootstrap
	├── both
	│   ├── collections
	│   │   └── thoughts.js
	│   │
	│   ├── schema
	│   │   └── thoughts.js
	│   │
	│   ├── methods.js
	│   └── router.js
	│
	├── server
	│   ├── publish
	│   │   └── thoughts.css
	│   │
	│   └── startup
	│       └── thoughts.css
	│
	├── client
	│   └── lib
	│   │   └── helpers.js
	│   │
	│   ├── styles
	│   │   └── app.css
	│   │
	│   ├── subscribe
	│   │   └── thoughts.js
	│   │
	│   ├── views
	│   │   ├── common
	│   │   │   ├── auth.html
	│   │   │   ├── loading.html
	│   │   │   └── common.js
	│   │   │
	│   │   ├── layout
	│   │   │   └── default.html
	│   │   │
	│   │   ├── pages
	│   │   │   ├── about.html
	│   │   │   ├── contact.html
	│   │   │   ├── home.html
	│   │   │   └── readme.html
	│   │   │
	│   │   └── thoughts
	│   │       ├── create.html
	│   │       ├── create.js
	│   │       ├── list.html
	│   │       ├── list.js
	│   │       ├── view.html
	│   │       └── view.js
	│   │
	│   └── app.html
	│
	└── public
	    └── images
			├── logo.png
	        └── favicon.png

## Made with Meteor

Meteor is an ultra-simple environment for building modern web
applications.

With Meteor you write apps:

* in pure JavaScript
* that send data over the wire, rather than HTML
* using your choice of popular open-source libraries

Documentation is available at http://docs.meteor.com/


## License

Copyright (c) 2015 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
