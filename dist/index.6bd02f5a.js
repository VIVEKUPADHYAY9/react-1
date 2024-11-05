const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            id: "subchild"
        }, "h1 first tag"),
        React.createElement("h2", {}, "h2 first tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "h1 first tag"),
        React.createElement("h2", {}, "h2 first tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
