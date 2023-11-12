function satu() {
  console.log("satu");
}

function dua() {
  console.log("Function 2 mau dieksekusi");
  setTimeout(() => {
    console.log("dua");
  }, 0);
}

function tiga() {
  console.log("tiga");
}

satu();
dua();
tiga();