var testSources = [//
    "me/feng3d/events/EventBubblesTest.js",//
    "me/feng3d/events/EventBubblesTest2.js",//
    "me/feng3d/events/EventDispatcherTest.js",//
    "me/feng3d/events/IEventDispatcherTest.js",//
    "me/feng3d/events/EventPriortyTest.js",//
    "me/feng3d/events/EventCustomBubblesTest.js",//
];

function loadjs(jsPath: string, onLoad = null) {
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var loadedJs = document.createElement("script");
    loadedJs.onload = onLoad;
    loadedJs.src = jsPath + "?version=" + Math.random();
    oHead.appendChild(loadedJs);
}

function onFeng3dInited(ev: Event) {

    testSources.forEach(element => {

        loadjs("out/" + element);
        var className = getClassName(element);
        document.write('<input type="submit" value="' + className + '" onclick="(new ' + className + '()).test()">');
    });
}

function getClassName(url: string): string {
    return "feng3d." + url.split("/").pop().split(".")[0];
}

loadjs("node_modules/event-ts/out/event.js", onFeng3dInited);