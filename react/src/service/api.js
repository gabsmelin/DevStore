import Axios from 'axios';
const api = Axios.create({
    baseURL: 'https://deevstoree.herokuapp.com'
})

export default class Api {
    async Listar(){
        let r = await api.get('/produto');
        return r.data;
    }

    async Inserir( nome, precode, categoria, precopor, avaliacao, estoque, imagem, descricao ){
        let r = await api.post('/produto', { nome, precode, categoria, precopor, avaliacao, estoque, imagem, descricao });
        return r.data;
    }

    async Alterar(idalterado, nome, precode, categoria, precopor, avaliacao, estoque, imagem, descricao ){
        let r = await api.put('/produto/' + idalterado, { nome, precode, categoria, precopor, avaliacao, estoque, imagem, descricao } );
        return r.data;
    }

    async Remover(id){
        let r = await api.delete('/produto/' + id);
        return r.data;
    }
}