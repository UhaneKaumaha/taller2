let planeta= prompt(" Por favor ingrese un numero del 1 al 9 ")
let n_planeta

switch (planeta) {
    case "1": 
        n_planeta = "mercurio"
        break;

    case "2": 
    n_planeta = "venus"
    break;

    case "3": 
    n_planeta = "tierra"
    break;

    case "4": 
    n_planeta = "marte"
    break;

    case "5": 
    n_planeta = "jupiter"
    break;

    case "6": 
    n_planeta = "saturno"
    break;

    case "7": 
    n_planeta = "urano"
    break;

    case "8": 
    n_planeta = "nepturno"
    break;

    case "9": 
    n_planeta = "plutón"
    break;
    
    default:
    n_planeta = "planeta desconocido"
        break;
}

document.write(n_planeta + " está en la posición " + planeta)