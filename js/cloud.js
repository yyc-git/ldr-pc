let cloud = (function () {
    let _app = null;
    let _tcb = null;

    let getStoragePrefix = () => "cloud://testldr1-3t3vf.7465-testldr1-3t3vf-1302357137/";

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


