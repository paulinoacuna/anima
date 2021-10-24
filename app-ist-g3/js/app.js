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
            path: '/about/',
            url: 'about.html',
        },
        {
            path: '/inicio/',
            url: 'index.html',
        },
        {
            path: '/welcome/registro/',
            url: 'welcome/registro.html'
        },
        {
            path: '/welcome/sepamos/',
            url: 'welcome/sepamos.html'
        },
        {
            path: '/welcome/personalizate/',
            url: 'welcome/personalizate.html'
        },
        {
            path: '/welcome/listoaprender/',
            url: 'welcome/listoaprender.html'
        },
        {
            path: '/index/',
            url: 'index.html'
        },
        {
            path: '/descubre/',
            url: 'descubre.html'
        },
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main');



function abrirPopup(popupName) {

    app.popup.open(popupName, true)

}

function cerrarPopup(popupName) {

    app.popup.close(popupName, true)

}