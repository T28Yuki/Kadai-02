// 押したボタン以外を消す
if($(".btn1").click(function(){
    $(".btn2").hide();
    $(".btn3").hide();
}))

if($(".btn2").click(function(){
    $(".btn1").hide();
    $(".btn3").hide();
}))

if($(".btn3").click(function(){
    $(".btn1").hide();
    $(".btn2").hide();
}))

// じゃんけんのランダム設定

var random = Math.floor(Math.random() * 3 +1 );
console .log(random, "じゃんけんの箱")

if (random === 1) {
    console .log ("ぐー");
} else if (random === 2) {
    console .log ("ちょき");
} else if (random === 3) {
    console .log ("ぱー")
}

// jQueryのおまじないを使う
// btn1を押したとき
$(".btn1") .on("click", function () {

var random = Math.floor(Math.random() * 3 + 1 );
console.log(random, "じゃんけんの箱");

if (random == 1) {
    console.log("ぐー");
    $(".random-result").attr("src","./img/グー２.jpg");
    $("h2").html("あいこでしょ！")
} else if (random == 2){
    console.log("ちょき");
    $(".random-result").attr("src","./img/チョキ２.jpg");
    $("h2").html("やったね！勝ったね！！")
} else if (random == 3){
    console.log("ぱー");
    $(".random-result").attr("src","./img/パー２.jpg");
    $("h2").html("残念・・・負けちゃったね。")
}})

// bnt2を押したとき
$(".btn2") .on("click", function () {    
if (random == 1) {
    console.log("ぐー");
    $(".random-result").attr("src","./img/グー２.jpg");
    $("h2").html("残念・・・負けちゃったね。")
} else if (random == 2){
    console.log("ちょき");
    $(".random-result").attr("src","./img/チョキ２.jpg");
    $("h2").html("あいこでしょ！")
} else if (random == 3){
    console.log("ぱー");
    $(".random-result").attr("src","./img/パー２.jpg");
    $("h2").html("やったね！勝ったね！！")
}})

// bnt3を押したとき
$(".btn3") .on("click", function () {  
    if (random == 1) {
        console.log("ぐー");
        $(".random-result").attr("src","./img/グー２.jpg");
        $("h2").html("やったね！勝ったね！！")
    } else if (random == 2){
        console.log("ちょき");
        $(".random-result").attr("src","./img/チョキ２.jpg");
        $("h2").html("残念・・・負けちゃったね。")
    } else if (random == 3){
        console.log("ぱー");
        $(".random-result").attr("src","./img/パー２.jpg");
        $("h2").html("あいこでしょ！")
    }})

$(".btn-wra").click(function(){
    location.reload();
})


