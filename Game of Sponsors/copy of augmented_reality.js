//———————————————————————WS

var btn_ws = document.querySelector("#btn_ws");
var intro_ws = document.querySelector("#intro_ws");
var question_ws = document.querySelector("#pergunta_ws");
var txt_ws = document.querySelector("#texto_ws");

function Show_Ws() {

    btn_ws.onclick = function () {

        btn_ws.setAttribute('visible', 'false');
        intro_ws.setAttribute('visible', 'false');

        question_ws.setAttribute('visible', 'true');
        txt_ws.setAttribute('visible', 'true');

        answer_ws.setAttribute('visible', 'true');
        answer2_ws.setAttribute('visible', 'true');
        answerr_ws.setAttribute('visible', 'true');
    }
}

var answer_ws = document.querySelector("#answer_ws");
var answer2_ws = document.querySelector("#answer2_ws");
var answerr_ws = document.querySelector("#answerr_ws");

var question_wsW = document.querySelector("#pergunta_wsW");
var txt_wsW = document.querySelector("#texto_wsW");
var btn_wsW = document.querySelector("#btn_wsW");

answer_ws.onclick = function () {

    answer_ws.setAttribute('visible', 'false');
    answer2_ws.setAttribute('visible', 'false');
    answerr_ws.setAttribute('visible', 'false');

    question_ws.setAttribute('visible', 'false');
    txt_ws.setAttribute('visible', 'false');

    question_wsW.setAttribute('visible', 'true');
    txt_wsW.setAttribute('visible', 'true');
    btn_wsW.setAttribute('visible', 'true');

}


answer2_ws.onclick = function () {

    answer_ws.setAttribute('visible', 'false');
    answer2_ws.setAttribute('visible', 'false');
    answerr_ws.setAttribute('visible', 'false');

    question_ws.setAttribute('visible', 'false');
    txt_ws.setAttribute('visible', 'false');

    question_wsW.setAttribute('visible', 'true');
    txt_wsW.setAttribute('visible', 'true');
    btn_wsW.setAttribute('visible', 'true');

}

var question_wsR = document.querySelector("#pergunta_wsR");
var txt_wsR = document.querySelector("#texto_wsR");
var btn_wsR = document.querySelector("#btn_wsR");

answerr_ws.onclick = function () {

    answer_ws.setAttribute('visible', 'false');
    answer2_ws.setAttribute('visible', 'false');
    answerr_ws.setAttribute('visible', 'false');

    question_ws.setAttribute('visible', 'false');
    txt_ws.setAttribute('visible', 'false');



    question_wsR.setAttribute('visible', 'true');
    txt_wsR.setAttribute('visible', 'true');
    btn_wsR.setAttribute('visible', 'true');

}


var ws_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_WS() {

    btn_wsR.onclick = function () {

        window.location = ws_url;
    }
}


function Leave_WS() {

    btn_wsW.onclick = function () {

        window.location = index_url;
    }
}

//———————————————————————BETA-I



var btn_beta = document.querySelector("#btn_beta");
var intro_beta = document.querySelector("#intro_beta");
var question_beta = document.querySelector("#pergunta_beta");
var txt_beta = document.querySelector("#texto_beta");

function Show_beta() {

    btn_beta.onclick = function () {

        btn_beta.setAttribute('visible', 'false');
        intro_beta.setAttribute('visible', 'false');

        question_beta.setAttribute('visible', 'true');
        txt_beta.setAttribute('visible', 'true');

        answer_beta.setAttribute('visible', 'true');
        answer2_beta.setAttribute('visible', 'true');
        answerr_beta.setAttribute('visible', 'true');
    }
}

var answer_beta = document.querySelector("#answer_beta");
var answer2_beta = document.querySelector("#answer2_beta");
var answerr_beta = document.querySelector("#answerr_beta");

var question_betaW = document.querySelector("#pergunta_betaW");
var txt_betaW = document.querySelector("#texto_betaW");
var btn_betaW = document.querySelector("#btn_betaW");

answer_beta.onclick = function () {

    answer_beta.setAttribute('visible', 'false');
    answer2_beta.setAttribute('visible', 'false');
    answerr_beta.setAttribute('visible', 'false');

    question_beta.setAttribute('visible', 'false');
    txt_beta.setAttribute('visible', 'false');

    question_betaW.setAttribute('visible', 'true');
    txt_betaW.setAttribute('visible', 'true');
    btn_betaW.setAttribute('visible', 'true');

}


answer2_beta.onclick = function () {

    answer_beta.setAttribute('visible', 'false');
    answer2_beta.setAttribute('visible', 'false');
    answerr_beta.setAttribute('visible', 'false');

    question_beta.setAttribute('visible', 'false');
    txt_beta.setAttribute('visible', 'false');

    question_betaW.setAttribute('visible', 'true');
    txt_betaW.setAttribute('visible', 'true');
    btn_betaW.setAttribute('visible', 'true');

}

var question_betaR = document.querySelector("#pergunta_betaR");
var txt_betaR = document.querySelector("#texto_betaR");
var btn_betaR = document.querySelector("#btn_betaR");

answerr_beta.onclick = function () {

    answer_beta.setAttribute('visible', 'false');
    answer2_beta.setAttribute('visible', 'false');
    answerr_beta.setAttribute('visible', 'false');

    question_beta.setAttribute('visible', 'false');
    txt_beta.setAttribute('visible', 'false');



    question_betaR.setAttribute('visible', 'true');
    txt_betaR.setAttribute('visible', 'true');
    btn_betaR.setAttribute('visible', 'true');

}


var beta_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_beta() {

    btn_betaR.onclick = function () {

        window.location = beta_url;
    }
}


function Leave_beta() {

    btn_betaW.onclick = function () {

        window.location = index_url;
    }
}


//———————————————————————BRIGHT



var btn_bright = document.querySelector("#btn_bright");
var intro_bright = document.querySelector("#intro_bright");
var question_bright = document.querySelector("#pergunta_bright");
var txt_bright = document.querySelector("#texto_bright");

function Show_bright() {

    btn_bright.onclick = function () {

        btn_bright.setAttribute('visible', 'false');
        intro_bright.setAttribute('visible', 'false');

        question_bright.setAttribute('visible', 'true');
        txt_bright.setAttribute('visible', 'true');

        answer_bright.setAttribute('visible', 'true');
        answer2_bright.setAttribute('visible', 'true');
        answerr_bright.setAttribute('visible', 'true');
    }
}

var answer_bright = document.querySelector("#answer_bright");
var answer2_bright = document.querySelector("#answer2_bright");
var answerr_bright = document.querySelector("#answerr_bright");

