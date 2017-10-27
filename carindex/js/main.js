/* main.js */

$(function() {
    var nowPage = "#pHome", productPage = false;

    $("#navBar").click(function() {
        hideLa("#index");
        showLa("#pHome");
        $("#pHome").append(pageContent.pHome);
        showLa("#details");
    });

    $("#knowMore").click(function() {
        hideLa("#index");
        showLa("#pAbout");
        $("#pAbout").append(pageContent.pAbout);
        shiftLi("#navAbout");
        nowPage = "#pAbout";
        showLa("#details");
    });

    $(".closeBtn").click(function() {
        if (productPage == false) {
            hideLa("#details");
            closePages();
            shiftLi("#navHome");
            nowPage = "#pHome";
            showLa("#index");
        } else {
            closePIntro();
            productPage = false;
        }
    });

    $("#navHome").click(function() {
        shiftPage(nowPage, "#navHome", "#pHome", pageContent.pHome);
        nowPage = "#pHome";
    });

    $("#navAbout").click(function() {
        shiftPage(nowPage, "#navAbout", "#pAbout", pageContent.pAbout);
        nowPage = "#pAbout";
    });

    $("#navProduct").click(function() {
        shiftPage(nowPage, "#navProduct", "#pProduct", pageContent.pProduct);
        nowPage = "#pProduct";
    });

    $("#navContact").click(function() {
        shiftPage(nowPage, "#navContact", "#pContact", pageContent.pContact);
        nowPage = "#pContact";
    });

    $(document).on("click", "#pIntroWhy", function () {
        showPIntro("Why");
        productPage = true;
    });
    $(document).on("click", "#pIntroWhere", function () {
        showPIntro("Where");
        productPage = true;
    });
    $(document).on("click", "#pIntroWhen", function () {
        showPIntro("When");
        productPage = true;
    });
    $(document).on("click", "#pIntroHow", function () {
        showPIntro("How");
        productPage = true;
    });
});

function closePages() {
    let page = ["pHome", "pAbout", "pProduct", "pContact"];
    for(let i = 0; i < page.length; i++) {
        hideLa("#" + page[i]);
        $("#" + page[i]).empty();
    }
}

function closePIntro() {
    let pPage = ["Why", "Where", "When", "How"];
    for(let k = 0; k < pPage.length; k++) {
        hideLa("#product" + pPage[k]);
        hideLa("#conForProduct" + pPage[k]);
    }
    hideLa("#navForProduct");
    showLa("#nav > ul");
    $("#pProduct").append(pageContent.pProduct);
    showLa("#pProduct");
}

function hideLa(toHide) {
    $(toHide).css({
        'opacity': '0'
    });
    $(toHide).hide();
}

function shiftLi(toAdd) {
    $("#nav > ul > li > div").removeClass("active");
    $(toAdd).addClass("active");
}

function shiftPage(nowPageLa, pageLi, toPage, appendContent) {
    if(nowPageLa != toPage) {
        console.log(nowPageLa + " > " + toPage);
        shiftLi(pageLi);
        closePages();
        $(toPage).append(appendContent);
        showLa(toPage);
    }
}

function showLa(toShow) {
    $(toShow).show();
    $(toShow).css({
        'opacity': '1'
    });
}

function showPIntro(pPage) {
    hideLa("#nav > ul");
    closePages();
    showLa("#navForProduct");
    showLa("#product" + pPage);
    showLa("#conForProduct" + pPage);
    return false;
}
