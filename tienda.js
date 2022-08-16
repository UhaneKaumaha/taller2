let compra = prompt("Por favor ingrese el valor de su compra")
let v_compra = parseInt(compra)
let descuento 
let v_descuento
let total

if (v_compra >= 80000 && v_compra < 250000) {
    descuento = 0.05
}else if (v_compra >= 250000) {
    descuento = 0.1
}else {
    descuento = 0
}
v_descuento = v_compra*descuento
total = v_compra-v_descuento
document.write("El valor de su compra es de " + v_compra + ", por lo tanto, su descuento es de " + v_descuento + " El total es de " + total)

