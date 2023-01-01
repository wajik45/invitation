// Variable
const container = document.querySelector('.container'),
layer = document.querySelector('.layer'),
    // Kotak Awal
kotakAwal = document.querySelector('.kotak-awal'),
        // txt
txtWedding = document.querySelector('.txt-wedding'),
txtRyevoNadia = document.querySelector('.txt-ryevo-nadia'),
txtRyevo = document.querySelector('.txt-ryevo'),
txtNadia = document.querySelector('.txt-nadia'),
txtHari = document.querySelector('.txt-hari'),
txtTanggal = document.querySelector('.txt-tanggal'),
txtYth = document.querySelector('.txt-yth'),
txtNama = document.querySelector('.txt-nama'),
txtKata = document.querySelector('.txt-kata'),
        // kembang
kembang = document.querySelector('.kembang'),
        // tombol
tombolBuka = document.querySelector('.tombol-buka'),
    // Kotak Dua
kotakUndangan = document.querySelector('.kotak-undangan'),
tombolHome = document.querySelector('.tombol-home'),
tombolLocation = document.querySelector('.tombol-location'),
tombolPhoto = document.querySelector('.tombol-photo');
    // Kotak Tiga
kotakLocation = document.querySelector('.kotak-location'),
closeMap = document.querySelector('.close-map'),
    // Kotak Empat
kotakPhoto = document.querySelector('.kotak-photo'),
closePhoto = document.querySelector('.close-photo');


// Array
const txtAwal = [
    txtWedding,
    txtRyevoNadia,
    txtRyevo,
    txtNadia,
    txtHari,
    txtTanggal,
    txtYth,
    txtNama,
    txtKata
];

// Function
    //url
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
const untuk = GetURLParameter('untuk');
txtNama.innerHTML = untuk.replace(/%20/g, ' ');

    // audio
const myAudio = document.querySelector('#Audio');
function gasAudio() {
    myAudio.play();
}

function mKotakAwal() {
    kotakAwal.classList.toggle('tr-skala-satu');
    kotakAwal.classList.toggle('rgba-bg-item-tr');

    kembang.classList.toggle('tr-skala-satu');
    setTimeout( _ => {
        txtRyevo.classList.toggle('xy-nol');
        txtNadia.classList.toggle('xy-nol');

        txtAwal.forEach((s) => {
            s.classList.toggle('rgba-color-putih');
        });
        setTimeout( _ => {
            tombolBuka.classList.toggle('rgba-color-putih');
            tombolBuka.classList.toggle('tr-skala-satu');
            tombolBuka.classList.toggle('rgba-bg-item-tr');
        }, 1500);
    }, 500);
}

function mKotakUndangan() {
    kotakUndangan.classList.toggle('tr-skala-satu');
    kotakUndangan.classList.toggle('opasiti-satu');

    layer.classList.toggle('rgba-bg-item-tr');
}

function mKotakLocation() {
    kotakLocation.classList.toggle('flex');
    kotakLocation.classList.toggle('index-0');

    layer.classList.toggle('rgba-bg-item-kr');
}

function mKotakPhoto() {
    kotakPhoto.classList.toggle('index-0');
    kotakPhoto.classList.toggle('opasiti-satu');

    layer.classList.toggle('rgba-bg-item-kr');
}

window.addEventListener('load', _ => {
    setTimeout( _ => {
        mKotakAwal();

        tombolBuka.onclick = _ => {
            gasAudio();
            mKotakAwal();
            mKotakUndangan();

            tombolHome.onclick = _ => {
                mKotakUndangan();
                mKotakAwal();
            }
            tombolLocation.onclick = _ => {
                mKotakUndangan();

                setTimeout( _ => {
                    mKotakLocation();
                }, 500);
                closeMap.onclick = _ => {
                    mKotakUndangan();
                    mKotakLocation();
                }
            }
            tombolPhoto.onclick = _ => {
                mKotakUndangan();
                mKotakPhoto();
                closePhoto.onclick = _ => {
                    mKotakUndangan();
                    mKotakPhoto();
                }
            }
        }
    }, 1000);
});

// gallery
const imgGede = document.querySelector('.img-gede');
const imgThumbs = document.querySelectorAll('.alb');

container.addEventListener('click', (e) => {
    if (e.target.className == 'alb') {
        imgGede.src = e.target.src;

        imgGede.classList.add('udin');
		setTimeout( _ => {
			imgGede.classList.remove('udin');
		}, 1000);

        imgThumbs.forEach((pilih) => {
			if (pilih.classList.contains('aktip')) {
				pilih.classList.remove('aktip');
			}
		});
		e.target.classList.add('aktip');
    }
});