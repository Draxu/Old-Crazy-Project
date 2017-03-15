var refreshIntervalId = undefined;


var letsSave = [];
var countTimes = 0;

var randomValues = [];
var memory = [];

for(var i = 0 ; i < 7; i++){
  randomValues.push(i* Math.round(Math.random()* i));
}
//synapsis the neroun we send to
//axon the neroun we resive from
for(var i = 0; i < 20; i++){
  n1 = new neuron(i);
  memory.push(n1);
}


for(var i = 0; i < memory.length; i++){
     console.log(memory.length);
    var logMeSy = randomNeuron();
    var logMeAx = randomNeuron();
    var count = 0;
    while(logMeSy === i){
      logMeSy = randomNeuron();
      //console.log(count);
      count++;
    }
    memory[i].synapse = memory[logMeSy];
    while(logMeAx === logMeSy ||  i === logMeAx){
      logMeAx = randomNeuron();
    //  console.log(count);
      count++;
    }
    memory[i].synapse = memory[logMeSy];
    memory[i].axon = memory[logMeAx];
    memory[i].color = [randomNumb(),randomNumb(),randomNumb()];

}



//console.log(memory);



function neuron(pos){
  this.count = 0;
  this.pos = pos;
}


function randomNeuron(){
  var a =  Math.round(Math.random() * memory.length-1);
  while(!(a <= 99 && a >= 0)){
    a = Math.round(Math.random() * memory.length-1);
  }
  return a;
}

function setColor(m){
  for(var i = 0; i < 3; i++){
    if(randomNumb > 200){
    m.color[i] = randomNumb();
    }
    else {
      m.color[i] = randomNumb();
    }
  }
}
function drawOne(){
  var imgData = ctx1.createImageData(ctx.canvas.width, ctx.canvas.height);
  var randomNumbCount = 0;
  var statusMe = false;
  for(var i = 0; i < imgData.data.length; i+=4){
    //4320
      var x = randomNumb();
      var randomN = randomNeuron();

      setColor(memory[randomN]);

      if(i * i >   memory[randomN].axon.count * memory[randomN].color[Math.floor(Math.random()*3)]){
          imgData.data[i] =  memory[randomN].axon.color[2];
          imgData.data[i+1] =  memory[randomN].axon.color[1];
          imgData.data[i+2] =  memory[randomN].axon.color[3];
          imgData.data[i+3] = 255;

          memory[randomN].axon.count+= 50;
          memory[randomN].axon.count+=memory[randomN].axon.synapse.axon.synapse.count
          memory[randomN].axon.axon.synapse.count+=memory[randomN].axon.axon.axon.axon.synapse.count


          randomNumbCount = 0;
      }
       if(i * i >  memory[randomN].synapse.count * memory[randomN].color[Math.floor(Math.random()*3)]){


          memory[randomNeuron()].count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));
          memory[randomNeuron()].axon.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));
          memory[randomNeuron()].axon.axon.synapse.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));
      }
      else if(i * i  >  memory[randomN].axon.count * memory[randomN].color[Math.floor(Math.random()*3)]){


        memory[randomN].count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));
        memory[randomN].count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));
        memory[randomN].synapse.synapse.synapse.synapse.synapse.axon.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));
        memory[randomN].axon.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));
      }
      else if(i * i / memory[randomN].color[Math.floor(Math.random()*3)]   < memory[randomN].axon.count){

        memory[randomN].count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));;
        memory[randomN].synapse.count++;
        memory[randomN].synapse.synapse.synapse.synapse.synapse.axon.count++;

      }
      else if(i * i / memory[randomN].color[Math.floor(Math.random()*3)]  <  memory[randomN].synapse.count){


        memory[randomN].count+=Math.floor(Math.random() * Math.round(randomNeuron() / 11));
        memory[randomN].synapse.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 11));;
        memory[randomN].synapse.synapse.synapse.synapse.synapse.axon.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));;
        memory[randomN].axon.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 11));;
      }
      else if(i * i  < memory[randomN].synapse.count){

        memory[randomN].count+=Math.floor(Math.random() * Math.round(randomNeuron() / 11));
        memory[randomN].synapse.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 11));

        memory[randomN].synapse.synapse.synapse.synapse.synapse.axon.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 9));
        memory[randomN].axon.count+=Math.floor(Math.random() * Math.round(randomNeuron() / 11));
      }

      else {

        imgData.data[i] =   0;
        imgData.data[i+1] = 0;
        imgData.data[i+2] = 0;
        imgData.data[i+3] = 0;
        memory[randomN].count-=Math.floor(Math.random() * Math.round(randomNeuron() / 11));
        memory[randomN].synapse.count-=Math.floor(Math.random() * Math.round(randomNeuron() / 11));
        memory[randomN].synapse.synapse.synapse.synapse.synapse.axon.count-=Math.floor(Math.random() * Math.round(randomNeuron() / 11));
        memory[randomN].axon.count-=Math.floor(Math.random() * Math.round(randomNeuron() / 11));
      }
       randomNumbCount += x;

    }
    //KimgData = shuffelData(imgData);
    //imgData = shuffelData(imgData, draw());
    ctx1.putImageData(imgData, 0, 0);

}
function shuffelData(imgData, imgData){

  for(var i = 0; i < imgData.data.length; i+=4){
      imgData.data[i] = imgData.data[Math.floor(Math.random() * imgData.data.length)];
      imgData.data[i+1] = imgData.data[Math.floor(Math.random() * imgData.data.length)];
      imgData.data[i+2] = imgData.data[Math.floor(Math.random() * imgData.data.length)];
      imgData.data[i+3] = imgData.data[Math.floor(Math.random() * imgData.data.length)];
  }
  return imgData;
}

