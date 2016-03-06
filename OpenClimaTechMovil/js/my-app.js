var $$ = Dom7;
var myApp = new Framework7({
    modalTitle: 'OpenClimaTech',
    material: true,
    pushState: true,
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
});

var mainView = myApp.addView('.view-main', {
  dynamicNavbar: false
})

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    mainView.router.back();  
}

//myApp.onPageBeforeInit('index', function (page) {        
//      
//}).trigger();
//
//myApp.onPageBeforeInit('taks', function (page) {
//    
//});
//
//myApp.onPageAfterAnimation('adm-perfil', function (page) {
//    
//});
//
//myApp.onPageInit('editar-cuatrimestre', function (page) {
//    
//});
