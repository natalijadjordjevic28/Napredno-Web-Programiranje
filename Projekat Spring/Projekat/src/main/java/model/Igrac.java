package model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * The persistent class for the igrac database table.
 * 
 */
@Entity
@NamedQuery(name="Igrac.findAll", query="SELECT i FROM Igrac i")
public class Igrac implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idIgraca;

	private int brojDresa;

	private String brojUtakmica;

	private String imeIgraca;

	private int ukupnaBrojPoena;

	//bi-directional many-to-one association to Tim
	@ManyToOne
	@JsonIgnore
	private Tim tim;

	public Igrac() {
	}

	public int getIdIgraca() {
		return this.idIgraca;
	}

	public void setIdIgraca(int idIgraca) {
		this.idIgraca = idIgraca;
	}

	public int getBrojDresa() {
		return this.brojDresa;
	}

	public void setBrojDresa(int brojDresa) {
		this.brojDresa = brojDresa;
	}

	public String getBrojUtakmica() {
		return this.brojUtakmica;
	}

	public void setBrojUtakmica(String brojUtakmica) {
		this.brojUtakmica = brojUtakmica;
	}

	public String getImeIgraca() {
		return this.imeIgraca;
	}

	public void setImeIgraca(String imeIgraca) {
		this.imeIgraca = imeIgraca;
	}

	public int getUkupnaBrojPoena() {
		return this.ukupnaBrojPoena;
	}

	public void setUkupnaBrojPoena(int ukupnaBrojPoena) {
		this.ukupnaBrojPoena = ukupnaBrojPoena;
	}

	public Tim getTim() {
		return this.tim;
	}

	public void setTim(Tim tim) {
		this.tim = tim;
	}

}