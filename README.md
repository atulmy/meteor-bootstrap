# Meteor Bootstrap
Bootstrap for building Meteor App

Demo: http://meteor-bootstrap.demo.atulmy.com/

## Getting started
1. Install meteor: https://www.meteor.com/install

2. Clone Github repository by running following command:
`git clone https://github.com/atulmy/meteor-bootstrap.git`

3. Goto `meteor-bootstrap/` and run following command `meteor`

4. Open browser `http://localhost:3000`

## Default functionalities included (by building simple Thoughts posting website)

* Sign in / Sign up
* Create thought
* List Thoughts
* View Single Thought
* Edit Thought
* Delete Thought
* Make Thought public or private
* Static Pages like About and Contact

## Packages Used

* `iron:router` (for routing)
* `zimme:iron-router-active` (for adding active class for current route/page)
* `sacha:spin` (show loading animation spinner)
* `aldeed:collection2` (provides option to have schema for MongoDB collections)
* `twbs:bootstrap` (Twitter Bootstrap)
* `accounts-facebook` (user sign in / sign up using Facebook)
* `accounts-twitter` (user sign in / sign up using Twitter)
* `accounts-google` (user sign in / sign up using Google+)
* `ian:accounts-ui-bootstrap-3` (sign in / sign up UI elements customized for Twitter Bootstrap css)

Find more at: https://atmospherejs.com/

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