function startOne() {
  drawOne();
  refreshIntervalId = setInterval(drawOne, 50);
}

function draw(){
  var imgData = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
  var count = 0;
  var count1 = 0;
  var randomN = randomNeuron();
  for(var i = 0; i < imgData.data.length; i+=4){
    //4320
    if((i - memory[randomN].count)  % 3 === 1+count){

      imgData.data[i] = randomNumb();
      imgData.data[i+1] = randomNumb();
      imgData.data[i+2] = randomNumb();
      imgData.data[i+3] = randomNumb();
    }
    else if((i * memory[randomN].count) % 3 === 0+count) {

        imgData.data[i] = randomNumb();
        imgData.data[i+1] = randomNumb();
        imgData.data[i+2] = randomNumb();
        imgData.data[i+3] = randomNumb();
    }
    else if((i * memory[randomN].count)% 200 === 2+count) {

        imgData.data[i] = memory[randomN].color[0] - memory[randomN].axon.color[0];
        imgData.data[i+1] = memory[randomN].color[1] - memory[randomN].axon.color[1];
        imgData.data[i+2] = memory[randomN].color[2] - memory[randomN].axon.color[2];
        imgData.data[i+3] = randomNumb();
    }
    if(i % countTimes === 1080) {
      count++;
      //console.log(count);
    }
    if(i % countTimes === 1080){
      count1++;
    }
  }
  return imgData;
  //ctx1.putImageData(imgData, 0, 0);
  //ctx2.putImageData(imgData, 0, 0);
  //letsSave.push(imgData);
  countTimes++;
}

function randomNumb(){
  return Math.floor(Math.random() * 255) +1;
}

function start(){
  draw();
  refreshIntervalId = setInterval(drawOne, 1);
}

function stop(){
  clearInterval(refreshIntervalId);
}

function calcAvg(){
  var myNewImage = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
  for(var x = 0; x < letsSave[0].data.length; x++){
    var newColor = 0;
    for(var i = 0; i < letsSave.length; i++){
        newColor += letsSave[i].data[x];
    }
    newColor = Math.round(newColor / letsSave.length);
    myNewImage.data[x] = newColor;
    // divide by length
    }
    ctx.putImageData(myNewImage, 0, 0);
}

function clearCanvas(){
  ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}


var can = document.getElementById("myCanvas");
var btnDownload = document.getElementById("saveImg");

var imgNumber = 1;
btnDownload.addEventListener('click', function(){
  var image = can.toDataURL("image/jpeg", 0.8);
  btnDownload.href = image;
  btnDownload.download = "Image" + imgNumber + ".jpeg";
  imgNumber++;
},false);
