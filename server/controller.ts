import model from './model';

class Controller {
    constructor(){}

    getContatos() {
        return model.find({});
    }

    select(req, resp) {
        this.getContatos()
            .then(contatos => resp.status(200).json({'result': contatos}))
            .catch(err => resp.status(400).json({'result': err}));
    }

    getContatoById(id) {
        return model.find(id);
    }

    selectOne(req, resp) {
        const id = {_id: req.params.id};

        this.getContatoById(id)
            .then(contato => resp.status(200).json({'result': contato}))
            .catch(err => resp.status(400).json({'result': err}));
    }

    deleteById(id) {
        return model.deleteOne(id);
    }

    delete(req, resp) {
        const id = {_id: req.params.id};

        this.deleteById(id)
            .then(contato => resp.status(200).json({'result': contato}))
            .catch(err => resp.status(400).json({'result': err}));
    }

    updateContato(id, data) {
        return model.findOneAndUpdate(id, data);
    }

    update(req, resp) {
        const id = {_id: req.params.id};
        const contato = req.body;

        this.updateContato(id, contato)
            .then(contato => resp.status(200).json({'result': contato}))
            .catch(err => resp.status(400).json({'result': err}));
    }

    createContato(data) {
        return model.create(data);
    }

    insert(req, resp) {
        const contato = req.body;

        this.createContato(contato)
            .then(contato => resp.status(200).json({'result': contato}))
            .catch(err => resp.status(400).json({'result': err}));
    }
}

export default Controller;