var question_brightW = document.querySelector("#pergunta_brightW");
var txt_brightW = document.querySelector("#texto_brightW");
var btn_brightW = document.querySelector("#btn_brightW");

answer_bright.onclick = function () {

    answer_bright.setAttribute('visible', 'false');
    answer2_bright.setAttribute('visible', 'false');
    answerr_bright.setAttribute('visible', 'false');

    question_bright.setAttribute('visible', 'false');
    txt_bright.setAttribute('visible', 'false');

    question_brightW.setAttribute('visible', 'true');
    txt_brightW.setAttribute('visible', 'true');
    btn_brightW.setAttribute('visible', 'true');

}


answer2_bright.onclick = function () {

    answer_bright.setAttribute('visible', 'false');
    answer2_bright.setAttribute('visible', 'false');
    answerr_bright.setAttribute('visible', 'false');

    question_bright.setAttribute('visible', 'false');
    txt_bright.setAttribute('visible', 'false');

    question_brightW.setAttribute('visible', 'true');
    txt_brightW.setAttribute('visible', 'true');
    btn_brightW.setAttribute('visible', 'true');

}

var question_brightR = document.querySelector("#pergunta_brightR");
var txt_brightR = document.querySelector("#texto_brightR");
var btn_brightR = document.querySelector("#btn_brightR");

answerr_bright.onclick = function () {

    answer_bright.setAttribute('visible', 'false');
    answer2_bright.setAttribute('visible', 'false');
    answerr_bright.setAttribute('visible', 'false');

    question_bright.setAttribute('visible', 'false');
    txt_bright.setAttribute('visible', 'false');



    question_brightR.setAttribute('visible', 'true');
    txt_brightR.setAttribute('visible', 'true');
    btn_brightR.setAttribute('visible', 'true');

}


var bright_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_bright() {

    btn_brightR.onclick = function () {

        window.location = bright_url;
    }
}


function Leave_bright() {

    btn_brightW.onclick = function () {

        window.location = index_url;
    }
}



//———————————————————————CIGALA 




var btn_cigala = document.querySelector("#btn_cigala");
var intro_cigala = document.querySelector("#intro_cigala");
var question_cigala = document.querySelector("#pergunta_cigala");
var txt_cigala = document.querySelector("#texto_cigala");

function Show_cigala() {

    btn_cigala.onclick = function () {

        btn_cigala.setAttribute('visible', 'false');
        intro_cigala.setAttribute('visible', 'false');

        question_cigala.setAttribute('visible', 'true');
        txt_cigala.setAttribute('visible', 'true');

        answer_cigala.setAttribute('visible', 'true');
        answer2_cigala.setAttribute('visible', 'true');
        answerr_cigala.setAttribute('visible', 'true');
    }
}

var answer_cigala = document.querySelector("#answer_cigala");
var answer2_cigala = document.querySelector("#answer2_cigala");
var answerr_cigala = document.querySelector("#answerr_cigala");

var question_cigalaW = document.querySelector("#pergunta_cigalaW");
var txt_cigalaW = document.querySelector("#texto_cigalaW");
var btn_cigalaW = document.querySelector("#btn_cigalaW");

answer_cigala.onclick = function () {

    answer_cigala.setAttribute('visible', 'false');
    answer2_cigala.setAttribute('visible', 'false');
    answerr_cigala.setAttribute('visible', 'false');

    question_cigala.setAttribute('visible', 'false');
    txt_cigala.setAttribute('visible', 'false');

    question_cigalaW.setAttribute('visible', 'true');
    txt_cigalaW.setAttribute('visible', 'true');
    btn_cigalaW.setAttribute('visible', 'true');

}


answer2_cigala.onclick = function () {

    answer_cigala.setAttribute('visible', 'false');
    answer2_cigala.setAttribute('visible', 'false');
    answerr_cigala.setAttribute('visible', 'false');

    question_cigala.setAttribute('visible', 'false');
    txt_cigala.setAttribute('visible', 'false');

    question_cigalaW.setAttribute('visible', 'true');
    txt_cigalaW.setAttribute('visible', 'true');
    btn_cigalaW.setAttribute('visible', 'true');

}

var question_cigalaR = document.querySelector("#pergunta_cigalaR");
var txt_cigalaR = document.querySelector("#texto_cigalaR");
var btn_cigalaR = document.querySelector("#btn_cigalaR");

answerr_cigala.onclick = function () {

    answer_cigala.setAttribute('visible', 'false');
    answer2_cigala.setAttribute('visible', 'false');
    answerr_cigala.setAttribute('visible', 'false');

    question_cigala.setAttribute('visible', 'false');
    txt_cigala.setAttribute('visible', 'false');



    question_cigalaR.setAttribute('visible', 'true');
    txt_cigalaR.setAttribute('visible', 'true');
    btn_cigalaR.setAttribute('visible', 'true');

}


var cigala_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_cigala() {

    btn_cigalaR.onclick = function () {

        window.location = cigala_url;
    }
}


function Leave_cigala() {

    btn_cigalaW.onclick = function () {

        window.location = index_url;
    }
}



//———————————————————————DATA




var btn_datap = document.querySelector("#btn_datap");
var intro_datap = document.querySelector("#intro_datap");
var question_datap = document.querySelector("#pergunta_datap");
var txt_datap = document.querySelector("#texto_datap");

function Show_datap() {

    btn_datap.onclick = function () {

        btn_datap.setAttribute('visible', 'false');
        intro_datap.setAttribute('visible', 'false');

        question_datap.setAttribute('visible', 'true');
        txt_datap.setAttribute('visible', 'true');

        answer_datap.setAttribute('visible', 'true');
        answer2_datap.setAttribute('visible', 'true');
        answerr_datap.setAttribute('visible', 'true');
    }
}

var answer_datap = document.querySelector("#answer_datap");
var answer2_datap = document.querySelector("#answer2_datap");
var answerr_datap = document.querySelector("#answerr_datap");

var question_datapW = document.querySelector("#pergunta_datapW");
var txt_datapW = document.querySelector("#texto_datapW");
var btn_datapW = document.querySelector("#btn_datapW");

answer_datap.onclick = function () {

    answer_datap.setAttribute('visible', 'false');
    answer2_datap.setAttribute('visible', 'false');
    answerr_datap.setAttribute('visible', 'false');

    question_datap.setAttribute('visible', 'false');
    txt_datap.setAttribute('visible', 'false');

    question_datapW.setAttribute('visible', 'true');
    txt_datapW.setAttribute('visible', 'true');
    btn_datapW.setAttribute('visible', 'true');

}


