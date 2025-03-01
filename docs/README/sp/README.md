# SUCI

<p align="center">
  <img src="../../../icons.svg" width="128" height="128" alt="Logo de SUCI">
</p>

[![en](https://img.shields.io/badge/lang-English-red.svg)](../../../README.md)
[![cn](https://img.shields.io/badge/语言-中文-yellow.svg)](../cn/README.md)
[![cn](https://img.shields.io/badge/come-Español-purple.svg)](README.md)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.0.1-brightgreen.svg)](https://github.com/SepineTam/suci/releases)

Asistente de inscripción de cursos de la Universidad de Shanghai, ayudando a los estudiantes a buscar y seleccionar cursos automáticamente en el sistema de inscripción.

## 💡 Introducción

SUCI es una extensión de Chrome diseñada específicamente para estudiantes de la Universidad de Shanghai, que te ayuda a monitorear, buscar y seleccionar cursos automáticamente en el sistema de inscripción. Durante los períodos de alta demanda o cuando compites por cursos populares, SUCI puede actualizar y monitorear continuamente por ti, seleccionando cursos automáticamente tan pronto como haya cupos disponibles, mejorando significativamente tus posibilidades de inscripción exitosa.

## ✨ Características

- 🔍 **Búsqueda Inteligente** - Busca automáticamente combinaciones específicas de ID de curso y profesor
- 🖱️ **Inscripción con Un Clic** - Hace clic automáticamente en el botón de inscripción y confirma
- 🔄 **Monitoreo Continuo** - Intenta la inscripción automáticamente cada 10 segundos, perfecto para cursos populares
- 📊 **Registros en Tiempo Real** - Muestra claramente el estado de inscripción y los resultados de las operaciones
- 💾 **Almacenamiento Local** - Guarda automáticamente las listas de cursos y configuraciones para uso futuro
- 🔒 **Seguro y Confiable** - Solo se ejecuta en el sitio web de inscripción de cursos, no recopila datos personales

## 📥 Instalación

### Método 1: Instalación en Modo Desarrollador (Recomendado)

1. Clona o descarga este repositorio
   ```bash
   git clone https://github.com/SepineTam/suci.git
   ```
2. Abre el navegador Chrome y ve a `chrome://extensions/`
3. Activa el "Modo desarrollador" en la esquina superior derecha
4. Haz clic en "Cargar descomprimida"
5. Selecciona la carpeta SUCI descargada

### Método 2: Instalar archivo CRX

1. Descarga el archivo `suci.crx` más reciente desde la página de [Releases](https://github.com/SepineTam/suci/releases)
2. Abre la página de extensiones de Chrome `chrome://extensions/`
3. Activa el Modo desarrollador
4. Arrastra y suelta el archivo crx descargado en la página de extensiones para instalar

## 🚀 Cómo Usar

1. Después de la instalación, el ícono de SUCI aparecerá en la esquina superior derecha de Chrome
2. Inicia sesión en el [Sistema de Inscripción de Cursos de la Universidad de Shanghai](https://jwxk.shu.edu.cn/)
3. Haz clic en el ícono de la extensión para abrir el panel del asistente
4. Ingresa la información del curso, uno por línea, en el formato `IDCurso:IDProfesor`
   Por ejemplo:
   ```
   3100RH62:1000
   04136076:1000
   ```
5. Configura las opciones:
   - **Confirmación Automática de Inscripción**: Cuando está marcada, hace clic automáticamente en el botón de confirmación
   - **Monitoreo Continuo**: Cuando está marcado, reintenta automáticamente cada 10 segundos, ideal para cursos llenos
6. Haz clic en "Iniciar Inscripción" para comenzar la inscripción automática de cursos
7. Ve el progreso y los resultados en el área de registro de estado
8. Haz clic en "Detener Inscripción" para finalizar el proceso

## 📝 Demostración de Características

![Demostración de SUCI](https://via.placeholder.com/640x360?text=Demostraci%C3%B3n+de+SUCI) <!-- Reemplazar con capturas de pantalla o GIF reales -->

## 🔧 Preguntas Frecuentes

<details>
<summary>¿Por qué no puedo encontrar mi curso?</summary>
<p>Por favor, verifica que los ID del curso y del profesor sean correctos. El curso también podría no estar disponible en la fase actual de inscripción.</p>
</details>

<details>
<summary>¿La extensión muestra éxito pero no estoy inscrito?</summary>
<p>El curso podría estar lleno o tener conflicto con tu horario existente. Por favor, revisa el mensaje específico en el sistema de inscripción.</p>
</details>

<details>
<summary>¿El monitoreo continuo afectará el rendimiento de mi computadora?</summary>
<p>El monitoreo continuo solo realiza una operación cada 10 segundos, teniendo un impacto mínimo en el rendimiento. Puedes hacer clic en el botón de detener cuando no lo uses.</p>
</details>

## 🛠️ Desarrollo

Si quieres contribuir a SUCI, sigue estos pasos:

1. Haz un fork de este repositorio
2. Crea tu rama de características (`git checkout -b feature/CaracterísticaIncreíble`)
3. Confirma tus cambios (`git commit -m 'Agregar alguna CaracterísticaIncreíble'`)
4. Empuja a la rama (`git push origin feature/CaracterísticaIncreíble`)
5. Abre un Pull Request

## ⚠️ Descargo de Responsabilidad

Esta herramienta está destinada únicamente a ayudar con la inscripción de cursos y mejorar la eficiencia. No debe usarse para afectar la equidad en la inscripción o violar las regulaciones escolares. Los usuarios asumen toda la responsabilidad por las consecuencias que surjan del uso de esta herramienta, y los desarrolladores no son responsables. La herramienta no garantiza la inscripción exitosa en todos los cursos; los resultados finales de inscripción están sujetos al sistema académico de la escuela.

Este proyecto sigue la licencia de código abierto MIT. Los usuarios son libres de usar, modificar y distribuir, pero deben asumir todos los riesgos asociados con su uso.

## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<p align="center">
  Hecho por <a href="https://github.com/SepineTam">SepineTam</a> Desarrollado con <a href="https://claude.ai/">Claude</a> ❤️
</p>