// ======================== Page Load ========================

window.onload = function(){
    document.getElementById('home').click();
}

// ======================== DUGMAD ========================

function Duzina() {
    document.getElementById('duzina').style.display = 'grid';
    document.getElementById('masa').style.display = 'none';
    document.getElementById('brzina').style.display = 'none';
    document.getElementById('povrsina').style.display = 'none';
}

function Masa() {
    document.getElementById('masa').style.display = 'grid';
    document.getElementById('duzina').style.display = 'none';
    document.getElementById('brzina').style.display = 'none';
    document.getElementById('povrsina').style.display = 'none';
}

function Brzina() {
    document.getElementById('brzina').style.display = 'grid';
    document.getElementById('duzina').style.display = 'none';
    document.getElementById('masa').style.display = 'none';
    document.getElementById('povrsina').style.display = 'none';
}

function Povrsina() {
    document.getElementById('povrsina').style.display = 'grid';
    document.getElementById('duzina').style.display = 'none';
    document.getElementById('masa').style.display = 'none';
    document.getElementById('brzina').style.display = 'none';
}

// ======================== DUZINA ========================

// Milimetar
document.getElementById('inputMM').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputCM').value = val/10;
    document.getElementById('inputM').value = val/1000;
    document.getElementById('inputKM').value = val/1000000;

    document.getElementById('inputIN').value = (val/25.4).toFixed(5);
    document.getElementById('inputFT').value = (val/305).toFixed(5);
    document.getElementById('inputYD').value = (val/914).toFixed(5);
    document.getElementById('inputML').value = (val/1609000).toFixed(5);
})

// Centimetar
document.getElementById('inputCM').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputMM').value = val*10;
    document.getElementById('inputM').value = val/100;
    document.getElementById('inputKM').value = val/100000;

    document.getElementById('inputIN').value = (val/2.54).toFixed(5);
    document.getElementById('inputFT').value = (val/30.48).toFixed(5);
    document.getElementById('inputYD').value = (val/91.44).toFixed(5);
    document.getElementById('inputML').value = (val/160934).toFixed(5);
})

// Metar
document.getElementById('inputM').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputMM').value = val*1000;
    document.getElementById('inputCM').value = val*100;
    document.getElementById('inputKM').value = val/1000;

    document.getElementById('inputIN').value = (val*39.37).toFixed(5);
    document.getElementById('inputFT').value = (val*3.28).toFixed(5);
    document.getElementById('inputYD').value = (val*1.094).toFixed(5);
    document.getElementById('inputML').value = (val/1609).toFixed(5);
})

// Kilometar
document.getElementById('inputKM').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputMM').value = val*1000000;
    document.getElementById('inputCM').value = val*100000;
    document.getElementById('inputM').value = val*1000;

    document.getElementById('inputIN').value = (val*39370).toFixed(5);
    document.getElementById('inputFT').value = (val*3281).toFixed(5);
    document.getElementById('inputYD').value = (val*1094).toFixed(5);
    document.getElementById('inputML').value = (val/1.609).toFixed(5);
})

// Inch
document.getElementById('inputIN').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputFT').value = (val/12).toFixed(5);
    document.getElementById('inputYD').value = (val/36).toFixed(5);
    document.getElementById('inputML').value = (val/63360).toFixed(5);

    document.getElementById('inputMM').value = (val*25.4).toFixed(5);
    document.getElementById('inputCM').value = (val*2.54).toFixed(5);
    document.getElementById('inputM').value = (val/39.37).toFixed(5);
    document.getElementById('inputKM').value = (val/39370).toFixed(5);
})

// Feetses
document.getElementById('inputFT').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputIN').value = (val*12).toFixed(5);
    document.getElementById('inputYD').value = (val/3).toFixed(5);
    document.getElementById('inputML').value = (val/5280).toFixed(5);

    document.getElementById('inputMM').value = (val*305).toFixed(5);
    document.getElementById('inputCM').value = (val*30.48).toFixed(5);
    document.getElementById('inputM').value = (val/3.28).toFixed(5);
    document.getElementById('inputKM').value = (val/3281).toFixed(5);
})

// Yard
document.getElementById('inputYD').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputIN').value = (val*36).toFixed(5);
    document.getElementById('inputFT').value = (val*3).toFixed(5);
    document.getElementById('inputML').value = (val/1760).toFixed(5);

    document.getElementById('inputMM').value = (val*914).toFixed(5);
    document.getElementById('inputCM').value = (val*91.44).toFixed(5);
    document.getElementById('inputM').value = (val/1.094).toFixed(5);
    document.getElementById('inputKM').value = (val/1094).toFixed(5);
})

