package com.hbt.semillero.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MENSAJES")
public class Mensajes implements Serializable {
	
	@Id
	//@GeneratedValue(generator = "SEQ")
	@Column(name = "MENSAJE_ID")
	private Long mensajeId;
	
	@Column(name = "MENSAJE")
	private String mensaje;
	
	
	public Long getMensajeId() {
		return mensajeId;
	}

	public void setMensajeId(Long mensajeId) {
		this.mensajeId = mensajeId;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}	
	
}
