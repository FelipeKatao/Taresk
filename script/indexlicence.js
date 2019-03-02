var keyX=0;

class ConfigLicenca {
    //Create licence key for entry Taresk//
    licence(key) {
        let licenceAvaliables = ["FELIPEKATAO", "X467P1"];
        if (licenceAvaliables.indexOf(key) > -1) {
            window.location.replace("AgendaTarefas/index.html");
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