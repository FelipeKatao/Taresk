var keyX=0;

class ConfigLicenca {
    //Create licence key for entry Taresk//
    licence(key) {
        //Its line for test//
        window.location.replace("TareskApp/Taresk.html");
        //End test
        let licenceAvaliables = ["KATAO", "DELGADO","RECRUTADOR"];
        if (licenceAvaliables.indexOf(key) > 1) {
            window.location.replace("TareskApp/Taresk.html");
        } else {
            alert("Sua chave de licença não é valida, confira se esta digitada corretamente. Ou procure o suporte tecnico");
        }
    }
    readlicence() {

    }
    GetLicense()
    {
        this.keyX = document.getElementById("campotxt").value;
        console.log(this.keyX);
    }
}
