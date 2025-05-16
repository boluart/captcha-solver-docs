# Crea solicitud
API que crea una solicitud para obtener la consulta RUC.

## Request
### Authorization
Actualmente se usa el API Key, el cual es requerido en todas las peticiones que realices. Este debe viajar en la cabecera HTTP con el nombre `x-api-key` y debe ser una cadena alfanumérica de 36 caracteres en formato UUID (por ejemplo, `4a85a2bb-6937-4ced-afc3-76063514f998`).

### Headers
| Key | Value | Description |
|-|-|-|
| x-api-key | 4a85a2bb-6937-4ced-afc3-76063514f998 | API Key requerido para la comunicación con el API. |


### Body request
```json
{
  "RUC": "10455710915"
}
```

## Response

### Body reponse
```json
{
  "RUC": "10455710915",
  "IdSolicitud": "4ca65b3a-56c6-4ca6-8b6f-c3fe6bfb986a",
  "Estado": "Completed",
  "FechaCreacion": "2025-03-14T20:36:48.000Z"
}
```
```json
{
  "error": {
    "codigo": "ERR-002",
    "mensaje": "Error Interno del Servidor."
  }
}
```

### Códigos de respuesta satisfactoria
| HTTP Status | Situación |
|-|-|
| 201 | La solicitud ha sido creado satisfactoriamente |





### Códigos de error usados en esta versión de la API
| HTTP Status | Código de error | Mensaje | Detalle |
|-|-|-|-|
| 400 | ERR-001 | Parámetros de solicitud no válidos | Ocurrió un error durante la validación de campos del request.|
| 500 | ERR-002 |Error Interno del Servidor | El servidor encontró una condición inesperada que le impidió cumplir con la petición. |
| 502 | ERR-003 | Error al invocación de recurso externo | El servidor recibió una respuesta inválida de otro servidor, lo que impide completar la solicitud. |
