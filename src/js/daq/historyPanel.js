const historyPanel = {
    panel:null,
    open(){
        this.panel.classList.toggle("oculto");
    },
    
    close(){
        this.panel.classList.toggle("oculto");
    },

    initialize(){
        this.panel =
        document.getElementById("panel_historial");
    }

}


export default historyPanel;