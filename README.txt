To use this contact manager you should, first and foremost, to create and run
a Mongo DB server. To do so, check if the directory /data/db exists. If not,
create it with:
sudo mkdir /data/db

Then, use the following command to become the owner of the directory:
sudo chown -R $USER /data/db

Then, run the command:
mongod

With the Mongo DB server running, run this API. In this directory:
npm install (if not installed yet)
npm run start

To use the HTTP methods (other than GET) you must use Postman. Remember that
the fields 'nome', 'apelido' and 'contato' in each entry is required.

The available routes are:
GET '/' to get a hello message.
GET '/api/contatos' to get all contacts.
GET '/api/contatos/{id}' to get a contact by id.
POST '/api/contatos' to post a contact.
PUT '/api/contatos/{id}' to edit a contact.
DELETE '/api/contatos/{id}' to delete a contact.

