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
                            "Duerme 7-8 horas por noche como mínimo, asegurando un descanso de calidad",
                            "incorpora periodos de recuperación activa y pasiva para evitar sobreentrenamiento."
                        ],
                        hidratacion: "Asegúrate de beber al menos 3 litros de agua al día, ajustando según la intensidad de tus entrenamientos y el clima.",
                        progresion: "Aumenta gradualmente la carga de entrenamiento para seguir desafiando tus músculos y promover el crecimiento.",
                        forma: "Mantén una técnica impecable en todos los ejercicios para minimizar el riesgo de lesiones y maximizar los resultados."
                    }
                },
                gimnasio: {
                    frecuencia: "4 días a la semana (Lunes, Martes, Jueves, Viernes)",
                    nota: "Realiza un calentamiento de 10 minutos de cardio ligero seguido de movilidad articular antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press inclinado con barra", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas lastrados", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Cruces de poleas altas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps en polea alta con cuerda", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "remo con barra", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho con agarre amplio", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra Z", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl inclinado con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas profundas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Carrera en cinta (varía la inclinación y la velocidad)", "series": 1, "duración": "30-45 minutos"},
                            {"ejercicio": "Plancha lateral con elevación de pierna", "series": 3, "duración": "30-45 segundos por lado"},
                            {"ejercicio": "Crunch abdominal con peso", "series": 3, "repeticiones": "15-20"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Consume más calorías de las que quemas. Prioriza proteínas magras, carbohidratos complejos y grasas saludables",
                            "come cada 3-4 horas",
                            "suplementa con proteínas si es necesario (proteína en polvo, ganadores de peso)."
                        ],
                        descanso: [
                            "Duerme al menos 7-8 horas por noche, enfocándote en la calidad del sueño y la recuperación",
                            "incorpora periodos de recuperación activa y pasiva para evitar sobreentrenamiento."
                        ],
                        hidratacion: "Mantén una hidratación constante, bebiendo al menos 3-4 litros de agua al día, ajustando según el clima y la actividad física.",
                        progresion: "Incrementa la carga de entrenamiento de manera progresiva para mantener la adaptación muscular y evitar el estancamiento.",
                        forma: "Supervisa constantemente tu técnica de ejercicio para maximizar la efectividad y prevenir lesiones."
                    }
                }
            },
            avanzado: {
                casa: {
                    frecuencia: "5 días a la semana (Lunes a Viernes)",
                    nota: "Realiza un calentamiento completo que incluya cardio y activación muscular específica antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press inclinado con mancuernas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en anillas lastrados", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Cruces de cables", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps en polea alta con cuerda", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Remo con barra T", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Dominadas lastradas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra recta", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl concentrado con mancuerna", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con barra", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas inclinada", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Entrenamiento de intervalos de alta intensidad (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha abdominal con elevación de piernas", "series": 3, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado con peso", "series": 3, "repeticiones": "12-15"}
                        ],
                        "Día 5: Día de Fuerza Funcional": [
                            {"ejercicio": "Movimientos complejos como clean and jerk o snatch", "series": 5, "repeticiones": "3-5"},
                            {"ejercicio": "Ejercicios de estabilidad como sentadillas en una pierna o flexiones en anillas", "series": 4, "repeticiones": "6-8 por lado"},
                            {"ejercicio": "Trabajo de core avanzado como rueda abdominal o dragon flag", "series": 3, "repeticiones": "8-10"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Sigue un plan nutricional específico para tus objetivos de rendimiento deportivo, manteniendo una ingesta calórica ajustada",
                            "prioriza las proteínas magras y los carbohidratos de bajo índice glucémico para optimizar la recuperación y el rendimiento",
                            "utiliza suplementos avanzados como BCAAs, glutamina, y pre-entrenos si es necesario, bajo la supervisión de un profesional."
                        ],
                        descanso: [
                            "Duerme al menos 7-9 horas por noche, enfocándote en la calidad del sueño y la recuperación muscular",
                            "incorpora técnicas de recuperación avanzadas como la crioterapia o la terapia de compresión para acelerar la regeneración muscular."
                        ],
                        hidratacion: "Mantén una hidratación óptima, bebiendo al menos 3-4 litros de agua al día, ajustando según la intensidad del entrenamiento y las condiciones climáticas.",
                        progresion: "Implementa técnicas de periodización para optimizar el progreso a largo plazo, alternando fases de carga y descarga.",
                        forma: "Supervisa de cerca tu técnica en todos los movimientos, especialmente en los ejercicios complejos, para minimizar el riesgo de lesiones."
                    }
                },
                gimnasio: {
                    frecuencia: "5 días a la semana (Lunes a Viernes)",
                    nota: "Realiza un calentamiento completo que incluya cardio y activación muscular específica antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Fondos en paralelas lastrados", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Cruces de cables", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps en polea alta con cuerda", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto convencional", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Jalones al pecho con agarre amplio", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Curl de bíceps con barra Z", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl inclinado con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas pesadas", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Prensa de piernas", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Entrenamiento de intervalos de alta intensidad (HIIT)", "series": 1, "duración": "30-45 minutos"},
                            {"ejercicio": "Plancha lateral con elevación de pierna", "series": 3, "duración": "30-45 segundos por lado"},
                            {"ejercicio": "Crunch abdominal con peso", "series": 3, "repeticiones": "15-20"}
                        ],
                        "Día 5: Día de Fuerza Funcional": [
                            {"ejercicio": "Movimientos olímpicos como clean and jerk o snatch", "series": 5, "repeticiones": "3-5"},
                            {"ejercicio": "Ejercicios de estabilidad como sentadillas en una pierna o flexiones en anillas", "series": 4, "repeticiones": "6-8 por lado"},
                            {"ejercicio": "Trabajo de core avanzado como rueda abdominal o dragon flag", "series": 3, "repeticiones": "8-10"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Sigue un plan dietético preciso para optimizar tu rendimiento deportivo, ajustando las calorías según tus objetivos específicos",
                            "prioriza las proteínas de alta calidad, los carbohidratos de bajo índice glucémico y las grasas saludables",
                            "utiliza suplementos avanzados como BCAAs, glutamina y pre-entrenamientos de calidad para mejorar la recuperación y el rendimiento."
                        ],
                        descanso: [
                            "Duerme al menos 7-9 horas por noche, enfocándote en la calidad del sueño y la recuperación muscular",
                            "implementa técnicas de recuperación avanzadas como masajes deportivos o terapia de compresión para acelerar la recuperación."
                        ],
                        hidratacion: "Mantén una hidratación óptima, bebiendo al menos 3-4 litros de agua al día, ajustando según el volumen de entrenamiento y las condiciones ambientales.",
                        progresion: "Aplica estrategias de periodización avanzadas para maximizar el progreso a largo plazo, incluyendo fases de sobrecarga y descarga.",
                        forma: "Supervisa constantemente tu técnica de ejercicio, especialmente en movimientos complejos, para minimizar el riesgo de lesiones y optimizar los resultados."
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
                            {"ejercicio": "Press de banca plano", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Fondos en banco", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Cruces de poleas altas", "series": 3, "repeticiones": "12-15"},
                            {"ejercicio": "Extensiones de tríceps en polea alta", "series": 3, "repeticiones": "12-15"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Jalones al pecho", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Remo con barra", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 3, "repeticiones": "12-15"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con barra", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Prensa de piernas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Press militar con barra", "series": 3, "repeticiones": "12-15"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Mantén un equilibrio calórico para tus objetivos de tonificación o aumento de masa muscular.",
                            "Prioriza proteínas magras, carbohidratos complejos y grasas saludables en cada comida.",
                            "Considera un batido de proteínas post-entrenamiento si tienes dificultades para alcanzar tus necesidades proteicas."
                        ],
                        descanso: [
                            "Asegúrate de dormir al menos 7-8 horas por noche para una óptima recuperación muscular.",
                            "Incorpora días de descanso activo como caminatas suaves o yoga para mejorar la recuperación."
                        ],
                        hidratacion: "Bebe al menos 2-3 litros de agua al día para mantener la hidratación durante el entrenamiento y la recuperación muscular.",
                        progresion: "Aumenta gradualmente la carga de peso o la intensidad de tus entrenamientos a medida que tu fuerza y resistencia mejoren.",
                        forma: "Mantén una técnica adecuada en todos los ejercicios para prevenir lesiones y maximizar el desarrollo muscular."
                    }
                },
                gimnasio: {
                    frecuencia: "3 días a la semana (Lunes, Miércoles, Viernes)",
                    nota: "Incluye un calentamiento de 10 minutos de cardio y dinámicos específicos seguidos de estiramientos y relajación al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca plano", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Fondos en banco lastrados", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Cruces de cables", "series": 3, "repeticiones": "12-15"},
                            {"ejercicio": "Extensiones de tríceps en polea alta", "series": 3, "repeticiones": "12-15"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Remo con barra", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Dominadas con peso", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Curl de bíceps con barra Z", "series": 3, "repeticiones": "12-15"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas profundas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Prensa de piernas inclinada", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Press militar con barra", "series": 3, "repeticiones": "12-15"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Mantén una dieta equilibrada y ajusta tus calorías según tus metas de ganancia muscular o definición.",
                            "Consume proteínas de alta calidad, carbohidratos complejos y grasas saludables para satisfacer tus necesidades nutricionales.",
                            "Considera la suplementación con proteínas en polvo, creatina o multivitamínicos para apoyar tu rendimiento y recuperación."
                        ],
                        descanso: [
                            "Prioriza el sueño y el descanso, asegurándote de dormir al menos 7-8 horas por noche.",
                            "Incorpora técnicas de recuperación como estiramientos y masajes para aliviar la tensión muscular."
                        ],
                        hidratacion: "Mantén una hidratación adecuada, bebiendo al menos 2-3 litros de agua al día, ajustando según la intensidad de tus entrenamientos y el clima.",
                        progresion: "Aumenta gradualmente la intensidad de tus ejercicios o el peso levantado para seguir desafiando a tu cuerpo y promover el crecimiento muscular.",
                        forma: "Enfócate en mantener una buena técnica durante tus entrenamientos para prevenir lesiones y asegurar el progreso a largo plazo."
                    }
                }
            },
            intermedio: {
                casa: {
                    frecuencia: "4 días a la semana (Lunes, Martes, Jueves, Viernes)",
                    nota: "Incluye un calentamiento de 10-15 minutos de cardio ligero y ejercicios dinámicos, seguido de estiramientos al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca plano", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Fondos en banco lastrados", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Cruces de poleas altas", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Extensiones de tríceps en polea alta", "series": 3, "repeticiones": "10-12"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Jalones al pecho", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Remo con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl de bíceps con barra", "series": 3, "repeticiones": "10-12"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Prensa de piernas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Press militar con barra", "series": 3, "repeticiones": "10-12"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 3, "repeticiones": "10-12"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Entrenamiento de intervalos de alta intensidad (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha lateral con elevación de piernas", "series": 3, "duración": "30-45 segundos"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Ajusta tus calorías según tus metas específicas (definición o aumento de masa muscular).",
                            "Mantén una ingesta elevada de proteínas magras junto con carbohidratos de índice glucémico bajo.",
                            "Considera la suplementación con creatina y aminoácidos esenciales para mejorar el rendimiento y la recuperación."
                        ],
                        descanso: [
                            "Duerme 7-8 horas por noche como mínimo, asegurando un descanso de calidad.",
                            "Incorpora periodos de recuperación activa y pasiva para evitar sobreentrenamiento."
                        ],
                        hidratacion: "Asegúrate de beber al menos 3 litros de agua al día, ajustando según la intensidad de tus entrenamientos y el clima.",
                        progresion: "Aumenta gradualmente la carga de entrenamiento para seguir desafiando tus músculos y promover el crecimiento.",
                        forma: "Mantén una técnica impecable en todos los ejercicios para minimizar el riesgo de lesiones y maximizar los resultados."
                    }
                },
                gimnasio: {
                    frecuencia: "4 días a la semana (Lunes, Martes, Jueves, Viernes)",
                    nota: "Realiza un calentamiento de 15 minutos de cardio ligero seguido de movilidad articular antes de comenzar y estira al finalizar cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press inclinado con barra", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas lastrados", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Cruces de poleas altas", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps en polea alta con cuerda", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto convencional", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho con agarre amplio", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra Z", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl inclinado con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas profundas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Entrenamiento de intervalos de alta intensidad (HIIT)", "series": 1, "duración": "30 minutos"},
                            {"ejercicio": "Plancha lateral con elevación de piernas", "series": 3, "duración": "30-45 segundos por lado"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Mantén una ingesta calórica adecuada según tus objetivos de rendimiento y composición corporal.",
                            "Prioriza las proteínas magras, los carbohidratos de bajo índice glucémico y las grasas saludables.",
                            "Utiliza suplementos como BCAAs, creatina y multivitamínicos para optimizar tu recuperación y desempeño."
                        ],
                        descanso: [
                            "Asegúrate de dormir 7-8 horas por noche para facilitar la recuperación y la adaptación muscular.",
                            "Incorpora técnicas de recuperación como la terapia de compresión o los baños de contraste para mejorar la recuperación muscular."
                        ],
                        hidratacion: "Mantén una hidratación adecuada bebiendo al menos 3-4 litros de agua al día, ajustando según tus necesidades individuales.",
                        progresion: "Implementa técnicas de periodización para planificar y progresar de manera efectiva a lo largo de las fases de entrenamiento.",
                        forma: "Supervisa tu técnica constantemente para minimizar el riesgo de lesiones y maximizar el rendimiento en cada sesión de entrenamiento."
                    }
                }
            },
            avanzado: {
                casa: {
                    frecuencia: "5-6 días a la semana (dependiendo de la intensidad)",
                    nota: "Incluye un calentamiento dinámico de 15 minutos seguido de estiramientos y movilidad articular antes de cada sesión.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca plano", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Fondos en paralelas lastrados", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Cruces de cables", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps en polea alta con cuerda", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto convencional", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Jalones al pecho con agarre amplio", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Curl de bíceps con barra Z", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl inclinado con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas pesadas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Prensa de piernas", "series": 5, "repeticiones": "6-8"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Entrenamiento de intervalos de alta intensidad (HIIT)", "series": 1, "duración": "30-45 minutos"},
                            {"ejercicio": "Plancha lateral con elevación de piernas", "series": 3, "duración": "30-45 segundos por lado"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ],
                        "Día 5: Día de Fuerza Funcional": [
                            {"ejercicio": "Movimientos olímpicos (clean and jerk, snatch)", "series": 5, "repeticiones": "3-5"},
                            {"ejercicio": "Sentadillas en una pierna con barra", "series": 4, "repeticiones": "6-8 por lado"},
                            {"ejercicio": "Flexiones en anillas o en TRX", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones de piernas en barra horizontal", "series": 3, "repeticiones": "10-12"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Optimiza tu ingesta calórica para apoyar tus objetivos de rendimiento y composición corporal.",
                            "Consume una combinación equilibrada de proteínas, carbohidratos y grasas saludables para satisfacer tus necesidades nutricionales diarias.",
                            "Considera la suplementación con aminoácidos esenciales, creatina y antioxidantes para mejorar la recuperación y el desempeño."
                        ],
                        descanso: [
                            "Prioriza la calidad del sueño, asegurándote de dormir 7-9 horas por noche para facilitar la recuperación muscular y la adaptación.",
                            "Utiliza técnicas de recuperación avanzadas como la crioterapia, la terapia de compresión o los baños de contraste para acelerar la regeneración muscular."
                        ],
                        hidratacion: "Mantén una hidratación adecuada bebiendo al menos 3-4 litros de agua al día, ajustando según el volumen de entrenamiento y las condiciones ambientales.",
                        progresion: "Implementa un enfoque estructurado de periodización para mejorar constantemente tus resultados y evitar el estancamiento.",
                        forma: "Supervisa de cerca tu técnica en todos los ejercicios para prevenir lesiones y optimizar el rendimiento durante cada sesión de entrenamiento."
                    }
                },
                gimnasio: {
                    frecuencia: "5-6 días a la semana (dependiendo de la intensidad)",
                    nota: "Realiza un calentamiento completo de 15-20 minutos que incluya movilidad y activación muscular, seguido de estiramientos y relajación.",
                    rutina: {
                        "Día 1: Pecho y Tríceps": [
                            {"ejercicio": "Press de banca plano", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Fondos en paralelas lastrados", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Cruces de cables", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Extensiones de tríceps en polea alta con cuerda", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 2: Espalda y Bíceps": [
                            {"ejercicio": "Peso muerto convencional", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Jalones al pecho con agarre amplio", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Curl de bíceps con barra Z", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Curl inclinado con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 3: Piernas y Hombros": [
                            {"ejercicio": "Sentadillas pesadas", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Prensa de piernas", "series": 5, "repeticiones": "5-8"},
                            {"ejercicio": "Press militar con barra", "series": 4, "repeticiones": "8-10"},
                            {"ejercicio": "Elevaciones laterales con mancuernas", "series": 4, "repeticiones": "8-10"}
                        ],
                        "Día 4: Cardio y Core": [
                            {"ejercicio": "Entrenamiento de intervalos de alta intensidad (HIIT)", "series": 1, "duración": "30-45 minutos"},
                            {"ejercicio": "Plancha lateral con elevación de piernas", "series": 3, "duración": "30-45 segundos por lado"},
                            {"ejercicio": "Elevación de piernas colgado", "series": 3, "repeticiones": "12-15"}
                        ],
                        "Día 5: Día de Fuerza Funcional": [
                            {"ejercicio": "Movimientos olímpicos (clean and jerk, snatch)", "series": 5, "repeticiones": "3-5"},
                            {"ejercicio": "Sentadillas en una pierna con barra", "series": 4, "repeticiones": "6-8 por lado"},
                            {"ejercicio": "Flexiones en anillas o en TRX", "series": 4, "repeticiones": "6-8"},
                            {"ejercicio": "Elevaciones de piernas en barra horizontal", "series": 3, "repeticiones": "10-12"}
                        ]
                    },
                    consejos_adicionales: {
                        nutricion: [
                            "Mantén una ingesta calórica adecuada según tus objetivos de rendimiento y composición corporal.",
                            "Prioriza la ingesta de proteínas magras, carbohidratos de bajo índice glucémico y grasas saludables.",
                            "Utiliza suplementos como BCAAs, creatina y glutamina para apoyar la recuperación muscular y mejorar el rendimiento."
                        ],
                        descanso: [
                            "Duerme 7-9 horas por noche para facilitar la recuperación muscular y la adaptación al entrenamiento intensivo",
                            "incorpora técnicas de recuperación avanzadas, como la terapia de compresión y la crioterapia, para acelerar el proceso de regeneración."
                        ],
                        hidratacion: "Mantén una hidratación adecuada, bebiendo al menos 3-4 litros de agua al día, ajustando según las necesidades individuales.",
                        progresion: "Implementa una periodización adecuada para optimizar la progresión del entrenamiento y evitar el sobreentrenamiento.",
                        forma: "Supervisa tu técnica de entrenamiento de cerca para prevenir lesiones y maximizar los resultados en cada sesión de ejercicio."
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