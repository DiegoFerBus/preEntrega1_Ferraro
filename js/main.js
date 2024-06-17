// Función para simular un préstamo
function simuladorPrestamo() {
    let continuar = true;
    
    while (continuar) {
        let edad = prompt("¿Eres mayor de 17 años? (sí/no)");
        
        edad = edad.toLowerCase();
        
        // Validar la edad e ingresos
        if (edad === "sí" || edad === "si") {
            let ingresos = prompt("¿Cuáles son tus ingresos mensuales en dólares?");
            
            // Convertir los ingresos a un número
            ingresos = parseFloat(ingresos);
            
            // Verificar si los ingresos son mayores o iguales a 1000
            if (ingresos >= 1000) {
                alert("¡Puedes solicitar un préstamo!");
            } else {
                alert("Lo siento, no cumples con el requisito de ingresos para solicitar un préstamo.");
            }
        } else if (edad === "no") {
            alert("Lo siento, debes ser mayor de 17 años para solicitar un préstamo.");
        } else {
            alert("Respuesta no válida. Por favor, responde con 'sí' o 'no'.");
        }
        
        // Preguntar si quiere continuar
        let respuesta = prompt("¿Quieres intentar de nuevo? (sí/no)").toLowerCase();
        
        if (respuesta === "no") {
            continuar = false;
        }
    }
    
    // alert("Gracias por usar el simulador de préstamos.");
}

simuladorPrestamo();
