# Obtiene resultado
API que obtiene el resultado de la solicitud de constancia de estudios.

## Request
### Authorization
Actualmente se usa el API Key, el cual es requerido en todas las peticiones que realices. Este debe viajar en la cabecera HTTP con el nombre `x-api-key` y debe ser una cadena alfanumérica de 36 caracteres en formato UUID (por ejemplo, `4a85a2bb-6937-4ced-afc3-76063514f998`).

### Headers
| Key | Value | Description |
|-|-|-|
| x-api-key | 4a85a2bb-6937-4ced-afc3-76063514f998 | API Key requerido para la comunicación con el API. |

### Params
| Key | Value | Description |
|-|-|-|
| idSolicitud | 4ca65b3a-56c6-4ca6-8b6f-c3fe6bfb986a | Identificación única para identificar de manera única la solicitud de constancia. |


## Response

### Body reponse
```json
{
  "DNI": "45454545",
  "IdSolicitud": "4ca65b3a-56c6-4ca6-8b6f-c3fe6bfb986a",
  "Estado": "Completed",
  "FechaCreacion": "2025-03-14T20:36:48.000Z",
  "FechaModificacion": "2025-03-14T20:36:55.000Z",
  "ErrorDescription": "",
  "Resultado": [
    {
      "FechaDiploma": "16/04/2012",
      "Ubicacion": "PERU",
      "NombreGraduado": "PEREZ QUISPE, JUAN",
      "FechaEgreso": "16/04/2012",
      "ModalidadEstudio": "-",
      "Institucion": "UNIVERSIDAD NACIONAL DEL ORIENTE DE AMERICA",
      "Tipo": "",
      "GradoTitulo": "LICENCIADA EN PSICOLOGIA",
      "DuracionEstudio": "",
      "FechaReconocimiento": "",
      "DocumentoGraduado": "DNI 45454545",
      "FechaMatricula": "16/04/2012"
    }
  ]
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
| 200 | Retorna el resultado de la solicitud |





### Códigos de error usados en esta versión de la API
| HTTP Status | Código de error | Mensaje | Detalle |
|-|-|-|-|
| 400 | ERR-001 | Parámetros de solicitud no válidos | Ocurrió un error durante la validación de campos del request.|
| 500 | ERR-002 |Error Interno del Servidor | El servidor encontró una condición inesperada que le impidió cumplir con la petición. |
| 502 | ERR-003 | Error al invocación de recurso externo | El servidor recibió una respuesta inválida de otro servidor, lo que impide completar la solicitud. |