answer2_datap.onclick = function () {

    answer_datap.setAttribute('visible', 'false');
    answer2_datap.setAttribute('visible', 'false');
    answerr_datap.setAttribute('visible', 'false');

    question_datap.setAttribute('visible', 'false');
    txt_datap.setAttribute('visible', 'false');

    question_datapW.setAttribute('visible', 'true');
    txt_datapW.setAttribute('visible', 'true');
    btn_datapW.setAttribute('visible', 'true');

}

var question_datapR = document.querySelector("#pergunta_datapR");
var txt_datapR = document.querySelector("#texto_datapR");
var btn_datapR = document.querySelector("#btn_datapR");

answerr_datap.onclick = function () {

    answer_datap.setAttribute('visible', 'false');
    answer2_datap.setAttribute('visible', 'false');
    answerr_datap.setAttribute('visible', 'false');

    question_datap.setAttribute('visible', 'false');
    txt_datap.setAttribute('visible', 'false');



    question_datapR.setAttribute('visible', 'true');
    txt_datapR.setAttribute('visible', 'true');
    btn_datapR.setAttribute('visible', 'true');

}


var datap_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_datap() {

    btn_datapR.onclick = function () {

        window.location = datap_url;
    }
}


function Leave_datap() {

    btn_datapW.onclick = function () {

        window.location = index_url;
    }
}



//———————————————————————EAT




var btn_eat = document.querySelector("#btn_eat");
var intro_eat = document.querySelector("#intro_eat");
var question_eat = document.querySelector("#pergunta_eat");
var txt_eat = document.querySelector("#texto_eat");

function Show_eat() {

    btn_eat.onclick = function () {

        btn_eat.setAttribute('visible', 'false');
        intro_eat.setAttribute('visible', 'false');

        question_eat.setAttribute('visible', 'true');
        txt_eat.setAttribute('visible', 'true');

        answer_eat.setAttribute('visible', 'true');
        answer2_eat.setAttribute('visible', 'true');
        answerr_eat.setAttribute('visible', 'true');
    }
}

var answer_eat = document.querySelector("#answer_eat");
var answer2_eat = document.querySelector("#answer2_eat");
var answerr_eat = document.querySelector("#answerr_eat");

var question_eatW = document.querySelector("#pergunta_eatW");
var txt_eatW = document.querySelector("#texto_eatW");
var btn_eatW = document.querySelector("#btn_eatW");

answer_eat.onclick = function () {

    answer_eat.setAttribute('visible', 'false');
    answer2_eat.setAttribute('visible', 'false');
    answerr_eat.setAttribute('visible', 'false');

    question_eat.setAttribute('visible', 'false');
    txt_eat.setAttribute('visible', 'false');

    question_eatW.setAttribute('visible', 'true');
    txt_eatW.setAttribute('visible', 'true');
    btn_eatW.setAttribute('visible', 'true');

}


answer2_eat.onclick = function () {

    answer_eat.setAttribute('visible', 'false');
    answer2_eat.setAttribute('visible', 'false');
    answerr_eat.setAttribute('visible', 'false');

    question_eat.setAttribute('visible', 'false');
    txt_eat.setAttribute('visible', 'false');

    question_eatW.setAttribute('visible', 'true');
    txt_eatW.setAttribute('visible', 'true');
    btn_eatW.setAttribute('visible', 'true');

}

var question_eatR = document.querySelector("#pergunta_eatR");
var txt_eatR = document.querySelector("#texto_eatR");
var btn_eatR = document.querySelector("#btn_eatR");

answerr_eat.onclick = function () {

    answer_eat.setAttribute('visible', 'false');
    answer2_eat.setAttribute('visible', 'false');
    answerr_eat.setAttribute('visible', 'false');

    question_eat.setAttribute('visible', 'false');
    txt_eat.setAttribute('visible', 'false');



    question_eatR.setAttribute('visible', 'true');
    txt_eatR.setAttribute('visible', 'true');
    btn_eatR.setAttribute('visible', 'true');

}


var eat_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_eat() {

    btn_eatR.onclick = function () {

        window.location = eat_url;
    }
}


function Leave_eat() {

    btn_eatW.onclick = function () {

        window.location = index_url;
    }
}




//———————————————————————FEEDZAI




var btn_feedzai = document.querySelector("#btn_feedzai");
var intro_feedzai = document.querySelector("#intro_feedzai");
var question_feedzai = document.querySelector("#pergunta_feedzai");
var txt_feedzai = document.querySelector("#texto_feedzai");

function Show_feedzai() {

    btn_feedzai.onclick = function () {

        btn_feedzai.setAttribute('visible', 'false');
        intro_feedzai.setAttribute('visible', 'false');

        question_feedzai.setAttribute('visible', 'true');
        txt_feedzai.setAttribute('visible', 'true');

        answer_feedzai.setAttribute('visible', 'true');
        answer2_feedzai.setAttribute('visible', 'true');
        answerr_feedzai.setAttribute('visible', 'true');
    }
}

var answer_feedzai = document.querySelector("#answer_feedzai");
var answer2_feedzai = document.querySelector("#answer2_feedzai");
var answerr_feedzai = document.querySelector("#answerr_feedzai");

var question_feedzaiW = document.querySelector("#pergunta_feedzaiW");
var txt_feedzaiW = document.querySelector("#texto_feedzaiW");
var btn_feedzaiW = document.querySelector("#btn_feedzaiW");

answer_feedzai.onclick = function () {

    answer_feedzai.setAttribute('visible', 'false');
    answer2_feedzai.setAttribute('visible', 'false');
    answerr_feedzai.setAttribute('visible', 'false');

    question_feedzai.setAttribute('visible', 'false');
    txt_feedzai.setAttribute('visible', 'false');

    question_feedzaiW.setAttribute('visible', 'true');
    txt_feedzaiW.setAttribute('visible', 'true');
    btn_feedzaiW.setAttribute('visible', 'true');

}


answer2_feedzai.onclick = function () {

    answer_feedzai.setAttribute('visible', 'false');
    answer2_feedzai.setAttribute('visible', 'false');
    answerr_feedzai.setAttribute('visible', 'false');

    question_feedzai.setAttribute('visible', 'false');
    txt_feedzai.setAttribute('visible', 'false');

    question_feedzaiW.setAttribute('visible', 'true');
    txt_feedzaiW.setAttribute('visible', 'true');
    btn_feedzaiW.setAttribute('visible', 'true');

}

