import * as mongoose from 'mongoose';

const ContatosSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    apelido: {type: String, required: true, unique: true},
    contato: {type: String, required: true, unique: true},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model('Contatos', ContatosSchema);

