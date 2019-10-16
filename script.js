function changePage(idButton) {
    let Dia1 = document.getElementById("Dia1");
    let Dia2 = document.getElementById("Dia2");
    let Dia3 = document.getElementById("Dia3");
    let Dia4 = document.getElementById("Dia4");
    let Dia5 = document.getElementById("Dia5");

    switch (idButton) {
        case 1:
            Dia1.style.display = 'block';
            Dia2.style.display = 'none';
            Dia3.style.display = 'none';
            Dia4.style.display = 'none';
            Dia5.style.display = 'none';
            break;
        case 2:
            Dia1.style.display = 'none';
            Dia2.style.display = 'block';
            Dia3.style.display = 'none';
            Dia4.style.display = 'none';
            Dia5.style.display = 'none';
            break;
        case 3:
            Dia1.style.display = 'none';
            Dia2.style.display = 'none';
            Dia3.style.display = 'block';
            Dia4.style.display = 'none';
            Dia5.style.display = 'none';
            break;
        case 4:
            Dia1.style.display = 'none';
            Dia2.style.display = 'none';
            Dia3.style.display = 'none';
            Dia4.style.display = 'block';
            Dia5.style.display = 'none';
            break;
        case 5:
            Dia1.style.display = 'none';
            Dia2.style.display = 'none';
            Dia3.style.display = 'none';
            Dia4.style.display = 'none';
            Dia5.style.display = 'block';
            break;
        default:
            break;
    }

}