var question_feedzaiR = document.querySelector("#pergunta_feedzaiR");
var txt_feedzaiR = document.querySelector("#texto_feedzaiR");
var btn_feedzaiR = document.querySelector("#btn_feedzaiR");

answerr_feedzai.onclick = function () {

    answer_feedzai.setAttribute('visible', 'false');
    answer2_feedzai.setAttribute('visible', 'false');
    answerr_feedzai.setAttribute('visible', 'false');

    question_feedzai.setAttribute('visible', 'false');
    txt_feedzai.setAttribute('visible', 'false');



    question_feedzaiR.setAttribute('visible', 'true');
    txt_feedzaiR.setAttribute('visible', 'true');
    btn_feedzaiR.setAttribute('visible', 'true');

}


var feedzai_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_feedzai() {

    btn_feedzaiR.onclick = function () {

        window.location = feedzai_url;
    }
}


function Leave_feedzai() {

    btn_feedzaiW.onclick = function () {

        window.location = index_url;
    }
}


//———————————————————————GALP



var btn_galp = document.querySelector("#btn_galp");
var intro_galp = document.querySelector("#intro_galp");
var question_galp = document.querySelector("#pergunta_galp");
var txt_galp = document.querySelector("#texto_galp");

function Show_galp() {

    btn_galp.onclick = function () {

        btn_galp.setAttribute('visible', 'false');
        intro_galp.setAttribute('visible', 'false');

        question_galp.setAttribute('visible', 'true');
        txt_galp.setAttribute('visible', 'true');

        answer_galp.setAttribute('visible', 'true');
        answer2_galp.setAttribute('visible', 'true');
        answerr_galp.setAttribute('visible', 'true');
    }
}

var answer_galp = document.querySelector("#answer_galp");
var answer2_galp = document.querySelector("#answer2_galp");
var answerr_galp = document.querySelector("#answerr_galp");

var question_galpW = document.querySelector("#pergunta_galpW");
var txt_galpW = document.querySelector("#texto_galpW");
var btn_galpW = document.querySelector("#btn_galpW");

answer_galp.onclick = function () {

    answer_galp.setAttribute('visible', 'false');
    answer2_galp.setAttribute('visible', 'false');
    answerr_galp.setAttribute('visible', 'false');

    question_galp.setAttribute('visible', 'false');
    txt_galp.setAttribute('visible', 'false');

    question_galpW.setAttribute('visible', 'true');
    txt_galpW.setAttribute('visible', 'true');
    btn_galpW.setAttribute('visible', 'true');

}


answer2_galp.onclick = function () {

    answer_galp.setAttribute('visible', 'false');
    answer2_galp.setAttribute('visible', 'false');
    answerr_galp.setAttribute('visible', 'false');

    question_galp.setAttribute('visible', 'false');
    txt_galp.setAttribute('visible', 'false');

    question_galpW.setAttribute('visible', 'true');
    txt_galpW.setAttribute('visible', 'true');
    btn_galpW.setAttribute('visible', 'true');

}

var question_galpR = document.querySelector("#pergunta_galpR");
var txt_galpR = document.querySelector("#texto_galpR");
var btn_galpR = document.querySelector("#btn_galpR");

answerr_galp.onclick = function () {

    answer_galp.setAttribute('visible', 'false');
    answer2_galp.setAttribute('visible', 'false');
    answerr_galp.setAttribute('visible', 'false');

    question_galp.setAttribute('visible', 'false');
    txt_galp.setAttribute('visible', 'false');



    question_galpR.setAttribute('visible', 'true');
    txt_galpR.setAttribute('visible', 'true');
    btn_galpR.setAttribute('visible', 'true');

}


var galp_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_galp() {

    btn_galpR.onclick = function () {

        window.location = galp_url;
    }
}


function Leave_galp() {

    btn_galpW.onclick = function () {

        window.location = index_url;
    }
}


//———————————————————————GROW



var btn_grow = document.querySelector("#btn_grow");
var intro_grow = document.querySelector("#intro_grow");
var question_grow = document.querySelector("#pergunta_grow");
var txt_grow = document.querySelector("#texto_grow");

function Show_grow() {

    btn_grow.onclick = function () {

        btn_grow.setAttribute('visible', 'false');
        intro_grow.setAttribute('visible', 'false');

        question_grow.setAttribute('visible', 'true');
        txt_grow.setAttribute('visible', 'true');

        answer_grow.setAttribute('visible', 'true');
        answer2_grow.setAttribute('visible', 'true');
        answerr_grow.setAttribute('visible', 'true');
    }
}

var answer_grow = document.querySelector("#answer_grow");
var answer2_grow = document.querySelector("#answer2_grow");
var answerr_grow = document.querySelector("#answerr_grow");

var question_growW = document.querySelector("#pergunta_growW");
var txt_growW = document.querySelector("#texto_growW");
var btn_growW = document.querySelector("#btn_growW");

answer_grow.onclick = function () {

    answer_grow.setAttribute('visible', 'false');
    answer2_grow.setAttribute('visible', 'false');
    answerr_grow.setAttribute('visible', 'false');

    question_grow.setAttribute('visible', 'false');
    txt_grow.setAttribute('visible', 'false');

    question_growW.setAttribute('visible', 'true');
    txt_growW.setAttribute('visible', 'true');
    btn_growW.setAttribute('visible', 'true');

}


answer2_grow.onclick = function () {

    answer_grow.setAttribute('visible', 'false');
    answer2_grow.setAttribute('visible', 'false');
    answerr_grow.setAttribute('visible', 'false');

    question_grow.setAttribute('visible', 'false');
    txt_grow.setAttribute('visible', 'false');

    question_growW.setAttribute('visible', 'true');
    txt_growW.setAttribute('visible', 'true');
    btn_growW.setAttribute('visible', 'true');

}

var question_growR = document.querySelector("#pergunta_growR");
var txt_growR = document.querySelector("#texto_growR");
var btn_growR = document.querySelector("#btn_growR");

answerr_grow.onclick = function () {

    answer_grow.setAttribute('visible', 'false');
    answer2_grow.setAttribute('visible', 'false');
    answerr_grow.setAttribute('visible', 'false');

    question_grow.setAttribute('visible', 'false');
    txt_grow.setAttribute('visible', 'false');



    question_growR.setAttribute('visible', 'true');
    txt_growR.setAttribute('visible', 'true');
    btn_growR.setAttribute('visible', 'true');

}


var grow_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_grow() {

    btn_growR.onclick = function () {

        window.location = grow_url;
    }
}


function Leave_grow() {

    btn_growW.onclick = function () {

        window.location = index_url;
    }
}

//———————————————————————INMARSAT




