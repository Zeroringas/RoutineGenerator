document.addEventListener('DOMContentLoaded', function() {

    const rutinas = {
        ectomorfo: {
            principiante: {
                casa: {
                    frecuencia: "3 días a la semana (Lunes, Miércoles, Viernes)",
                    nota: "Realiza un calentamiento de 5-10 minutos de cardio ligero (trotar, bicicleta) antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Flexiones", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Fondos en banco", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Aperturas con mancuernas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Extensión de tríceps con mancuernas", "series": 3, "repeticiones": "10-12"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Dominadas (con o sin asistencia)", "series": 3, "repeticiones": "6-8"},
                            {"ejercicio": "Remo con mancuernas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Curl de bíceps con mancuernas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 3, "repeticiones": "10-12"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Zancadas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Elevaciones frontales con mancuernas", "series": 3, "repeticiones": "10-12"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Asegúrate de dormir 7-9 horas por noche",
                            "descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada para evitar lesiones y maximizar los beneficios de cada ejercicio."
                    }
                },
                gimnasio: {
                    frecuencia: "3 días a la semana (Lunes, Miércoles, Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en paralelas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Extensiones de tríceps con polea", "series": 3, "repeticiones": "10-12"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto rumano", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Jalones al pecho", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 3, "repeticiones": "10-12"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con peso", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Prensa de piernas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Press militar con barra", "series": 3, "repeticiones": "10-12"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                }
            },
            intermedio: {
                casa: {
                    frecuencia: "4 días a la semana (Lunes, Martes, Jueves, Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Flexiones explosivas", "series": 4, "repeticiones": "10-12"},
                            {"ejercicio": "Fondos", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 4, "repeticiones": "10-12"},
                            {"ejercicio": "Flexiones diamante", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Dominadas ponderadas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Remo con mancuerna", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 4, "repeticiones": "10-12"},
                            {"ejercicio": "Curl concentrado con mancuerna", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Peso muerto mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "10-12"},
                            {"ejercicio": "Press militar con mancuernas", "series": 4, "repeticiones": "10-12"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera intervalada (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 3, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                },
                gimnasio: {
                    frecuencia: "4 días a la semana (Lunes, Martes, Jueves, Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en paralelas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 4, "repeticiones": "10-12"},
                            {"ejercicio": "Extensiones de tríceps con polea", "series": 4, "repeticiones": "10-12"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto rumano", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Jalones al pecho", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 4, "repeticiones": "10-12"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 4, "repeticiones": "10-12"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con peso", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "10-12"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "10-12"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera intervalada (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 3, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                }
            },
            avanzado: {
                casa: {
                    frecuencia: "5 días a la semana (Lunes a Viernes)",
                    nota: "Realiza un calentamiento de 5-10 minutos de cardio ligero (trotar, bicicleta) antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca con mancuernas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en banco", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas", "series": 5, "repeticiones": "10-12"},
                            {"ejercicio": "Extensiones de tríceps con mancuernas", "series": 5, "repeticiones": "10-12"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto rumano con mancuernas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Remo con mancuerna", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con mancuernas", "series": 5, "repeticiones": "10-12"},
                            {"ejercicio": "Curl concentrado con mancuernas", "series": 5, "repeticiones": "10-12"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con mancuernas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Peso muerto a una pierna", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 5, "repeticiones": "10-12"},
                            {"ejercicio": "Press militar con mancuernas", "series": 5, "repeticiones": "10-12"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera en el lugar o saltos de tijera", "series": 1, "duración": "20-30 minutos (alternando intensidad)"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 5, "duración": "30-45 segundos"},
                            {"ejercicio": "Crunches", "series": 5, "repeticiones": "15-20 repeticiones"},
                            {"ejercicio": "Giros rusos con peso (utilizando una mancuerna)", "series": 5,  "repeticiones": "15-20" }
                        ]                        
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Mantén una buena hidratación durante todo el día para optimizar el rendimiento y la recuperación.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                },
                gimnasio: {
                    frecuencia: "5 días a la semana (Lunes a Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con polea", "series": 5, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 5, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con peso", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 5, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera intervalada (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 4, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 4, "repeticiones": "12-15"}
                        ],
                        "Día 5: Piernas y Abdominales": [
                            {"ejercicio": "Sentadillas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Zancadas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Crunches", "series": 5, "repeticiones": "15-20"},
                            {"ejercicio": "Plancha abdominal", "series": 5, "duración": "45-60 segundos"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                }
            }
        },
        mesomorfo: {
            principiante: {
                casa: {
                    frecuencia: "3 días a la semana (Lunes, Miércoles, Viernes)",
                    nota: "Realiza un calentamiento de 5-10 minutos de cardio ligero (trotar, bicicleta) antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en banco", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con mancuernas", "series": 3, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Jalones al pecho", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Remo con barra", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 3, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Prensa de piernas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 3, "repeticiones": "8-10"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                },
                gimnasio: {
                    frecuencia: "3 días a la semana (Lunes, Miércoles, Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con polea", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con peso", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                }
            },
            intermedio: {
                casa: {
                    frecuencia: "3 días a la semana (Lunes, Miércoles, Viernes)",
                    nota: "Realiza un calentamiento de 5-10 minutos de cardio ligero (trotar, bicicleta) antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en banco", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Jalones al pecho", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Remo con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                },
                gimnasio: {
                    frecuencia: "3 días a la semana (Lunes, Miércoles, Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con polea", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con peso", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                }
            },
            avanzado: {
                casa: {
                    frecuencia: "4 días a la semana (Lunes, Martes, Jueves, Viernes)",
                    nota: "Realiza un calentamiento de 5-10 minutos de cardio ligero (trotar, bicicleta) antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en banco", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Jalones al pecho", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Remo con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera intervalada (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 3, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                },
                gimnasio: {
                    frecuencia: "4 días a la semana (Lunes, Martes, Jueves, Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con polea", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con peso", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera intervalada (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 3, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                }
            }
        },
        endomorfo: {
            principiante: {
                casa: {
                    frecuencia: "3 días a la semana (Lunes, Miércoles, Viernes)",
                    nota: "Realiza un calentamiento de 5-10 minutos de cardio ligero (trotar, bicicleta) antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en banco", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con mancuernas", "series": 3, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Jalones al pecho", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Remo con barra", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 3, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Prensa de piernas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 3, "repeticiones": "8-10"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                },
                gimnasio: {
                    frecuencia: "3 días a la semana (Lunes, Miércoles, Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 3, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas", "series": 3, "repeticiones": "6-8"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con polea", "series": 3, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto", "series": 3, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho", "series": 3, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 3, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con peso", "series": 3, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 3, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 3, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 3, "repeticiones": "8-10"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                }
            },
            intermedio: {
                casa: {
                    frecuencia: "4 días a la semana (Lunes, Martes, Jueves, Viernes)",
                    nota: "Realiza un calentamiento de 5-10 minutos de cardio ligero (trotar, bicicleta) antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en banco", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Jalones al pecho", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Remo con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera intervalada (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 3, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                },
                gimnasio: {
                    frecuencia: "4 días a la semana (Lunes, Martes, Jueves, Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con polea", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con peso", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera intervalada (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 3, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                }
            },
            avanzado: {
                casa: {
                    frecuencia: "5 días a la semana (Lunes a Viernes)",
                    nota: "Realiza un calentamiento de 5-10 minutos de cardio ligero (trotar, bicicleta) antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en banco", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Aperturas con mancuernas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con mancuernas", "series": 5, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Jalones al pecho", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Remo con barra", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 5, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Prensa de piernas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 5, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera intervalada (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 4, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 4, "repeticiones": "12-15"}
                        ],
                        "Día 5: Piernas y Abdominales": [
                            {"ejercicio": "Sentadillas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Zancadas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Crunches", "series": 5, "repeticiones": "15-20"},
                            {"ejercicio": "Plancha abdominal", "series": 5, "duración": "45-60 segundos"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                },
                gimnasio: {
                    frecuencia: "5 días a la semana (Lunes a Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de estiramientos dinámicos antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Aperturas con mancuernas inclinadas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps con polea", "series": 5, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Curl martillo con mancuernas", "series": 5, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con peso", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 5, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 5, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera intervalada (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 4, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 4, "repeticiones": "12-15"}
                        ],
                        "Día 5: Piernas y Abdominales": [
                            {"ejercicio": "Sentadillas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Zancadas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Crunches", "series": 5, "repeticiones": "15-20"},
                            {"ejercicio": "Plancha abdominal", "series": 5, "duración": "45-60 segundos"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche.",
                            "Descansa al menos 48 horas entre sesiones para el mismo grupo muscular."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día.",
                        progresion: "Aumenta los pesos de forma gradual conforme te sientas más fuerte y cómodo con los ejercicios.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar los beneficios."
                    }
                }
            }
        }
    };
    

    const form = document.getElementById('routine-generator');
    const rutinaContainer = document.getElementById('rutinaContainer');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        const morfoType = document.getElementById('morfoType').value;
        const level = document.getElementById('level').value;
        const location = document.getElementById('location').value;

        // Generar la rutina según las selecciones
        const rutina = rutinas[morfoType][level][location];

        // Construir el HTML para mostrar la rutina
        let html = `<p><strong>Frecuencia:</strong> ${rutina.frecuencia}</p>`;
        html += `<p><strong>Nota:</strong> ${rutina.nota}</p>`;

        Object.keys(rutina.rutina).forEach((dia, index) => {
            html += `<h3>${dia}</h3>`;
            rutina.rutina[dia].forEach(ejercicio => {
                html += `<p><strong>${ejercicio.ejercicio}</strong> - Series: ${ejercicio.series}, Repeticiones: ${ejercicio.repeticiones}</p>`;
            });
        });

        html += `<h3>Consejos Adicionales</h3>`;
        
        html += `<p><strong>Nutrición:</strong> ${rutina.consejos_adicionales.nutricion.join(', ')}</p>`;
        html += `<p><strong>Descanso:</strong> ${rutina.consejos_adicionales.descanso.join(', ')}</p>`;
        html += `<p><strong>Hidratación:</strong> ${rutina.consejos_adicionales.hidratacion}</p>`;
        html += `<p><strong>Progresión:</strong> ${rutina.consejos_adicionales.progresion}</p>`;
        html += `<p><strong>Forma:</strong> ${rutina.consejos_adicionales.forma}</p>`;

        rutinaContainer.innerHTML = html;
    });
});