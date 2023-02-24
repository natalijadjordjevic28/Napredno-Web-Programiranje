package model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * The persistent class for the utakmica database table.
 * 
 */
@Entity
@NamedQuery(name="Utakmica.findAll", query="SELECT u FROM Utakmica u")
public class Utakmica implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idUtakmice;

	private int brojPoenaTIma;

	private int brojPoenaTima1;

	private String mestoOdigravanja;

	//bi-directional many-to-one association to Korisnik
	@ManyToOne
	@JsonIgnore
	private Korisnik korisnik;

	//bi-directional many-to-one association to Tim
	@ManyToOne
	@JoinColumn(name="Tim_IdTima")
	@JsonIgnore
	private Tim tim1;

	//bi-directional many-to-one association to Tim
	@ManyToOne
	@JoinColumn(name="Tim_IdTima1")
	@JsonIgnore
	private Tim tim2;

	public Utakmica() {
	}

	public int getIdUtakmice() {
		return this.idUtakmice;
	}

	public void setIdUtakmice(int idUtakmice) {
		this.idUtakmice = idUtakmice;
	}

	public int getBrojPoenaTIma() {
		return this.brojPoenaTIma;
	}

	public void setBrojPoenaTIma(int brojPoenaTIma) {
		this.brojPoenaTIma = brojPoenaTIma;
	}

	public int getBrojPoenaTima1() {
		return this.brojPoenaTima1;
	}

	public void setBrojPoenaTima1(int brojPoenaTima1) {
		this.brojPoenaTima1 = brojPoenaTima1;
	}

	public String getMestoOdigravanja() {
		return this.mestoOdigravanja;
	}

	public void setMestoOdigravanja(String mestoOdigravanja) {
		this.mestoOdigravanja = mestoOdigravanja;
	}

	public Korisnik getKorisnik() {
		return this.korisnik;
	}

	public void setKorisnik(Korisnik korisnik) {
		this.korisnik = korisnik;
	}

	public Tim getTim1() {
		return this.tim1;
	}

	public void setTim1(Tim tim1) {
		this.tim1 = tim1;
	}

	public Tim getTim2() {
		return this.tim2;
	}

	public void setTim2(Tim tim2) {
		this.tim2 = tim2;
	}

}