var btn_inmarsat = document.querySelector("#btn_inmarsat");
var intro_inmarsat = document.querySelector("#intro_inmarsat");
var question_inmarsat = document.querySelector("#pergunta_inmarsat");
var txt_inmarsat = document.querySelector("#texto_inmarsat");

function Show_inmarsat() {

    btn_inmarsat.onclick = function () {

        btn_inmarsat.setAttribute('visible', 'false');
        intro_inmarsat.setAttribute('visible', 'false');

        question_inmarsat.setAttribute('visible', 'true');
        txt_inmarsat.setAttribute('visible', 'true');

        answer_inmarsat.setAttribute('visible', 'true');
        answer2_inmarsat.setAttribute('visible', 'true');
        answerr_inmarsat.setAttribute('visible', 'true');
    }
}

var answer_inmarsat = document.querySelector("#answer_inmarsat");
var answer2_inmarsat = document.querySelector("#answer2_inmarsat");
var answerr_inmarsat = document.querySelector("#answerr_inmarsat");

var question_inmarsatW = document.querySelector("#pergunta_inmarsatW");
var txt_inmarsatW = document.querySelector("#texto_inmarsatW");
var btn_inmarsatW = document.querySelector("#btn_inmarsatW");

answer_inmarsat.onclick = function () {

    answer_inmarsat.setAttribute('visible', 'false');
    answer2_inmarsat.setAttribute('visible', 'false');
    answerr_inmarsat.setAttribute('visible', 'false');

    question_inmarsat.setAttribute('visible', 'false');
    txt_inmarsat.setAttribute('visible', 'false');

    question_inmarsatW.setAttribute('visible', 'true');
    txt_inmarsatW.setAttribute('visible', 'true');
    btn_inmarsatW.setAttribute('visible', 'true');

}


answer2_inmarsat.onclick = function () {

    answer_inmarsat.setAttribute('visible', 'false');
    answer2_inmarsat.setAttribute('visible', 'false');
    answerr_inmarsat.setAttribute('visible', 'false');

    question_inmarsat.setAttribute('visible', 'false');
    txt_inmarsat.setAttribute('visible', 'false');

    question_inmarsatW.setAttribute('visible', 'true');
    txt_inmarsatW.setAttribute('visible', 'true');
    btn_inmarsatW.setAttribute('visible', 'true');

}

var question_inmarsatR = document.querySelector("#pergunta_inmarsatR");
var txt_inmarsatR = document.querySelector("#texto_inmarsatR");
var btn_inmarsatR = document.querySelector("#btn_inmarsatR");

answerr_inmarsat.onclick = function () {

    answer_inmarsat.setAttribute('visible', 'false');
    answer2_inmarsat.setAttribute('visible', 'false');
    answerr_inmarsat.setAttribute('visible', 'false');

    question_inmarsat.setAttribute('visible', 'false');
    txt_inmarsat.setAttribute('visible', 'false');



    question_inmarsatR.setAttribute('visible', 'true');
    txt_inmarsatR.setAttribute('visible', 'true');
    btn_inmarsatR.setAttribute('visible', 'true');

}


var inmarsat_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_inmarsat() {

    btn_inmarsatR.onclick = function () {

        window.location = inmarsat_url;
    }
}


function Leave_inmarsat() {

    btn_inmarsatW.onclick = function () {

        window.location = index_url;
    }
}



//———————————————————————MERCEDES




var btn_mercedes = document.querySelector("#btn_mercedes");
var intro_mercedes = document.querySelector("#intro_mercedes");
var question_mercedes = document.querySelector("#pergunta_mercedes");
var txt_mercedes = document.querySelector("#texto_mercedes");

function Show_mercedes() {

    btn_mercedes.onclick = function () {

        btn_mercedes.setAttribute('visible', 'false');
        intro_mercedes.setAttribute('visible', 'false');

        question_mercedes.setAttribute('visible', 'true');
        txt_mercedes.setAttribute('visible', 'true');

        answer_mercedes.setAttribute('visible', 'true');
        answer2_mercedes.setAttribute('visible', 'true');
        answerr_mercedes.setAttribute('visible', 'true');
    }
}

var answer_mercedes = document.querySelector("#answer_mercedes");
var answer2_mercedes = document.querySelector("#answer2_mercedes");
var answerr_mercedes = document.querySelector("#answerr_mercedes");

var question_mercedesW = document.querySelector("#pergunta_mercedesW");
var txt_mercedesW = document.querySelector("#texto_mercedesW");
var btn_mercedesW = document.querySelector("#btn_mercedesW");

answer_mercedes.onclick = function () {

    answer_mercedes.setAttribute('visible', 'false');
    answer2_mercedes.setAttribute('visible', 'false');
    answerr_mercedes.setAttribute('visible', 'false');

    question_mercedes.setAttribute('visible', 'false');
    txt_mercedes.setAttribute('visible', 'false');

    question_mercedesW.setAttribute('visible', 'true');
    txt_mercedesW.setAttribute('visible', 'true');
    btn_mercedesW.setAttribute('visible', 'true');

}


answer2_mercedes.onclick = function () {

    answer_mercedes.setAttribute('visible', 'false');
    answer2_mercedes.setAttribute('visible', 'false');
    answerr_mercedes.setAttribute('visible', 'false');

    question_mercedes.setAttribute('visible', 'false');
    txt_mercedes.setAttribute('visible', 'false');

    question_mercedesW.setAttribute('visible', 'true');
    txt_mercedesW.setAttribute('visible', 'true');
    btn_mercedesW.setAttribute('visible', 'true');

}

var question_mercedesR = document.querySelector("#pergunta_mercedesR");
var txt_mercedesR = document.querySelector("#texto_mercedesR");
var btn_mercedesR = document.querySelector("#btn_mercedesR");

answerr_mercedes.onclick = function () {

    answer_mercedes.setAttribute('visible', 'false');
    answer2_mercedes.setAttribute('visible', 'false');
    answerr_mercedes.setAttribute('visible', 'false');

    question_mercedes.setAttribute('visible', 'false');
    txt_mercedes.setAttribute('visible', 'false');



    question_mercedesR.setAttribute('visible', 'true');
    txt_mercedesR.setAttribute('visible', 'true');
    btn_mercedesR.setAttribute('visible', 'true');

}


var mercedes_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_mercedes() {

    btn_mercedesR.onclick = function () {

        window.location = mercedes_url;
    }
}


function Leave_mercedes() {

    btn_mercedesW.onclick = function () {

        window.location = index_url;
    }
}


//———————————————————————MICROSOFT




