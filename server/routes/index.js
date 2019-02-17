/**
 * Created by Aseem on 17-02-2019.
 */
const ProjectController = require('../controller/project');

module.exports = function (app) {
    app.use('/api/projects',async (req,res,next) =>  new ProjectController(req,res,next));
};