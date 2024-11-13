# Principios SOLID: Guía para principiantes

Este README está diseñado para aprender de manera clara y práctica los principios SOLID. Cada principio incluye un ejemplo simple de la vida real y sus beneficios, pensado para facilitar su comprensión sin necesidad de conocimientos técnicos profundos.

---

## **Single Responsibility Principle (SRP)**

**"Una clase debe tener una sola razón para cambiar."**

Esto significa que cada módulo, clase o componente debe enfocarse en una sola tarea o responsabilidad específica.

### **Ejemplo de la vida real:**
Un restaurante tiene tres áreas:
- **Cocina**: Prepara los alimentos.
- **Atención al cliente**: Toma pedidos y atiende a los clientes.
- **Limpieza**: Mantiene el lugar limpio.

Si la misma persona tuviera que cocinar, atender y limpiar, sería caótico. Dividir las responsabilidades asegura eficiencia y evita errores.

**Beneficios:**
- Facilita el mantenimiento: Si cambian las reglas de limpieza, solo afecta al equipo de limpieza.
- Evita errores al separar responsabilidades.

---

## **Open/Closed Principle (OCP)**

**"El código debe estar abierto para extensión, pero cerrado para modificación."**

Se trata de diseñar sistemas que puedan crecer y adaptarse sin necesidad de cambiar el código existente.

### **Ejemplo de la vida real:**
Un menú de restaurante que permite agregar platos nuevos. En lugar de reimprimir todo el menú, se añade una hoja adicional con los platos nuevos.

**Beneficios:**
- Permite agregar nuevas funcionalidades sin romper las existentes.
- Reduce el riesgo de introducir errores al modificar el sistema.

---

## **Liskov Substitution Principle (LSP)**

**"Las subclases deben ser reemplazables por sus clases base sin alterar el comportamiento del programa."**

Si una subclase rompe las expectativas de la clase base, el sistema puede fallar.

### **Ejemplo de la vida real:**
Una tarjeta de crédito y una tarjeta de débito pueden usarse en un cajero automático. Ambas deben cumplir con las mismas reglas: ingresar el PIN, retirar dinero, etc. Si una tarjeta funciona de manera diferente y bloquea la máquina, rompe el principio.

**Beneficios:**
- Garantiza que las extensiones sean seguras y no rompan el sistema.
- Evita problemas al usar herencia incorrectamente.

---

## **Interface Segregation Principle (ISP)**

**"Es mejor tener interfaces pequeñas y específicas que una única grande y genérica."**

No obligues a las clases a implementar métodos que no necesitan.

### **Ejemplo de la vida real:**
Un empleado puede ser:
- **Cocinero**: Necesita instrucciones sobre recetas.
- **Mesero**: Necesita instrucciones sobre cómo tomar pedidos.

No tendría sentido crear una única lista de tareas que combine ambas funciones y obligar a todos a aprenderlas.

**Beneficios:**
- Evita sobrecargar a los módulos con funcionalidades innecesarias.
- Hace que el sistema sea más modular y fácil de mantener.

---

## **Dependency Inversion Principle (DIP)**

**"Las clases de alto nivel no deben depender de clases de bajo nivel. Ambas deben depender de abstracciones."**

Promueve la inyección de dependencias y desacopla las partes del sistema.

### **Ejemplo de la vida real:**
Una lámpara depende de un enchufe para funcionar, pero puede funcionar con cualquier tipo de enchufe (americano, europeo, etc.), siempre que se use un adaptador estándar.

**Beneficios:**
- Permite cambiar implementaciones sin afectar el sistema principal.
- Hace el sistema más flexible y fácil de probar.

---

Los principios SOLID son como las reglas para construir un edificio sólido: cada parte debe cumplir un propósito claro, ser fácil de ajustar y no depender demasiado de las demás. Implementarlos ayuda a crear software más estable, escalable y fácil de mantener. 