var btn_microsoft = document.querySelector("#btn_microsoft");
var intro_microsoft = document.querySelector("#intro_microsoft");
var question_microsoft = document.querySelector("#pergunta_microsoft");
var txt_microsoft = document.querySelector("#texto_microsoft");

function Show_microsoft() {

    btn_microsoft.onclick = function () {

        btn_microsoft.setAttribute('visible', 'false');
        intro_microsoft.setAttribute('visible', 'false');

        question_microsoft.setAttribute('visible', 'true');
        txt_microsoft.setAttribute('visible', 'true');

        answer_microsoft.setAttribute('visible', 'true');
        answer2_microsoft.setAttribute('visible', 'true');
        answerr_microsoft.setAttribute('visible', 'true');
    }
}

var answer_microsoft = document.querySelector("#answer_microsoft");
var answer2_microsoft = document.querySelector("#answer2_microsoft");
var answerr_microsoft = document.querySelector("#answerr_microsoft");

var question_microsoftW = document.querySelector("#pergunta_microsoftW");
var txt_microsoftW = document.querySelector("#texto_microsoftW");
var btn_microsoftW = document.querySelector("#btn_microsoftW");

answer_microsoft.onclick = function () {

    answer_microsoft.setAttribute('visible', 'false');
    answer2_microsoft.setAttribute('visible', 'false');
    answerr_microsoft.setAttribute('visible', 'false');

    question_microsoft.setAttribute('visible', 'false');
    txt_microsoft.setAttribute('visible', 'false');

    question_microsoftW.setAttribute('visible', 'true');
    txt_microsoftW.setAttribute('visible', 'true');
    btn_microsoftW.setAttribute('visible', 'true');

}


answer2_microsoft.onclick = function () {

    answer_microsoft.setAttribute('visible', 'false');
    answer2_microsoft.setAttribute('visible', 'false');
    answerr_microsoft.setAttribute('visible', 'false');

    question_microsoft.setAttribute('visible', 'false');
    txt_microsoft.setAttribute('visible', 'false');

    question_microsoftW.setAttribute('visible', 'true');
    txt_microsoftW.setAttribute('visible', 'true');
    btn_microsoftW.setAttribute('visible', 'true');

}

var question_microsoftR = document.querySelector("#pergunta_microsoftR");
var txt_microsoftR = document.querySelector("#texto_microsoftR");
var btn_microsoftR = document.querySelector("#btn_microsoftR");

answerr_microsoft.onclick = function () {

    answer_microsoft.setAttribute('visible', 'false');
    answer2_microsoft.setAttribute('visible', 'false');
    answerr_microsoft.setAttribute('visible', 'false');

    question_microsoft.setAttribute('visible', 'false');
    txt_microsoft.setAttribute('visible', 'false');



    question_microsoftR.setAttribute('visible', 'true');
    txt_microsoftR.setAttribute('visible', 'true');
    btn_microsoftR.setAttribute('visible', 'true');

}


var microsoft_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_microsoft() {

    btn_microsoftR.onclick = function () {

        window.location = microsoft_url;
    }
}


function Leave_microsoft() {

    btn_microsoftW.onclick = function () {

        window.location = index_url;
    }
}


//———————————————————————NOS




var btn_nos = document.querySelector("#btn_nos");
var intro_nos = document.querySelector("#intro_nos");
var question_nos = document.querySelector("#pergunta_nos");
var txt_nos = document.querySelector("#texto_nos");

function Show_nos() {

    btn_nos.onclick = function () {

        btn_nos.setAttribute('visible', 'false');
        intro_nos.setAttribute('visible', 'false');

        question_nos.setAttribute('visible', 'true');
        txt_nos.setAttribute('visible', 'true');

        answer_nos.setAttribute('visible', 'true');
        answer2_nos.setAttribute('visible', 'true');
        answerr_nos.setAttribute('visible', 'true');
    }
}

var answer_nos = document.querySelector("#answer_nos");
var answer2_nos = document.querySelector("#answer2_nos");
var answerr_nos = document.querySelector("#answerr_nos");

var question_nosW = document.querySelector("#pergunta_nosW");
var txt_nosW = document.querySelector("#texto_nosW");
var btn_nosW = document.querySelector("#btn_nosW");

answer_nos.onclick = function () {

    answer_nos.setAttribute('visible', 'false');
    answer2_nos.setAttribute('visible', 'false');
    answerr_nos.setAttribute('visible', 'false');

    question_nos.setAttribute('visible', 'false');
    txt_nos.setAttribute('visible', 'false');

    question_nosW.setAttribute('visible', 'true');
    txt_nosW.setAttribute('visible', 'true');
    btn_nosW.setAttribute('visible', 'true');

}


answer2_nos.onclick = function () {

    answer_nos.setAttribute('visible', 'false');
    answer2_nos.setAttribute('visible', 'false');
    answerr_nos.setAttribute('visible', 'false');

    question_nos.setAttribute('visible', 'false');
    txt_nos.setAttribute('visible', 'false');

    question_nosW.setAttribute('visible', 'true');
    txt_nosW.setAttribute('visible', 'true');
    btn_nosW.setAttribute('visible', 'true');

}

var question_nosR = document.querySelector("#pergunta_nosR");
var txt_nosR = document.querySelector("#texto_nosR");
var btn_nosR = document.querySelector("#btn_nosR");

answerr_nos.onclick = function () {

    answer_nos.setAttribute('visible', 'false');
    answer2_nos.setAttribute('visible', 'false');
    answerr_nos.setAttribute('visible', 'false');

    question_nos.setAttribute('visible', 'false');
    txt_nos.setAttribute('visible', 'false');



    question_nosR.setAttribute('visible', 'true');
    txt_nosR.setAttribute('visible', 'true');
    btn_nosR.setAttribute('visible', 'true');

}


var nos_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_nos() {

    btn_nosR.onclick = function () {

        window.location = nos_url;
    }
}


function Leave_nos() {

    btn_nosW.onclick = function () {

        window.location = index_url;
    }
}



//———————————————————————PIPEDRIVE




var btn_pipedrive = document.querySelector("#btn_pipedrive");
var intro_pipedrive = document.querySelector("#intro_pipedrive");
var question_pipedrive = document.querySelector("#pergunta_pipedrive");
var txt_pipedrive = document.querySelector("#texto_pipedrive");

