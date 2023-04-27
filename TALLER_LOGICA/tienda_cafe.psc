Algoritmo tienda_cafe
	Escribir "¿Cuantos cafes quieres?"

	Leer cantidad_cafe
	precio <- 25
	precio_total <- 0
	total_descuento <- 0
	
	si cantidad_cafe >= 5 & cantidad_cafe <= 10
		precio_total <- precio * cantidad_cafe
		total_descuento <- precio_total - (precio_total * 0.20)
		Escribir "Total a pagar:", total_descuento, " con el 20%"
	SiNo
		si cantidad_cafe >= 11 & cantidad_cafe <= 20
			precio_total <- precio * cantidad_cafe
			total_descuento <- precio_total - (precio_total * 0.40)
			Escribir "Total a pagar:", total_descuento, " con el 40%"
		SiNo
			si cantidad_cafe > 20
				precio_total <- precio * cantidad_cafe
				total_descuento <- precio_total - (precio_total * 0.40)
				Escribir "Total a pagar:", total_descuento, " con el 50%"
			SiNo
				precio_total <- precio * cantidad_cafe
				Escribir "Total a pagar:", precio_total, " no aplica descuento"
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
