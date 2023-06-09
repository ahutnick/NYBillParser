function asyncErrorBoundary(delegate, defaultStatus) {
    return (request, response, next) => {
        Promise.resolve()
            .then(() => delegate(request, response, next))
            .catch((error = {}) => {
                const { status = defaultStatus, message = error } = error;
                console.log(message);
                next({
                    status,
                    message,
                });
            });
    };
}

module.exports = asyncErrorBoundary;
