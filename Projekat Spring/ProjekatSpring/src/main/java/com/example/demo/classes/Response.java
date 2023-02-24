package com.example.demo.classes;

public class Response {

	private String imeKorisnika;
	private int idUloga;
	private String email;

	public String getImeKorisnika() {
		return imeKorisnika;
	}

	public void setImeKorisnika(String imeKorisnika) {
		this.imeKorisnika = imeKorisnika;
	}

	public int getIdUloga() {
		return idUloga;
	}

	public void setIdUloga(int idUloga) {
		this.idUloga = idUloga;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Response [imeKorisnika=" + imeKorisnika + ", idUloga=" + idUloga + ", email=" + email + "]";
	}

}
