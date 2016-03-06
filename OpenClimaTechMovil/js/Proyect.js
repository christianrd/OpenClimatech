function Cambiar(x){
    myApp.addNotification({
        message: 'Haz desbloquado un logro por '+x,
        hold: 6000,
        button: {
            text: 'Bien',
            color: 'indigo',
            close: 'false'
        }
    });    
}
