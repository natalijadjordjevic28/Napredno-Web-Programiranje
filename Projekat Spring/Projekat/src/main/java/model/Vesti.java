package model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * The persistent class for the vesti database table.
 * 
 */
@Entity
@NamedQuery(name="Vesti.findAll", query="SELECT v FROM Vesti v")
public class Vesti implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idVesti;

	@Lob
	private String opis;

	private String slikaVest;

	//bi-directional many-to-one association to Korisnik
	@ManyToOne
	@JsonIgnore
	private Korisnik korisnik;

	public Vesti() {
	}

	public int getIdVesti() {
		return this.idVesti;
	}

	public void setIdVesti(int idVesti) {
		this.idVesti = idVesti;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getSlikaVest() {
		return this.slikaVest;
	}

	public void setSlikaVest(String slikaVest) {
		this.slikaVest = slikaVest;
	}

	public Korisnik getKorisnik() {
		return this.korisnik;
	}

	public void setKorisnik(Korisnik korisnik) {
		this.korisnik = korisnik;
	}

}