function Show_pipedrive() {

    btn_pipedrive.onclick = function () {

        btn_pipedrive.setAttribute('visible', 'false');
        intro_pipedrive.setAttribute('visible', 'false');

        question_pipedrive.setAttribute('visible', 'true');
        txt_pipedrive.setAttribute('visible', 'true');

        answer_pipedrive.setAttribute('visible', 'true');
        answer2_pipedrive.setAttribute('visible', 'true');
        answerr_pipedrive.setAttribute('visible', 'true');
    }
}

var answer_pipedrive = document.querySelector("#answer_pipedrive");
var answer2_pipedrive = document.querySelector("#answer2_pipedrive");
var answerr_pipedrive = document.querySelector("#answerr_pipedrive");

var question_pipedriveW = document.querySelector("#pergunta_pipedriveW");
var txt_pipedriveW = document.querySelector("#texto_pipedriveW");
var btn_pipedriveW = document.querySelector("#btn_pipedriveW");

answer_pipedrive.onclick = function () {

    answer_pipedrive.setAttribute('visible', 'false');
    answer2_pipedrive.setAttribute('visible', 'false');
    answerr_pipedrive.setAttribute('visible', 'false');

    question_pipedrive.setAttribute('visible', 'false');
    txt_pipedrive.setAttribute('visible', 'false');

    question_pipedriveW.setAttribute('visible', 'true');
    txt_pipedriveW.setAttribute('visible', 'true');
    btn_pipedriveW.setAttribute('visible', 'true');

}


answer2_pipedrive.onclick = function () {

    answer_pipedrive.setAttribute('visible', 'false');
    answer2_pipedrive.setAttribute('visible', 'false');
    answerr_pipedrive.setAttribute('visible', 'false');

    question_pipedrive.setAttribute('visible', 'false');
    txt_pipedrive.setAttribute('visible', 'false');

    question_pipedriveW.setAttribute('visible', 'true');
    txt_pipedriveW.setAttribute('visible', 'true');
    btn_pipedriveW.setAttribute('visible', 'true');

}

var question_pipedriveR = document.querySelector("#pergunta_pipedriveR");
var txt_pipedriveR = document.querySelector("#texto_pipedriveR");
var btn_pipedriveR = document.querySelector("#btn_pipedriveR");

answerr_pipedrive.onclick = function () {

    answer_pipedrive.setAttribute('visible', 'false');
    answer2_pipedrive.setAttribute('visible', 'false');
    answerr_pipedrive.setAttribute('visible', 'false');

    question_pipedrive.setAttribute('visible', 'false');
    txt_pipedrive.setAttribute('visible', 'false');



    question_pipedriveR.setAttribute('visible', 'true');
    txt_pipedriveR.setAttribute('visible', 'true');
    btn_pipedriveR.setAttribute('visible', 'true');

}


var pipedrive_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_pipedrive() {

    btn_pipedriveR.onclick = function () {

        window.location = pipedrive_url;
    }
}


function Leave_pipedrive() {

    btn_pipedriveW.onclick = function () {

        window.location = index_url;
    }
}



//———————————————————————PROBE.LY




var btn_probe = document.querySelector("#btn_probe");
var intro_probe = document.querySelector("#intro_probe");
var question_probe = document.querySelector("#pergunta_probe");
var txt_probe = document.querySelector("#texto_probe");

function Show_probe() {

    btn_probe.onclick = function () {

        btn_probe.setAttribute('visible', 'false');
        intro_probe.setAttribute('visible', 'false');

        question_probe.setAttribute('visible', 'true');
        txt_probe.setAttribute('visible', 'true');

        answer_probe.setAttribute('visible', 'true');
        answer2_probe.setAttribute('visible', 'true');
        answerr_probe.setAttribute('visible', 'true');
    }
}

var answer_probe = document.querySelector("#answer_probe");
var answer2_probe = document.querySelector("#answer2_probe");
var answerr_probe = document.querySelector("#answerr_probe");

var question_probeW = document.querySelector("#pergunta_probeW");
var txt_probeW = document.querySelector("#texto_probeW");
var btn_probeW = document.querySelector("#btn_probeW");

answer_probe.onclick = function () {

    answer_probe.setAttribute('visible', 'false');
    answer2_probe.setAttribute('visible', 'false');
    answerr_probe.setAttribute('visible', 'false');

    question_probe.setAttribute('visible', 'false');
    txt_probe.setAttribute('visible', 'false');

    question_probeW.setAttribute('visible', 'true');
    txt_probeW.setAttribute('visible', 'true');
    btn_probeW.setAttribute('visible', 'true');

}


answer2_probe.onclick = function () {

    answer_probe.setAttribute('visible', 'false');
    answer2_probe.setAttribute('visible', 'false');
    answerr_probe.setAttribute('visible', 'false');

    question_probe.setAttribute('visible', 'false');
    txt_probe.setAttribute('visible', 'false');

    question_probeW.setAttribute('visible', 'true');
    txt_probeW.setAttribute('visible', 'true');
    btn_probeW.setAttribute('visible', 'true');

}

var question_probeR = document.querySelector("#pergunta_probeR");
var txt_probeR = document.querySelector("#texto_probeR");
var btn_probeR = document.querySelector("#btn_probeR");

answerr_probe.onclick = function () {

    answer_probe.setAttribute('visible', 'false');
    answer2_probe.setAttribute('visible', 'false');
    answerr_probe.setAttribute('visible', 'false');

    question_probe.setAttribute('visible', 'false');
    txt_probe.setAttribute('visible', 'false');



    question_probeR.setAttribute('visible', 'true');
    txt_probeR.setAttribute('visible', 'true');
    btn_probeR.setAttribute('visible', 'true');

}


var probe_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_probe() {

    btn_probeR.onclick = function () {

        window.location = probe_url;
    }
}


function Leave_probe() {

    btn_probeW.onclick = function () {

        window.location = index_url;
    }
}



//———————————————————————SIEMENS



var btn_siemens = document.querySelector("#btn_siemens");
var intro_siemens = document.querySelector("#intro_siemens");
var question_siemens = document.querySelector("#pergunta_siemens");
var txt_siemens = document.querySelector("#texto_siemens");

function Show_siemens() {

    btn_siemens.onclick = function () {

        btn_siemens.setAttribute('visible', 'false');
        intro_siemens.setAttribute('visible', 'false');

        question_siemens.setAttribute('visible', 'true');
        txt_siemens.setAttribute('visible', 'true');

        answer_siemens.setAttribute('visible', 'true');
        answer2_siemens.setAttribute('visible', 'true');
        answerr_siemens.setAttribute('visible', 'true');
    }
}

var answer_siemens = document.querySelector("#answer_siemens");
var answer2_siemens = document.querySelector("#answer2_siemens");
var answerr_siemens = document.querySelector("#answerr_siemens");

