let NetworkExternal = (function () {
    let _handleError = (errObj) => {
        console.error(errObj);
        throw new Error('Network response was not ok.');
    };

    return {
        fetch: (cloudFileId, type_) => {
            let app = cloud.getApp();

            return app.getTempFileURL({
                fileList: [cloudFileId]
            }).then(res => {
                if (res.fileList === undefined) {
                    _handleError(res)
                }
                else {
                    let el = res.fileList[0];

                    if (el.code === 'SUCCESS') {
                        return fetch(el.tempFileURL);
                    } else {
                        _handleError(el);
                    }
                }
            }).then((response) => {
                if (!response.ok) {
                    _handleError(response);
                }

                return response;
            }).then(value => value.text());
        }
    }
}());