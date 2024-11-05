import { h } from "/js/src/index.js"

export default (model) => [
    h("h1.danger#aboutTitle", {
        style: "text-align:center",
    }, "Welcome to the ABOUT page"),
    menu(model) 
]


const menu = (model) => h('ul', [
    h('li', h('a', {onclick: (e) => model.router.handleLinkEvent(e), href: '?page=about'}, 'About')),
    h('li', h('a', {onclick: (e) => console.log(h.router), href: '?page=item&id=1'}, 'Item 1')),
    h('li', h('a', {onclick: (e) => model.router.handleLinkEvent(e), href: '?page=item&id=2'}, 'Item 2')),
    h('li', h('a', {onclick: (e) => model.router.handleLinkEvent(e), href: '?page=item&id=3'}, 'Item 3')),
  ]);