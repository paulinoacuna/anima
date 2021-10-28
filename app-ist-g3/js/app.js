var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'ANIMA',
    // App id
    id: 'com.anima',
    // Enable swipe panel
    panel: {
        swipe: true,
    },
    toolbar: {
        hideOnPageScroll: true,
    },
    // Add default routes
    routes: [{
            path: '/index/',
            url: 'index.html'
        },
        {
            path: '/descubre/',
            url: 'descubre.html'
        },
        {
            path: '/pages/amuletos/',
            url: 'pages/amuletos.html'
        },
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main');



function abrirPopup(popupName) {

    app.popup.open(popupName, true);

}

function cerrarPopup(popupName) {

    app.popup.close(popupName, true);

}

function hideToolbar() {
    var toolbar = document.getElementsByClassName("toolbar")[0];

    setTimeout(() => {
        app.toolbar.hide(toolbar, true)
    }, 300);
}