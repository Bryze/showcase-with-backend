/**
 * Created by Aseem on 17-02-2019.
 */

class BaseController {
    constructor(request, response, next) {
        console.log({request, response, next});
        try {
            const message = {text: 'Hello'};
            response.json({message})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = BaseController;
