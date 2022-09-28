window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    console.log('altura header', document.getElementsByTagName("header")[0].clientHeight, 'altura nav', document.getElementsByTagName("nav")[0].clientHeight, 'altura scroll', document.documentElement.scrollTop);

    if (document.documentElement.scrollTop > document.getElementsByTagName("header")[0].clientHeight) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(224, 255, 255, 0.9)";
    }
    else {
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(224, 255, 255, 0.5)";
    }
}

function facebook() {
    window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'); return false;
}