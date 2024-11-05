import { h, info } from "/js/src/index.js"

export default (model) => [
    h("h1.succes#homeTitle", {
        style: "text-align:center",
    }, "Welcome to the HOME page"),
    menu(model) 
]
const menu = (model) => h('ul', [
    h('li', h('button.btn.btn-primary', {onclick: (e) => model.router.handleLinkEvent(e), href: '?page=about'}, [
        info(),
        "Go to About page",
    ])),
    h('li', h('a', {onclick: (e) => model.homeModel.userName="Jasper"}, model.homeModel.userName)),
    h('li', h('a', {onclick: (e) => model.router.handleLinkEvent(e), href: '?page=item&id=2'}, 'Item 2')),
    h('li', h('a', {onclick: (e) => model.router.handleLinkEvent(e), href: '?page=item&id=3'}, 'Item 3')),
    h('li', h('a', {onclick: (e) => model.homeModel.data}, model.homeModel.getdata)),
    model.homeModel.data.match
  ]);