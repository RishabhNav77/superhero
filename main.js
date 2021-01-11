var canvas=new fabric.Canvas("my_canvas");
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
var playerobject = "";
var blockobject = "";
function playerupdate() {
fabric.Image.fromURL("player.png",function(Img){
    playerobject=Img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(140);
    playerobject.set({
        top:playery,left:playerx
    });
    canvas.add(playerobject);
});
}