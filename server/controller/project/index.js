/**
 * Created by Aseem on 17-02-2019.
 */

const MongoConnector = require('../../connector/mongo-db/index');


class ProjectController {

    static async getAllDetails(request, response, next) {
        try {
            const mongoClient = await MongoConnector();
            const projects = await mongoClient.db('showcase').collection('projects').findOne();
            const user = await mongoClient.db('showcase').collection('user').findOne();
            const data = { projects, user };
            response.status(200).json({data});
            mongoClient.close();
        } catch (err) {
            response.status(400).json(error);
            next(err);
        }
    }
}

module.exports = ProjectController;