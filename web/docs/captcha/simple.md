---
sidebar_position: 0
---
# Captcha Simple
API que resuelve captchas simples

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
  "code": "06A",
  "image": "iVBORw0KGgoAAAANSUhEUgAAAMgAAABQCAYAAABcbTqwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAw7SURBVHhe7Z09jBQ7Esc3JCQkJCQk34RwohMhuoQN0UUEGxBcsKsLCIlOJGh5ARIhwemJR7TxC+7QCU58PT5vxQLiU7sSIHT4urrtGbtdriq7u909O/5JlrzzX5er7a5uf/T0rCmlzlRpC0v37t1DPzep6EXHPjfpKOgQIPCHRyXqHE7Ri07B6e/fv9c5nKn4jwbIVJwLUfTl1jmm5L8XIFNyDqPoy61zTM1/J0BApAwUveic/uzZM/1XPH3U37c+DxBbwIwUvegGTP/w4YPO4Xz//l3nhql/KL0OkD4NGop+tPWXL1/qHM+TJ090bkHX+nPpa1UGXcUC4J+wwoair7bO0dX+FHR0FctAFQaKvto6x9T9l+jBAJmCcxRFH1b/+PGjzuF8+/ZN53CmfnxSHQ2QqTgXoujD6hyPHz/WOZypH1+M7gXIlJzDKPqwOsfU/e9bdwIERMpA0Zdbv3//vnr16pX+K56u9S+jPg8QW8CMFH259S9fvugcztevX3VumPqXVa8DpE+DhqKPq+/t7ekcz6NHj3RuQdf6j4pe9kGOsM7R1f4q6OgqloEqDBR9XP3Bgwc6l8bUj28KejBApuAcxarrh4eHOofD6VM/vqnoaIBMxbkQq65zcHeWqR/flHQvQKbkHMaq6xxT93/ZdCdAQKQMFH1YHVaTXr9+rf+Kp2v9Rff1eYDYAmak6MPq9j4Ehr2PMUT9Rcf1OkDSDO6ozbU1tZYjbezoWhfw/mH67iA+b+xI61/A3SkgYG7evKk2NjbU8ePH0XqzpfVt9UL7ZRi+/zeq3jJ1xbdvX3qHfZBdtYEe2PBpU7cc7R+mDxMg7ST1L8R/bpxTx44dQ22PkmbXvADJ3/+b84AxcO3bh46uYhmowmMGSJM21Q7pH+Z/ngAx6dSf/64+65pj2N3E7Y2WJhEgJi0ChT4/+9GDAcIXzjjEIpK5WrfB/R8+QE6dOqW2trbYpdbPn8OhswwB0mf/z2Yztbu7WycYVkL7mXThwgV15syZeYL2XVubqe07wwcHgAaIrHDeq3E4zdS1Vu+F/R/G59OnT6vLly+TQfHp06F6fNDkufbd2cDrGS21AqTv/od5Vp/Izt8wtu4FiLzwVAKkSlYH0v73NyyAoLhy5Yp6/vy5tu3z6dMndf36dXX27Nl5OWxCbwP+T/kOMkT/X7p0Sdvsjvz8xWnrToCASBlwdaaB0Nty3KTpxbUZbhtJs+o2wtvfoQNkfVvdifAPAwuKdqKGhbT/jL6zgdZn0vr2nW72Hb3//od3ajXv1Xqv/nVjMcyC9jRDMEihixJnP0WfB4gtYEZ8Pa6B4u1b7G7iddjJWooM25f5zPn35s0bnVsA74V6+9tfcbteWieHhVz9QZ1pJ7iIzP+3hci+psln6P8X19QMs+2kZtKeZN8ipNcBkmaQmaSJTtgGkc4GiTsXwe3LOxUvv+DHjx865+uiIVLf7QMIAwRIsm+Rrf8FF8eUfSipPtw+SHWywXAlXJ6z7+vciWefAIBvP/6q55Z3oXTJ8BA6NtU+4OkRAQJE23fI1//sBScwZpXaDwEauoploApLG4iCto/o3NWk1VC+/fRhAQans6tR1lUWo+/2wQKEgtYz9j/X761+M3Q7vkYPBghfWH6LxUhynhuTWg2F208bYmFwev1qHMEYOm4fZwGqRwRI1+PL2v9sO+K77BRSHQ0QWeG4q7FNsvPCAAnbl/mc7B9CyvAguX5hgHQ9vkbP2f9MXa0A6ef4GrwAkRdOa6BOzlcBso7VZVJVJ31bH35Y8PPnT53TRF79OrWPIEA62a9Y6Dn7Xx4g/R1fgxMgIFIGXD2+geLs+3Dr/PDUL21/2H0Q0PyfFvuvujZD6rKSuYlI7JP6ku+DBPWIkUOSfQ2mzwPEFjAjvh7XQPH2XeAzbmWIGkI0n8l8Dpdv4HR7CRiQ+B1jP6h3GGKJ7GuafMb+F0zS7QtbtP2KkF4HSJrBzPsglTX6SizZB/mn+mN3t96Z3draUhcvXpw/BFfbsDoVL7+A022e/uNvLV9bqa/vuyRO0sX2LXL2/53tdbwOk3r7vtAC89ny7IMIriJWfNT49vnX5Cx+B0mpt2/forvmBt9+gO/v1Z+o73cgvgOcfU+PCBAg2r5Drv5nArFK1Epg1/rRVSwDVVjaQBS0/YUu2XTDGsm3H36wMAXudZ72hP3XS5dQv5vkL1MC0vaZkxAgFLSep//5pxLwtgO6HV+jBwOELzz8OrjokQ1I4qXS39XVajgFDxLCEAuSeQAOHjLsE/s3+YD/VfOS8+fP18O5EydOtI7B72RJ+3gkDrEweH3o/r/DLm5Aage9ofvxNToaILLCzCQtVwoMrXD4iSW80bbLL7XGsL+/rwP0D+fextUfPD5hgMj6N4yo/5F+MdD2mTuTk3q687awdS9A5IWnECCxV97hhwXtO0ffwLwoiCBA5P2LM6X+lw2rXWJ1J0BApAy4+sgNFBhW0f4Pvw+C64ufK4MAevjwof6rXw73H9Rf4oKhI3xLD4Zz8MUuc3xZ90EGTtjQKs5/H0yfB4gtYEZ8faQGqgJD5p+LyGc9LEi33+Drr9TBh32dV/VJDPXBm0uaZear6nfrNUDce3VT+ffr5t1b2G+axx/feAEy5OPtgJ2vAyTNIL/81m9yh1O8f5guCxAgzf4CV99RN86d03812Fd2+x1QBrs8NicZKogM/PHl7v8qDdY/YX3p3ovVXokJ+4fp8gAB4u27LPSm3tu3bzdCxd27d4P1GuT2NXev1kMrGGLBXcqs0KVC15+x//tqnxYSHV3FMlCF2QaqDip2whu7rEv7h+nxAUIh1vWzRCdPnnReMQo7+Vi9huj6mUn6X265b3N89+6dzuHQ9Q8bINDF0cffog89GCB84eHWwSWBAhNOCtx+2hALI0q3Tlz7DR4QLPWeSGDBgQLVj9Q+yDR0NEBkheOuxjYS+/zuuf8+LEPYvsxn2fGHaev2scDEHIZXhlu3bnkrMsn1H4l9kGnpXoDIC6c1UIxz7J0EqYO2P/w+iK/7D1nCypXNL1aRePsWU9oH6aH/MXLrToCASBlw9fgGirMPMHVUyR6d8PZH2AcJfJcBnig2mFlJkn2LI/t9EM0Y+jxAbAEz4utxDRRvX8NcFbEJe9i+zOdw+YYYPTRUhLkHPGpisCfMyfV3GGKJ7GuafKb+14yl1wGSZlA+SUuzbz7jVkvwt7zj9uWdKveP0unvsFDvpE2qP3GSLrZvka//x9WX4vsg3FwEWQSq8e3HX/Xc8i6czn7RZ21D7RMbftH1RwQIEG3fIV//h8iho6tYBqqwtIEoaPuWLhxmtfHtpw8LMEide8FEldKWqhd4ekKAUND6GAseLjn0YIDwhXOugzMntvip3rQhFgatc8NCSP7jJTZJ9ScOsTB4veyDBGn0uKuxTYrzMcOssH2Zzyn+zRHcOSC1r+Y21I/rAMH6hQHS6fgqGj1v/9vk1L0AkRdOa6Bk57lhlujkHnJYwLSHnUKTpoqDA/0rOwHI4xMESHL7axZ65v7X5NadAAGRMuDq8Q0UZ78NN2xpfpaLtt/3PkhEUJhEDD2ePn3K+M8cX9kH6V2fB4gtYEZ8Pa6B4u27wGeS90uZ/23TfJZwQveamrlS2L+GZL3DEEtkX9Pk8/e/IadeB0iawRHWwYVv2ANw+yMGSI4TJnGSLrZvUfZBKuCfsMINsvF8uDxnH9PjXx7nlh8nQOT7NC7RekSAANH2Hcbof5ccOrqKZaAKSxuIgraP69JhFuCXzxsgve9ztPD0hAChoPVx+t8mhx4MEL7wSOvgwmEWXj5HgDR3seTj0yTpiUMsDF4v+yBBGj1ukmbTzfkXansdqc9K4Z9aHiJA/O+ldDu+DnqHSbqNTB+r//PqXoBMyTmMohedom/dCRAQKQNFL/qq6fMAsQXMSNGLblglvQ6QPg0ail50wzLrHfZBil70o6+jq1gGqjBQ9KJTHAU9GCBTcI6i6EWn6EtHA2QqzoUo+rA69/sknE7+REMF915hTs/ZPl6A5KwcY9n1qZ9cy07u/nUCBETKwKrrhXHp2n8p+jxAbAEzsur6KoHdhezPMN2+82F3Qfsz7C5qf4bpXfsvVa8DpE+DhmXX9/bg1wrT4U6oA+urtdwJhencCWV/NkT7rIpe9kGKrv/yKfo99X/BnLKcsiRsvQAAAABJRU5ErkJggg=="
}
```

## Response

### Body reponse
```json
{
  "code": "06A",
  "status": "Successful",
  "text": "RDTP"
}
```
```json
{
  "error": {
    "codigo": "ERR-402",
    "mensaje": "Campo 'code' no proporcionado o está vacío."
  }
}
```

### Códigos de respuesta satisfactoria
| HTTP Status | Situación |
|-|-|
| 201 | El captcha ha sido resuelto satisfactoriamente |





### Códigos de error usados en esta versión de la API
| HTTP Status | Código de error | Mensaje | Detalle |
|-|-|-|-|
| 400 | ERR-401 | Campo 'image' no proporcionado o está vacío.| Este error se presenta cuando no se envía el campo 'image' dentro del body.  |
| 400 | ERR-402 | Campo 'code' no proporcionado o está vacío.| Este error se presenta cuando no se envía el campo 'code' dentro del body. |
| 400 | ERR-403 | El valor de 'code' debe ser uno de [...].| Este error se presenta cuando el campo 'code' no es un valor permitido. |
| 500 | ERR-501 | Error al intentar procesar la imagen.| Este error se presenta cuando no se puede cargar interpretar la imagen que es enviada en el body. |
| 500 | ERR-502 | Captcha no resuelto.| Este error se presenta cuando no es posible resolver el captcha debido a que no esta extrayendo correctamente el valor. |
| 500 | ERR-503 | Error al resolver el captcha.| Este error se presenta cuando hay un problema al intentar resolver el captcha |


## Captchas resueltos
| Código | Tamaño | Captcha ejemplo | URL 
|--|--|--|--|
| 00B | 80x20  | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/00b-1.jpg) | https://aplicativo.pj.gob.pe/sicaju/ 
| 01B | 160x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/01b-1.jpg) | https://www.tlcbcp.com/#/ 
| 02B | 160x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/02b-1.jpg) |   
| 03B | 120x40 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/03b-1.jpg) | https://extranet.sbs.gob.pe/app/  
| 04B | 200x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/04b-1.png) | https://pagoprogramado.niubiz.com.pe/comercio/login  
| 05B | 180x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/05b-1.png) | https://titulosinstitutos.minedu.gob.pe/  
| 06B | 130x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/06b-1.png) | https://cej.pj.gob.pe/cej/forms/busquedaform.html  
| 00A | 100x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/00a-1.jpeg) | https://ww1.sunat.gob.pe/ol-ti-itconsverixml/ConsVeriXml.htm
| 01A | 200x45 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/01a-1.jpg) | https://apps4.mineco.gob.pe/REGNE/contribuyente
| 02A | 130x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/02a-1.jpg) | https://constancias.sunedu.gob.pe/verificainscrito
| 03A | 300x75 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/03a-1.jpg) | https://www.placas.pe/Public/CheckPlateStatus.aspx
| 04A | 300x75 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/04a-1.jpg) | https://viva.essalud.gob.pe/viva
| 05A | 200x60 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/05a-1.jpg) | https://sel.migraciones.gob.pe/servmig-valreg/VerificarCE
| 06A | 200x80 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/06a-1.jpg) | https://sistemas10.minedu.gob.pe/siagie3
| 07A | 146x31 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/07a-1.jpg) | https://cargos.mc.com.pe
| 08A | 110x30 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/08a-1.jpg) | https://campusvirtual.upao.edu.pe
| 09A | 200x80 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/09a-1.jpg) | https://sistemasdgc.rree.gob.pe/carext_consulta_webapp https://sistemasdgc.rree.gob.pe/evd_webapp
| 10A | 140x60 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/10a-1.jpg) | https://prodapp4.seace.gob.pe/sican
| 11A | 370x60 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/11a-1.jpg) | https://sroppublico.jne.gob.pe/Consulta/Afiliado
| 12A | 200x70 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/12a-1.gif) | https://intranet.fissal.gob.pe/Usuario/Login#CaptchaImage
| 13A | 200x70 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/13a-1.gif) | https://hub.inpe.gob.pe/#CaptchaImage
<!-- 
| 07B | 290x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/07b-1.jpg) | https://apps.reniec.gob.pe/MesaPartesVirtual/loginPN.htm  
| 08B | 220x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/08b-1.gif) | https://apps1.contraloria.gob.pe/sci  
| 09B | 155x40 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/09b-1.jpg) | https://www.bancaporinternet.bcp.com.bo/Account/BCPKey  
| 10B | 178x48 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/10b-1.jpg) | https://cajaonline.cajapolicia.gob.ar/  
| 11B | 55x17  | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/11b-1.png) | https://ww10.essalud.gob.pe/ofin/declaraciones/login/  
| 12B | 160x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/12b-1.jpg) | https://sgd.trabajo.gob.pe/appmesapartesenlinea/inicio  
| 13B | 240x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/13b-1.png) | https://ww1.sunat.gob.pe/ol-ti-itdevolucion-consultalibre/ConsultarDevolucionOficio.htm  
| 14B | 155x35 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/14b-1.jpg) | https://www.apeseg.org.pe/consultas-soat/  
| 15B | 340x90 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/15b-1.jpg) | https://casillaelectronica.pcm.gob.pe/login  
| 16B | 180x60 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/complex/sample/16b-1.png) | https://conoce-aqui.sunarp.gob.pe/conoce-aqui/inicio   

| 10A | 100x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/10a-1.jpg) | 
| 10A | 100x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/10a-1.jpg) | 
| 10A | 100x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/10a-1.jpg) | 
| 10A | 100x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/10a-1.jpg) | 
| 10A | 100x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/10a-1.jpg) | 
| 10A | 100x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/10a-1.jpg) | 
| 10A | 100x50 | ![Image](https://raw.githubusercontent.com/boluart/captcha-solver-docs/main/simple/sample/10a-1.jpg) |  
-->

En caso de que tengas algún tipo de captcha que no se encuentre en el listado, escríbenos para poder incluirlo.
