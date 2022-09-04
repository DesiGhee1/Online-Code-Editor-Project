const compile = () => {
    const css = document.getElementById("css");
    const html = document.getElementById("html");
    const js = document.getElementById("js");

    const result = document.getElementById("result").contentWindow.document;
    document.body.onkeyup = function () {
        
        code.open();
        code.writeIn(
            "Hello"
        );


    }

}

compile();