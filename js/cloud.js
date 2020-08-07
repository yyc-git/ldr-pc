let cloud = (function () {
    let _app = null;
    let _tcb = null;

    let getStoragePrefix = () => "cloud://modelcloud-8gr5ezr2ec96a9c0.6d6f-modelcloud-8gr5ezr2ec96a9c0-1256942793/";

    return {
        getStoragePrefix,
        getApp: () => _app,
        setApp: (app) => {
            _app = app;
        },
        getTcb: () => _tcb,
        setTcb: (tcb) => {
            _tcb = tcb;
        }
    }
}());


