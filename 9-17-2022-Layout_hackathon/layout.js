
let Pondit = {}; //Creating Namespace

Pondit.Layout = {
    header: () => {
        let header = document.createElement('header');
        header.setAttribute("style", "background: yellowgreen; height: 20vh; padding: 1em;box-sizing: border-box;");
        let text = document.createTextNode("Header");
        header.appendChild(text);
        return header;
    },

    footer: () => {
        let footer = document.createElement("footer");
        footer.setAttribute("style", "background: yellowgreen; height: 20vh; padding: 1em;box-sizing: border-box;")
        let text = document.createTextNode("Footer");
        footer.appendChild(text);

        return footer;
    },

    nav: () => {
        let nav = document.createElement("nav");
        nav.setAttribute("style", "flex: 0 0 20vw; background: beige; order:0; padding: 1em; box-sizing: border-box; ")
        let text = document.createTextNode('Nav');
        nav.appendChild(text);

        return nav;
    },

    article: () => {
        let article = document.createElement('article');
        article.setAttribute('style', 'flex: 1; order:1; padding: 1em; box-sizing: border-box; ');
        let text = document.createTextNode('Article');
        article.appendChild(text);

        return article;
    },

    aside: () => {
        let aside = document.createElement('aside');
        aside.setAttribute("style", "flex: 0 0 20vw; background: beige; order:2; padding: 1em; box-sizing: border-box; ")
        let text = document.createTextNode('Aside');
        aside.appendChild(text);

        return aside;
    },

    main_div: () => {

        let div = document.createElement('div');
        div.setAttribute('id', 'main_div');
        div.setAttribute("style", "display: flex; flex: 1; box-sizing: border-box; ");
        div.appendChild(Pondit.Layout.nav());
        div.appendChild(Pondit.Layout.article());
        div.appendChild(Pondit.Layout.aside());

        return div;

    },

    buildStructure: () => {   //for fixed body structure  
        let body = document.getElementsByTagName('body')[0];
        body.setAttribute("style", "display: flex; min-height: 100vh; flex-direction: column; margin: 0; box-sizing: border-box; ");

    },

    display: () => { //for displaying elements 
        let display = document.getElementsByTagName('body')[0];
        display.appendChild(Pondit.Layout.header());
        display.appendChild(Pondit.Layout.main_div());
        display.appendChild(Pondit.Layout.footer());
    },
};

Pondit.Layout.buildStructure();
Pondit.Layout.display();