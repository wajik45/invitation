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
tombolPhoto = document.querySelector('.tombol-photo'),
tombolVideo = document.querySelector('.tombol-video'),
tombolUcapan = document.querySelector('.tombol-ucapan'),
    // Kotak Tiga
kotakLocation = document.querySelector('.kotak-location'),
closeMap = document.querySelector('.close-map'),
    // Kotak Empat
kotakPhoto = document.querySelector('.kotak-photo'),
closePhoto = document.querySelector('.close-photo'),
    // Kotak Lima
kotakVideo = document.querySelector('.kotak-video'),
closeVideo = document.querySelector('.close-video');
    // Kotak Enam
kotakUcapan = document.querySelector('.kotak-ucapan');
closeUcapan = document.querySelector('.close-ucapan'),
kotakAlert = document.querySelector('.kotak-alert');


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

function mKotakVideo() {
    kotakVideo.classList.toggle('flex');
    kotakVideo.classList.toggle('index-0');

    layer.classList.toggle('rgba-bg-item-kr');
}

function mKotakUcapan() {
    kotakUcapan.classList.toggle('index-0');
    kotakUcapan.classList.toggle('opasiti-satu');
    kotakUcapan.classList.toggle('tr-skala-satu');

    layer.classList.toggle('rgba-bg-item-kr');
}

window.addEventListener('load', _ => {
    setTimeout( _ => {
        container.style.opacity = '1';

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
                        closeMap.onclick = _ => {
                            mKotakUndangan();
                            mKotakLocation();
                        }
                    }, 700);
                }
                tombolPhoto.onclick = _ => {
                    mKotakUndangan();

                    setTimeout( _ => {
                        mKotakPhoto();
                        closePhoto.onclick = _ => {
                            mKotakUndangan();
                            mKotakPhoto();
                        }
                    }, 700);
                }
                tombolVideo.onclick = _ => {
                    mKotakUndangan();
    
                    setTimeout( _ => {
                        mKotakVideo();
                        closeVideo.onclick = _ => {
                            mKotakUndangan();
                            mKotakVideo();
                        }
                    }, 700);
                }
                tombolUcapan.onclick = _ => {
                    mKotakUndangan();

                    setTimeout( _ => {
                        mKotakUcapan();
                        setTimeout( _ => {
                          closeUcapan.classList.toggle('opasiti-satu');
                        }, 1000);
                        closeUcapan.onclick = _ => {
                            mKotakUndangan();
                            mKotakUcapan();
                            closeUcapan.classList.toggle('opasiti-satu');
                        }
                    }, 700);
                }
            }
        }, 1000);
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

// form
const inputNama = document.querySelector('#nama'),
ucapan = document.querySelector('#ucapan');
hadir = document.querySelector('#hadir'),
tidakHadir = document.querySelector('#tidak-hadir'),
btn = document.querySelector('.btn'),
scriptURL = 'https://script.google.com/macros/s/AKfycbw38WXmGC7xpyM8Ybomy_42-pcyo_n5kW1gIvjmdsuQmhCYTeLnpH7BVIxUlv8V2GOhhA/exec',
form = document.forms['kirim-ke-google-sheet'];
        
form.addEventListener('submit', e => {
    e.preventDefault();

    if (inputNama.value.length < 3 || ucapan.value.length < 3) {
        kotakAlert.style.backgroundColor = '#e3c3c3';
        kotakAlert.style.color = '#800f0f';
        kotakAlert.innerHTML = 'Masukkan minimal 3 karakter.';
        kotakAlert.style.display = 'flex';
    } else if (btn.textContent == 'terkirim') {
	      kotakAlert.style.backgroundColor = '#b4d9c2';
        kotakAlert.style.color = '#095c29';
        kotakAlert.innerHTML = 'Anda sudah mengirimkan pesan';
        kotakAlert.style.display = 'flex';
        form.reset();
    } else {
        btn.innerHTML = 'mengirim';
        kotakAlert.style.display = 'none';
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                btn.innerHTML = 'terkirim';
                kotakAlert.style.backgroundColor = '#b4d9c2';
                kotakAlert.style.color = '#095c29';
                kotakAlert.innerHTML = 'Terima kasih, pesan anda sudah kami terima.';
                kotakAlert.style.display = 'flex';
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    }
});