const compile = () => {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");

    const result = document.getElementById("result").contentWindow.document;
    document.body.onkeyup = function () {

        result.open();
        result.writeIn(
            html.value
            + "<style>" +
            css.value + "</style>"
            + "<script>" +
            js.value +
            "</result>"
        );
        result.close();
    }
}

compile();