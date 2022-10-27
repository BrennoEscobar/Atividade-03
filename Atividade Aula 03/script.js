var signo = prompt('Digite seu signo: ')

switch (signo) {
    case signo = 'Aries':
        console.log('Aries - de 21 março a 20 abril')
        break;
    case signo = 'Touro':
        console.log('Touro -  de 21 abril a 20 maio')
        break;
    case signo = 'Gemeos':
        console.log('Gemeos - de 21 maio a 20 junho')
        break;
    case signo = 'Cancer':
        console.log('Cancer - de 21 junho a 22 julho')
        break;
    case signo = 'Leao':
        console.log('Leao - de 23 julho a 22 agosto')
        break;
    case signo = 'Virgem':
        console.log('Virgem - de 23 agosto a 22 setembro')
        break;
    default:
        console.log('Signo não registrado')
        break;
}