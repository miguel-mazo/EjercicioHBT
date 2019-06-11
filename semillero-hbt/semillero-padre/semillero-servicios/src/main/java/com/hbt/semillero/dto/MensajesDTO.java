package com.hbt.semillero.dto;

import java.io.Serializable;

import javax.persistence.Column;

public class MensajesDTO implements Serializable {
	
	private Long mensajeId;
	
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
