
var whatsAppSchedule = {

    input: '.input-container',
    btnSender: '.icon.btn-icon.icon-send',


    dispatch: function(target, eventType, text){
        var evt = document.createEvent("TextEvent");
        evt.initTextEvent(eventType, true, true, window, text, 0, "pt-BR");
        target.focus();
        target.dispatchEvent(evt);
    },

    send: function(text){

        var input = document.querySelector(this.input);
        this.dispatch(input ,'textInput',text);

        var event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });

        return document.querySelector(this.btnSender).dispatchEvent(event);
    },

    schedule: function(text,time){
        setInterval(function () {
            whatsAppSchedule.send(text)
        },time)
    }

};
