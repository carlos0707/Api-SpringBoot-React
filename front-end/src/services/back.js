

/*
const instance = axios.create({
    baseURL: "http://localhost:8080//atividade.restapi/grupodeatividade/",
});*/



export function getList() {
    return fetch('http://localhost:8080//atividade.restapi/grupodeatividade/')
        .then(data => data.json())
}

export function setItem(titulodogrupo) {
    return fetch('http://localhost:8080//atividade.restapi/grupodeatividade/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titulodogrupo })

    })
        .then(data => data.json());
}

export function setItemAtividade(id, titulo) {
    return fetch('http://localhost:8080//atividade.restapi/grupodeatividade/'+id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titulo })

    })
        .then(data => data.json());
}

export function moverAtividade(id, atividades){
    return fetch('http://localhost:8080//atividade.restapi/grupodeatividade/'+id,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ atividades })
    })
    .then(data => data.json);
}

export function setTitulo(data){
    return fetch('http://localhost:8080//atividade.restapi/grupodeatividade/',{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:data.id, titulodogrupo: data.titulodogrupo, atividades: data.atividades })
    })
    .then(data => data.json);
}

export function setTituloAtividade(id, titulo){
    return fetch('http://localhost:8080//atividade.restapi/grupodeatividade/'+id,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:id, titulo:titulo, descricao: '' })
    })
    .then(data => data.json);
}

export function del(id) {
    return fetch('http://localhost:8080//atividade.restapi/grupodeatividade/' + id,
        {
            method: 'DELETE',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
}