var question_siemensW = document.querySelector("#pergunta_siemensW");
var txt_siemensW = document.querySelector("#texto_siemensW");
var btn_siemensW = document.querySelector("#btn_siemensW");

answer_siemens.onclick = function () {

    answer_siemens.setAttribute('visible', 'false');
    answer2_siemens.setAttribute('visible', 'false');
    answerr_siemens.setAttribute('visible', 'false');

    question_siemens.setAttribute('visible', 'false');
    txt_siemens.setAttribute('visible', 'false');

    question_siemensW.setAttribute('visible', 'true');
    txt_siemensW.setAttribute('visible', 'true');
    btn_siemensW.setAttribute('visible', 'true');

}


answer2_siemens.onclick = function () {

    answer_siemens.setAttribute('visible', 'false');
    answer2_siemens.setAttribute('visible', 'false');
    answerr_siemens.setAttribute('visible', 'false');

    question_siemens.setAttribute('visible', 'false');
    txt_siemens.setAttribute('visible', 'false');

    question_siemensW.setAttribute('visible', 'true');
    txt_siemensW.setAttribute('visible', 'true');
    btn_siemensW.setAttribute('visible', 'true');

}

var question_siemensR = document.querySelector("#pergunta_siemensR");
var txt_siemensR = document.querySelector("#texto_siemensR");
var btn_siemensR = document.querySelector("#btn_siemensR");

answerr_siemens.onclick = function () {

    answer_siemens.setAttribute('visible', 'false');
    answer2_siemens.setAttribute('visible', 'false');
    answerr_siemens.setAttribute('visible', 'false');

    question_siemens.setAttribute('visible', 'false');
    txt_siemens.setAttribute('visible', 'false');



    question_siemensR.setAttribute('visible', 'true');
    txt_siemensR.setAttribute('visible', 'true');
    btn_siemensR.setAttribute('visible', 'true');

}


var siemens_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_siemens() {

    btn_siemensR.onclick = function () {

        window.location = siemens_url;
    }
}


function Leave_siemens() {

    btn_siemensW.onclick = function () {

        window.location = index_url;
    }
}




//———————————————————————SONAE




var btn_sonae = document.querySelector("#btn_sonae");
var intro_sonae = document.querySelector("#intro_sonae");
var question_sonae = document.querySelector("#pergunta_sonae");
var txt_sonae = document.querySelector("#texto_sonae");

function Show_sonae() {

    btn_sonae.onclick = function () {

        btn_sonae.setAttribute('visible', 'false');
        intro_sonae.setAttribute('visible', 'false');

        question_sonae.setAttribute('visible', 'true');
        txt_sonae.setAttribute('visible', 'true');

        answer_sonae.setAttribute('visible', 'true');
        answer2_sonae.setAttribute('visible', 'true');
        answerr_sonae.setAttribute('visible', 'true');
    }
}

var answer_sonae = document.querySelector("#answer_sonae");
var answer2_sonae = document.querySelector("#answer2_sonae");
var answerr_sonae = document.querySelector("#answerr_sonae");

var question_sonaeW = document.querySelector("#pergunta_sonaeW");
var txt_sonaeW = document.querySelector("#texto_sonaeW");
var btn_sonaeW = document.querySelector("#btn_sonaeW");

answer_sonae.onclick = function () {

    answer_sonae.setAttribute('visible', 'false');
    answer2_sonae.setAttribute('visible', 'false');
    answerr_sonae.setAttribute('visible', 'false');

    question_sonae.setAttribute('visible', 'false');
    txt_sonae.setAttribute('visible', 'false');

    question_sonaeW.setAttribute('visible', 'true');
    txt_sonaeW.setAttribute('visible', 'true');
    btn_sonaeW.setAttribute('visible', 'true');

}


answer2_sonae.onclick = function () {

    answer_sonae.setAttribute('visible', 'false');
    answer2_sonae.setAttribute('visible', 'false');
    answerr_sonae.setAttribute('visible', 'false');

    question_sonae.setAttribute('visible', 'false');
    txt_sonae.setAttribute('visible', 'false');

    question_sonaeW.setAttribute('visible', 'true');
    txt_sonaeW.setAttribute('visible', 'true');
    btn_sonaeW.setAttribute('visible', 'true');

}

var question_sonaeR = document.querySelector("#pergunta_sonaeR");
var txt_sonaeR = document.querySelector("#texto_sonaeR");
var btn_sonaeR = document.querySelector("#btn_sonaeR");

answerr_sonae.onclick = function () {

    answer_sonae.setAttribute('visible', 'false');
    answer2_sonae.setAttribute('visible', 'false');
    answerr_sonae.setAttribute('visible', 'false');

    question_sonae.setAttribute('visible', 'false');
    txt_sonae.setAttribute('visible', 'false');



    question_sonaeR.setAttribute('visible', 'true');
    txt_sonaeR.setAttribute('visible', 'true');
    btn_sonaeR.setAttribute('visible', 'true');

}


var sonae_url = "";
var index_url = "https://gos.glitch.me/";

function Badge_sonae() {

    btn_sonaeR.onclick = function () {

        window.location = sonae_url;
    }
}


function Leave_sonae() {

    btn_sonaeW.onclick = function () {

        window.location = index_url;
    }
}

window.setInterval(function () {

    Show_Ws();
    Badge_WS();
    Leave_WS();

    Show_aws();
    Badge_aws();
    Leave_aws();

    Show_beta();
    Badge_beta();
    Leave_beta();

    Show_bright();
    Badge_bright();
    Leave_bright();

    Show_cigala();
    Badge_cigala();
    Leave_cigala();

    Show_datap();
    Badge_datap();
    Leave_datap();

    Show_eat();
    Badge_eat();
    Leave_eat();

    Show_feedzai();
    Badge_feedzai();
    Leave_feedzai();

    Show_galp();
    Badge_galp();
    Leave_galp();

    Show_grow();
    Badge_grow();
    Leave_grow();

    Show_inmarsat();
    Badge_inmarsat();
    Leave_inmarsat();

    Show_mercedes();
    Badge_mercedes();
    Leave_mercedes();

    Show_microsoft();
    Badge_microsoft();
    Leave_microsoft();

    Show_nos();
    Badge_nos();
    Leave_nos();

    Show_pipedrive();
    Badge_pipedrive();
    Leave_pipedrive();

    Show_probe();
    Badge_probe();
    Leave_probe();

    Show_siemens();
    Badge_siemens();
    Leave_siemens();

    Show_sonae();
    Badge_sonae();
    Leave_sonae();

}, 1000);