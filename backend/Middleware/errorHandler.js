import { constant } from "../constant";

const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode :500;
    switch(statusCode){
        case constant.Validation_Error:
            res.json({
                title : "Validation Error",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;
        case constant.Unauthorized:
            res.json({
                title : "Unauthorized Error",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;
        case constant.Forbidden:
            res.json({  
                title : "Forbidden Error",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;
        case constant.Not_Found:
            res.json({
                title : "Not Found Error",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;
        case constant.Server_Error:
            res.json({
                title : "Server Error",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;
        default:
            console.log("No error found")
    }

}

module.exports = errorHandler;