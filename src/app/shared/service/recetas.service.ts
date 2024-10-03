import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RecetaService{
    private dataRecetas = {
        recetas : [
            {   
                id: 1,
                nombre: "Tacos de Pollo",
                ingredientes: [
                    "Tortillas de maíz",
                    "Pollo deshebrado",
                    "Salsa",
                    "Cilantro",
                    "Cebolla"
                ],
                descripcion: "Unas ricas tortillas de maiz con un guiso con pollo que te va a facinar",
                procedimiento: "1. Calentar las tortillas. 2. Colocar el pollo deshebrado en las tortillas. 3. Añadir salsa, cilantro y cebolla al gusto. 4. Servir y disfrutar.",
                imagen: "tacos_de_pollo.png"
                },
            {
                id: 2,
                nombre: "Spaghetti a la Boloñesa",
                ingredientes: [
                    "Spaghetti",
                    "Carne molida",
                    "Tomate",
                    "Cebolla",
                    "Ajo",
                    "Aceite de oliva"
                ],
                descripcion: "La tipica pasta italiana acompañada de una salsa pomodoro y una carne de res",
                procedimiento: "1. Cocer el spaghetti. 2. Sofreír cebolla y ajo en aceite de oliva. 3. Añadir la carne molida y el tomate. 4. Cocer a fuego lento. 5. Servir sobre el spaghetti.",
                imagen: "espagueti.jfif"
            },
            {
                id: 3,
                nombre: "Sopa de Lentejas",
                ingredientes: [
                    "Lentejas",
                    "Zanahorias",
                    "Cebolla",
                    "Ajo",
                    "Tomate",
                    "Caldo de pollo"
                ],
                descripcion: "Unas lentejas un paltillo tipico y casero del hogar",
                procedimiento: "1. Sofreír cebolla, ajo y tomate. 2. Añadir las lentejas y el caldo de pollo. 3. Cocinar hasta que las lentejas estén suaves. 4. Añadir zanahorias en rodajas y cocinar 10 minutos más.",
                imagen: "lentejas.jpg"
            },
            {
                id: 4,
                nombre: "Ensalada César",
                ingredientes: [
                    "Lechuga romana",
                    "Croutons",
                    "Queso parmesano",
                    "Aderezo César",
                    "Pechuga de pollo"
                ],
                descripcion: "Wow! Una ensalada, no se que tenga de especial pero tiene pollito y sirve como proteina",
                procedimiento: "1. Lavar y cortar la lechuga. 2. Cocinar la pechuga de pollo y cortarla en tiras. 3. Mezclar la lechuga, los croutons, el queso parmesano y el pollo. 4. Añadir el aderezo al gusto.",
                imagen: "ensalada_cesar.jpg"
            },
            {
                id: 5,
                nombre: "Brownie de Chocolate",
                ingredientes: [
                    "Chocolate oscuro",
                    "Mantequilla",
                    "Azúcar",
                    "Harina",
                    "Huevos",
                    "Nueces"
                ],
                descripcion: "¡Espero que sean de los magicos porque esto te va a encantar!",
                procedimiento: "1. Derretir el chocolate y la mantequilla. 2. Añadir azúcar y mezclar. 3. Incorporar los huevos uno a uno. 4. Añadir harina y nueces. 5. Hornear a 180°C por 25 minutos.",
                imagen: "brownie.jfif"
            }
        ]
    }

    getRecetas(){
        return this.dataRecetas.recetas;
    }

    getRecetaById(id: number){
        return this.dataRecetas.recetas.find(receta => receta.id === id);
    }

}



