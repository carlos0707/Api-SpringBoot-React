
import axios from 'axios';

const API_BASE_URL = "http://localhost:8080//atividade.restapi/grupodeatividade/";

export function loadLists() {
  return axios.get(API_BASE_URL);
}

/*
export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 2,
            content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          }
        ]
      },
    ];
  }*/