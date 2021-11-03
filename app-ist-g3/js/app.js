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
            path: '/ajustes/',
            url: 'ajustes.html'
        },
        {
            path: '/pages/ajustes/perfil/',
            url: 'pages/ajustes/perfil.html'
        },
        {
            path: '/pages/ajustes/perfil/cambiar_contrasena/',
            url: 'pages/ajustes/perfil/cambiar_contrasena.html'

        },
        {
            path: '/pages/ajustes/perfil/desactivar_cuenta/',
            url: 'pages/ajustes/perfil/desactivar_cuenta.html'

        },
        {
            path: '/pages/ajustes/notificaciones/',
            url: 'pages/ajustes/notificaciones.html'
        },
        {
            path: '/pages/ajustes/idioma/',
            url: 'pages/ajustes/idioma.html'
        },
        {
            path: '/pages/ajustes/sincronizar/',
            url: 'pages/ajustes/sincronizar.html'
        },
        {
            path: '/pages/ajustes/soporte_tecnico/',
            url: 'pages/ajustes/soporte_tecnico.html'
        },
        {
            path: '/pages/ajustes/cerrar_sesion/',
            url: 'pages/ajustes/cerrar_sesion.html'
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
            path: '/pages/tarot/angeles/',
            url: 'pages/tarot/angeles.html'
        },
        {
            path: '/pages/tarot/ejipcio/',
            url: 'pages/tarot/ejipcio.html'
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
        },
        {
            path: '/pages/horoscopo/',
            url: 'pages/horoscopo.html'
        },
        {
            path: '/pages/horoscopo/aries/',
            url: 'pages/horoscopo/aries.html'
        },
        {
            path: '/pages/horoscopo/tauro/',
            url: 'pages/horoscopo/tauro.html'
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