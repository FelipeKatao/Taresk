class Alertas{
  _nomeAlerta=[];
  _priordadeAlerta=[];
  _idAlertA=[];
  function  novoAlerta(nome,prioridade,id){
    _nomeAlerta.push(nome);
    _priordadeAlerta.push(prioridade);
    _idAlertA.push(id);
    return "hell0o";
  }
  function  chamarAlertaId(id){
    console.log(_idAlertA)
  }
}
