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
            path: '/pages/tarot/',
            url: 'pages/tarot.html'
        },
        {
            path: '/pages/tarot/marsella/',
            url: 'pages/tarot/marsella.html'
        },
        {
            path: '/pages/tarot/brujas/',
            url: 'pages/tarot/brujas.html'
        },
        {
            path: '/pages/amuletos/',
            url: 'pages/amuletos.html'
        },
        {
            path: '/pages/amuletos/monedaChina/',
            url: 'pages/amuletos/monedaChina.html'
        },
        {
            path: '/pages/amuletos/ojoTurco/',
            url: 'pages/amuletos/ojoTurco.html'
        }, {
            path: '/pages/horoscopo/',
            url: 'pages/horoscopo.html'
        }, {
            path: '/pages/horoscopo/aries/',
            url: 'pages/horoscopo/aries.html'
        }, {
            path: '/pages/horoscopo/tauro/',
            url: 'pages/horoscopo/tauro.html'
        }
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