// Mile
document.getElementById('inputML').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputIN').value = (val*63360).toFixed(5);
    document.getElementById('inputFT').value = (val*5280).toFixed(5);
    document.getElementById('inputYD').value = (val*1760).toFixed(5);

    document.getElementById('inputMM').value = (val*1609000).toFixed(5);
    document.getElementById('inputCM').value = (val*160934).toFixed(5);
    document.getElementById('inputM').value = (val*1609).toFixed(5);
    document.getElementById('inputKM').value = (val*1.609).toFixed(5);
})

// ======================== MASA ========================

// Gram
document.getElementById('inputG').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputKG').value = (val/1000).toFixed(5);
    document.getElementById('inputT').value = (val/1000000).toFixed(5);
    document.getElementById('inputPD').value = (val/454).toFixed(5);
    document.getElementById('inputOZ').value = (val/28.35).toFixed(5);
})

// Kilogram
document.getElementById('inputKG').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputG').value = (val*1000).toFixed(5);
    document.getElementById('inputT').value = (val/1000).toFixed(5);
    document.getElementById('inputPD').value = (val*2.205).toFixed(5);
    document.getElementById('inputOZ').value = (val*35.274).toFixed(5);
})

// Tona
document.getElementById('inputT').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputG').value = (val*1000000).toFixed(5);
    document.getElementById('inputKG').value = (val/1000).toFixed(5);
    document.getElementById('inputPD').value = (val*2205).toFixed(5);
    document.getElementById('inputOZ').value = (val*35274).toFixed(5);
})

// Pound
document.getElementById('inputPD').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputG').value = (val*454).toFixed(5);
    document.getElementById('inputKG').value = (val/2.205).toFixed(5);
    document.getElementById('inputT').value = (val/2205).toFixed(5);
    document.getElementById('inputOZ').value = (val*16).toFixed(5);
})

// Ounce
document.getElementById('inputOZ').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputG').value = (val*28.35).toFixed(5);
    document.getElementById('inputKG').value = (val/35.274).toFixed(5);
    document.getElementById('inputT').value = (val/35274).toFixed(5);
    document.getElementById('inputPD').value = (val/16).toFixed(5);
})

// ======================== BRZINA ========================

// Kilometri/h
document.getElementById('inputKM/h').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputM/s').value = (val/3.6).toFixed(3);
    document.getElementById('inputML/h').value = (val/1.609).toFixed(3);
    document.getElementById('inputKN').value = (val/1.852).toFixed(3);
})

// Metri/s
document.getElementById('inputM/s').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputKM/h').value = (val*3.6).toFixed(3);
    document.getElementById('inputML/h').value = (val*2.237).toFixed(3);
    document.getElementById('inputKN').value = (val*1.944).toFixed(3);
})

// Miles/h
document.getElementById('inputML/h').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputKM/h').value = (val*1.609).toFixed(3);
    document.getElementById('inputM/s').value = (val/2.237).toFixed(3);
    document.getElementById('inputKN').value = (val/1.151).toFixed(3);
})

// Knot
document.getElementById('inputKN').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputKM/h').value = (val*1.852).toFixed(3);
    document.getElementById('inputM/s').value = (val/1.944).toFixed(3);
    document.getElementById('inputML/h').value = (val*1.151).toFixed(3);
})

// ======================== POVRSINA ========================

// Metar
document.getElementById('inputKVMetar').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputKVKM').value = (val/1000000).toFixed(5);
    document.getElementById('inputKVFT').value = (val*10.764).toFixed(3);
    document.getElementById('inputKVMile').value = (val/2590000).toFixed(5);
})

// Kilometar
document.getElementById('inputKVKM').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputKVMetar').value = (val*1000000).toFixed(3);
    document.getElementById('inputKVFT').value = (val*10760000).toFixed(3);
    document.getElementById('inputKVMile').value = (val/2.59).toFixed(5);
})

// Feet
document.getElementById('inputKVFT').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputKVMetar').value = (val/10.764).toFixed(5);
    document.getElementById('inputKVKM').value = (val/10760000).toFixed(10);
    document.getElementById('inputKVMile').value = (val/27880000).toFixed(10);
})

// Mile
document.getElementById('inputKVMile').addEventListener('input', function(a){
    let val = a.target.value;
    document.getElementById('inputKVMetar').value = (val*2590000).toFixed(3);
    document.getElementById('inputKVKM').value = (val*2.59).toFixed(5);
    document.getElementById('inputKVFT').value = (val*27880000).toFixed(3);
})