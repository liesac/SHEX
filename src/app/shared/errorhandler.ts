import { ErrorHandler } from '@angular/core';

export default class AppErrorHandler extends ErrorHandler {

    constructor() {
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        super();
    }

    handleError(error: any) {
        if (error.status == '401') {
            console.log("You are not logged in, please log in and come back!");
        } else {
            console.log(error);
        }
        super.handleError(error);
    }
}